import { View, Text, Pressable, Button, Alert } from "react-native";
import { Styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { IRepositories } from "../../types";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { RepositoryCard } from "../../components/RepositoryCard";
export function HomeScreen() {
  const [repository, setRepository] = useState<IRepositories[]>([]);
  const [page, setPage] = useState<number>(1);
  const [counter, setCounter] = useState<number>(0);
  const navigation = useNavigation();
  const color = "#067CBB";
  function handleScreen(screen: any) {
    navigation.navigate(screen);
  }

  function handlePageIncrement() {
    page * 10 <= counter
      ? setPage(page + 1)
      : Alert.alert("Reached page limit");
  }

  function handlePageDecrement() {
    page > 1 ? setPage(page - 1) : Alert.alert("Reached page limit");
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/binaryleo`)
      .then((response) => response.json())
      .then((counterRepos) => setCounter(counterRepos.public_repos));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/binaryleo/repos?page=${page}&per_page=10`
    )
      .then((response) => response.json())
      .then((data) => setRepository(data));
  }, [handlePageIncrement]);

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
            <Text>Maps</Text>
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
      <ScrollView style={Styles.repositoryView}>
        {repository.map((repository) => {
          return (
            <View key={repository.id}>
              <RepositoryCard
                key={repository.id}
                id={repository.id}
                name={repository.name}
                description={repository.description}
                html_url={repository.html_url}
                stargazers_count={repository.stargazers_count}
                language={repository.language}
              />
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          marginTop: 15,
          marginBottom: 50,
          width: 80,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button title="-" onPress={handlePageDecrement} />
        <Text style={Styles.counterRepo}>{page}</Text>
        <Button title="+" onPress={handlePageIncrement} />
      </View>
    </View>
  );
}
