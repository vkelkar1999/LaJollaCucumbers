import React from 'react';
import {erc, rimac} from './index'
import { ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, SectionList, Button, StatusBar} from 'react-native';
import Constants from 'expo-constants';

class About extends React.Component {
    render() {
        return (
      <View style={styles.container}>
    
        <Text style={styles.instructions}> Who are we?</Text>
        <Text style={styles.instructions}> 
        We are UC San Diego's most unique and advanced society in the 60 years of its existence.
        Consisting of individuals from ERC and Revelle college, each of us brings a distinctive basketball
        skill to the team. Now while we have competed in the Intramural tournament every year. we are more that
        just a basketball team. Founded in January 2018, every season the team has improved and grown in both skill 
        and as a brotherhood. 
        </Text>
        <Image style={styles.pictures} source={erc} />
        <Image style={styles.pictures} source={rimac} />
      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //marginTop: Constants.statusBarHeight,
    },
    backGroundImage: {
        flex: 1,
        resizeMode: 'center',
        //justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
      backgroundColor: 'pink',
    },
    pictures: {
        width: 305,
        height: 250,
        marginBottom: 10,
    },
    instructions: {
        fontSize: 32,
        backgroundColor: '#fff',
    }, 
  });
export default About;