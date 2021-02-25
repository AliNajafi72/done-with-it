import React from 'react';

import mosh from '../../../assets/mosh.jpg'
import CircleIconComponent from '../../components/circle-icon-component/CircleIconComponent';
import colors from '../../resources/colors';

const DATA = {
    profile: [
        {
            title: 'Ali Najafi',
            subTitle: 'AliNajafiTabriz@gmail.com',
            image: mosh,
        }
    ],
    options: [
        {
            title: 'My Listings',
            IconComponent: <CircleIconComponent name='format-list-bulleted' backgroundColor={colors.primaryColor} size={18}/>,

        },
        {
            title: 'My Messages',
            IconComponent: <CircleIconComponent name='email' backgroundColor={colors.secondaryColor} size={18}/>,
        },
    ],
    logout: [
        {
            title: 'Logout',
            IconComponent: <CircleIconComponent name='logout' backgroundColor={colors.lightYellow} size={18}/>,

        }
    ],
}

export default DATA;