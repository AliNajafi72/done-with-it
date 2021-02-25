import { StyleSheet, Platform } from "react-native";
import Constants from 'expo-constants';

import colors from '../../resources/colors';

const styles = StyleSheet.create({
    conntainer: {
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        flex: 1,
        backgroundColor: colors.lightBrown
    }
})

export default styles;