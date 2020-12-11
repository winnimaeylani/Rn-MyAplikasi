import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 200,
    },
    banner: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
    },
    content: {
        flex: 2,
        backgroundColor: '#e2e2e2',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    card: {
        width: 220,
        height: 170,
        backgroundColor: '#F0F8FF',
        borderRadius: (300 + 150) / 20,
        overflow: 'hidden',
        elevation: 1,
        margin: 15,
    },
    cardBanner: {
        width: '100%',
        height: 100,
        resizeMode: 'stretch',
    },
    contentText: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    textCardTitle: {
        fontWeight: 'bold',
        fontFamily: 'arial',
    },
    textCard: {
        color: '#8A2BE2',
    },
});

export {Styles};