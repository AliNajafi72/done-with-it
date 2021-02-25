import React, { useState } from 'react';
import { FlatList } from 'react-native';

import ListItemComponent from '../../components/list-item-component/ListItemComponent';
import ScreenComponent from '../../components/screen-component/ScreenComponent';
import SeparatorComponent from '../../components/list-item-separator-component/SeparatorComponent';
import SwipeDeleteComponent from '../../components/swipe-delete-component/SwipeDeleteComponent'
import DATA from './DATA';

export default function Screen() {
    const [currentItem, setCurrentItem] = useState(0);
    const [listData, setListData] = useState(DATA);
    const [refreshing, setRefreshing] = useState(false);
    return(
        <ScreenComponent>
            <FlatList 
                data = {listData}
                renderItem = {({ item }) => {
                    return <ListItemComponent 
                                leftAction={()=>{ return <SwipeDeleteComponent onPress={()=>{
                                    setListData(listData.filter(itemData => itemData.id !== item.id))
                                }}/>}} 
                                onPress={()=>console.log(currentItem)} 
                                key={item.id} title={item.title} 
                                subTitle={item.subTitle} 
                                image={item.image} 
                                setCurrentItem={setCurrentItem}
                                currentItemId={item.id}
                                currentItem={currentItem}
                    />
                }}
                keyExtractor = {item => item.id}
                ItemSeparatorComponent = {SeparatorComponent}
                refreshing = {refreshing}
                onRefresh = {()=>{
                    setRefreshing(true);
                    setListData(DATA);
                    setRefreshing(false);
                }}
            />
        </ScreenComponent>
    );
}