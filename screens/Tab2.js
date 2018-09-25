import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import {  Container, Header, Content, Card, CardItem, Body, Text } from 'native-base'


export default class Tab2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Container>
          
            <Content padder>
              <Card>
                <CardItem header bordered>
                  <Text>Calf Raises</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>
                        Stand on a flat ground, and go on your tippy toes. You could add weights if you`d like.
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </ScrollView>
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
  welcomeJournal: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
})