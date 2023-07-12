import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/globalStyles'

const Home = ({navigation}) => {
    return ( 
        <View style={styles.homeContainer}>
            <Text>HOME SCREEN</Text>
            <TouchableOpacity style={globalStyles.buttonStyle} onPress={() => navigation.navigate('ContactsContainer')}>
                <Text style={globalStyles.textStyle}>Go to contacts</Text>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    homeContainer: {
        padding: 40
    }
})
 
export default Home;