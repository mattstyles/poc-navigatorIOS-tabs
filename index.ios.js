
import React, {Component} from 'react'
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
// import App from './app'

import Button from './app/button'

import most from 'most'
import EventEmitter from 'eventemitter3'

class Page1 extends Component {
  render () {
    return (
      <View style={styles.view}>
        <Text>Page 1</Text>
        <Button
          onPress={() => {
            signal.emit('action', {
              type: 'push',
              Component: Page2
            })
          }}
          text='Next'
        />
      </View>
    )
  }
}

class Page2 extends Component {
  render () {
    return (
      <View style={styles.view}>
        <Text>Page 2</Text>
        <Button
          onPress={() => {
            signal.emit('action', {
              type: 'pop',
            })
          }}
          text='Back'
        />
      </View>
    )
  }
}

const initialState = {
  routes: [{
    Component: Page1
  }]
}

const reducer = (state, event) => {
  let {type} = event
  if (type === 'push') {
    state.routes.push({
      Component: event.Component
    })
  }
  if (type === 'pop') {
    state.routes.pop()
  }
  return state
}

const signal = new EventEmitter()
const source = most
  .fromEvent('action', signal)
  .scan(reducer, initialState)

const styles = {
  view: {
    flex: 1,
    paddingTop: 44,
    padding: 12
  }
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = initialState
  }

  componentWillMount () {
    source.observe(state => {
      this.setState(state)
    })
  }

  render () {
    let Child = this.state.routes[this.state.routes.length - 1].Component
    return (
      <View style={{flex: 1, paddingTop: 44, padding: 12}}>
        <Child state={this.state} />
      </View>
    )
  }
}

AppRegistry.registerComponent('navigatorIOS', () => App)
