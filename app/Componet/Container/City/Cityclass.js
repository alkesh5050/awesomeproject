import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class City extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Cityname: 'surat',
            famas: 'dumas'
        }
    }
    changeCity = () => {
        console.log("sddssd");
        this.setState({
            Cityname: 'goa',
            famas: 'mall'
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>City</Text>
                <Text>Country name : -{this.props.cn}</Text>
                <Text>Country code : -{this.props.co}</Text>
                <Text>Country code : -{this.props.myname}</Text>
                <Text>City name : -{this.state.Cityname}</Text>
                <Text>City code : -{this.state.famas}</Text>
                <TouchableOpacity style={styles.button} onPress={this.changeCity}>
                    <Text>Press Here city</Text>
                </TouchableOpacity>
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
