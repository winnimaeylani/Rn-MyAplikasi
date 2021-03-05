//@flow 

import React, {useState} from 'react';
import {Text, TextInput, View, Button, TouchableWithoutFeedback} from 'react-native';
import {Routes} from '../../Navigations/Routes';
import {NavigationProp} from '@react-navigation/native';
import {Styles} from './Detail.screen.style';

type Props = {
    navigation: NavigationProp,
    count: number,
    increaseCount: Function,
    decreaseCount: Function,
};

const DetailScreen = ({
    navigation,
    count,
    increaseCount,
    decreaseCount,
}: Props) => {
    const initialState = {
        name: 'Winni',
        age: 20,
    };
    const [state, setState] = useState(initialState);
    const {name, age} = state;

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => navigation.navigate(Routes.HomeScreen)}>
                Detail Screen
            </Text>
            <TextInput
                style={{width: 200, height: 40, borderColor: 'blue', borderWidth: 1}}
                onChangeText={(text) => setState({...state, name: text})}
                value={name}
            />
            <TextInput
                keyboardType="numeric"
                style={{width: 200, height: 40, borderColor: 'blue', borderWidth: 1}}
                value={count + ''}
            />
                <View style={Styles.textSection}>
                <Text
                  onPress={() => increaseCount()}
                  onLongPress={() => decreaseCount()}
                  style={Styles.text}>
                  {'count: ' + count}
                </Text>
              </View>
        </View>
    );
};

export default DetailScreen;