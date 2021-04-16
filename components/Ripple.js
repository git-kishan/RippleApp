import React, { useRef ,useState} from 'react';
import { View, StyleSheet, Text, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

const RADIUS = 80;
const FIRST_RADIUS = 120;
const SECOND_RADIUS = 160;
const THIRD_RADIUS = 200;
const FOURTH_RADIUS= 250;

const Ripple = () => {
  const animated = useRef(new Animated.Value(0)).current;
  const [playing,setPlaying]= useState(false);
  const animation = Animated.timing(animated, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true
  });


  const startRippling = () => {
    animated.stopAnimation();
    Animated.sequence([animation]).start(({ finished }) => {
      if (finished) {
        animated.setValue(0);
        startRippling();
      }
    });
  }

  const cirlcInterpolator = animated.interpolate({
    inputRange: [0, 0.25, 0.50, 0.75, 1],
    outputRange: [1, 1.1, 1, 1.2, 1]
  })

  const scaleInterpolator1 = animated.interpolate({
    inputRange: [0, 0.28, 0.44, 0.78, 1],
    outputRange: [1, 1.1, 1.2, 1.3, 1.5]
  })
  const scaleInterpolator2 = animated.interpolate({
    inputRange: [0, 0.31, 0.47, 0.81, 1],
    outputRange: [1, 1.1, 1.2, 1.3, 1.5]
  })
  const scaleInterpolator3 = animated.interpolate({
    inputRange: [0, 0.34, 0.50, 0.84, 1],
    outputRange: [1, 1.1, 1.2, 1.3, 1.5]
  })

  const scaleInterpolator4 = animated.interpolate({
    inputRange: [0,0.3, 0.7 ,1],
    outputRange: [0,0,1,1.5]
  })
  

  const opacityInterpolator = animated.interpolate({
    inputRange: [0, 0.6, 1],
    outputRange: [0, 1, 0]
  })

  const opacityInterpolator1 = animated.interpolate({
    inputRange: [0, 0.63, 1],
    outputRange: [0, 1, 0]
  })
  const opacityInterpolator2 = animated.interpolate({
    inputRange: [0, 0.66, 1],
    outputRange: [0, 1, 0]
  })
  const opacityInterpolator3 = animated.interpolate({
    inputRange: [0, 0.69, 1],
    outputRange: [0, 1, 0]
  })
  const opacityInterpolator4 = animated.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0]
  })

  const handleRippleTouch=()=>{
    if(playing){
      setPlaying(false);
      animated.stopAnimation();
    }else{
      startRippling();
      setPlaying(true);
    }
  }

  return (
    <View style={styles.root}>
      <Animated.View style={[styles.circle4, { opacity: opacityInterpolator4 }, { transform: [{ scale: scaleInterpolator4 }] }]} />
      <Animated.View style={[styles.circle3, { opacity: opacityInterpolator3 }, { transform: [{ scale: scaleInterpolator3 }] }]} />
      <Animated.View style={[styles.circle2, { opacity: opacityInterpolator2 }, { transform: [{ scale: scaleInterpolator2 }] }]} />
      <Animated.View style={[styles.circle1, { opacity: opacityInterpolator1 }, { transform: [{ scale: scaleInterpolator1 }] }]} />

      <TouchableWithoutFeedback onPress={handleRippleTouch}>
        <Animated.View style={[styles.logo, { transform: [{ scale: cirlcInterpolator }] }]} />
      </TouchableWithoutFeedback>
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242424'
  },
  logo: {
    position: 'absolute',
    height: 2 * RADIUS,
    width: 2 * RADIUS,
    borderRadius: RADIUS,
    backgroundColor: '#646464',
    elevation: 10,
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  circle1: {
    position: 'absolute',
    height: 2 * FIRST_RADIUS,
    width: 2 * FIRST_RADIUS,
    borderRadius: FIRST_RADIUS,
    backgroundColor: '#e4e4e4',
    elevation: 10,
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  circle2: {
    position: 'absolute',
    height: 2 * SECOND_RADIUS,
    width: 2 * SECOND_RADIUS,
    borderRadius: SECOND_RADIUS,
    backgroundColor: '#949494',
    elevation: 10,
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  circle3: {
    position: 'absolute',
    height: 2 * THIRD_RADIUS,
    width: 2 * THIRD_RADIUS,
    borderRadius: THIRD_RADIUS,
    backgroundColor: '#646464',
    elevation: 10,
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  circle4: {
    position: 'absolute',
    height: 2 * FOURTH_RADIUS,
    width: 2 * FOURTH_RADIUS,
    borderRadius: FOURTH_RADIUS,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
  }

})

export default Ripple;