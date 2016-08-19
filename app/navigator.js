
import React, {Component} from 'react'
import {TouchableHighlight, Text} from 'react-native'

import EventEmitter from 'eventemitter3'

export const dispatcher = new EventEmitter()

const styles = {
  button: {
    padding: 10,
    marginLeft: 10
  },
  text: {
    fontSize: 13
  },
  title: {
    marginTop: 10,
    fontWeight: '700'
  }
}

class NavButton extends Component {
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

export const routeMapper = () => {
  return {
    LeftButton: (route, navigator, index, navState) => {
      console.log(navState)
      let prev = navState.routeStack[navState.routeStack.length - 1]
      if (navState.routeStack.length > 1) {
        return <NavButton
          text={'< ' + prev.title }
          onPress={() => {
            // navigator.pop()
            dispatcher.emit('pop', navigator)
          }}
        />
      }
      return null
    },
    RightButton: (route, navigator, index, navState) => {
      return null
    },
    Title: (route, navigator, index, navState) => {
      return <Text style={styles.title}>{route.title}</Text>
    }
  }
}
