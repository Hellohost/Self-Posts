import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const CraeateScreen = ({}) => {
    return <View style={styles.center}>
        <Text>
        CraeateScreen
        </Text>
    </View>
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})