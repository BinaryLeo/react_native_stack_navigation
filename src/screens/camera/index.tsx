import { View, Text, Modal, Button } from "react-native";
import { Camera, CameraType } from "expo-camera";
import styles from "./styles";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
export function CameraScreen() {
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  //*No permissions
  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>No Permissions</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Modal animationType="slide">
          <Text>Enable camera access</Text>
          <Button title="Allow" onPress={requestPermission} />
        </Modal>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera type={cameraType} style={styles.camera}>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCameraType(
                cameraType === CameraType.back
                  ? CameraType.front
                  : CameraType.back
              );
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={styles.buttonText}
              >{`Change Mode:  ${cameraType}`}</Text>
              <MaterialIcons name="camera" color="#573B28" size={40} />
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
