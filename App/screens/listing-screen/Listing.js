import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';

import ScreenComponent from '../../components/screen-component/ScreenComponent';
import CardComponent from '../../components/card-component/CardComponent';
import styles from './styles';
import DATA from './DATA';

export default function Listing(params) {
    return(
        <ScreenComponent>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={( {item} ) => {
                        return <CardComponent title={item.title} subTitle={item.subTitle} image={item.image} />
                    }}
                    keyExtractor={item=>item.id}
                />
            </View>
        </ScreenComponent>
    )
}