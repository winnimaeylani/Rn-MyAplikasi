// @flow

import React from 'react';
import {View, Text, Image, FlatList, TouchableWithoutFeedback} from 'react-native';
import { Styles } from './Home.screen.style';
import {IMAGES} from '../..Themes';
import {NavigationProp} from '@react-navigation/native';
import {keyExtractor, renderScreen} from '../../Utils/Helpers.util';
import {Routes} from '../../Navigations/Routes';


type Props = {
    navigation: NavigationProp,
    count: number,
    increaseCount: Function,
    decreaseCount: Function,
};

const HomeScreen = ({
    navigation,
    count,
    increaseCount,
    decreaseCount,
}: Props) => {
    const renderHeader = () => {
        return (
            <View style={Styles.header}>
                <Image style={Styles.banner} source={IMAGES.banner}/>
            </View>
        );
    };

    const renderContent = () => {
        const data = [
            {
                title: 'Kartu Saya',
                imageUrl:
                'https://wallpapercave.com/wp/wp2665704.jpg',
            },
            {
                title: 'Kartu Saya',
                imageUrl: 
                'https://wallpapercave.com/wp/wp2665704.jpg',
            },
            {
                title: 'Kartu Saya',
                imageUrl: 
                'https://wallpapercave.com/wp/wp2665704.jpg',
            },
        ];

        return (
            <View style={Styles.content}>
                <View style={Styles.product}>
                    <FlatList 
                        data={data}
                        renderItem={renderCardItem}
                        keyExtractor={keyExtractor}
                        horizontal
                    />   
                </View>
                <View style={Styles.textsection}>
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

    const renderCardItem = ({item}) => {
        const imageCard = {uri: item.imageUrl};

        return (
            <TouchableWithoutFeedback
                onPress = {() => navigation.navigate(Routes.DetailScreen)}>
                <View style={Styles.card}>
                    <Image style={Styles.imageCard} source={imageCard} />
                    <Text style={Styles.textCard}>{item.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    const renderData = [renderHeader, renderContent];

    return (
        <View style={Styles.container}>
            <FlatList
                data={renderData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
};

export default HomeScreen;
// const HomeScreen = (Props: Props) => {
//     const {navigation} = Props;
//     const image_url = {uri: 'http://3.bp.blogspot.com/-dmaEOBmPjXo/VV9xUieJMZI/AAAAAAAAAvE/OD8sWmEyZNY/s1600/Wallpaper%2BKeren%2BHD%2BUntuk%2BAndroid%2Bdan%2BKomputer%2B3.jpg'};
//     const renderCardItem = ({item}) => {
//         const image = {uri: item.image_url};
//         return (
//             <View style={Styles.card}>
//                 <Image source={image_url} style={Styles.cardBanner}></Image>
//                 <View style={Styles.contenText}>
//                     <Text style={Styles.textCardTitle}>Ini Kartu</Text>
//                     <Text style={Styles.textCard}>Lorem Ipsum</Text>
//                 </View>
//             </View>
//         );
//     };

//     const dataKartu = [
//         {
//             image_url:
//             'https://wallpapercave.com/wp/wp2665704.jpg',
//             title: 'Ini Kartu Pertama',
//             content: 'Lorem Ipsum',
//         },
//         {
//             image_url:
//             'https://wallpapercave.com/wp/wp2665704.jpg',
//             title: 'Ini Kartu Dua',
//             content: 'Lorem Ipsum',
//         },
//         {
//             image_url:
//             'https://wallpapercave.com/wp/wp2665704.jpg',
//             title: 'Ini Kartu Tiga',
//             content: 'Lorem Ipsum',
//         }
//     ]
//     return (
//         <View style={Styles.container}>
//             <View style={Styles.header}>
//                 <Image source={image_url} style={Styles.banner}></Image>
//             </View>
//             <View style={Styles.content}>
//                 <FlatList data={dataKartu} renderItem={renderCardItem} vertical />
//             </View>
//         </View>
//     );
// };

// export default HomeScreen;