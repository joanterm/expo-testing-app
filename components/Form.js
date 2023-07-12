import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { globalStyles } from "../styles/globalStyles"

const Form = (props) => {
    const {addPerson} = props

    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: ""
    })

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }
    console.log(formData)
    
    return ( 
        <View style={styles.formContainer}>
            <Text style={globalStyles.textStyle}>FORM</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={(typedText) => handleChange("name", typedText)}
                value={formData.name}
            />
            <TextInput 
                style={styles.input}
                placeholder="Phone Number"
                onChangeText={(typedText) => handleChange("phoneNumber", typedText)}
                keyboardType="number-pad"
                value={formData.phoneNumber}
            />
            <TouchableOpacity style={globalStyles.buttonStyle} onPress={() => addPerson(formData)}>
                <Text style={globalStyles.textStyle}>ADD CONTACT</Text>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    formContainer: {
        marginHorizontal: 2,
        marginVertical: 2
    },
    input: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "gray",
        padding: 10,
        borderRadius: 5,
        marginBottom: 5
    }
});
 
export default Form;