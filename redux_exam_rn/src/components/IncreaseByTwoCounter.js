import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {increaseByTwoCounter} from '../redux/actions/counterActions';
class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{backgroundColor: '#F0BD6E'}}
          onPress={() => {
            this.props.dispatch(increaseByTwoCounter());
          }}>
          <Text style={{fontSize: 24}}> +2 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {action: bindActionCreators(increaseByTwoCounter, dispatch)};
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
