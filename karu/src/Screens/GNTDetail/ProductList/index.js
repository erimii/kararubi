import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {FlatList} from 'react-native';
import axios from "axios";
import Button from '~/Components/Button';

const Container = Styled.View`
  margin:5px 10px;
  background:#ffffff;
`;
const InfoContainer = Styled.View`
    flex-direction: column;
    justify-content: space-between;
    border-width:1px;
`;

const Title = Styled.Text`
    font-size: 16px;
    font-weight:bold;
    margin: 3px 1px;
`;
const DropDownContainer = Styled.TouchableOpacity`
  flex-direction:row;
`;
const ProductListContainer = Styled.SafeAreaView`
`;

const ProductImageContainer = Styled.TouchableOpacity`
  margin: 6px 6px;
`;
const ProductImage = Styled.Image`
`;
const VectorImage = Styled.Image`
`;

const CategoryLabelWrapper= Styled.SafeAreaView`
`;
const CategoryLabel = Styled.TouchableOpacity`

`;
const Explain = Styled.Text`
`;

const UnableContainer = Styled.View`
    position: absolute;
    justify-content: center;
    align-items:center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Unable = Styled.Text``;

const ProductList = ({title, onPress, }) => {
    const [dataList, setDataList] = useState([]);
    const [category, setCategory] = useState('');
    const [openCategory, setOpenCategory] = useState(false);
    const [label, setLabel] = useState("전체 보기");

    const onClickCategory = () => {
        !openCategory ?
            setOpenCategory(true):
            setOpenCategory(false)
    }

    const handleCategory = (value) => {
        setCategory(value.value)
        setOpenCategory(false)
        setLabel(value.label)
    }

    const option=[
        {id:1, label: '전체', value:'',},
        {id:2, label: '드라마', value:'Drama',},
        {id:3, label: '코메디', value:'Comedy',},
    ]
    
    useEffect(()=> {
        const fetchData = async () => {
            const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?&sort_by=year&order_by=dec&limit=10&genre=${category}`);
            setDataList(result.data.data.movies)
        } 
        fetchData()
        console.log(label)
        console.log(category)
    }, [category])

    return(
        <>
        <Container>
            <InfoContainer>
                <Title>{title}</Title>
            
            <DropDownContainer onPress={onClickCategory}>
                <Explain>{label}</Explain>
                <VectorImage
                    source={
                        openCategory
                        ? require('~/Images/tabs/ic_profile.png')
                        : require('~/Images/tabs/ic_profile_outline.png')
                    }
                />
            </DropDownContainer>
            {openCategory && 
                <CategoryLabelWrapper>
                    {option.map((item)=>(
                        <React.Fragment key={item.id}>
                            <CategoryLabel>
                                <Button
                                    key={item.id}
                                    label={item.label}
                                    onPress={()=> handleCategory(item)}
                                />
                            </CategoryLabel>
                            </React.Fragment>
                        ))}
                    </CategoryLabelWrapper>
                
            }
            </InfoContainer>
            <ProductListContainer>
                <FlatList
                nestedScrollEnabled={true}
                numColumns={2}
                data={dataList}
                keyExtractor={(item, index) => {
                    return `ProductList-${item.id}-${index}`;
                }}
                renderItem={({item, index}) => (
                    <ProductImageContainer
                        activeOpacity={1}
                        onPress={() => {
                            onPress(item.id);
                    }}>
                    {item.rating < 5
                        ? <ProductImage
                            source={{uri: item.large_cover_image}}
                            style={{width: 170, height: 170}}
                          />
                        :
                            <>
                            <ProductImage
                                source={{uri: item.large_cover_image}}
                                style={{width: 170, height: 170, opacity: 0.2}}
                            />
                            <UnableContainer><Unable>상영 종료</Unable></UnableContainer>
                            
                            </>

                        }
                    </ProductImageContainer>
                )}
                />
            </ProductListContainer>
        </Container>
        </>
    );
    
};

export default ProductList; 