import { View, Text,Pressable } from "react-native";
import { Styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
export function HomeScreen() {
  const navigation = useNavigation();
  const color = "#067CBB";
  function handleScreen(screen: any) {
    navigation.navigate(screen);
  }
  return (
    <View style={Styles.boxView}>
      <Text style={Styles.title}>Home</Text>

      <View style={Styles.container}>
        <Pressable onPress={() => handleScreen("Home")}>
          <View style={Styles.itemsContainer}>
            <MaterialIcons name="home" color={color} size={32} />
            <Text>Home</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => handleScreen("Maps")}>
          <View style={Styles.itemsContainer}>
            <MaterialIcons name="map" color={color} size={32} />
            <Text>Home</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => handleScreen("Camera")}>
          <View style={Styles.itemsContainer}>
            <MaterialIcons name="camera" color={color} size={32} />
            <Text>Camera</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => handleScreen("Notifications")}>
          <View style={Styles.itemsContainer}>
            <MaterialIcons name="notifications" color={color} size={32} />
            <Text>Notifications</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
