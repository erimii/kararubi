import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View``;

const CastContainer = Styled.View``;

const CastImage = Styled.Image``;

const LabelName = Styled.Text`
    text-align: center;
`;

const ProductImageSlider = ({cast}) => {
    return (
        <Container>
            <FlatList
                horizontal={true}
                pagingEnabled={true}
                data={cast}
                keyExtractor={(item, index) =>{
                    return `ProductImageSlider==${index}`;
                }}
                renderItem={({item,index}) => (
                    <CastContainer>
                        <CastImage
                            source={{ uri: item.url_small_image}}
                            style={{width:Dimensions.get('window').width, height: 300}}
                        />
                        <LabelName>{item.name}</LabelName>
                    </CastContainer>
                )}
            />
        </Container>
    );
};

export default ProductImageSlider;