import {createDrawerNavigator} from "@react-navigation/drawer";
import DetailPage from "../pages/DetailPage";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName={DetailPage}>
            <Drawer.Screen name='DetailPage' component={DetailPage}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation