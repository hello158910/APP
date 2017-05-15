import React, { Component } from 'react';
import { ScrollView, View, ActivityIndicator, AsyncStorage, Picker } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button, CheckBox,Icon  } from 'react-native-elements';
import { Facebook } from 'expo';
import Confirm from '../components/Confirm';

// Make a component
class SignUpScreen extends Component {
  state = {
    email: null,
    password: null,
    phone: null,
    username: null,
    city: null,
    birthday:null,
    gender:null,

    error: ' ',
    loading: false,
    showModal: false,
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
      '113143229250709',
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

  onSignUp = async () => {
    const { email, password } = this.state;
    this.setState({ error: ' ', loading: true });
    this.setState({ showModal: true });
    
  }

  onSaveInfo = async () => {
    const { currentUser } = firebase.auth();
    const { email, phone, username, city, gender, birthday } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    dbUserid.set({ email, phone, username, city, gender, birthday });
  }

  onCreateUser = async () => {
    const { email, password } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.onSaveInfo();
      this.setState({ showModal: false });
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

  goback=()=>{
    this.props.navigation.navigate('LoginScreen');
  }
  
  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <ScrollView style={styles.bg}>
        <View style={{marginTop:25}}>
          <Icon name='navigate-before' onPress={this.goback} color={'blue'} size={30} style={styles.icon}/>
        </View>
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
          <FormLabel>Phone</FormLabel>
            <FormInput
              autoCorrect={false}
              placeholder='555-555-5555'
              keyboardType='phone-pad'
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
            />
          <FormLabel>Birthday</FormLabel>
            <FormInput
              autoCorrect={false}
              placeholder='1900/01/01'
              value={this.state.birthday}
              onChangeText={birthday => this.setState({ birthday })}
            />
          <FormLabel>Gender</FormLabel>
          <FormInput
              autoCorrect={false}
              placeholder='Male/Female'
              value={this.state.gender}
              onChangeText={gender => this.setState({ gender })}
            />
          <Button
            title='Sign up'
            style={{marginTop:20}}
            backgroundColor='#4AAF4C'
            onPress={this.onSignUp}
            />
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
          <Button
            title='Sign up with Facebook'
            backgroundColor='#39579A'
            onPress={this.facebookLogin}
            style={{marginTop:50}}
          />
        </View>

        <Confirm
          title='Are you sure to create a new user?'
          visible={this.state.showModal}
          onAccept={this.onCreateUser}
          onDecline={this.onCLoseModal}
        />

      </ScrollView>
    );
  }
}

const styles = {
  bg:{
    flex:1,
    backgroundColor:'white',
  },
  formStyle: {
    marginTop: 40,
  },
  icon:{
    marginLeft:10
  }
};

export default SignUpScreen;