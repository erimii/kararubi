import React, {useState, Fragment, useEffect } from 'react';
import Styled from 'styled-components/native';
import Modal from "react-native-modal";
import axios from 'axios';

import PaymentsModal from './PaymentsModal';
import ProductImageSlider from './ProductImgSlider';
import Loading from '~/Components/Loading';

const Container = Styled.ScrollView`
    margin-top:8px;
`;
const LabelTitle = Styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
  padding: 8px 16px 4px 16px;
`;
const LabelGenres = Styled.Text`
  font-size: 15px;
  color: black;
  padding: 0 0 0 4px;
`;
const LabelYear = Styled.Text`
  color: #d35353;
  font-size: 13px;
  padding: 1px 0 0 14px;
`;

const ContainerTitle = Styled.Text`
  font-size: 21px;
  color: black;
  font-weight: bold;
  padding: 15px 16px 8px 16px;
`;
const DescriptionContainer = Styled.View``;
const Description = Styled.Text`
  padding: 0 16px;
  color: black;
`;
const SubInfoContainer = Styled.View``;
const InfoContainer = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;
const Explain = Styled.Text``;

const ProductDetail = ({route, }) => {
    const [dataList, setDataList] = useState([]);
    

    useEffect(()=> {
        const {id} = route.params;
        const fetchData = async () => {
            const result = await axios.get(`https://yts.lt/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);
            setDataList(result.data.data.movie)
        }
        
        fetchData()
    }, [])

    return dataList ? (
        <Fragment>
            <Container>
                <Explain>ProductDetail</Explain>
                {dataList.cast && <ProductImageSlider cast={dataList.cast} />}
                <SubInfoContainer>
                    <LabelTitle>{dataList.title}</LabelTitle>
                    <InfoContainer>
                    <LabelGenres>{dataList.genres}</LabelGenres>
                    <LabelYear>{dataList.year}년</LabelYear>
                    </InfoContainer>
                </SubInfoContainer>
                <DescriptionContainer>
                    <ContainerTitle>줄거리</ContainerTitle>
                    <Description>{dataList.description_full}</Description>
                </DescriptionContainer>
            </Container>
            <PaymentsModal
                onPress={() => setModalVisible(false)}
                title={dataList.title}
            />
        </Fragment>
    ) : (
        <Loading />
    );
};
export default ProductDetail;
