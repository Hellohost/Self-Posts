import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DATA } from '../data'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'


export const MainScreen = ({ navigation }) => {

    const openPosthandler = (post) => {
        navigation.navigate('Post', {
            postId: post.id,
            date: post.date,
            booked: post.booked
        })
    }
    return (
        <PostList data={DATA} onOpen={openPosthandler} />
    )
}

MainScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'My blog',
    headerRight: (<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Take photo" iconName="ios-camera" onPress={() => navigation.push('Create')} />
    </HeaderButtons>
    ),
    headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="toggle Drawer"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()} />
    </HeaderButtons>
})

