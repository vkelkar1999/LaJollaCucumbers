import React from 'react';
import {erc, rimac} from './index'
import { ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, SectionList, Button, StatusBar} from 'react-native';
import Constants from 'expo-constants';
import { setStatusBarHidden } from 'expo-status-bar';
import words from './Words';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'

const seasonButtons = [
  {
    title: 'Click a Season',
    data: ['2020', '2019', '2018']
  },
];

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Text style={styles.instructions}> Hello World</Text>
  );
};

function Seasons({navigation}) {
 /* onButtonClickHandler = (item) => {
    this.setState({showMessage: item});
  };
  state ={
    showMessage: true
  }; */

  const PressedCucumber = async (item) => {
    switch(item) {
    case '2020':
      this.onButtonClickHandler(words('2020'));
      break;
    case '2019':
      this.onButtonClickHandler(words('2019'));
      break;
    case '2018':
      this.onButtonClickHandler(words('2018'));
      break;
    }
    return;
  };
      //const likedStyles = this.state.showMessage ? null : null;
      
        return (
        <ImageBackground source={rimac} style={styles.backGroundImage}>
        <View style={styles.container}>
        <Text style={styles.instructions}> Check how we did each year!</Text>
          <SectionList 
          horizontal
          sections={seasonButtons} 
          renderItem={({item, index}) =>
        <Button style={styles.instructions} title={item} onPress={() => navigation.navigate('Details')}/>
          }
          />
         <View style={[styles.instructions, /*likedStyles*/]}> Temp</View>
        </View>
      </ImageBackground>
    )
  
}

function tempSeason() {
  return (
    <Stack.Navigator headerMode='none' initalRouteName="Season">
      <Stack.Screen
      name="Season"
      component={Seasons}
      />
     <Stack.Screen
      name="Details"
      component={HomeScreen}
      />
    </Stack.Navigator>
  )
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
  export default tempSeason;