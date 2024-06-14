import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react'

export default function ActivityIndicator1() {
  return (
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });