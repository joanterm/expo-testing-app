import { useState } from 'react'
import { StyleSheet, View, FlatList, Alert, TouchableOpacity } from 'react-native'
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
      //FORM'S "NAME" MUST BE LONGER THAN 2 CHARS AND CAN'T BE A NUMBER
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
        <View style={styles.mainContentContainer}>
            <View style={styles.innerContentContainer}>
                <Form addPerson={addPerson}/>
                    <FlatList
                      keyExtractor={(item) => item.id}
                      data={people}
                      renderItem={({item}) =>
                          <TouchableOpacity onPress={() => navigation.navigate('ContactsDetails', {item: item})}>
                            <Contacts 
                              item={item} 
                              deleteContacts={deleteContacts}
                            />
                          </TouchableOpacity>
                      }
                    />
            </View>
        </View>
     )
}

const styles = StyleSheet.create({
    mainContentContainer: {
        flex: 1,
        backgroundColor: "#ffff"
    },
    innerContentContainer: {
      flex: 1,
      padding: 40,
    },
    peopleContainer: {
      flex: 1,
    }
  });
 
export default ContactsContainer;