import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export default function ScreenComponent({ children }) {
    return(
        <View style={styles.conntainer}>
            {children}
        </View>
    )
}