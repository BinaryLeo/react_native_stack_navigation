import { View, Text, Button } from "react-native";
import { Styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
export function Home() {
  const navigation = useNavigation();
  function handleScreen(screen: any) {
    navigation.navigate(screen);
  }
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Home</Text>
      <View style={{ marginTop: 10 }}>
        <Button title="Home" onPress={() => handleScreen("Home")} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Mapas" onPress={() => handleScreen("Mapas")} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Camera" onPress={() => handleScreen("Camera")} />
      </View>
    </View>
  );
}
