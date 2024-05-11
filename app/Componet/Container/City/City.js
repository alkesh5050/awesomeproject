import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function City({cn}) {
    const [CityName,setCityName]=useState('surat');
    const[CityFamus, setCityFamus]=useState('Dumas');

    const handlechangeCity=()=>{
        setCityName('baroda');
        setCityFamus('road')
      }

  return (
    <View>
      <Text>City</Text>
      <Text> City name :{CityName}</Text>
      <Text> city fumas plase :{CityFamus}</Text>
      <Text> country Name :{cn}</Text>
      <TouchableOpacity onPress={handlechangeCity}>
      <Text>Country chang</Text>
      </TouchableOpacity>

    </View>
  )
}