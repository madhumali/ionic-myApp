import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../homepage/homepage';
import {RegisterPage} from '../register/register';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register(){
  	this.navCtrl.push(HomePage);
  }

  

}
