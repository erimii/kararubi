import React, {useState, Fragment, useEffect } from 'react';
import Styled from 'styled-components/native';
import Modal from "react-native-modal";
import { TabRouter, useNavigation } from "@react-navigation/native";

import Button from '~/Components/Button';
import Input from '~/Components/Input';

const Container = Styled.View`
`;

const Label = Styled.Text`
  font-size: 15px;
  color: black;
  padding: 0 0 0 4px;
`;

const InfoContainer = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;
const FirstModalContainer = Styled.View`
  height: 157px;
  flex:0.2;
  background-color: #ffffff;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
`;
const SecondModalContainer = Styled.View`
  flex-direction: column;
  width: 100%;
  height: 30%;
  background-color: #ffffff;
  border: 1px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = Styled.View`
  flex-direction:row;
`;
const FirstModalCountWrapper = Styled.View`
  flex-direction:row;
  align-items:center;
  border:1px;
`;

const PaymentsModal = ({title, }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [secondModal,setSecondModal] = useState(false);
    const [coin, setCoin] = useState(0)   
    const [maxCoin, setMaxCoin] = useState(100)
    const value = coin.toString()

    const navigation = useNavigation();

    const minusCoin = (route) => {
        if(coin>0){
            setCoin(coin-1);
            if(coin>maxCoin){
                setCoin(maxCoin)
            }
        }
        else{
            setCoin(0);
        }
    }

    const plusCoin  = () => {
      setCoin(parseInt(value)+1)
    }

    /* useEffect(()=>{
        {open
        ? setModalVisible(true)
        : setModalVisible(false)}
    }) */

    return(
        <Fragment>
        <Button 
            style={{backgroundColor:'#FFC02B', marginTop:'auto'}}
            label="기부하기"
            onPress={()=>{setModalVisible(true);}}
            color="#000000"
        />
            <Modal
                isVisible={modalVisible}
                avoidKeyboard={true} //ios
                onBackdropPress={() => setModalVisible(false)}
                style={{justifyContent: 'flex-end', margin: 0 , }}
                backdropColor='#342D25'
                backdropOpacity= {0.34}
            >
                <FirstModalContainer>
                    <InfoContainer>
                    <Label>Give 가능한 {} 기브</Label>
                    <Button
                        label="충전하기 >"
                        style={{
                        backgroundColor: '#FEFFFF',
                        height: 22,
                        }}
                        color="#979797"
                    />
                    </InfoContainer>
                    <InfoContainer>
                    <Label>
                        최대 {maxCoin} 까지 참여 가능
                    </Label>
                    <FirstModalCountWrapper>
                        <Button
                        label="-"
                        onPress={minusCoin}
                        style={{width:25, backgroundColor:'#ffffff'}}
                        color='#000000'
                        />
                        <Input
                        keyboardType='numeric'
                        onChangeText={coin>maxCoin ? setCoin(maxCoin) : coin =>setCoin(coin)}
                        style={{width:70, height:40, margin:0}}
                        placeholder='0'
                        clearMode={false}
                        value={value}
                        />
                        <Button
                        label="+"
                        onPress={plusCoin}
                        style={{width:25, backgroundColor:'#ffffff'}}
                        color='#000000'
                        />
                    </FirstModalCountWrapper>
                    </InfoContainer>
                    <Button 
                        style={{backgroundColor:'#FFC02B',width:'100%', marginTop:'auto'}}
                        label="기부하기"
                        onPress={() => {navigation.navigate('DonationCheck'); setModalVisible(false);}}
                        color="#000000"
                    />
                </FirstModalContainer>

                <Modal
                    isVisible={secondModal}
                    onBackdropPress={()=> setSecondModal(false)}
                    backdropOpacity={0.5}
                    style={{justifyContent: 'flex-end', margin: 0 , }}
                >
                    <SecondModalContainer>
                    <Label>{title}에 {coin}기브 기부하시겠습니까? </Label>
                    <ButtonContainer>
                        <Button
                        style={{backgroundColor:'#ffffff', borderWidth:1, borderColor:'#d9d9d9',width:135}}
                        label="아니오 ㅋㅋㅋ"
                        onPress={()=>{
                        setSecondModal(false);
                        }}
                        color="#000000"
                        />
                        <Button
                        style={{backgroundColor:'#FFC02B', width:135, }}
                        label="그럼요"
                        onPress={()=>{
                            setSecondModal(false);
                        }}
                        color="#000000"
                        />
                        </ButtonContainer>
                    </SecondModalContainer>
                </Modal>
            </Modal>

            
        </Fragment>
    );
};
export default PaymentsModal;