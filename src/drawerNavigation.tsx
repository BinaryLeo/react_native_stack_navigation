import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { HomeScreen } from './screens/home';
import { MapsScreen } from './screens/maps';
import { CameraScreen } from './screens/camera';
export function  DrawerNavigation(){
    const Drawer = createDrawerNavigator();
    return(
       <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
            <Drawer.Screen name='Camera' component={CameraScreen}></Drawer.Screen>
            <Drawer.Screen name='Maps' component={MapsScreen}></Drawer.Screen>
        </Drawer.Navigator>
       </NavigationContainer>
    )
}