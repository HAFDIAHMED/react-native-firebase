import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BoardScreen extends Component {
  static navigationOptions = {
    title: 'Board List',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Board List</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('BoardDetails')}
        />
        <Button
          title="Go to Add Board"
          onPress={() => this.props.navigation.navigate('AddBoard')}
        />
        <Button
          title="Go to Edit Board"
          onPress={() => this.props.navigation.navigate('EditBoard')}
        />
      </View>
    );
  }
}

export default BoardScreen;