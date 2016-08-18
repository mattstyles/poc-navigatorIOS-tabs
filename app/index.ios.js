
import React, {Component} from 'react'
import {NavigatorIOS} from 'react-native'

import MainPage from './main'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.route = {
      component: MainPage,
      title: 'Initial'
    }
  }

  render () {
    return (
      <NavigatorIOS
        initialRoute={this.route}
        style={{flex: 1}}
      />
    )
  }
}
