import {
  View,
  Text,
  Platform,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { styles } from "./styles";

//* to handle the invocation of the notifications
import { useEffect, useState, useRef } from "react";

import * as Device from "expo-device"; //*  identification and treatings
import * as Notifications from "expo-notifications";
//* pack responsable to fire notification's threads
import { INotification } from "../../types/index";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    handleShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});

export function NotificationsApp() {
  const [expoToken, setExpoToken] = useState<string | undefined>("");
  const [notification, setNotification] = useState<INotification>();

  const [msgTitle, setMsgTitle] = useState<string>("");
  const [bodyMessage, setBodyMessage] = useState<string>("");

  const notificationListener = useRef<any>();
  const responseListner = useRef<any>();

  const converter = (value: number) => {
    return new Date(value).toUTCString();
  };
  async function schedulePushNotifications() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `${msgTitle}`,
        body: `${bodyMessage}`,
        sound: "notifications.wav",

        data: { data: "anything" },
        vibrate: [0, 250, 250, 250],
      },
      trigger: { seconds: 2 },
    });
  }
  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (existingStatus === "granted") {
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log("Device status:", finalStatus);
    } else {
      alert("Use a physical device to view the notifications");
    }

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#0c7c9e",
      });
    }
    return token;
  }
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoToken(token));
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });
    responseListner.current =
      Notifications.addNotificationResponseReceivedListener((response) =>
        console.log(response)
      );
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListner.current);
    };
  });
  console.log(notification);
  return (
    <View style={styles.container}>
      <View style={styles.writerContainer}>
        <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: "600" }}>
          Write your message
        </Text>
        <Text
          style={{
            marginLeft: 15,
            marginTop: 15,
            fontSize: 16,
            fontWeight: "400",
          }}
        >
          Title:
        </Text>
        <TextInput
          style={styles.textInputContainer}
          placeholder="Title"
          autoCapitalize="words"
          value={msgTitle}
          onChangeText={(msgtitle) => setMsgTitle(msgtitle)}
        />
        <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: "400" }}>
          Message:
        </Text>
        <TextInput
          style={styles.textInputMultilineContainer}
          placeholder="Message"
          autoCapitalize="words"
          multiline={true}
          value={bodyMessage}
          onChangeText={(bodymessage) => setBodyMessage(bodymessage)}
        />
        <View
          style={{
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Pressable
            style={styles.Buttons}
            onPress={async () => {
              await schedulePushNotifications();
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Send</Text>
          </Pressable>

          <Pressable
            style={styles.Buttons}
            onPress={() => {
              setBodyMessage("");
              setMsgTitle("");
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Clear</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.tokenBox}>
        <Text style={styles.infoText}>{notification?.request.identifier}</Text>
      </View>

      <ScrollView style={styles.notificationBox}>
        <View style={styles.textBox}>
          <Text
            style={styles.infoText}
          >{`Title: ${notification?.request.content.title}`}</Text>
          <Text
            style={styles.infoText}
          >{`Message: ${notification?.request.content.body}`}</Text>
          <Text style={styles.infoText}>{`Date: ${converter(
            notification?.date
          )}`}</Text>
          <Text style={styles.infoText}>{expoToken}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
