import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'

const Contacts = (props) => {
    const {item, deleteContacts} = props

    return ( 
        <View>
            <Text>{item.name}</Text>
            <Text>{item.phoneNumber}</Text>
            <TouchableOpacity onPress={() => deleteContacts(item.id)}>
                <Text style={styles.button}>DELETE</Text>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "gray",
        padding: 10
    }
});
 
export default Contacts;