import React, {useState, useEffect} from 'react'
import {View, Text,StyleSheet, Image,TouchableOpacity, Alert} from 'react-native'
import Torch from 'react-native-torch';
import RnShake from 'react-native-shake'



const App = ()=>{
  let [toggle,setToggle] = useState(false);

  const changeToggle = ()=>{setToggle((toggle)=>{
    return !toggle;
  })}

  useEffect(()=>{
    Torch.switchState(toggle)
  },[toggle])

  useEffect(()=>{
    const subscription = RnShake.addListener(()=>{
      setToggle(toggle => !toggle)
    })
  },[])
  
  
  return(
  <View style={toggle? style.containerLight : style.container}>
    <TouchableOpacity onPress={changeToggle}>
    <Image style={toggle? style.lightningOn : style.lightningOff}
    source={toggle? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')} />
    <Image style={style.diologo}
    source={toggle? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')} />
    </TouchableOpacity>
  </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center'
  },
    containerLight:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
    },
    lightningOn:{
    resizeMode:'contain',
    alignSelf:'center',
    width:200,
    height:200
  },
    lightningOff:{
    tintColor:'white',
    resizeMode:'contain',
    alignSelf:'center',
    width:200,
    height:200
  },
    diologo:{
    resizeMode:'contain',
    alignSelf:'center',
    width:200,
    height:200
    }
})

export default App