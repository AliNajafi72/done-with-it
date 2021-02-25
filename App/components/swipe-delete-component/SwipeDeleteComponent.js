import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import styles from './styles';
import colors from '../../resources/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function SwipeDeleteComponent( {onPress} ) {
    return(
        <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="delete-outline" size={28} color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    )
}