import { useState } from 'react'
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Header from './components/Header'
import Contacts from './components/Contacts'
import Form from './components/Form'

export default function App() {
  const [people, setPeople] = useState([
    {"id": 1, "name": "Joanna", "phoneNumber": "(111)-111-1111"},
    {"id": 2, "name": "Dustin", "phoneNumber": "(222)-222-2222"},
    {"id": 3, "name": "Travis", "phoneNumber": "(333)-333-3333"},
    {"id": 4, "name": "Monica", "phoneNumber": "(444)-444-4444"},
    {"id": 5, "name": "Steve",  "phoneNumber": "(555)-555-5555"}   
  ])
  
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
      <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <Form addPerson={addPerson}/>
            <View style={styles.people}>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  }
});

