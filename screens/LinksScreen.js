import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ExpoLinksView } from '@expo/samples'
import Shapes from '../components/Shapes'
import axios from 'axios'

console.log(' GEORGE KYEEEEOHHHHSSSS')


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Workouts',
  }




  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text> Select your target area below:</Text>
          <Text></Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#aed137',
    fontSize: 20,
  },
})
