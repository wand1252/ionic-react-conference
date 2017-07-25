import React, { Component } from 'react';
import SessionList from './SessionList';

export default class Schedule extends Component {
  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-navbar no-border-bottom>
            <ion-button menuToggle>
              <ion-icon name="menu"></ion-icon>
            </ion-button>

            <ion-segment ionChange={(e) => this.props.updateSchedule(e.value === 'true')}>
              <ion-segment-button value="false">
                All
              </ion-segment-button>
              <ion-segment-button value="true">
                Favorites
              </ion-segment-button>
            </ion-segment>

            <ion-buttons end>
              <ion-button icon-only onClick={() => this.presentFilter()}>
                <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-navbar>

          <ion-toolbar no-border-top>
            <ion-searchbar
              color="primary"
              ionInput={(e) => this.props.searchSessionsByName(e.value)}
              placeholder="Search"
            >
            </ion-searchbar>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-refresher ionRefresh={(e) => this.doRefresh(e)}>
            <ion-refresher-content></ion-refresher-content>
          </ion-refresher>

          <SessionList
            sessions={this.props.filteredSessions}
            addFavoriteSession={this.props.addFavoriteSession}
            removeFavoriteSession={this.props.removeFavoriteSession}
            filterFavorites={this.props.filterFavorites}
          />

          <ion-fab bottom right>
            <ion-button ion-fab><ion-icon name="share"></ion-icon></ion-button>
            <ion-fab-list side="top">
              <ion-button ion-fab color="vimeo" onClick={() => this.openSocial('Vimeo')}><ion-icon name="logo-vimeo"></ion-icon></ion-button>
              <ion-button ion-fab color="google" onClick={() => this.openSocial('Google+')}><ion-icon name="logo-googleplus"></ion-icon></ion-button>
              <ion-button ion-fab color="twitter" onClick={() => this.openSocial('Twitter')}><ion-icon name="logo-twitter"></ion-icon></ion-button>
              <ion-button ion-fab color="facebook" onClick={() => this.openSocial('Facebook')}><ion-icon name="logo-facebook"></ion-icon></ion-button>
            </ion-fab-list>
          </ion-fab>
        </ion-content>
      </ion-page>
    );
  }
}
