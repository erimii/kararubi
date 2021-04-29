import React, {useState} from 'react';
import Styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";

import Button from '~/Components/Button';
import ProductList from './ProductList';

const Container = Styled.SafeAreaView``;

const Explain = Styled.Text``;

const GNTDetail = ({navigation}) => {

    return(
        <Container>
            <Explain>GNTDetail</Explain>
            
            <ProductList
                title="ProductList"
                onPress={(id) => {
                    navigation.navigate('ProductDetail', {
                        id,
                    });
                }}
            />
        </Container>
    );
};
export default GNTDetail; 