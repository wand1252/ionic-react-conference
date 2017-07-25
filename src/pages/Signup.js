import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-navbar>
            <ion-button menuToggle>
              <ion-icon name="menu"></ion-icon>
            </ion-button>
            <ion-title>Signup</ion-title>
          </ion-navbar>
        </ion-header>

        <ion-content class="login-page">
          <div class="logo">
            <img src="/assets/img/appicon.svg" alt="Ionic Logo"/>
          </div>
          <form ref={(signUpForm => this.signupForm = signUpForm)} novalidate>
            <ion-list no-lines>
              <ion-item>
                <ion-label stacked color="primary">Username</ion-label>
                <ion-input value={this.username} name="username" type="text" required>
                </ion-input>
              </ion-item>
              <ion-item>
                <ion-label stacked color="primary">Password</ion-label>
                <ion-input value={this.password} name="password" type="password" required>
                </ion-input>
              </ion-item>
            </ion-list>
            <div>
              <ion-button onClick={() => this.onSignup()} type="submit" block>Create</ion-button>
            </div>
          </form>
        </ion-content>
      </ion-page>
    );
  }
}