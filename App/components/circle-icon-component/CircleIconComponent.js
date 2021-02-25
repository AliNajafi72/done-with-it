import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../../resources/colors';

export default function CircleIconComponent( {name, backgroundColor, size} ) {
    const styles = StyleSheet.create({
        container: {
            backgroundColor,
            borderRadius: size,
            padding: 5,
        }
    })
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name={name} size={size} color={colors.white} />
        </View>
    )
}