import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";
import { HomeScreen } from "./screens/home";

import { MapsScreen } from "./screens/maps";
import { CameraScreen } from "./screens/camera";

export function BottomNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: "#0568aa"
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarLabel: "Camera",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="camera" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            tabBarLabel: "Maps",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="map" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
