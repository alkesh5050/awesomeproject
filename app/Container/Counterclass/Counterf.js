import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/action/counter.action';

export default function Counterf() {

  const dispatch = useDispatch(); //3

  const counter = useSelector(state => state.count);
  console.log(counter.count);
  // 2
  const handleInc = () => {
    console.log("dddd");
    dispatch(increment());    //4
  }

  const handleDec = () => {
    dispatch(decrement())
  }

  return (
    <View>
      <Text>Counterf</Text>
      {/* 1 */}
      <TouchableOpacity style={{width: '100%', padding: 20, backgroundColor: 'blue', fontSize: '40'}} onPress={handleInc}>    
        <Text>+</Text>
      </TouchableOpacity>

      <Text>{counter.count}</Text>
      <TouchableOpacity style={{width: '100%', padding: 20, backgroundColor: 'blue', fontSize: '40'}} onPress={handleDec}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  )
}