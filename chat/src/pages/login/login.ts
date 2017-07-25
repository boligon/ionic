import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { CriarContaPage } from '../criarconta/criarconta';
import { ResetarPasswordPage } from '../resetarpassword/resetarpassword';
import { Usuario } from '../../modules/usuario';
import { AuthService } from '../../services/auth-service';
import { ChatPage } from '../chat/chat';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: Usuario = new Usuario();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService) {
      console.log("constructor LoginPage");
  }

  criarConta() {
    this.navCtrl.push(CriarContaPage);
  }

  resetarPassword() {
    this.navCtrl.push(ResetarPasswordPage);
  }

  login() {
    if (this.form.form.valid) {

      console.log(this.usuario);

      this.authService.login(this.usuario)
        .then(() => {
          this.navCtrl.setRoot(ChatPage);
        })
        .catch((error: any) => {
          let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
          if (error.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (error.code == 'auth/user-disabled') {
            toast.setMessage('O usuário está desativado.');
          } else if (error.code == 'auth/user-not-found') {
            toast.setMessage('O usuário não foi encontrado.');
          } else if (error.code == 'auth/wrong-password') {
            toast.setMessage('A senha digitada não é valida.');
          }
          toast.present();
        });
    }
  }
}
