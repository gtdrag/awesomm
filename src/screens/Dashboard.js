/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import store from 'react-native-simple-store';
import colors from '../theme/Colors';
import { responsiveSize } from '../utils/dimensions';
import { Button } from '../components';
// eslint-disable-next-line import/no-cycle


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.principal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentsContainer: {
    paddingHorizontal: responsiveSize(50),
    marginBottom: responsiveSize(10),
  },
  buttonSignIn: {
    borderColor: colors.white,
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderRadius: 5,
    width: '100%',
  },
  buttonSignUp: {
    backgroundColor: colors.white,
    width: '100%',
    borderRadius: 5,
  },
  logoContainer: {
    padding: responsiveSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
  },
  imageContainer: {
    padding: responsiveSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: responsiveSize(220),
    height: responsiveSize(155),
    borderRadius: 13,
  },
});

class Dashboard extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  componentDidMount() {
    store.get('user').then(result => {
      alert(JSON.stringify(result));
    });
  }

  render() {
    const { componentId } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Button text="Go back" onPress={() => goBack(componentId)} />
      </SafeAreaView>
    );
  }
}

export default Dashboard;
