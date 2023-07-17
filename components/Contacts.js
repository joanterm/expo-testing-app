import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { globalStyles } from "../styles/globalStyles"
import ReusableCard from '../styles/ReusableCard'

const Contacts = ({item, deleteContacts}) => {
  
    return ( 
        <View>
            <ReusableCard>
                <View style={styles.contactInfo}>
                    <Text style={globalStyles.textStyle}>{item.name}</Text>
                    <Text style={globalStyles.textStyle}>{item.phoneNumber}</Text>
                </View>
                <TouchableOpacity onPress={() => deleteContacts(item.id)}>
                    <View style={globalStyles.deleteButtonStyle}>
                        <Entypo name="circle-with-cross" size={40} color="#92FBEB" />
                    </View>
                </TouchableOpacity>
            </ReusableCard>
        </View>
     );
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 10
    },
    contactInfo: {
        width: "70%"
    }
});
 
export default Contacts;