import React from 'react';
import { StyleSheet, View } from 'react-native';



export default function ParallaxScrollView({}) {

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
