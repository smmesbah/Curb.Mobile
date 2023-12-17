import { Stack } from "expo-router";
import store from "redux/store";
import { Provider } from "react-redux";
import { enableScreens } from 'react-native-screens';
import { useCallback, useEffect } from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
enableScreens(true);


const Layout = () => {

    const [fontLoaded]=useFonts({
        'Medium': require('../assets/fonts/CircularXXTT-Medium.ttf'),
        'Regular': require('../assets/fonts/CircularXXTT-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontLoaded]);

      useEffect(() => {
        onLayoutRootView();
      }, [onLayoutRootView]);
    
    
      if (!fontLoaded) {
        return null;
      }

    return (
        <Provider store={store}>
            <Stack
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                }}
            />
        </Provider>
    )
}

export default Layout;
