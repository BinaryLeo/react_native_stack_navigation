import { ILocalization } from "../../types";
import { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
export function MapsScreen() {
  const [find, setFind] = useState<ILocalization>({
    //*Signal Hill New Foundland and Labrador
    latitude: 47.570063,
    longitude: -52.681893,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={find}
      >
        <Marker
          coordinate={find}
          image={require("../../assets/signalhill.png")}
        >
          <Callout>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Text>
                Signal Hill is a hill which overlooks the city of St. John's
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}
