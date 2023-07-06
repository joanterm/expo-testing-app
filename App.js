import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Header from './components/Header'
import Contacts from './components/Contacts'
import Form from './components/Form'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [people, setPeople] = useState([
    {"id": 1, "name": "Joanna", "phoneNumber": "(111)-111-1111"},
    {"id": 2, "name": "Dustin", "phoneNumber": "(222)-222-2222"},
    {"id": 3, "name": "Travis", "phoneNumber": "(333)-333-3333"},
    {"id": 4, "name": "Monica", "phoneNumber": "(444)-444-4444"},
    {"id": 5, "name": "Steve",  "phoneNumber": "(555)-555-5555"}   
])
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

  const deleteContacts = (contactID) => {
    setPeople(
      people.filter((item) => {
        return item.id !== contactID
      }))
  }

  const addPerson = (formValue) => {
    console.log(!isNaN(formValue.name))
    if (formValue.name.length >= 2 && isNaN(formValue.name)) {
      const newId = Math.random()
      setPeople([
        {
          "id": newId,
          "name": formValue.name,
          "phoneNumber": formValue.phoneNumber
        },
        ...people
      ])
    } else {
      Alert.alert("Ooops!", "Enter a valid text that's longer than 2 characters.", [{text: "got it!", onPress: () => console.log("click")}]) 
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>
          <Header />
          <Text style={{fontFamily: "Quicksand"}}>TESTING ANOTHER FONT</Text>
          <Text style={{fontFamily: "Quicksand"}}>TESTING ANOTHER FONT</Text>
          <View style={styles.contentContainer}>
            <Form addPerson={addPerson}/>
            <View style={styles.peopleContainer}>
              <FlatList
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({item}) =>
                  <Contacts item={item} deleteContacts={deleteContacts}/>
                }
              />
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    fontFamily: "regular",
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    padding: 40
  },
  peopleContainer: {
    flex: 1,
  }
});



