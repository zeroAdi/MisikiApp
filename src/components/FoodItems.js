import React , { Component } from 'react' ;
import {Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import faker from 'faker';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class FoodItems extends Component {
    
    render() {
        
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID'); //here NO-ID is the default value for itemId 
        
    
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
                       
          </View>
        );
            }

    }
  
    const AppStackNavigator = createStackNavigator({
        
        FoodItems: { screen: FoodItems}
      },
     );
    
      

const styles = StyleSheet.create({
    
});

