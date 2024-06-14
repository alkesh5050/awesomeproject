import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Button1() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
    <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}/>
        
    </View>
    <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
      backgroundColor:'white'
    },
    
});