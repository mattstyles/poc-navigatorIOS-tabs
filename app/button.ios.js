
import React, {Component} from 'react'
import {TouchableHighlight, Text} from 'react-native'

const styles = {
  button: {
    backgroundColor: 'rgb(232, 232, 236)',
    padding: 20,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 6
  },
  text: {
    fontSize: 17
  }
}

export default class Button extends Component {
  render () {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.button}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}
