import { StyleSheet, Button, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import ReusableCard from '../styles/ReusableCard'
import { globalStyles } from '../styles/globalStyles'

const ContactsDetails = ({navigation, route}) => {
    const { item } = route.params
    console.log(item)
    
    return ( 
        <View style={styles.detailsContainer}>
            <Text>CONTACTS DETAILS</Text>
            <ReusableCard>
                <Text style={globalStyles.textStyle}>{item.name}</Text>
                <Text style={globalStyles.textStyle}>{item.phoneNumber}</Text>
                <Text style={globalStyles.textStyle}>{item.zipcode}</Text>
            </ReusableCard>
        </View>
     )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 40
    }
})
 
export default ContactsDetails;