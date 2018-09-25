import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ExpoLinksView } from '@expo/samples'
import Shapes from './Shapes'
import axios from 'axios'

console.log(' GEORGE KYEEEEOHHHHSSSS')


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Workouts',
  }
  state = { targetarea: [] }

  componentDidMount() {
    axios.get('https://shapesserver.herokuapp.com/workouts')
      .then(response => this.setState({ targetarea: response.data.shapes }))
  }

  renderTargetArea = () => {
    const { shapes } = this.state.targetarea
    if (this.state.targetarea.shapes) {
      console.log(shapes)
    }
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
