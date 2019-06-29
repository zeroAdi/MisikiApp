
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
         
          <View onPress={this.handlePress} 
              style={styles.button}>
              <Icon
                name='shopping-cart'
                size={20}
                color='#3b5998'
                style={{height:25,width:25}}/>
                <View>
                <Text style={styles.button}>Food Order</Text>
                <Text>Misiki Food Delivery</Text>
                </View>
                </View>
        </TouchableOpacity>
      </View>
    );
  }
  
  handlePress = () => {
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
   
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  },
  container: {
    alignItems: 'flex-start',
    position: 'absolute',
    top: 100,
    left: 15
  },
});