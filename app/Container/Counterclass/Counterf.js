import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/action/counter.action';

export default function Counterf() {

  const dispatch = useDispatch(); //3

  // 2
  const handleInc = () => {
    dispatch(increment());    //4
  }

  const handleDec = () => {
    dispatch()
  }

  return (
    <View>
      <Text>Counterf</Text>
      {/* 1 */}
      <TouchableOpacity onPress={handleInc}>    
        <Text>+</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity onPress={handleDec}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  )
}