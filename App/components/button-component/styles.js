import { StyleSheet } from 'react-native';

import colors from '../../resources/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryColor,
        padding: 20,
        borderRadius: 25,
    },
    text: {
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

export default styles;