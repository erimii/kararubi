import React, { useState } from 'react';
import { View, Switch, StyleSheet } from "react-native";
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView``;
const SwitchContainer = Styled.View`
    justify-content: center;
    align-items: center;
`;
const Explain = Styled.Text``;

const Settings = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <Container>
            <Explain>Settings</Explain>
            <SwitchContainer>
                <Switch
                    trackColor={{ false: "#D9D9D9", true: "#FFC02B" }}
                    thumbColor={"#ffffff"}
                    ios_backgroundColor="#000000"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    circleSize={30}
                />
            </SwitchContainer>
            
        </Container>
    );
};
export default Settings; 