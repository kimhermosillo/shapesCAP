import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ExpoConfigView } from '@expo/samples'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Food Journal',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>THIS IS WHERE YOU LOG YOUR FOOD</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#aed137',
  },
})
