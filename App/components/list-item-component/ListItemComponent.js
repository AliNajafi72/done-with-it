import React, { useRef, useEffect } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import styles from './styles';

const ListItemComponent = ({ title, subTitle, image, onPress, leftAction, setCurrentItem, currentItemId, currentItem, IconComponent }) => {
    const swipeableComponent = useRef(null);
    const onSwipeableLeftOpenHandler = () => {
        setCurrentItem(currentItemId)
    }
    useEffect(()=>{
        if (currentItem !== currentItemId) {
            swipeableComponent.current.close()
        }
    })
    return (
        <Swipeable renderLeftActions={leftAction} ref={swipeableComponent} onSwipeableLeftWillOpen={onSwipeableLeftOpenHandler}>
            <TouchableHighlight onPress={onPress} underlayColor='#E0E0E0'>
                <View style={styles.conntainer}>
                    {IconComponent && IconComponent}
                    {image && <Image source={image} style={styles.image}/>}
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};
export default ListItemComponent;