// React Native Counter Example using Hooks!

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const App = () => {
  const words = ["sup", "hello", "yo"]
  const [word, setWord] = useState("");

  function changeWord() {
    let w = words[Math.floor(words.length * Math.random())]
    setWord(w)
  }

  return (
    <View style={styles.container}>
      <Text>{word}</Text>
      <Button
        onPress={() => changeWord()}
        title="Click me!"
      />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;