import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import Header from './components/Header'
import ContactsContainer from './components/ContactsContainer';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Quicksand": require('./assets/fonts/Quicksand-Regular.ttf')
  })

  useEffect(() => {
    async function loadFonts() {
      await SplashScreen.preventAutoHideAsync()
    }
    loadFonts()
  }, [])

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>
          <Header />
          <ContactsContainer />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  }
});



