

import React, {Component} from 'react'
import {View, Text} from 'react-native'

import Button from './button'
import {dispatcher} from './navigator'

export default class Page extends Component {
  constructor (props, context) {
    super(props, context)

    this.padding = 12
  }

  onPush () {
    // this.props.navigator.push({
    //   component: Page,
    //   title: 'Page ' + (Math.random() * 1000 | 0)
    // })
    dispatcher.emit('push', {
      component: Page,
      title: 'Page ' + (Math.random() * 1000 | 0)
    })
  }

  render () {
    return (
      <View style={{
        paddingTop: 64 + this.padding,
        padding: this.padding,
        flex: 1,
        backgroundColor: 'rgb(255,255,255)'
      }}>
        <Text>{this.props.route.title}</Text>
        <Button onPress={this.onPush.bind(this)} text='Push'/>
      </View>
    )
  }
}
