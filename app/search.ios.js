
import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Search extends Component {
  constructor (props, context) {
    super(props, context)

    this.padding = 12
  }

  render () {
    return (
      <View style={{paddingTop: 64 + this.padding, padding: this.padding}}>
        <Text>{this.props.route.title}</Text>
      </View>
    )
  }
}
