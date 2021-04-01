import React from 'react';
import { Image } from 'react-native';

const LogoImage = () => {
    return(
        <Image
            source={require('~/Images/logo.png')}
        />
    );
};
export default LogoImage;