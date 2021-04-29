import React from 'react';
import Styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import LottieView from 'lottie-react-native';

import Button from '~/Components/Button';

const Container = Styled.SafeAreaView``;

const Explain = Styled.Text``;

const Lottie = () => {
    const navigation = useNavigation();

    return(
        <Container>
            <Explain>Lottie</Explain>
            <LottieView
                source={require('~/Images/gif/14592-loader-cat.json')}
                autoPlay
                loop
                style={{width:400, backgroundColor:'#000000'}}
            />
        </Container>
    );
};
export default Lottie; 