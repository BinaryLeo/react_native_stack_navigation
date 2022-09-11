<div align="center" style="margin: 20px; text-align: center">

   # react_native_stack_navigation

  <p>A react native application using stack navigation to explore several features</p>
 
  [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](https://github.com/BinaryLeo/react_native_stack_navigation/blob/main/LICENSE)
  ![GitHub last commit](https://img.shields.io/github/last-commit/BinaryLeo/react_native_stack_navigation?style=flat-square)
  ![GitHub top language](https://img.shields.io/github/languages/top/BinaryLeo/react_native_stack_navigation?style=flat-square)
 
</div>
<p align="center">
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#-screens">Screens</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies and libs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-notes">Notes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

</p>





## 💡 features

- ``Maps``
- ``Camera``
- ``Notifications``
- ``Stack Navigation``
- ``Bottom Navigation``
- ``Drawer Navigation``
- ``Animations``

## 📱 screens

<table>
  <tr>
    <th width="50%">Features</th>
    <th width="30%">Preview</th>
  </tr>
  <tr>
    <td>Home screen - Style light mode</td>
    <th rowspan="6"> 

https://user-images.githubusercontent.com/72607039/189484829-22949f1e-0f0a-450a-8d44-c95b24618347.mp4

  </th>
  </tr>
   <tr> <td> Fetch data from GitHub APi.</td> </tr>
   <tr> <td>Handle pagination to repositories.</td> </tr>
   <tr> <td>Open repositories using an external browser.</td> </tr>
   <tr> <td>Top Menu - Style "navbar" using MaterialIcons to access Maps, camera and all other features.</td> </tr>
  <tr><td> </td> </tr>
  </tr>
</table>
<table>
  <tr>
    <td>Maps</td>
    <td>Camera</td>
    <td>Notifications</td>
  </tr>
  <tr>
   
   <td><img src="https://user-images.githubusercontent.com/72607039/189487759-df67d594-ba7f-4912-9200-4f9b042b6724.png" width=270 height=570></td>
   
  <td><img src="https://user-images.githubusercontent.com/72607039/189487735-ee590084-01f8-4e14-a29f-c15fde5f1839.png" width=270 height=570></td> 
   <td><img src="" width=270 height=570></td>

  </tr>
 </table>

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
