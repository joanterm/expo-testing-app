import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

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
        <View>
            <Text>FORM</Text>
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
            <Button title="ADD CONTACT" onPress={() => addPerson(formData)}/>
        </View>
     );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "gray",
        padding: 10,
    }
});
 
export default Form;