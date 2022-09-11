import { Button, Linking, Text, View } from "react-native";
import { Styles } from "./styles";
import { IRepositories } from "../../types";

export function RepositoryCard(props: IRepositories) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{props.name}</Text>
      <Text style={Styles.info}>{props.description}</Text>
      <Text style={Styles.info}>{`Stack: ${props.language}`}</Text>
      <Text style={Styles.info}>{`Stars: ${props.stargazers_count}`}</Text>
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Button title="Open" onPress={() => Linking.openURL(props.html_url)} />
      </View>
    </View>
  );
}
