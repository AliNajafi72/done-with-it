import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

export default function CardComponent({ title, subTitle, image }) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    )
}