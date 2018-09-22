import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { WebBrowser } from 'expo'

import { MonoText } from '../components/StyledText'


console.disableYellowBox = true



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
           
            <Text style={styles.user}> Welcome, User!</Text>

            

            <Text>
              SHAPES APPPP 
            </Text>
          </View>

          
        </ScrollView>

       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  user: {
    fontWeight: 'bold',
  },
  // BELOW IS SHAPES PLUS LOGO AT THE HOME SCREEN
  container: {
    flex: 1,
    backgroundColor: '#aed137',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  // ABOVE IS SHAPES PLUS LOGO AT THE HOME SCREEN
  navigationFilename: {
    marginTop: 25,
  },
})
