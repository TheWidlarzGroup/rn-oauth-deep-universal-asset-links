import {Linking, StatusBar} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {deepLinkScheme, oauthWithGoogleRoute} from '../constants/Domains';

export const logInWithGoogle = async () => {
  try {
    InAppBrowser.closeAuth();

    if (await InAppBrowser.isAvailable()) {
      StatusBar.setBarStyle('light-content');

      InAppBrowser.openAuth(
        oauthWithGoogleRoute,
        deepLinkScheme + 'oauth_redirect',
        {
          // iOS Properties
          ephemeralWebSession: false,
          // Android Properties
          showTitle: true,
          enableUrlBarHiding: true,
          enableDefaultShare: false
        }
      ).then(async (response) => {
        StatusBar.setBarStyle('dark-content');

        if (response.type === 'cancel') {
          //   do sth on cancel
        }

        if (response.type === 'success' && response.url) {
          await Linking.openURL(response.url);
        }
      });
    } else {
      Linking.openURL(oauthWithGoogleRoute);
    }
  } catch (error) {
    StatusBar.setBarStyle('dark-content');
    Linking.openURL(oauthWithGoogleRoute);
  }
};
