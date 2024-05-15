import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Country from '../country/Country.js'
import City from '../City/City.js'

export default class Countryclass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Countryname: 'india',
      Countrycode: '+91'
    }
  }
  changecountry = () => {
    console.log("sdd");
    this.setState({
      Countryname: 'us',
      Countrycode: '+1'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Countryclass</Text>
        <Text>Countryname:- {this.state.Countryname}</Text>
        <Text>Countrycode:- {this.state.Countrycode}</Text>
        <TouchableOpacity style={styles.button} onPress={this.changecountry}>
          <Text>Press Here</Text>
        </TouchableOpacity>

        <City cn={this.state.Countryname} co={this.state.Countrycode} myname={'alkesh'}/>
      </View>
    )
  }
}
const styles = ({

  button: {
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 5,
    
  },
  container:{
      alignItems: 'center',
  }
 
});
