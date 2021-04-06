  import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '~/Screens/Home';
import ProductDetail from '~/Screens/ProductDetail';
import MyPage from '~/Screens/Mypage';
import MenuDrawer from '~/Screens/MenuDrawer';
import LogoImage from '../Components/LogoImage';
import Notice from '~/Screens/Notice';
import Question from '~/Screens/Question';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MypageTabs = () => {
    <Stack.Navigator>
        <Stack.Screen
            name="Mypage"
            component={MyPage}
            options={{title:'MyPage'}}
        />
    </Stack.Navigator>
}

const HomeNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title:'Home',
                    headerTitle: () => <LogoImage />,
                    headerStyle:{
                        backgroundColor:'#086422'
                    }
                }}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={{
                    title:'ProductDetail',
                }}
            />
            <Stack.Screen
                name="MyPage"
                component={MyPage}
                options={{
                    title:'MyPage',
                }}
            />
            <Stack.Screen
                name="Notice"
                component={Notice}
                options={{title: 'Notice'}}
            />
            <Stack.Screen
                name="Question"
                component={Question}
                options={{title: 'Question'}}
            />
        </Stack.Navigator>
    );
};

const MainNavigator = () => {
    return (
      <Drawer.Navigator
        drawerPosition="left"
        drawerType="front"
        drawerContent={(props) => <MenuDrawer {...props} />}>
        <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
      </Drawer.Navigator>
    );
  };

export default () => {
    return(
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
};