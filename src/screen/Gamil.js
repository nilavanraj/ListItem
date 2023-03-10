import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  I18nManager,
  Button,
} from 'react-native';

import {RectButton, Swipeable} from 'react-native-gesture-handler';

export default class AppleStyleSwipeableRow extends Component {
  constructor(props) {
    super(props);
  }
  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text style={[styles.actionText]}>Archive</Animated.Text>
      </RectButton>
    );
  };
  renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      this.close();
      this.props.cb(this.props.id);
    };
    return (
      <Animated.View
        style={{
          flex: 1,
          transform: [{translateX: 0}],
          height: '90%',
          alignSelf: 'center',
        }}>
        <RectButton
          style={[styles.rightAction, {backgroundColor: color}]}
          onPress={() => {
            pressHandler();
          }}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };
  renderRightActions = progress => (
    <View
      style={{
        width: 100,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }}>
      {this.renderRightAction('Delete', '#497AFC', 192, progress)}
    </View>
  );
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };
  render() {
    const {children} = this.props;
    return (
      <Swipeable
        childrenContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={30}
        renderLeftActions={this.renderRightActions}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
