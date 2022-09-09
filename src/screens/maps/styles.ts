import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  callout:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  logo: {
    width: 100,
    height: 20
  },
});
