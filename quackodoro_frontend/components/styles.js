import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

var {height, width} = Dimensions.get('window');

const colors = {
    primaryBackground: '#1B1833',
    black: '#000',
    grey: '#F7F7F7',
    yellow: '#FFB22C',
}

const styles = StyleSheet.create({
    // App
    appContainer : {
        flex: 1,
        backgroundColor: colors.primaryBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Tabs
    tabsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    tab: {
        padding: 12,
        marginHorizontal: 10,
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 10,
    },
    tabText: {
        fontSize: 16,
        color: colors.grey
    },
    activeTab: {
        backgroundColor: colors.grey,
    },
    activeTabText: {
        color: colors.black,
    },
    
    // Timer
    timerContainer : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerText : {
        fontSize: 48,
        fontWeight: 'bold',
        paddingTop: 20,
        color: colors.grey,
    },
});

export default styles;