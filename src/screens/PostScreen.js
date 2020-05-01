import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native'
import { Item, HeaderButtons } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { DATA } from '../data'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {

    const postId = navigation.getParam('postId')

    const post = DATA.find(p => p.id === postId)

    // useEffect(() => {
    //     navigation.setParams({booked: post.booked})
    // }, [])

    const removeHandler = () => {
        Alert.alert(
            'Delete text',
            'Are you sure you want delete this text?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'Delete', style: 'destructive', onPress: () => { } },
            ],
            { cancelable: false },
        )
    }
    return <View>
        <Image source={{ uri: post.img }} style={styles.image} />
        <ScrollView style={styles.textWrapp}>
            <Text style={styles.title}>{post.text}</Text>
        </ScrollView>
        <Button title='Delete' color={THEME.DANGER_COLOR} onPress={removeHandler} />
    </View>
}

PostScreen.navigationOptions = ({ navigation }) => {
    const date = navigation.getParam('date')
    const booked = navigation.getParam('booked')
    const iconName = booked?  'ios-star' : 'ios-star-outline'
    return {
        headerTitle: 'Post ' + new Date(date).toLocaleDateString(),
        headerRight: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take photo" iconName={iconName} onPress={() => console.log('press photo')} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrapp: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
    }
})