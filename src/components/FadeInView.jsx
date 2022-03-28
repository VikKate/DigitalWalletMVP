import React from 'react';
import {Animated} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const FadeInView = ({children}) => {
  const fadeAnimation = React.useRef(new Animated.Value(0)).current;

  useFocusEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
  });

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Animated.View style={{flex: 1, opacity: fadeAnimation}}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
