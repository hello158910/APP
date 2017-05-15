import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage,Text,Image } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Facebook } from 'expo';

import Confirm from '../components/Confirm';
import Spinner from '../components/Spinner';

// Make a component
class LoginScreen extends Component {
  state = {
    email: null,
    password: null,
    error: ' ',
    loading: false,
    showModal: false,
    showSpinner: false,
    token: null,
    status: 'Not Login...'
  };

  facebookLogin = async () => {
    console.log('Testing token....');
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      console.log('Already having a token...');
      this.setState({ token });

      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      this.setState({ status: `Hello ${(await response.json()).name}` });
      console.log(response);

    } else {
      console.log('DO NOT having a token...');
      this.doFacebookLogin();
    }
  };

  doFacebookLogin = async () => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '1919862971594225',
      {
        permissions: ['public_profile'],
        behavior: 'web'
      });

    if (type === 'cancel') {
      console.log('Login Fail!!');
      return;
    }

    await AsyncStorage.setItem('fb_token', token);
    this.setState({ token });
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    this.setState({ status: `Hello ${(await response.json()).name}` });
    console.log(response);
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    try {
      await firebase.auth().signInWithCredential(credential);
      const { currentUser } = await firebase.auth();
      console.log(`currentUser = ${currentUser.uid}`);
      this.props.navigation.navigate('UserStack');
    } catch (err) {

    }
  };

  onSignIn = async () => {
    const { email, password } = this.state;
    this.setState({ error: ' ', loading: true });
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.navigation.navigate('UserStack');
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  }

  onCreateUser = async () => {
    const { email, password } = this.state;
    try {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
      showModal: false,
      showSpinner: true
    });

      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const { currentUser } = firebase.auth();
      let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
      await dbUserid.set({ email: "", phone: "", username: "", city: "", gender: "" });
      this.setState({ showSpinner: false });
      this.props.navigation.navigate('UserStack');
    } catch (err) {
      this.setState({
        email: '',
        password: '',
        error: err.message,
        loading: false,
        showModal: false
      });
    }
  }

  onCLoseModal = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
      showModal: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' style={{ marginTop: 30 }} />;
    }

    return (
      <Button
        title='Sign in'
        backgroundColor='#4AAF4C'
        onPress={this.onSignIn}
      />
    );
  }
  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
  }''

  setNewUser=()=>{
    this.props.navigation.navigate('SignUpScreen');
  }

  render() {
    return (
      <View >
        <Image style={styles.pic} source={require('../components/login.jpg')} />
        <View style={styles.formStyle}>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder='user@email.com'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          {this.renderButton()}
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
        </View>
        <View style={styles.formStyle}>
          <Button
            title='Sign in with Facebook'
            backgroundColor='#39579A'
            onPress={this.facebookLogin}
          />
        </View>
        <View>
          <Text
          style={styles.textStyle} 
          onPress={this.setNewUser}>
           New User?
          </Text>
        </View>
        <Confirm
          title='Are you sure to create a new user?'
          visible={this.state.showModal}
          onAccept={this.onCreateUser}
          onDecline={this.onCLoseModal}
        />
        <Spinner
          visible={this.state.showSpinner}
        />
      </View>
    );
  }
}

const styles = {
  formStyle: {
    marginTop: 50,
    },
  pic:{
    height:100,
    width:100,
    marginTop:80,
    marginLeft:'36%'
  },
  textStyle:{
    textDecorationLine:'underline',
    alignSelf:'center',
    marginTop:10
  }
};

export default LoginScreen;