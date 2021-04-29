import React, {useEffect, useState} from 'react';
import Styled from 'styled-components/native';
import {PieChart} from 'react-native-charts-wrapper';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
  } from 'react-native';


const Container = Styled.View`
    flex:1;
`;

const Explain = Styled.Text``;

const PieChartContainer = Styled.View`
    background:red;
    flex:0.7;
    padding:5px;
`;

const PieChartScreen = () => {
    const [selectedEntry, setSelectedEntry] = useState('0')

    const legend={
        enabled: true,
        text:'tori tori tori',
        textColor:processColor('red'),
        textSize: 12,
        form: 'CIRCLE',

        horizontalAlignment: "RIGHT",
        verticalAlignment: "CENTER",
        orientation: "VERTICAL",
        wordWrapEnabled: true
    };

    const data={
        dataSets: [{
            values: [{value: 43, label: 'Sandwiches'},
              {value: 20, label: 'Salads'},
              {value: 15, label: 'Soup'},
              {value: 9, label: 'Beverages'},
              {value: 15, label: 'Desserts'}],
            label: 'data에 label',
            config: {
              colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#8CEAFF'), processColor('#FF8C9D')],
              valueTextSize: 20, //%값 폰트사이즈
              valueTextColor: processColor('green'),
              sliceSpace: 5, // 조각 사이 간격
              selectionShift: 13, //클릭된 조각 크기 차이
              // xValuePosition: "OUTSIDE_SLICE",
              // yValuePosition: "OUTSIDE_SLICE",
              valueFormatter: "#.#'%'",
              valueLineColor: processColor('green'),
              valueLinePart1Length: 0.5
            }
          }],
    };

    const highlights = [{x:0}]
    const description={
        text: 'This is Pie chart description',
        textSize: 15,
        textColor: processColor('darkgray'),
    }

    const handleSelet = (e) =>{
        let entry = e.nativeEvent
        if (entry == null) {
            setSelectedEntry(null)
        } else {
            setSelectedEntry(JSON.stringify(entry))
        }
    }

    return(
        <Container>
            <Explain>PieChart</Explain>
            <PieChartContainer>
            <Explain>PieChart</Explain>
            <View>
                <Text>selected:</Text>
                <Text> {selectedEntry}</Text>
            </View>
                <PieChart
                    style={{flex:1}}
                    logEnabled={true}
                    chartBackgroundColor={processColor('pink')}
                    chartDescription={description}
                    data={data}
                    legend={legend}
                    highlights={highlights}

                    extraOffsets={{left: 5, top: 5, right: 5, bottom: 5}}

                    entryLabelColor={processColor('green')}
                    entryLabelTextSize={10}
                    entryLabelFontFamily={'HelveticaNeue-Medium'}
                    drawEntryLabels={true}

                    rotationEnabled={false}
                    rotationAngle={270}
                    usePercentValues={true}
                    styledCenterText={{text:'Pie center text!', color: processColor('pink'), fontFamily: 'HelveticaNeue-Medium', size: 15}}
                    centerTextRadiusPercent={100}
                    holeRadius={0}
                    holeColor={processColor('#f0f0f0')}
                    transparentCircleRadius={0}
                    transparentCircleColor={processColor('#f0f0f088')}
                    maxAngle={360}
                    onSelect={handleSelet}
                    onChange={(event) => console.log(event.nativeEvent)}
                />
            </PieChartContainer>

        </Container>
    );
};
export default PieChartScreen; 