import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function stylesDemo() {
    return (
        <View style={styles.container}>
            <Text style={styles.red}>just red</Text>
            <Text>stylesDemo</Text>
            <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    red: {
        paddingHorizontal: 50,
        color: 'red',
        paddingVertical: 40,
    },
    bigBlue: {
        fontSize: 40
    }
})