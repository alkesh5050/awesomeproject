import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Counterf() {

   
    const [count,setCount]=useState(0);

    handleEnc = () => {
        if(count<5){
            setCount(count+1)

        }
       
      }
      handleDec = () => {
       
        if(count > 0){
            setCount(count-1)

        }
      }
  return (
    <View>
      <Text>Counterf</Text>
      <TouchableOpacity onPress={handleEnc}>
      <Text>+</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity onPress={handleDec}>
      <Text>-</Text>
      </TouchableOpacity>
    </View>
  )
}