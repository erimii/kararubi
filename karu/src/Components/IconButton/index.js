
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    padding: 8px;
`;
const Icon = Styled.Image``;


const IconButton = ({ iconName, style, onPress }) => {
    const imageSource ={
        menu: require('~/Images/ic_menu.png'),
        search: require('~/Images/ic_search.png'),
        notice: require('~/Images/ic_notice.png'),
    };

    return (
        <Container
            style={style}
            onPress={() => {
                if (onPress && typeof onPress === 'function'){
                    onPress();
                }
            }}>
            <Icon source={imageSource[iconName]} />
            </Container>
    );
};

export default IconButton;