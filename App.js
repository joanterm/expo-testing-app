import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Home from "./components/Home"
import ContactsContainer from './components/ContactsContainer'
import ContactsDetails from './components/ContactsDetails'
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

  //SET UP STACK NAVIGATION + STYLE NAVIGATION HEADER
  return (
    <NavigationContainer>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.applicationContainer}>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: "#92FBEB"}}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ContactsContainer" component={ContactsContainer} />
        <Stack.Screen name="ContactsDetails" component={ContactsDetails} />
      </Stack.Navigator>
      </View>
    </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  applicationContainer: {
    flex: 1
  }
})



