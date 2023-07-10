import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { globalStyles } from "../styles/globalStyles"

const Contacts = ({navigation, item, deleteContacts}) => {
    // const {item, deleteContacts} = props

    return ( 
        <View>
            {/* <TouchableOpacity onPress={() => navigation.navigate('ContactsDetails')}> */}
            <Text style={globalStyles.textStyle}>{item.name}</Text>
            <Text style={globalStyles.textStyle}>{item.phoneNumber}</Text>
            {/* </TouchableOpacity> */}
            <TouchableOpacity onPress={() => deleteContacts(item.id)}>
                <View style={styles.buttonContainer}>
                    <Entypo name="circle-with-cross" size={24} color="black" />
                    <Text style={styles.button}>DELETE</Text>
                </View>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "gray",
        padding: 10
    },
    button: {
        marginLeft: 10
    }
});
 
export default Contacts;