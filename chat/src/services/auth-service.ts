import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Usuario } from '../modules/usuario';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  auth: AngularFireAuth;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
    this.auth = angularFireAuth;

    console.log("constructor AuthService");
  }

  createUser(usuario: Usuario): firebase.Promise<any> {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.password);
  }

  login(usuario: Usuario): firebase.Promise<any> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.password);
  }

  logout(): firebase.Promise<void> {
    return firebase.auth().signOut();
  }

  resetPassword(email: string): firebase.Promise<any> {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  getCurrentUsuario() {
    return this.angularFireAuth.auth.currentUser;
  }
}
