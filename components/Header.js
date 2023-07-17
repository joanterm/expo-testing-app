import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'

const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text>HEADER</Text>
            <Text>HEADER</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#92FBEB',
      height: 100,
      paddingTop: 50
    }
  });
 
export default Header;

