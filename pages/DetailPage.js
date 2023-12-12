import {Text, TouchableOpacity, View} from "react-native";

const DetailPage = ({navigation}) => {
    const onDone = () => {
        navigation.navigate('HomePage')
    };

    return (
        <View>
            <Text>DetailPage</Text>
            <TouchableOpacity onPress={onDone}><Text>Done</Text></TouchableOpacity>
        </View>
    )
}

export default DetailPage