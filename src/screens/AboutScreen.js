import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'


export const AboutScreen = ({ navigation }) => {

    return (
        <View style={styles.center}>
            <Text >About</Text>
            <Text >Version app <Text style={styles.version}>1.0.0</Text></Text>
        </View>
    )
}

AboutScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'About app',
    headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item 
        title="toggle Drawer"
         iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()} />
    </HeaderButtons>
})

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    version: {
        fontFamily: 'open-bold'
    }
})