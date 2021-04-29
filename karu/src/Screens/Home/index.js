import React, {useLayoutEffect} from 'react';
import Styled from 'styled-components/native';
import {DrawerActions} from '@react-navigation/native';
import {Animated} from 'react-native';

import Button from '~/Components/Button';
import IconButton from '~/Components/IconButton'
import TotalDonation from './TotalDonation';
import ProfileCard from './ProfileCard';
import Promotion from './Promotion';
import GNTPreview from './GNTPreview';

const Container = Styled.ScrollView`
    margin: 8px;
`;

const Explain = Styled.Text``;

const Home = ({navigation}) => {
    const scrollY = new Animated.Value(0)
    const translateY = scrollY.interpolate({
        inputRange:[0,50],
        outputRange:[0,50]
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <IconButton
                    iconName="menu"
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                />
            ),
            headerRight: () => (
                <IconButton
                    iconName="notice"
                    onPress={() => navigation.navigate('Notice')}
                />
            ),
        });
        }, []);

    return(
        <>
        <Container
            showsVerticalScrollIndicator ={false}
            scrollEventThrottle={10} //ios
            onScroll={(e)=>{
                scrollY.setValue(e.nativeEvent.contentOffset.y)
                console.log(scrollY)
            }}>
            <Explain>Home</Explain>

            <Button
                label="Lottie"
                style={{}}
                onPress={() => {navigation.navigate('Lottie')}}
            />
            <Button
                label="MyPage"
                style={{}}
                onPress={() => {navigation.navigate('MyPage')}}
            />
            <Button
                label="Settings"
                style={{}}
                onPress={() => {navigation.navigate('Settings')}}
            />
            <Button
                label="GNTDetail"
                style={{}}
                onPress={() => {navigation.navigate('GNTDetail')}}
            />
            <Button
                label="ChartsWrapper"
                style={{}}
                onPress={() => {navigation.navigate('ChartsWrapper')}}
            />
            <Button
                label="PieChart"
                style={{}}
                onPress={() => {navigation.navigate('PieChart')}}
            />
            <ProfileCard />
            <Promotion />
            <GNTPreview />
        </Container>
        <Animated.View
                style={{
                    transform:[
                        {translateY:translateY}
                    ]
                }}>
                <TotalDonation />
            </Animated.View>
        </>
    );
};
export default Home;