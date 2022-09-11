import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/home";
import { MapsScreen } from "./screens/maps";
import { CameraScreen } from "./screens/camera";
import { NotificationsApp } from "./screens/notifications";

const { Navigator, Screen } = createStackNavigator(); //atribuição aonde acesso  as props
export function StackNavigation() {
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
        <Screen name="Notification" component={NotificationsApp} />
      </Navigator>
    </NavigationContainer>
  );
}
