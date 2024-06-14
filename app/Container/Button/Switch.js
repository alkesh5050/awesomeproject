import { View, Text,Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'


export default function Switch1() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });