import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ExpoLinksView } from '@expo/samples'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Workouts',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> THESE ARE ALL THE WORKOUTS</Text>
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
