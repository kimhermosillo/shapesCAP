import React from 'react'
import { Text } from 'react-native'
import { ExpoConfigView } from '@expo/samples'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Food Journal',
  };

  render() {
    return (
      <Text>THIS IS WHERE YOU LOG YOUR FOOD</Text>
    )
  }
}
