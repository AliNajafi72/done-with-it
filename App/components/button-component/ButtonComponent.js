import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import colors from '../../resources/colors';

export default function ButtonComponent({ text, color }) {
    return(
        <TouchableOpacity style={[styles.container, {backgroundColor: colors[color]}]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}