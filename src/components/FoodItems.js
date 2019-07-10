import React , { Component } from 'react' ;
import {Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const SCREEN_WIDTH = Dimensions.get('window').width;

export default class FoodItems extends Component {
    
 

    render() {
        
        // const { navigation } = this.props;
        // const itemId = navigation.getParam('itemId', 'NO-ID'); //here NO-ID is the default value for itemId 
        
    
        return (
          
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <View style={{ justifyContent: 'flex-start',top:100,flex: 0.5, backgroundColor: 'red' }} />
                                       
          </View>
        );
            }

            constructor(props)
            {
              super(props);
              this.state = { isLoading: true, search: '' };
              this.arrayholder = [];
              
            }
          
          componentDidMount() {
            const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
            console.log(itemId);
                 return fetch(`https://www.misiki.in/api/foods/${itemId}`)
                   .then((response) => response.json())
                   .then((responseJson) => {
                     console.log(responseJson)
                     this.setState({
                       isLoading: false,
                       dataSource: responseJson,
                       
                     }, function() {
                      this.arrayholder = responseJson;
                      
                     });
                   })
                   .catch((error) => {
                     console.error(error);
                   });
               }

    }
  
    const AppStackNavigator = createStackNavigator({
        
        FoodItems: { screen: FoodItems}
      },
     );
    
      

const styles = StyleSheet.create({
    
});

