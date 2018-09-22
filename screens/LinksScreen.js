import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { ExpoLinksView } from '@expo/samples'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Workouts',
  };

  render() {
    return (
      <Text> THESE ARE ALL THE WORKOUTS</Text>
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
