import React, {useLayoutEffect} from 'react';
import {DrawerActions} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Styled from 'styled-components/native';
import {
    DrawerContentScrollView,
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerItem,
  } from '@react-navigation/drawer';

import IconButton from '~/Components/IconButton'

const Container = Styled.SafeAreaView``;

const Explain = Styled.Text``;

const MenuDrawer = (props, navigation) => {
    return(
        <DrawerContentScrollView {...props}>
            <Container>
                <IconButton
                    iconName="menu"
                    onPress={()=> props.navigation.closeDrawer()}
                    style={{marginLeft:'auto', marginBottom:'auto'}}
                />
                <Explain>MenuDrawer</Explain>
            </Container>
        </DrawerContentScrollView>
    );
};
export default MenuDrawer;