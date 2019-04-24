/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Animated,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  input: {
    height: 45,
    fontSize: 20,
    borderBottomWidth: 1,
  },
  invalid: {
    fontSize: 12,
    marginLeft: 5,
  },
});

export default class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
    const { value } = this.props;
    this.animatedIsFocused = new Animated.Value(value === '' ? 0 : 1);
    this.handleFocus.bind(this);
    this.handleBlur.bind(this);
  }

  handleFocus = () => this.setState({ isFocused: true }, () => this.animate());

  handleBlur = () => this.setState({ isFocused: false }, () => this.animate());

  animate() {
    const { value } = this.props;
    const { isFocused } = this.state;
    Animated.timing(this.animatedIsFocused, {
      toValue: isFocused || value !== '' ? 1 : 0,
      duration: 200,
    }).start();
  }

  render() {
    const {
      label,
      optional,
      theme,
      value,
      invalidMessage,
      style,
      onChange,
      valid,
      inputRef,
      onClear,
      ...props
    } = this.props;
    const { isFocused } = this.state;
    // eslint-disable-next-line react/jsx-filename-extension
    const optionalTag = (
      <Text
        style={{
          fontSize: 14,
          color: theme === 'dark' ? '#8E8E93' : 'rgba(255,255,255,0.75)',
          fontFamily: fonts.sansRegular,
          fontWeight: '300',
        }}
      >
        {' '}
        (Optional)
      </Text>
    );
    const labelStyle = {
      fontFamily: 'Arial',
      position: 'absolute',
      left: 0,
      top: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [30, 0],
      }),
      fontSize: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 12],
      }),
      color: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [
          theme === 'dark' ? '#3C3C3C' : 'rgba(255,255,255,0.75)',
          theme === 'dark' ? 'rgba(60,60,60,0.75)' : 'rgba(255,255,255,0.75)',
        ],
      }),
    };
    return (
      <View style={[{ paddingTop: 15, paddingBottom: 10 }, style]}>
        <Animated.Text style={labelStyle}>
          {label}
          {optional && optionalTag}
        </Animated.Text>
        <TextInput
          {...props}
          ref={inputRef}
          value={value}
          onChangeText={text => onChange(text)}
          style={[
            styles.input,
            {
              color: theme === 'dark' ? '#3c3c3c' : 'white',
              borderBottomColor: theme === 'dark' ? 'rgba(0,0,0,.33)' : 'rgba(255,255,255,.33)',
            },
          ]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          clearButtonMode="while-editing"
          selectionColor={theme === 'dark' ? '#3C3C3C' : 'white'}
        />
        {isFocused && value !== '' && (
          <TouchableWithoutFeedback onPress={onClear}>
            <Image
              // eslint-disable-next-line global-require
              source={require('../../../assets/images/icon-clear-input.png')}
              style={{
                position: 'absolute',
                right: 5,
                bottom: 25,
                height: 16,
                width: 16,
              }}
            />
          </TouchableWithoutFeedback>
        )}
        {!isFocused && value !== '' && !valid && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={
                theme === 'dark'
                  ? require('../../../assets/images/icon-error-dark.png')
                  : require('../../../assets/images/icon-error-light.png')
              }
              style={{ height: 16, width: 16 }}
            />
            <Text style={[styles.invalid, { color: theme === 'dark' ? '#3C3C3C' : 'white' }]}>
              {invalidMessage}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
