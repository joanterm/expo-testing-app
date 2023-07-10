import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Home from "./components/Home"
import Header from './components/Header'
import ContactsContainer from './components/ContactsContainer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    "Quicksand": require('./assets/fonts/Quicksand-Regular.ttf')
  })

  //LOADS FONTS
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
    <NavigationContainer>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>
          {/* <Header />
          <Home />
          <ContactsContainer /> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ContactsContainer" component={ContactsContainer} />
      </Stack.Navigator>
      </View>
    </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});



