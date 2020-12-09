import React, {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, SectionList, Button, StatusBar} from 'react-native';
import logo from './assets/LaJollaCucumbers.jpg';
import wee from './assets/wee.jpg';
import coutts from './assets/Coutts.png';
import lamar from './assets/lamar.png';
import duy from './assets/duy.jpg';
import brian from './assets/Brian_Bloom.png';
import xander from './assets/xander.jpg';
import Constants from 'expo-constants';
import {createAppContainer, createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import About from './About';



const PLAYERS = [
  {
    title: 'Meet the Cucumbers',
    data: [coutts, xander, duy, lamar, brian, wee]
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
  const names = ['coutts', 'xander', 'duy', 'lamar', 'brian', 'wee']

  const [visibleStatusBar, setVisibleStatusBar] = useState(true);
  const [styleStatusBar, setStyleStatusBar] = useState(names[0]);

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  const changeStyleStatusBar = () => {
    const styleId = names.indexOf(styleStatusBar) + 1;

    if (styleId === names.length) {
      return setStyleStatusBar(names[0]);
    }
    return setStyleStatusBar(names[styleId]);
  };

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
    
      <Text style={styles.header}> La Jolla Cucumbers</Text>
      
      <SectionList
      sections={PLAYERS} 
      renderItem={({item, index}) =>
        <View style={styles.item}>
     <TouchableOpacity onPress={() => PressedCucumber(item)} >
    <Image style={styles.wee} source={item}/>
    <Text style={styles.instructions}>{names[index]}</Text>
    </TouchableOpacity>
  </View>
      } 
      /*renderSectionHeader={({section}) => (
        <Text style={styles.header}>
          {section.title}
        </Text>
      )} */
      />
       
    </SafeAreaView>
  );
}


export default function App(){

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    backgroundImage:`url(${logo})` 
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  pictures: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
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
  button: {
    backgroundColor: "blue",
    padding: 20,	  
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 20, 
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "Contain"
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#f9c2ff',
    paddingLeft: 250,
    paddingRight: 250,
  },
  title: {
    fontSize: 24,
  },
	
});
