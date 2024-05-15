import { View,StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Timerfun() {
    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    }

    useEffect(() => {

        const timerIntreval = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerIntreval);
        }
    }, [])


    return (

        <View style={styles.container}>
            <Text style={styles.title}>Timerfun</Text>
            <Text style={styles.title}>{time.toLocaleTimeString("en-US", { hour12: true })}</Text>
            <Text style={styles.title}>Hello</Text>
            <FontAwesome name="star" size={60} color="red" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#eaeaea',
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: '#20232a',
      borderRadius: 20,
      backgroundColor: '#61dafb',
      color: '#20232a',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontSize: 70, fontFamily: 'Roboto-Italic'
    },
  });