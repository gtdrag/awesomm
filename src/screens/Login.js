
import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ImageBackground, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import store from 'react-native-simple-store';
import colors from '../theme/Colors';
import { Button, FloatingLabelInput, } from '../components';
import { responsiveSize } from '../utils/dimensions';
import API from '../services/API';
import fonts from '../theme/fonts';



const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      username: '19999 ',
      password: '19991',
      deviceToken: '',
      rememberMe: false,
    };
  }

  attemptLogin = () => {
    const { username, password, deviceToken, rememberMe } = this.state;
    this.setState({ isLoading: true });
    API.login(username, password, deviceToken).then(response => {
      if (response.message === 'success') {
        store.update('user', { isLoggedIn: true, guideId: response.payload, rememberMe }).then(() => {
          this.setState({ isLoading: false });
          this.props.navigation.replace('Drawer');
        });
      } else if (response.message === 'failed') {
        this.setState({ isLoading: false });
      }
    });
  };

  render() {
    const { isLoading, username, password, rememberMe } = this.state;
    return (
        <ImageBackground
          source={require('../assets/images/bg_login_blur.jpg')}
          style={{ width: '100%', height: '100%' }}>
        <SafeAreaView style={{alignItems: 'center', height: '100%', flexDirection: 'column',}}>
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
            <TouchableOpacity onPress={() => this.setState({ rememberMe: !rememberMe })} style={{ flexDirection: 'row', height: 30, marginBottom: 30, }}>
              <View style={{ width: 30, height: 30, backgroundColor: 'white',}}>
              { rememberMe &&
                <Image source={require('../assets/images/icon_checkmark.png')} style={{ width: 25, marginLeft: 2.5, }} resizeMode='contain'/>
              }
              </View>
              <Text style={{ fontFamily: fonts.sansRegular, fontSize: 15, color: 'white', marginLeft: 10, marginTop: 5}}>REMEMBER ME</Text>
            </TouchableOpacity>
            <Button
              propsLoading={isLoading}
              text="LOGIN NOW"
              buttonColor={colors.green}
              onPress={() => this.attemptLogin()}
            />
            <Text style={{ color: colors.yellow, marginTop: 50, textDecorationLine: 'underline'}}>FORGOT WINE GUIDE ID OR PASSWORD?</Text>
            <Text style={{ color: 'white', marginTop: 30, textDecorationLine: 'underline', flexGrow: 1}}>SKIP LOGIN</Text>
            <Text style={{ color: 'white', }}>© 2019 TRAVELING VINEYARD</Text>
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
