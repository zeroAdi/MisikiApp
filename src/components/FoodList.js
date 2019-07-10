import React, { Component } from 'react';
import {  StyleSheet, FlatList, Text, TouchableOpacity, View, Image,  ActivityIndicator, Platform, } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import FoodItems from './FoodItems';

class FoodList extends Component {
constructor(props)
  {
    super(props);
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }

componentDidMount() {

       return fetch('https://api.misiki.in/api/dishes')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
            this.arrayholder = responseJson;
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }

ListItemSeparator = () => {
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
  
  
  // search = text => {
  //   console.log(text);
  // };
  // clear = () => {
  //   this.search.clear();
  // };
  // SearchFilterFunction(text) {
    
  //   const newData = this.arrayholder.filter(function(item) {
      
  //     const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
  //     const textData = text.toUpperCase();
  //     return itemData.indexOf(textData) > -1;
  //   });
  //   this.setState({
  //     dataSource: newData,
  //     search:text,
  //   });
  // }

  
  
  // /*renderHeader = () => {
  //   return <SearchBar
  //   round
  //   searchIcon={{ size: 24 }}
  //   onChangeText={text => this.SearchFilterFunction(text)}
  //   onClear={text => this.SearchFilterFunction('')}
  //   placeholder="Type Here..."
  //   containerStyle={{ backgroundColor: 'gray', width: '100%'}}
  //   inputContainerStyle={{ backgroundColor: 'white', }}
  //   value={this.state.search}
  //   />;
  // }*/

render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: "50%"}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    
    return (

<View style={styles.MainContainer}>
  
       <FlatList
       
          data={ this.state.dataSource }
          
         // ItemSeparatorComponent = {this.ListItemSeparator}
         //ListHeaderComponent={this.renderHeader}

          renderItem={({item}) => <TouchableOpacity style = {styles.listItem} onPress={() => this.props.navigation.navigate(`FoodItems`,{itemId: item._id})}> 
              <Image style={styles.image1} source={{uri: item.img}}/>
                <View style={styles.body}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.rate}</Text>
                <Text style={styles.desciption}>{item.q}</Text>
            <Text style={styles.description}>{item.type}</Text>
                 </View>
          
           </TouchableOpacity>}

          keyExtractor={(item, index) => index}
          
         />
    
    
</View>
            
    );
  }
}
class NonVegFoodList extends Component{
  constructor(props)
  {
    super(props);
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }

componentDidMount() {

       return fetch(`https://www.misiki.in/api/foods/group?daily=false&type=N`)
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
            this.arrayholder = responseJson;
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }

ListItemSeparator = () => {
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
  
  
  // search = text => {
  //   console.log(text);
  // };
  // clear = () => {
  //   this.search.clear();
  // };
  // SearchFilterFunction(text) {
    
  //   const newData = this.arrayholder.filter(function(item) {
      
  //     const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
  //     const textData = text.toUpperCase();
  //     return itemData.indexOf(textData) > -1;
  //   });
  //   this.setState({
  //     dataSource: newData,
  //     search:text,
  //   });
  // }

  
  
  // renderHeader = () => {
  //   return <SearchBar
  //   round
  //   searchIcon={{ size: 24 }}
  //   onChangeText={text => this.SearchFilterFunction(text)}
  //   onClear={text => this.SearchFilterFunction('')}
  //   placeholder="Type Here..."
  //   containerStyle={{ backgroundColor: 'gray', width: '100%'}}
  //   inputContainerStyle={{ backgroundColor: 'white', }}
  //   value={this.state.search}
  //   />;
  // }

render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: "50%"}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    
    return (

<View style={styles.MainContainer}>
  
       <FlatList
       
          data={ this.state.dataSource }
          
         // ItemSeparatorComponent = {this.ListItemSeparator}
         // ListHeaderComponent={this.renderHeader}

          renderItem={({item}) => <TouchableOpacity style = {styles.listItem} onPress={() => this.props.navigation.navigate(`FoodItems`,{itemId: item._id})}> 
              <Image style={styles.image1} source={{uri: item.img}}/>
                <View style={styles.body}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.rate}</Text>
                <Text style={styles.desciption}>{item.restaurant}</Text>
                <Text style={styles.description}>{item.type}</Text>
                 </View>
          
           </TouchableOpacity>}

          keyExtractor={(item, index) => index}
          
         />
    
    
</View>
            
    );
  }
}

class VegFoodList extends Component{
  constructor(props)
  {
    super(props);
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }

componentDidMount() {

       return fetch(`https://www.misiki.in/api/foods/group?daily=false&type=V`)
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
            this.arrayholder = responseJson;
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }

ListItemSeparator = () => {
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
  
  
  // search = text => {
  //   console.log(text);
  // };
  // clear = () => {
  //   this.search.clear();
  // };
  // SearchFilterFunction(text) {
    
  //   const newData = this.arrayholder.filter(function(item) {
      
  //     const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
  //     const textData = text.toUpperCase();
  //     return itemData.indexOf(textData) > -1;
  //   });
  //   this.setState({
  //     dataSource: newData,
  //     search:text,
  //   });
  // }

  
  
  // renderHeader = () => {
  //   return <SearchBar
  //   round
  //   searchIcon={{ size: 24 }}
  //   onChangeText={text => this.SearchFilterFunction(text)}
  //   onClear={text => this.SearchFilterFunction('')}
  //   placeholder="Type Here..."
  //   containerStyle={{ backgroundColor: 'gray', width: '100%'}}
  //   inputContainerStyle={{ backgroundColor: 'white', }}
  //   value={this.state.search}
  //   />;
  // }

render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: "50%"}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    
    return (

<View style={styles.MainContainer}>
  
       <FlatList
       
          data={ this.state.dataSource }
          
         // ItemSeparatorComponent = {this.ListItemSeparator}
         //ListHeaderComponent={this.renderHeader}

          renderItem={({item}) => <TouchableOpacity style = {styles.listItem} onPress={() => this.props.navigation.navigate(`FoodItems`,{itemId: item._id})}> 
              <Image style={styles.image1} source={{uri: item.img}}/>
                <View style={styles.body}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.rate}</Text>
                <Text style={styles.desciption}>{item.restaurant}</Text>
            <Text style={styles.description}>{item.type}</Text>
                 </View>
          
           </TouchableOpacity>}

          keyExtractor={(item, index) => index}
          
         />
    
    
</View>
            
    );
  }
}

const TabNavigator= createMaterialTopTabNavigator({
  All: {screen: FoodList},
  NonVeg: {screen: NonVegFoodList},
  Veg: {screen: VegFoodList},
});

export default createAppContainer(TabNavigator);

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
    height: 100,
    width: '25%',
    borderRadius: 7,
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

