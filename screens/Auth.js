import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,ImageBackground
} from 'react-native';

export default class Auth extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      confirmPassword: '',
      isModalVisible: 'false',
    };
  }

  userSignUp = (emailId, password, confirmPassword) => {
    /* if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection('users').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            email_id: this.state.emailId,
            address: this.state.address,
            IsBookRequestActive: false,
          });
          return Alert.alert('User Added Successfully', '', [
            {
              text: 'OK',
              onPress: () => this.setState({ isModalVisible: false }),
            },
          ]);
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }*/
  };

  userLogin = (emailId, password) => {
    /* firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate('DonateBooks');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });*/
  };

  showModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isModalVisible}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.signupView}>
            <Text style={styles.signupText}> SIGN UP </Text>
          </View>
          <View style={{ flex: 0.95 }}>
            <Text style={styles.label}>First Name </Text>
            <TextInput
              style={styles.formInput}
              placeholder={'First Name'}
              maxLength={12}
              onChangeText={(text) => {
                this.setState({
                  firstName: text,
                });
              }}
            />

            <Text style={styles.label}>Last Name </Text>
            <TextInput
              style={styles.formInput}
              placeholder={'Last Name'}
              maxLength={12}
              onChangeText={(text) => {
                this.setState({
                  lastName: text,
                });
              }}
            />

            <Text style={styles.label}>Contact </Text>
            <TextInput
              style={styles.formInput}
              placeholder={'Contact'}
              maxLength={10}
              keyboardType={'numeric'}
              onChangeText={(text) => {
                this.setState({
                  contact: text,
                });
              }}
            />

            <Text style={styles.label}> Address </Text>
            <TextInput
              style={styles.formInput}
              placeholder={'Address'}
              multiline={true}
              onChangeText={(text) => {
                this.setState({
                  address: text,
                });
              }}
            />

            <Text style={styles.label}>Email </Text>
            <TextInput
              style={styles.formInput}
              placeholder={'Email'}
              keyboardType={'email-address'}
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />

            <Text style={styles.label}> Password </Text>
            <TextInput
              style={styles.formInput}
              placeholder={'Password'}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.formInput}
              placeholder={'Confrim Password'}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  confirmPassword: text,
                });
              }}
            />
          </View>

          <View style={{ flex: 0.2, alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() =>
                this.userSignUp(
                  this.state.emailId,
                  this.state.password,
                  this.state.confirmPassword
                )
              }>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <Text
              style={styles.cancelButtonText}
              onPress={() => {
                this.setState({ isModalVisible: false });
              }}>
              Cancel
            </Text>
          </View>
        </ScrollView>
      </Modal>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.showModal()}
         <ImageBackground
          source={{
            uri:
              'https://i.pinimg.com/originals/c1/46/12/c146125491d5a1deab795a3d463c7863.png',
          }}
          style={{ width: '100%', height: '100%' }}>

        <View style={{ flex: 0.25 }}></View>
        <Image source={require('../assets/logo.png')} 
        style={{marginBottom:50,alignSelf:'center'}}
        />
        <View style={{ flex: 0.45 }}>
        
          <View style={styles.TextInput}>
            <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              placeholderTextColor="gray"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />
            <TextInput
              style={[styles.loginBox, { marginTop: 15 }]}
              secureTextEntry={true}
              placeholder="Enter Password"
              placeholderTextColor="gray"
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
          </View>
          <View style={{ flex: 0.5, alignItems: 'center' }}>
            <TouchableOpacity
              style={[styles.button, { marginTop: 30 }]}
              onPress={() => {
                /* Uncomment This line to enable user Login with firebase
                this.userLogin(this.state.emailId, this.state.password);*/
                this.props.navigation.navigate('MainScreen')
              }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({ isModalVisible: true })}>
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
            
          </View>
         
        </View>
        
        <View style={{ flex: 0.3 }}></View>
        <Text style={{color:'#fff',alignSelf:'center'}}>A SOPERDEV Creation</Text>
         </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loginBox: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#ffffff',
    fontSize: 20,
    paddingLeft: 10,
  },
  button: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#6B0EA4',
    backgroundColor: '#000',
    shadowColor: '#000',
    marginBottom: 10,
    borderWidth: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  label: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 10,
    marginLeft: 20,
  },
  formInput: {
    width: '90%',
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#6B0EA4',
    paddingBottom: 10,
    marginLeft: 20,
    marginBottom: 14,
    color:'#fff',
  },
  registerButton: {
    width: '75%',
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: '#000',
    borderWidth:3,
    borderColor:'#6B0EA4',
  },
  registerButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  cancelButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6B0EA4',
    marginTop: 10,
  },
  scrollview: {
    flex: 1,
    backgroundColor: '#000',
  },
  signupView: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000'
  },
  signupText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  santaView: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  santaImage: {
    width: '70%',
    height: '100%',
    resizeMode: 'stretch',
  },
  TextInput: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookImage: {
    width: '100%',
    height: 220,
  },
});
