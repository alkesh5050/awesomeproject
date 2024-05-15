import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import City from '../City/City';

export default function Country() {
  const [countryName,setCountryName]=useState('india');
  const[countryCode, setContryCode]=useState('+91');

  const handlechange=()=>{
    setCountryName('us');
    setContryCode('+1')
  }

  
  return (
    <View>
      <Text>Country</Text>
      <Text>{countryName}</Text>
      <Text>{countryCode}</Text>
      <TouchableOpacity onPress={handlechange}>
      <Text>Country chang</Text>
      </TouchableOpacity>
      <City  cn={countryName}/>
    </View>
  )
}