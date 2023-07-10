import { Text, View, Button } from 'react-native'

const Home = ({navigation}) => {
    return ( 
        <View>
            <Text>HOME SCREEN</Text>
            <Button 
                title="Go to contact list"
                onPress={() => navigation.navigate('ContactsContainer')}
            />
        </View>
     );
}
 
export default Home;