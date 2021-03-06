import React, {useEffect} from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {useDispatch, useSelector} from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { loadPosts } from '../store/actions/post'


export const MainScreen = ({ navigation }) => {

    const openPosthandler = (post) => {
        navigation.navigate('Post', {
            postId: post.id,
            date: post.date,
            booked: post.booked
        })
    }

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(state => state.post.allPosts)
    return (
        <PostList data={allPosts} onOpen={openPosthandler} />
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

