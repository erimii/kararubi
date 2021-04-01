import React from 'react';
import Styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";

import Button from '~/Components/Button';

const Container = Styled.SafeAreaView``;

const Explain = Styled.Text``;

const MyPage = () => {
    const navigation = useNavigation();

    return(
        <Container>
            <Explain>MyPage</Explain>
            <Button
                label="자주 묻는 질문"
                style={{}}
                onPress={() => {navigation.navigate('Question')}}
            />
        </Container>
    );
};
export default MyPage; 