import { StyleSheet } from 'react-native';

import colors from '../../resources/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        padding: 5,
    },
    subTitle: {
        color: colors.secondaryColor,
        padding: 5,
    }
})

export default styles;