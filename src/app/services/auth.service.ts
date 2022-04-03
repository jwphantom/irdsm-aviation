import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../pages/common/global-constants';
import { User } from '../models/user';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = GlobalConstants.apiURL;


  userData: any; // Save logged in user data


  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private http: HttpClient,



  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', '{}');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    })
  }

  SignIn(email: string, password: string) {


    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {


        localStorage.setItem('user', JSON.stringify(result.user));

        this.router.navigate(['submission']);

      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return !!Object.keys(user).length ? true : false;
  }

  getisLogged() {

    const user = JSON.parse(localStorage.getItem('user')!);

    return !!Object.keys(user).length ? true : false;

  }

  getIsAdmin() {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.http
          .get<any[]>(`${this.baseUrl}/getAdmin/${user?.email}`)
          .subscribe(
            (response) => {
              localStorage.setItem('pseudo', response[0].pseudo);
              localStorage.setItem('email', response[0].email);
              localStorage.setItem('role', response[0].role);
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );

      }
    })



    //return (user !== null) ? true : false;

  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        this.router.navigate(['submission']);
      }
    });
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['submission']);
        })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');

      this.router.navigate(['/']);
    })
  }
}