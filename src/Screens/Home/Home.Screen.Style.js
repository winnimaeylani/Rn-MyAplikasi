import {StyleSheet} from 'react-native';
import {rh, rw, rbr, rf} from "../../Utils/Layout.util";
import {COLORS} from '../../Themes';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: rh(200),
        height: '200%',
    },
    banner: {
        width: rh(200),
        height: '200%',
        resizeMode: 'stretch',
    },
    content: {
        flex: 1,
        // backgroundColor: '#e2e2e2',
        // paddingHorizontal: 15,
        paddingVertical: 10,
    },
    products: {
        height: rh(300),
    },
    card: {
        height: rh(150),
        width: rw(170),
        backgroundColor: 'white',
        borderRadius: rbr(6),
        overflow: 'hidden',
        elevation: 5,
        alignItems: 'center',
        marginHorizontal: rw(10),
    },
    imageCard: {
        width: rh(80),
        height: '100%',
        resizeMode: 'stretch',
    },
    // contentText: {
    //     paddingHorizontal: 15,
    //     paddingVertical: 10,
    // },
    textCard: {
        flex: 1,
        marginVertical: rh(20),
        // fontWeight: 'bold',
        // fontFamily: 'arial',
    },
    textSection: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: rf(20),
    },
});

export {Styles};