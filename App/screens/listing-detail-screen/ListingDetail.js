import React from 'react';
import { Image, Text, View } from 'react-native';

import ListItemComponent from '../../components/list-item-component/ListItemComponent';
import styles from './styles';
import mosh from '../../../assets/mosh.jpg';

export default function ListingDetail({ title, subTitle, image }) {
    return(
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            <View style={styles.listItemContainer}>
                <ListItemComponent image={mosh} title='Mosh Hamedani' subTitle='5'/>
            </View>
        </View>
    )
}