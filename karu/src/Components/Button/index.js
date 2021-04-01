import React from 'react';
import Styled from 'styled-components/native';

const StyleButton = Styled.TouchableOpacity`
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: #3796EF;
  font-weight: bold;
`;
const Label = Styled.Text`
  color: #000000;
  font-weight: bold;
  font-size:16px;
`;


const Button = ({ label, labelstyle, style, onPress }) => {
  return (
    <StyleButton style={style} onPress={onPress}>
      <Label style={labelstyle}>{label}</Label>
    </StyleButton>
  );
};

export default Button;