import React, {Component} from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class AboutScreen extends Component {
    render(){

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ alignItems: "flex-end", margin: 16 }}
                    onPress={this.props.navigation.openDrawer}
                >
                    <FontAwesome name="bars" size={24} color="#161924" />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>This is the About Page</Text>
                </View>
            </View>
    
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default AboutScreen