import { View, Text, Button } from 'react-native'
import React from 'react'


export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color:'black',}}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        
      />
      
    </View>
  )
}