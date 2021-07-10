import * as React from 'react';
import {
  View,
  Text,
  SafeAreaProvider,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';

export default class Main extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <Header
          centerComponent={<Text style={styles.headerText}>Main Screen</Text>}
          backgroundColor={'#000'}
        />
        <ScrollView>
          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Screen1Screen')}}>
         <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGN2T7lIjFoAAuRd-YCIzAvUHKVd_hxYWfw&usqp=CAU'}} style={{height:160,width:'90%'}}/>
         <Text style={[styles.headerText,{fontSize:20}]}>ABC</Text>
          </TouchableOpacity>
         

          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Screen2Screen')}}>
         <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-2sSzftyxmEolDzeA-IGcXGazeTXQrEqgw&usqp=CAU'}} style={{height:140,width:'90%'}}/>
         <Text style={[styles.headerText,{fontSize:20}]}>DEF</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Screen3Screen')}}>
          <Image source={{uri:'https://c4.wallpaperflare.com/wallpaper/278/186/533/nature-abstract-hd-wallpaper-preview.jpg'}} style={{height:160,width:'90%'}}/>
          <Text style={[styles.headerText,{fontSize:20}]}>GHI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('ProfileScreen')}}>
            <Image source={{uri:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}} style={{height:160,width:'90%'}}/>
            <Text style={[styles.headerText,{fontSize:20}]}>Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    width: '90%',
    height: 190,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#6B0EA4',
    backgroundColor: '#000',
    shadowColor: '#000',
    marginBottom: 10,
    borderWidth: 3,
  },
});
