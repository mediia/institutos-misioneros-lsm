import React from 'react';
import { Linking } from 'react-native'

const facebook = {
  appName: 'Facebook',
  appStoreId: 'id284882215',
  playStoreId: 'com.facebook.katana'
}

export default {
  openPage: (page) => {
    // First try app
    let url = 'fb://page/' + page
    Linking.canOpenURL(url).then(supported => {
      if (supported) return Linking.openURL(url)

      // Second try, no fb app
      url = 'https://www.facebook.com/' + page
      return Linking.openURL(url)
    }).catch(err => console.error('An error occurred opening Facebook', err));
  }
}
