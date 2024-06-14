import { View, Text, Button } from 'react-native'
import React from 'react'




export default function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details</Text>

      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      /> */}
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button title="Go To Home" onPress={() => navigation.goBack()} />

    </View>
  )
}