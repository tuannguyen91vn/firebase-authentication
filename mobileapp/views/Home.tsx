import React from 'react';
import firebase from 'react-native-firebase';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';

export default class Main extends React.Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  };

  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
