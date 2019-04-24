/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ImageBackground, Image, Text, View } from 'react-native';
//import moment from 'moment';
import store from 'react-native-simple-store';
import colors from '../theme/Colors';
import { Button, FloatingLabelInput, } from '../components';
import { responsiveSize } from '../utils/dimensions';
import API from '../services/API';
import fonts from '../theme/fonts';


const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      username: '',
      password: '',
      deviceToken: '',
    };
  }

  attemptLogin = () => {
    const { username, password, deviceToken } = this.state;
    const { componentId } = this.props;
    this.setState({ isLoading: true });
    API.login(username, password, deviceToken).then(response => {
      if (response.message === 'success') {
        store.update('user', { isLoggedIn: true, guideId: response.payload }).then(() => {
          this.setState({ isLoading: false });
          goToPage(componentId, 'dashboard');
        });
      } else if (response.message === 'failed') {
        this.setState({ isLoading: false });
      }
    });
  };

  render() {
    const { isLoading, username, password } = this.state;
    return (
        <ImageBackground
          source={require('../assets/images/bg_login_blur.jpg')}
          style={{ width: '100%', height: '100%' }}
        >
        <SafeAreaView style={{alignItems: 'center'}}>
            <Image source={require('../assets/images/awesomm-login2.png')} style={{ height: 72, margin: 20}} resizeMode='contain'/>
            <Text style={{ fontFamily: fonts.serifRegular, fontSize: 18, color: 'white', marginBottom: 20, }}>Ready to get started?</Text>
            <FloatingLabelInput
              onClear={() => this.setState({ username: '' })}
              autoCapitalize="none"
              style={{ marginBottom: 10, width: 300 }}
              
              label="YOUR WINE GUIDE ID"
              onChange={value => this.setState({ username: value })}
              value={username}
              valid
              
              returnKeyType="next"
              keyboardType="email-address"
              onSubmitEditing={() => this.pass.focus()}
              blurOnSubmit={false}
            />
            <FloatingLabelInput
              onClear={() => this.setState({ password: '' })}
              autoCapitalize="none"
              style={{ marginBottom: 30, width: 300 }}
              textContentType="password"
              label="YOUR PASSWORD"
              onChange={value => this.setState({ password: value })}
              value={password}
              valid
              returnKeyType="go"
              keyboardType="email-address"
              blurOnSubmit={false}
            />
            <View style={{ flexDirection: 'row', height: 30, marginBottom: 30, }}>
              <View style={{ width: 30, height: 30, backgroundColor: 'white',}}>
                <Image source={require('../assets/images/icon_checkmark.png')} style={{ width: 25, marginLeft: 2.5, }} resizeMode='contain'/>
              </View>
              <Text style={{ fontFamily: fonts.sansRegular, fontSize: 15, color: 'white', marginLeft: 10, marginTop: 5}}>REMEMBER ME</Text>
            </View>
            <Button
              propsLoading={isLoading}
              text="LOGIN NOW"
              buttonColor={colors.green}
              onPress={() => this.attemptLogin()}
            />
          </SafeAreaView>
        </ImageBackground>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: responsiveSize(15),
  },
});
