import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import colors from '../../resources/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Colors from '../../resources/colors';

export default function ViewImage() {
    return(
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="window-close" size={24} color={Colors.white} />  
            </View>    
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="delete-outline" size={24} color={Colors.white} />
            </View>    
            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/chair.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: colors.black
    },
    image: {
        width: '100%',
        height: '100%',
    },
    closeIcon: {
        position: 'absolute',
        top: 50,
        left:25,
    },
    deleteIcon: {
        position: 'absolute',
        top: 50,
        right:25,
    }
})