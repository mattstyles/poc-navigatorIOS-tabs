
import React, {Component} from 'react'
import {Navigator, Text, TouchableHighlight} from 'react-native'

import MainPage from './main'
import {dispatcher, routeMapper} from './navigator'


export default class App extends Component {
  constructor (props) {
    super(props)

    this.route = {
      component: MainPage,
      title: 'Home',
      selected: 'home'
    }
  }

  componentDidMount () {
    dispatcher.on('pop', () => {
      // navigator.pop()
      this.refs.Nav.pop()
    })
    dispatcher.on('push', (route) => {
      this.refs.Nav.push(route)
    })
    dispatcher.on('replace', (route) => {
      this.refs.Nav.replace(route)
    })
  }

  renderScene (route, navigator) {
    return <route.component
      navigator={navigator}
      route={route}
    />
  }

  render () {
    return (
      <Navigator
        ref='Nav'
        initialRoute={this.route}
        renderScene={this.renderScene}
        style={{flex: 1}}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={routeMapper()}
            style={{
              backgroundColor:'rgb(246,246,248)'
            }}
          />
        }
      />
    )
  }
}
