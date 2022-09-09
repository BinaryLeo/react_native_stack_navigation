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
