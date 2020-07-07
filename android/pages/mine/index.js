import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Mine extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>详情</Text>
      </View>
    );
  }
}
export default Mine;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f5',
  },
});
