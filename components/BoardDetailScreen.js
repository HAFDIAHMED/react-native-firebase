import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BoardDetailScreen extends Component {
  static navigationOptions = {
    title: 'Board Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Board Details</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('BoardDetails')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Board')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default BoardDetailScreen;