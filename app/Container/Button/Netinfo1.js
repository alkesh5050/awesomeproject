import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';


export default function Netinfo1() {

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1, }}>

      <View style={{
        backgroundColor: isConnected ? 'green' : 'red',
        position: 'absolute',
        height: 50,
        bottom: 12,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50
      }}>
        <Text style={{ Color: 'white' }}>{isConnected ? 'Back online' : 'NO internet'}</Text>
      </View>
    </View>
  );
}
