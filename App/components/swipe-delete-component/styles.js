const { StyleSheet } = require("react-native");
import colors from '../../resources/colors';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: 70,
        backgroundColor: colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;