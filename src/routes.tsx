import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/home";
import { MapsScreen } from "./screens/maps";
import { CameraScreen } from "./screens/camera";

const { Navigator, Screen } = createStackNavigator(); //atribuição aonde acesso  as props
export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: "#eaeaea" },
        }}
      >
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Maps" component={MapsScreen} />
        <Screen name="Camera" component={CameraScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
