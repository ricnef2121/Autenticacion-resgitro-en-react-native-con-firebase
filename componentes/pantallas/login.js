import * as firebase from 'firebase';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {
  constructor(props) {
      super(props)
      this.state = {
          email: '',
          password: '',
          res: 'iyviyvhv',
          loading:false
      }
     
      
  }
  async signUp() {
      try {
          await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(()=>{
            this.setState.res
            //this.setState({res:'Cuenta creada'})

          })
          this.setState({
              res: 'Account Created!'
          })
         // setTimeout(() => {
           //   this.props.navigator.push({
            //      id: 'App'
            //  })
        //  }, 1500)
      } catch (error) {
          this.setState({
              res: error.toString()
          })
      }
  }

  login(){
    this.setState({error:'',loading:true});

    const{email,password}=this.state;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(() =>{
      //this.setState.email({error:'',loading:false})
      this.props.navigation.navigate('Dash')
    })
    .catch(()=>{
        this.setState({error:'A occurido un error mintras intenta iniciar sesion',loading:false});
    })
  }


  render() {
      return (
          <View style={styles.container}>
              <View >
                  <TextInput
                      placeholderTextColor="gray"
                      placeholder="Email"
                      
                     onChangeText={(email) => this.setState({ email })}
                     // onChangeText={(email) => {console.log(email);}}
                  />
                  <TextInput
                      placeholderTextColor="gray"
                      placeholder="Password"
                      password={true}
                      onChangeText={(password) => this.setState({ password })}
                  />
              </View>
              <TouchableHighlight
                  onPress={this.login.bind(this)}
                  style={[styles.btn2]}
              >
              <Text style={styles.btn2}>Login</Text>
              </TouchableHighlight>


              <TouchableHighlight
                  onPress={this.signUp.bind(this)}
                  style={[styles.btn2]}
              >
                  <Text
                      style={styles.btn2}
                  >Signup</Text>
              </TouchableHighlight>
          </View>
      )
  }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    btn2:{
		backgroundColor:'blue',
		padding:10,margin:10,width:'95%'
	},
  });


  const firebaseConfig = {
    apiKey: "AIzaSyBBoHb2e0N5ekLpbGl1D_Qsc4IG9uz5UQw",
    authDomain: "markeat-e955c.firebaseapp.com",
    databaseURL: "https://markeat-e955c.firebaseio.com",
    projectId: "markeat-e955c",
    storageBucket: "markeat-e955c.appspot.com",
    messagingSenderId: "716688092956"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig); 