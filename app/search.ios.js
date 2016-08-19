
import React, {Component} from 'react'
import {View, Text} from 'react-native'

import Button from './button'

export default class Search extends Component {
  constructor (props, context) {
    super(props, context)

    this.padding = 12
  }

  render () {
    var newRoute = {
      component: Search,
      title: 'Updated'
    }

    console.log(newRoute)

    return (
      <View style={{paddingTop: 64 + this.padding, padding: this.padding}}>
        <Text>{this.props.route.title}</Text>
        <Button
          text='Update title'
          onPress={() => {
            this.props.navigator.replace(newRoute)
          }}
        />
      </View>
    )
  }
}
