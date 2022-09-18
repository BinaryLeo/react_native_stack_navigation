import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
  notificationBox: {
    width: "100%",
    padding: 30,
    fontSize: 16,
  },
  tokenBox: {
    width: "85%",
    borderRadius: 20,
    backgroundColor: "#42B0FC",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textBox: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#42B0FC",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  infoText: {
    color: "#fff",
    fontSize: 16,
    padding: 5,
  },
  writerContainer: {
    width: "90%",
    marginTop: 50,
    marginBottom: 30,
    backgroundColor: "rgba(148,141,141, 0.1)",
    borderRadius: 15,
    padding: 15,
  },
  textInputContainer: {
    height: 40,
    margin: 15,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  textInputMultilineContainer: {
    height: 100,
    margin: 15,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  Buttons: {
    width: "45%",
    backgroundColor: "#42B0FC",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
