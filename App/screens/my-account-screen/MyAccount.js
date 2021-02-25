import React from 'react';
import { FlatList, View } from 'react-native';

import styles from './styles';
import DATA from './DATA';
import ScreenComponent from '../../components/screen-component/ScreenComponent';
import ListItemComponent from '../../components/list-item-component/ListItemComponent';

export default function MyAccount() {
    return(
        <ScreenComponent>
            <View>
                <FlatList
                    style={styles.list}
                    data={DATA.profile}
                    renderItem={( {item} ) => {
                        return <ListItemComponent title={item.title} subTitle={item.subTitle} image={item.image} />
                    }}
                    keyExtractor={item => item.title}
                />
                <FlatList
                    style={styles.list}
                    data={DATA.options}
                    renderItem={( {item} ) => {
                        return <ListItemComponent title={item.title} IconComponent={item.IconComponent} />
                    }}
                    keyExtractor={item => item.title}
                />
                <FlatList
                    style={styles.list}
                    data={DATA.logout}
                    renderItem={( {item} ) => {
                        return <ListItemComponent title={item.title} IconComponent={item.IconComponent} />
                    }}
                    keyExtractor={item => item.title}
                />
            </View>
        </ScreenComponent>
    )
}