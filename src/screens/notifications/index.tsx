import { View, Text, Button, Platform } from "react-native";
import { styles } from "./styles";

//* to handle the invocation of the notifications
import { useEffect, useState, useRef } from "react";

import * as Device from "expo-device"; //*  identification and treatings
import * as Notifications from "expo-notifications";
//* pack responsable to fire notification's threads

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
  const [notification, setNotification] = useState<any>(false);
  const notificationListener = useRef<any>();
  const responseListner = useRef<any>();
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
      <Text style={styles.text}>Token :{expoToken == expoToken}</Text>
      <View style={styles.notificationBox}>
        <Text>{`Title: `}</Text>
        <Text>{`Body: `}</Text>
        <Text>{`Data: `}</Text>
      </View>
      <Button
        title="Notifications"
        onPress={async () => {
          await schedulePushNotifications();
        }}
      />
    </View>
  );
}

async function schedulePushNotifications() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hello Dev!",
      body: " .. Push Notification",
      data: { data: "anything" },
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
    console.log("Notification token:", token);
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
