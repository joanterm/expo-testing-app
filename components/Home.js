import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import { Image } from 'expo-image'

const Home = ({navigation}) => {
    return ( 
        <View style={styles.homeContainer}>
            <Image 
                style={styles.image} 
                source={require("../assets/main-image.png")}
                resizeMode="center"
            />
            <Text style={styles.textStyle}>Time to organize and store all your contacts in just one spot.</Text>
            <TouchableOpacity style={globalStyles.buttonStyle} onPress={() => navigation.navigate('ContactsContainer')}>
                <Text style={globalStyles.textStyle}>Go to contacts</Text>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    homeContainer: {
        padding: 40,
        flex: 1,
        backgroundColor: "white"
    },
    image: {
        width: "100%",
        height: 300
    },
    textStyle: {
        fontFamily: "Quicksand",
        fontSize: 20,
        marginVertical: 20,
        textAlign: "center"
    }
})
 
export default Home;