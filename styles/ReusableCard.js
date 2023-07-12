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
        // borderWidth: 2,
        // borderColor: "blue",
        // backgroundColor: "blue"
        backgroundColor: "#fff",
        marginVertical: 15,
        marginHorizontal: 2,
        marginHorizontal: 2,
        borderRadius: 5,
        elevation: 5,
        shadowColor: "red"
    },
    innerCard: {
        // backgroundColor: "yellow",
        // marginBottom: 10,
        // padding: 5,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "pink"
    }
})
 
export default ReusableCard;