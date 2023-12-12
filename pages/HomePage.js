import {Text, TouchableOpacity, View} from "react-native";

const HomePage = ({navigation}) => {
    const onDone = () => {
        navigation.navigate('DrawerNavigation')
    };


    return (
        <View>
            <Text>Home page</Text>
            <TouchableOpacity onPress={onDone}><Text>Next</Text></TouchableOpacity>
        </View>
    )
}

export default HomePage