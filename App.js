import React, { useRef } from 'react';
import { View, StyleSheet, Text, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Ripple from './components.js/Ripple';

const RADIUS = 80;
const FIRST_RADIUS = 120;
const SECOND_RADIUS = 160;
const THIRD_RADIUS = 200;
const FOURTH_RADIUS= 250;

const App = () => {

  return (
    <View style={styles.root}>
      <Ripple/>
    </View>
  )
}

const styles=StyleSheet.create({
  root : {
    flex : 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#242424'
  }
})

export default App;