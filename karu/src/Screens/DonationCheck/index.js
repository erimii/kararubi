import React, {Fragment,useLayoutEffect, useState} from 'react';
import Styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import { HeaderBackButton } from '@react-navigation/stack';


import Button from '~/Components/Button';

const Container = Styled.SafeAreaView``;

const Explain = Styled.Text``;

const DonationCheck = ({navigation}) => {
    const open=1

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: (props) => (
                <HeaderBackButton
                  {...props}
                  onPress={(open) => {
                    navigation.navigate('ProductDetail', {open:1})
                  }}
                />
              ),
        });
        }, []);

    return(
        <Fragment>
            <Container>
                <Explain>DonationCheck</Explain>
                
            </Container>
            <Button
                style={{backgroundColor:'#FFC02B',width:'100%', marginTop:'auto'}}
                label="기부하기"
                onPress={()=>{
                }}
                color="#000000"
            />
        </Fragment>
    );
};
export default DonationCheck; 