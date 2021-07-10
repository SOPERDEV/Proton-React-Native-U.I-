import * as React from 'react';
import {View,Text,StyleSheet,ImageBackground,Image,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class Screen2 extends React.Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#000'}}>
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
          centerComponent={<Text style={styles.headerText}> DEF</Text>}
          backgroundColor={'#000'}
        />
        <ImageBackground source={{uri:'https://www.backgroundscool.com/wp-content/uploads/2019/06/14fb8df8c0c2ee7f52ebd0225611607d.jpg'}} style={{width:'100%',height:'100%'}}>
         <Text style={{fontSize:20,textAlign:'center',marginTop:50,color:'#fff'}}>Your app data will go up here</Text>
         </ImageBackground>
      </View>
     
    )
  }
}
const styles = StyleSheet.create({
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})