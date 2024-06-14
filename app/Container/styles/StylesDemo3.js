import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'


export default function StylesDemo3() {
    return (

        <View style={styles.container}>
            <Text style={styles.box1}>Demo1</Text>
            <Text style={styles.box2}>Demo2</Text>
            <Text style={styles.box3}>Demo3</Text>
            <Image source={{uri: 'https://picsum.photos/id/237/200/300'}}
       style={{width: 100, height: 100}} />

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'aliceblue',
        // alignItems: 'center',
        // alignContent:'stretch',
        // flexWrap:'wrap',
        // gap:20,
        // flexBasis: 200,
        position:'relative'
    },
    box1: {
        // flex: 1,
        width: 100,
        height: 100,
        color: 'black',
        backgroundColor: 'powderblue',
        // alignSelf:'flex-end'
        // alignSelf:'center'
        // flexShrink:1
        // flexGrow:1
        // top:50,
        right:50,
        position:'absolute',
       bottom:50,
    },
    box2: {
        width: 100,
        height: 100,
        color: 'black',
        backgroundColor: 'skyblue',
        // top:50
    },
    box3: {
        width: 100,
        height: 100,
        color: 'black',
        backgroundColor: 'steelblue',
        // top:50
    }
})