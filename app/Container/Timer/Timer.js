import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }


    tick = () => {
        this.setState({
            time: new Date()
        })
    }
    componentDidMount = () => {
        this.timeref = setInterval(this.tick, 1000)
    }
    componentDidUpdate = (prevprops, prevSteat) => {
        if (prevSteat.time !== this.state.time) {
            console.log("componentDidUpdate");
        }
    }
    componentWillUnmount = () => {
        clearInterval(this.timeref)
    }


    render() {
        return (
            <View style={{ alignItems: 'center', padding: 100, flex: 1, backgroundColor: '#ffc0cb', }} >
                <Text style={{ color: 'blue', fontSize: 22, paddingBottom: 200 }}>{this.state.time.toLocaleDateString("en-US", { weekday: 'long', day: 'numeric', month: 'long' })}</Text>
                <Text style={{
                    fontSize: 30,
                    fontWeight: "bold", color: 'black',
                }}>Timer</Text>
                <Text style={{ fontSize: 35, color: 'black', }} >{this.state.time.toLocaleTimeString("en-US", { hour12: true })}</Text>
             
            </View>

        )
    }
}