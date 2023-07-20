import { StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native'
import { useState } from 'react'
import { globalStyles } from '../styles/globalStyles'
import { Image } from 'expo-image'
import { Entypo } from '@expo/vector-icons'

const Home = ({navigation}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return ( 
        <View style={styles.homeContainer}>
            {/* MODAL HERE, ONLY VISIBLE WHEN TOGGLED*/}
            <Modal visible={isModalOpen}>
                <View style={styles.modalContainer}>
                    <Entypo name="circle-with-cross" style={styles.modalIcon} size={40} color="#92FBEB" onPress={() => setIsModalOpen(false)}/>
                    <Text>MODAL TEXT HERES</Text>
                </View>
            </Modal>
            {/* MODAL ENDS */}
            <View style={styles.infoIconOuterContainer}>
                <View style={styles.infoIconInnerContainer}>
                    <Entypo name="info" size={24} color="#ffff" onPress={() => setIsModalOpen(true)}/>
                </View>
            </View>
            <Image 
                style={styles.homeImage} 
                source={require("../assets/main-image.png")}
                resizeMode="center"
            />
            <Text style={styles.textStyle}>Time to organize and store all your contacts in just one spot.</Text>
            <TouchableOpacity 
                style={globalStyles.buttonStyle} 
                onPress={() => navigation.navigate('ContactsContainer')}>
                <Text style={globalStyles.textStyle}>GO TO CONTACTS</Text>
            </TouchableOpacity>
        </View>
     )
}

const styles = StyleSheet.create({
    homeContainer: {
        padding: 40,
        flex: 1,
        backgroundColor: "#ffff"
    },
    homeImage: {
        width: "100%",
        height: 300
    },
    textStyle: {
        fontFamily: "Quicksand",
        fontSize: 20,
        marginVertical: 20,
        textAlign: "center"
    },
    infoIconOuterContainer: {
        alignItems: 'flex-end'
    },
    infoIconInnerContainer: {
        alignItems: "center",
        padding: 6,
        borderRadius: 50,
        backgroundColor: "#92FBEB"
    },
    modalContainer: {
        flex: 1,
        padding: 40
    },
    modalIcon: {
        textAlign: "right"
    }
})
 
export default Home;