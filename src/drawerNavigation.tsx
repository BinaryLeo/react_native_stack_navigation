import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { HomeScreen } from 'src/screens/home';
import { MapsScreen } from 'src/screens/maps';
import { CameraScreen } from 'src/screens/camera';
import { NotificationsApp } from 'src/screens/notifications';
export function  DrawerNavigation(){
    const Drawer = createDrawerNavigator();
    return(
       <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
            <Drawer.Screen name='Camera' component={CameraScreen}></Drawer.Screen>
            <Drawer.Screen name='Maps' component={MapsScreen}></Drawer.Screen>
            <Drawer.Screen name='Notifications' component={NotificationsApp}></Drawer.Screen>
        </Drawer.Navigator>
       </NavigationContainer>
    )
}