import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { globalStyles } from "../styles/globalStyles"

const Form = ({addPerson, formData, setFormData}) => {

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    return ( 
        <View style={styles.formContainer}>
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