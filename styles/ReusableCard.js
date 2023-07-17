import { StyleSheet, View} from 'react-native'

const ReusableCard = (props) => {
    return ( 
        <View style={styles.outerCard}>
            <View style={styles.innerCard}>
                {props.children}
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    outerCard: {
        backgroundColor: "#ffff",
        marginVertical: 15,
        marginHorizontal: 2,
        marginHorizontal: 2,
        borderRadius: 5,
        elevation: 5,
        shadowColor: "#212121",
    },
    innerCard: {
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 10,
        backgroundColor: "#ffff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})
 
export default ReusableCard;