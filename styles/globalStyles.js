import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    textStyle: {
        fontFamily: "Quicksand",
        fontSize: 20
    },
    buttonStyle: {
        backgroundColor: "pink",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "gray",
        padding: 5,
        borderRadius: 5,
        // textAlign: "center"
        alignItems: "center"
    },
    deleteButtonStyle: {
        flexDirection: "row",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "gray",
        padding: 10,
        borderRadius: 5,
    }
})