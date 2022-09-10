import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  boxView: {
    marginTop: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#067CBB",
  },
  repositoryView: {
    width: "80%",
    height: "65%",
    marginTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  itemsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  counterRepo:{
    color: "black",
    fontSize: 16, 
    fontWeight: "bold" 
  }
});
