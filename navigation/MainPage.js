import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

function MainPage() {
    return (
        <Stack.Navigator initialRouteName="DrawerNavigation">
            <Stack.Screen name='HomePage' component={HomePage}
                          options={{
                              title: 'Home',
                              headerStyle: {backgroundColor: '#17de40'},
                              headerTintColor: 'black',
                              headerTitleStyle: {fontWeight: "bold"}
                          }}/>
            <Stack.Screen name='DrawerNavigation' component={DrawerNavigation}
                          options={{
                              title: 'DrawerNavigation',
                              headerStyle: {backgroundColor: '#17de40'},
                              headerTintColor: 'black',
                              headerTitleStyle: {fontWeight: "bold"},
                              headerShown: false
                          }}/>
        </Stack.Navigator>
    )
}

export default MainPage