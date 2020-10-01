import React, {Component} from 'react';
import {View, Image, StyleSheet, Animated } from 'react-native';

let slide1 = document.getElementById("slide1");

function fade1(){
  slide1.style.display = "none";
}
  state
  {
    fadeAmin: new Animated.Value(1)
  }

  componentDidMount()
  {
    Animated.timing(
      this.state.fadeAmin,
      {
        toValue:0,
        duration:2000,
      }
    ).start();
  }

  Render()
  {
    let{fadeAmin}=this.state
    return(
      <View>
        <Animated.View>
           <img  src="photos/whiteandblackkitchentabletvhouse.jpg" alt="whiteandblackkitchentabletvhouse"/>
        </Animated.View>
      </View>
    );
  }
