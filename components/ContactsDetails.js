import { StyleSheet, Button, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'

const ContactsDetails = ({navigation, route}) => {
    const { item } = route.params
    console.log(item)
    
    return ( 
        <View>
            <Text>CONTACTS DETAILS</Text>
            <Text>{item.name}</Text>
            <Text>{item.phoneNumber}</Text>
            <Text>{item.zipcode}</Text>
        </View>
     )
}
 
export default ContactsDetails;