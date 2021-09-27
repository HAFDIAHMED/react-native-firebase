import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class EditBoardScreen extends Component {
  static navigationOptions = {
    title: 'Edit Board',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Board</Text>
        <Button
          title="Go to Edit Board... again"
          onPress={() => this.props.navigation.push('EditBoard')}
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

export default EditBoardScreen;