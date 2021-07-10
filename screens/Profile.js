import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert} from 'react-native';
import {Header} from 'react-native-elements';
//import db from '../config'
//import firebase from 'firebase'

export default class Profile extends Component{
  constructor(){
    super();
    this.state={
      emailId   : '',
      firstName : '',
      lastName  : '',
      address   : '',
      contact   : '',
      docId     : ''
    }
  }

  getUserDetails=()=>{
   /* var email = firebase.auth().currentUser.email;
    db.collection('users').where('email_id','==',email).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
      var data = doc.data()
        this.setState({
          emailId   : data.email_id,
          firstName : data.first_name,
          lastName  : data.last_name,
          address   : data.address,
          contact   : data.contact,
          docId     : doc.id
        })
      });
    })*/
  }

  updateUserDetails=()=>{
   /* db.collection('users').doc(this.state.docId)
    .update({
      "first_name": this.state.firstName,
      "last_name" : this.state.lastName,
      "address"   : this.state.address,
      "contact"   : this.state.contact,
    })

    Alert.alert("Profile Updated Successfully")
*/
  }

  componentDidMount(){
    this.getUserDetails()
  }


  render(){
    return(
      <View style={styles.container} >
        <Header
          leftComponent={
            <TouchableOpacity
              style={{ width: 40, height: 40 }}
              onPress={() => {this.props.navigation.navigate('MainScreen')}}>
              <Image
                source={require('../assets/back.png')}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          }
          centerComponent={<Text style={{fontSize:30,fontWeigth:'bold',color:'#fff'}}> Profile</Text>}
          backgroundColor={'#000'}
        />
        
            <TextInput
              style={styles.formTextInput}
              placeholder ={"First Name"}
              placeholderTextColor={'grey'}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  firstName: text
                })
              }}
              value ={this.state.firstName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Last Name"}
              placeholderTextColor={'grey'}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  lastName: text
                })
              }}
                value ={this.state.lastName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Contact"}
              placeholderTextColor={'grey'}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  contact: text
                })
              }}
                value ={this.state.contact}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Address"}
              placeholderTextColor={'grey'}
              multiline = {true}
              onChangeText={(text)=>{
                this.setState({
                  address: text
                })
              }}
                value ={this.state.address}
            />
            <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.updateUserDetails()
              }}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        
         <Image source={require('../assets/logo.png')} 
        style={{marginTop:40,alignSelf:'center'}}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems: 'center',
    backgroundColor:'#000',
   
  },
 
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#6B0EA4',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
    color:'#fff',
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#6B0EA4",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
  },
  buttonText:{
    fontSize:25,
    fontWeight:"bold",
    color:"#fff"
  }
})
