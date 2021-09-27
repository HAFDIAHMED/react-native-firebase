import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AddBoardScreen extends Component {
  static navigationOptions = {
    title: 'Add Board',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Board</Text>
        <Button
          title="Go to Add Board... again"
          onPress={() => this.props.navigation.push('AddBoard')}
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

export default AddBoardScreen;