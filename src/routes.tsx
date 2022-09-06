
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import { Home } from './screens/home';
import { Mapas } from './screens/mapas';
import { Camera } from './screens/camera';


const {Navigator, Screen} =  createStackNavigator();//atribuição aonde acesso  as props
export function Routes()

{
    return(
      <NavigationContainer>
        <Navigator screenOptions={{headerShown: true, cardStyle:{backgroundColor:'#eaeaea'}}}>
            <Screen name="Home" component={Home} />
            <Screen name="Mapas" component={Mapas} />
            <Screen name="Camera" component={Camera} />
        </Navigator>
        
      </NavigationContainer>
    )
    }

