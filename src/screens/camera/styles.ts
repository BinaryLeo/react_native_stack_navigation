import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  containerButton: {
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    width: 220,
    height: 60,
    borderRadius: 30,
    padding: 10,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  buttonText: {
    fontSize: 14,
    marginRight: 10,
  },
});
