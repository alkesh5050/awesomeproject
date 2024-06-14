import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StylesDemo2() {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>StylesDemo1</Text>
      <Text style={styles.box2}>StylesDemo2</Text>
      <Text style={styles.box3}>StylesDemo3</Text>
      <Text style={styles.box4}>StylesDemo4</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        // flexDirection: 'column',
    },
    box1:{
        flex:1,
        backgroundColor:'green',
 
    },box2:{
        flex:1,
        backgroundColor:'red'
    },box3:{
        // flex:3,
        backgroundColor:'pink',
        width:'100%',
        height:'50%'
    },
    box4:{
        width:'100%',
        height:'10%',
        backgroundColor:'black'
    }
})