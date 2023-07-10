import { useState } from 'react'
import { StyleSheet, Button, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import Form from './Form'
import Contacts from './Contacts'

const ContactsContainer = ({navigation}) => {
    const [people, setPeople] = useState([
        {"id": 1, "name": "Joanna", "phoneNumber": "(111)-111-1111", "zipcode": "12121"},
        {"id": 2, "name": "Dustin", "phoneNumber": "(222)-222-2222", "zipcode": "12122"},
        {"id": 3, "name": "Travis", "phoneNumber": "(333)-333-3333", "zipcode": "12123"},
        {"id": 4, "name": "Monica", "phoneNumber": "(444)-444-4444", "zipcode": "12124"},
        {"id": 5, "name": "Steve",  "phoneNumber": "(555)-555-5555", "zipcode": "12125"}   
    ])

    const deleteContacts = (contactID) => {
        setPeople(
          people.filter((item) => {
            return item.id !== contactID
          }))
      }

    const addPerson = (formValue) => {
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
        <View style={styles.testing}>
            <Text style={globalStyles.textStyle}>CONTACTS CONTAINER</Text>
            <Button title="Test"/>
            <View style={styles.contentContainer}>
                <Form addPerson={addPerson}/>
                <View style={styles.peopleContainer}>
                    <FlatList
                    keyExtractor={(item) => item.id}
                    data={people}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={() => navigation.navigate('ContactsDetails', {item: item})}>
                        <Contacts item={item} deleteContacts={deleteContacts}/>
                        </TouchableOpacity>
                    }
                    />
                </View>
            </View>
        </View>
     )
}

const styles = StyleSheet.create({
    testing: {
        flex: 1,
        borderColor: "red",
        borderWidth: 2
    },
    contentContainer: {
      flex: 1,
      padding: 40,
    },
    peopleContainer: {
      flex: 1,
    }
  });
 
export default ContactsContainer;