import React from 'react';
import {erc, rimac} from './index'
import { ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, SectionList, Button, StatusBar} from 'react-native';
import Constants from 'expo-constants';
import { setStatusBarHidden } from 'expo-status-bar';

const seasonButtons = [
  {
    title: 'Click a Season',
    data: ['2020', '2019', '2018']
  },
];

class Seasons extends React.Component {
  onButtonClickHandler = (item) => {
    this.setState({showMessage: item});
  };
  state ={
    showMessage: true
  };

  PressedCucumber = async (item) => {
    switch(item) {
    case '2020':
      this.onButtonClickHandler('2-3');
      break;
    case '2019':
      this.onButtonClickHandler('3-2');
      break;
    case '2018':
      this.onButtonClickHandler('5-0');
      break;
    }
    return;
  };


    render() {

      //const likedStyles = this.state.showMessage ? null : null;
      
        return (
        <ImageBackground source={rimac} style={styles.backGroundImage}>
        <View style={styles.container}>
        <Text style={styles.instructions}> Check how we did each year!</Text>
          <SectionList 
          horizontal
          sections={seasonButtons} 
          renderItem={({item, index}) =>
        <Button style={styles.instructions} title={item} onPress={() => this.PressedCucumber(item)}/>
          }
          />
         <Text style={[styles.instructions, /*likedStyles*/]}> {this.state.showMessage}</Text>
        </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      //flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: Constants.statusBarHeight,
      width: '100%',
      alignSelf:'stretch'
    },
    backGroundImage: {
        flex: 1,
        resizeMode: 'cover',
        //justifyContent: 'center',
       // alignItems: 'center',
    },
    
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    instructions: {
        fontSize: 32,
        backgroundColor: '#d478c6',
    },
    liked: {
      fontSize: 24,
  },
    item: {
      backgroundColor: '#d478c6',
      padding: 5,
      marginVertical: 1,
    },
  });
export default Seasons;