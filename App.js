import React, {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, SectionList, Button, StatusBar} from 'react-native';
import {coutts, xander, duy, lamar, brian, wee, logo} from './index';
import {createAppContainer, createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import About from './About';
import Seasons from './Seasons';
import Constants from 'expo-constants';



const PLAYERS1 = [
  {
    title: 'Meet the Cucumbers',
    data: [coutts, xander, duy]
  },
 
];
const PLAYERS2 = [
  {
    title: 'Meet the Cucumbers',
    data: [lamar, brian, wee]
  },
 
];
/*
<View> 
        <Text style={styles.textStyle}>StatusBar Style: {styleStatusBar}</Text>
        <Text style={styles.textStyle}>
          StatusBar Visibility: {!visibleStatusBar ? 'Visible' : 'Hidden'}
        </Text>
      </View>
      <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
      <View>
        <StatusBar hidden={visibleStatusBar} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Toggle StatusBar" onPress={() => changeVisibilityStatusBar()} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Change StatusBar Style" onPress={() => changeStyleStatusBar()} />
      </View>
*/

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  const names1 = ['coutts', 'xander', 'duy']
  const names2 = ['lamar', 'brian', 'wee']

    const PressedCucumber = async (item) => {
      switch(item) {
      case coutts:
        alert(`Printed Coutts`);
        break;
      case xander:
        alert(`Printed Xander`);
        break;
      case duy:
        alert(`Printed Duy`);
        break;
      case lamar:
        alert(`Printed Lamar`);
        break;
      case brian:
        alert(`Printed Brian`);
        break;
      case wee:
        alert(`Printed Wee`);
        break;
      }
      return;
    };

  return (
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.title}> Welcome to THE La Jolla Cucumbers</Text>
      <View style={styles.banner}>
      <Text style={styles.header}> What an honor for you to be blessed by visiting our page. Learn about the 
      cucumbers and what makes us so legendary. Definetly keep track of what we are up to, you will
      not want to miss any of it.</Text>
      <View style={styles.item}>
      <Text style={styles.meet}> Meet the Cucumbers</Text>
      <SectionList 
      horizontal
      sections={PLAYERS1} 
      renderItem={({item, index}) =>
        <View style={styles.item}>
     <TouchableOpacity onPress={() => PressedCucumber(item)} >
    <Image style={styles.wee} source={item}/>
    <Text style={styles.instructions}>{names1[index]}</Text>
    </TouchableOpacity>
  </View>
      } 
      />
      <SectionList 
      horizontal
      sections={PLAYERS2} 
      renderItem={({item, index}) =>
        <View style={styles.item}>
     <TouchableOpacity onPress={() => PressedCucumber(item)} >
    <Image style={styles.wee} source={item}/>
    <Text style={styles.instructions}>{names2[index]}</Text>
    </TouchableOpacity>
  </View>
      } 
      />
       </View>
       </View>

       <Text style={styles.instructions}>Current Updates:</Text>
       <Text style={styles.instructions}>Season cancelled due to COVID-19</Text>
       <Text style={styles.instructions}>Watch us kill people at the park!</Text>
    </SafeAreaView>
  );
}


export default function App(){

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Seasons" component={Seasons} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: Constants.statusBarHeight,

  },
  
  logo: {
    width: 305,
    height: 250,
    marginBottom: 10,
  },
  wee: {
    width: 305,
    height: 250,
    marginBottom: 5,
  },	  	  
  instructions: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  meet: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#d478c6',
    padding: 5,
    marginVertical: 1,
  },
  header: {
    fontSize: 30,
    color: '#151816',
    textAlign: 'center',
    width: '75%',
    backgroundColor: '#fff'
  },
  banner: {
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    backgroundImage:`url(${logo})` 
  },
  title: {
    fontSize: 40,
    backgroundColor: '#11ac1e',
    color:'#fff',
    alignSelf:'stretch',
    textAlign: 'center',
  },
	
});
