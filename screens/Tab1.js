import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Text, Body, Right, Button } from 'native-base'


export default class Tab1 extends React.Component {
  render() {
    return (
      <View>
        <Container>
          <Header />
          <Content>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri : '/db.png'}} />
                </Left>
                <Body>
                  <Text>Dips</Text>
                  <Text note numberOfLines={3}> Dips workout your tricep area! On parallel bars, jump up, straighten your arms and then lower your body by bending your elbows while leaning forward. This may take time to properly dip down until your shoulders are parallel with your elbows. Lift your body back up, that`s a dip! Repeat 12-15 times. </Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </Content>
        </Container>
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
  workouts: {
    textAlign: 'left',
  },
})