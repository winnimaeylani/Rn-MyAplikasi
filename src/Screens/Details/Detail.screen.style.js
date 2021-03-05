// // @flow
import {StyleSheet} from 'react-native';
import {rf} from '../../Utils/Layout.util';

const Styles = StyleSheet.create({
    textSection: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: rf(20),
      },
    });
// import React, {useState} from 'react';
// import {View, Text} from 'react-native';
// import {NavigationProp} from '@react-navigation/native';

// type Props = {
//     navigation: NavigationProp,
// };

// const initialState = {
//     name: 'Winni',
//     age: 20,
// };

// const DetailsScreen = ({navigation} : Props) => {
//     const [state, setState] = useState (initialState);
//     const {name, age} = state;
//     return (
//         <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text onPress={()=> setState({...state, age: age + 1})}>
//                 {name + '('+ age +')'}
//             </Text>
//         </View>
//     );
// }

// export default DetailsScreen;