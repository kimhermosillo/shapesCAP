import React from 'react'
import { StyleSheet, View, AppRegistry, TextInput, ScrollView } from 'react-native'
import { ExpoConfigView } from '@expo/samples'
import { Container, Header, Content, Button, Text, DatePicker } from 'native-base'

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
      <ScrollView style={styles.container}>
        <View style={styles.welcomeJournal}>
          <Text> Keeping track of your meals is important to be able to keep track of your calorie goals!
          Make sure to remember serving size, calorie, carb, and protein goals for each meal.
          </Text>
          {/* DATE PICKER */}
          <Content>
            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              placeHolderText="Select Date"
              textStyle={{ color: 'green '}}
              placeHolderTextStyle={{ color: '#d3d3d3' }}
              onDateChange={ this.setDate }
            />
            <Text>
              Date: {this.state.chosenDate}
            </Text>
          </Content>
          {/* END OF DATE PICKER */}
          <Text style={styles.textJournal}>What did you eat today?</Text>
          <TextInput style={
            {height: 90, 
              width: 290,
              marginTop: 10,
              marginBottom: 20,
              marginLeft: 30,
              backgroundColor: 'white',
              borderColor: 'black', 
              borderWidth: 3}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          />
          <Button block dark>
            <Text>Submit journal</Text>
          </Button>
          <Text style={styles.textJournal}>
            Past entries:
          </Text>
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
  },
  textJournal: {
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeJournal: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
})

AppRegistry.registerComponent('SettingsScreen', () => foodLogJournal)