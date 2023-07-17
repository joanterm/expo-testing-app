import { StyleSheet, Button, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import ReusableCard from '../styles/ReusableCard'
import { globalStyles } from '../styles/globalStyles'

const ContactsDetails = ({route}) => {
    const { item } = route.params

    return ( 
        <View style={styles.detailsContainer}>
            <ReusableCard>
                <View>
                    <Text style={globalStyles.textStyle}>Name: {item.name}</Text>
                    <Text style={globalStyles.textStyle}>Phone: {item.phoneNumber}</Text>
                    <Text style={globalStyles.textStyle}>Zip-code: {item.zipcode ? item.zipcode : "Sorry, no zip code provided"}</Text>
                </View>
            </ReusableCard>
        </View>
     )
}

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        padding: 40,
        backgroundColor: "#ffff"
    }
})
 
export default ContactsDetails;