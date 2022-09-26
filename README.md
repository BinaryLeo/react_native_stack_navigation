<div align="center" style="margin: 20px; text-align: center">

   # react_native_stack_navigation

  <p>A react native application using stack navigation to explore several features</p>
 
  [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](https://github.com/BinaryLeo/react_native_stack_navigation/blob/main/LICENSE)
  ![GitHub last commit](https://img.shields.io/github/last-commit/BinaryLeo/react_native_stack_navigation?style=flat-square)
  ![GitHub top language](https://img.shields.io/github/languages/top/BinaryLeo/react_native_stack_navigation?style=flat-square)
 
</div>
<p align="center">
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies and libs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-notes">Notes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

</p>


<div>


Pagination | Camera| Notifications | Maps
:-: | :-: | :-: | :-:
<video src='https://user-images.githubusercontent.com/72607039/192182974-a10a271a-b0db-4de3-a3b5-64ab292a695a.mp4' width=150/> | <video src='https://user-images.githubusercontent.com/72607039/192182571-38b24125-da78-4713-986a-c243c91b989c.mp4' width=150/>| <video src='https://user-images.githubusercontent.com/72607039/192182481-8c84de19-8454-4c91-a49a-42c1a0ceefd7.mp4' width=150/> | <video src='https://user-images.githubusercontent.com/72607039/192182398-7cb9e483-9f5e-4b5a-8a08-2ebd31784ec3.mp4' width=150/>


 
   
</div>




## 💡 features

- ``Maps``
- ``Camera``
- ``Notifications``
- ``Stack Navigation``
- ``Bottom Navigation``
- ``Drawer Navigation``
- ``Animations``


## 💡 technologies

- ``Expo bare workflow``
- ``React Native``
- ``Typescript``

```bash
# npx expo install @react-navigation/stack @react-navigation/native
# yarn add @react-navigation/stack @react-navigation/native

# npx expo install react-native-screens react-native-safe-area-context
# yarn add react-native-screens react-native-safe-area-context

# npx expo install react-native-gesture-handler
# yarn add react-native-gesture-handler

# npx expo install expo camera
# yarn add expo camera

# npx expo install @react-navigation/bottom-tabs
# yarn add @react-navigation/bottom-tabs

# npx expo install @expo/vector-icons
# yarn add @expo/vector-icons

# npx expo install @react-navigation/drawer
# yarn add @react-navigation/drawer

# npx expo install react-native-reanimated
# yarn add react-native-reanimated

# npx expo install react-native-maps
# yarn add react-native-maps

# npx expo install expo-device expo-notifications
# yarn add expo-device expo-notifications

```

## 💡 Notes
If you're installing this in a bare React Native app, you should also follow these additional installation instructions.
You must also add the Babel plugin to babel.config.js

``` javascript

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin']
  };
};

```

## 📄 License

This project was built under MIT. See the file [LICENSE](LICENSE) for more details.

---


Built with 💖 love and burning my 🧠 brain - by Binary Leo 👋🏻 &nbsp;[Find me on linkedin!](https://www.linkedin.com/in/leonardo-moura-92b513209/)
