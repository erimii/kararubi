import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from './Screens/Navigator';
import Styled from 'styled-components/native';

const Contianer =  Styled.SafeAreaView`
  flex:1;
`

const App = () => {
  return(
    <Contianer>
      <Navigator />
    </Contianer>
  );
};
export default App;