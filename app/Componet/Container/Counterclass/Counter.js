import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,

    }
  }
  handleEnc = () => {
    console.log("as");

    if (this.state.count < 5) {
      this.setState({
        count: this.state.count + 1

      })
    }



  }
  handleDec = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1

      })
    }

  }
  render() {
    return (
      <View style={{alignItems: 'center',}}>
        <Text style={{paddingTop: 60}}>Counter</Text>
        <TouchableOpacity
          onPress={this.handleEnc}
          style={{
           alignItems: 'center',borderRadius: 22 ,
            borderWidth: 5, backgroundColor: 'green', padding: 5,  width: 150,
            height: 100,
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <Text style={{ alignItems: 'center', padding: 5,fontSize:222 }}>{this.state.count}</Text>
       
        <TouchableOpacity
          onPress={this.handleDec}
          style={{
            width: '50%', backgroundColor: 'red', alignItems: 'center',
            padding: 5, borderRadius: 22 ,borderWidth: 5 ,width: 150, height: 100,}}
        
        >
          <Text>-</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}