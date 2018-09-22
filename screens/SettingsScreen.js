import React from 'react'
import { Text, StyleSheet, View, AppRegistry, TextInput } from 'react-native'
import { ExpoConfigView } from '@expo/samples'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Food Journal',
  };
  constructor(props) {
    super(props)
    this.state = { text: ' Log your food here ' }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Keeping track of your meals is important to be able to keep track of your calorie goals!
          Make sure to remember serving size, calorie, carb, and protein goals for each meal.
        </Text>
        <Text style={styles.textJournal}>What did you eat today?</Text>
        <TextInput style={
          {height: 90, 
            width: 290,
            marginLeft: 40,
            backgroundColor: 'white',
            borderColor: 'black', 
            borderWidth: 3}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
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
  textJournal: {
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

AppRegistry.registerComponent('SettingsScreen', () => foodLogJournal)