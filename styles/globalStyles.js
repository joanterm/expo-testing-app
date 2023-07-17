import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    textStyle: {
        fontFamily: "Quicksand",
        fontSize: 20
    },
    buttonStyle: {
        backgroundColor: "#92FBEB",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#212121",
        padding: 10,
        borderRadius: 5,
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