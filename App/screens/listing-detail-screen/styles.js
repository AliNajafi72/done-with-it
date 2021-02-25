import { StyleSheet } from 'react-native';

import colors from '../../resources/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightBrown,
        flex: 1
    },
    image: {
        width: '100%',
        height: 300,
    },
    titleContainer: {
        padding: 20,
    },
    title: {
        paddingVertical: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    subTitle: {
        color: colors.secondaryColor,
        fontWeight: 'bold',
        fontSize: 16,
    },
    listItemContainer: {
        padding: 20,
    }
})

export default styles;