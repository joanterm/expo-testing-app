import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'
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
    const newId = Math.random()
    setPeople([
      ...people,
      {
        "id": newId,
        "name": formValue.name,
        "phoneNumber": formValue.phoneNumber
      }
    ])
  }

  return (
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

