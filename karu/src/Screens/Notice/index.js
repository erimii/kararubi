import React,{useLayoutEffect} from 'react';
import Styled from 'styled-components';

import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
`;

const Explain = Styled.Text`
    font-size:50px;
`;

const Notice = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    label="모두 확인"
                    style={{
                        borderRadius: 4,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        borderColor: '#D9D9D9',
                        height: 32,
                        width:72,
                        marginLeft: 'auto'
                    }}
                    color='black'
                    onPress={()=> {}}
                />
            ),
        });
        }, []);

    return(
        <Container>
            <Explain>Notice</Explain>
        </Container>
    );
};

export default Notice;