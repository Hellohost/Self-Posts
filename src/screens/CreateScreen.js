import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import {useDispatch} from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme'
import { addPost } from '../store/actions/post'

export const CreateScreen = ({navigation}) => {

    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const img ='https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg'
    const savehandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: img,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>
                        CraeateScreen
        </Text>
                    <TextInput style={styles.textarea}
                        placeholder="Enter posts text"
                        value={text}
                        onChangeText={setText}
                        multiline />
                    <Image
                        source={{ uri: img }}
                        style={{ width: '100%', height: 200, marginBottom: 10 }} />
                    <Button title='Create post' color={THEME.MAIN_COLOR} onPress={savehandler} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

CreateScreen.navigationOptions = ({ navigation }) => ({



    headerTitle: 'Create Post',
    headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="toggle Drawer"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()} />
    </HeaderButtons>
})

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        marginBottom: 10
    }
})