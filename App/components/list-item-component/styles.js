import { StyleSheet } from 'react-native';

import colors from '../../resources/colors';

const styles = StyleSheet.create({
    conntainer: {
        flexDirection: 'row',
        padding: 20,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textContainer: {
        justifyContent: 'center',
        paddingStart: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    subTitle: {
        color: colors.darkGray,
        fontSize: 14,
    }
})

export default styles;