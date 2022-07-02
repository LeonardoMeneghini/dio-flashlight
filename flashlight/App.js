/**
  */
import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () =>{
  const toogle = true; //false
  //if toogle return light
  return <View style={toggle ? style.containerLight} />;
};

 export default App;

 const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    akubgItems: 'center',
    justifyContent: 'center',
  },
  containerLight:{
   flex: 1,
   backgroundColor: 'white',
   alignItems: 'center',
   justifyContent: 'center',
  },
});