import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, TouchableOpacity, View, Image, Alert, ActivityIndicator, Platform} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FoodItems from './FoodItems';

export default class FoodList extends Component {
constructor(props)
  {
    super(props);
    this.state = { 
    isLoading: true
  }
  }

componentDidMount() {

       return fetch('https://api.misiki.in/api/dishes')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }
         })
         .catch((error) => {
           console.error(error);
         });
     }

FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }


render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    

}

render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (

<View style={styles.MainContainer}>
  
       <FlatList
       
          data={ this.state.dataSource }
          
          ItemSeparatorComponent = {this.FlatListItemSeparator}

          renderItem={({item}) => <TouchableOpacity style = {styles.listItem} onPress={() => this.props.navigation.navigate(`FoodItems`,{itemId: item.uid})}> 
              <Image style={styles.image1} source={{url: item.img}}/>
                <View style={styles.body}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.rate}</Text>
                <Text style={styles.desciption}>{item.q}</Text>
            <Text style={styles.desciption}>{item.type}</Text>
                 </View>
          
           </TouchableOpacity>}

          keyExtractor={(item, index) => index}
          
         />
    
    
</View>
            
    );
  }
}

const AppStackNavigator = createStackNavigator({
  FoodList: {screen: FoodList},
  FoodItems : { screen: FoodItems },
 
  
});

const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,

},

FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  body: {
    //justifyContent: "space-around",
    //alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    
},
image1:{
    height: 80,
    width: 80,
},
name:{
    fontSize: 20,
    fontWeight: 'bold',
},
description:{
    fontSize: 16,
    opacity: 0.5,
},
price: {
    fontSize: 18,
    flexDirection: 'row', 

},
listItem: {
   // borderWidth: 2,
    //borderColor: 'red',
    flexDirection: 'row',
    margin: 10,
   padding: 5,
    position: 'relative',
   
}

});

