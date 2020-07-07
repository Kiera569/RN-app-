import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>详情</Text>
      </View>
    );
  }
}
export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f5',
  },
});
