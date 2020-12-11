// @flow

import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Routes from '../../Routes/Routes';
import { Styles } from './Home.Screen.Style';

type Props = {
    navigation: NavigationProp,
};

const HomeScreen = (Props: Props) => {
    const {navigation} = Props;
    const image_url = {uri: 'http://3.bp.blogspot.com/-dmaEOBmPjXo/VV9xUieJMZI/AAAAAAAAAvE/OD8sWmEyZNY/s1600/Wallpaper%2BKeren%2BHD%2BUntuk%2BAndroid%2Bdan%2BKomputer%2B3.jpg'};
    const renderCardItem = ({item}) => {
        const image = {uri: item.image_url};
        return (
            <View style={Styles.card}>
                <Image source={image_url} style={Styles.cardBanner}></Image>
                <View style={Styles.contenText}>
                    <Text style={Styles.textCardTitle}>Ini Kartu</Text>
                    <Text style={Styles.textCard}>Lorem Ipsum</Text>
                </View>
            </View>
        );
    };

    const dataKartu = [
        {
            image_url:
            'https://wallpapercave.com/wp/wp2665704.jpg',
            title: 'Ini Kartu Pertama',
            content: 'Lorem Ipsum',
        },
        {
            image_url:
            'https://wallpapercave.com/wp/wp2665704.jpg',
            title: 'Ini Kartu Dua',
            content: 'Lorem Ipsum',
        },
        {
            image_url:
            'https://wallpapercave.com/wp/wp2665704.jpg',
            title: 'Ini Kartu Tiga',
            content: 'Lorem Ipsum',
        }
    ]
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Image source={image_url} style={Styles.banner}></Image>
            </View>
            <View style={Styles.content}>
                <FlatList data={dataKartu} renderItem={renderCardItem} vertical />
            </View>
        </View>
    );
};

export default HomeScreen;