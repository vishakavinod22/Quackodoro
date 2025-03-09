import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

var {height, width} = Dimensions.get('window');

const colors = {
    primaryBackground: '#1B1833',
    activeBackground: '#219B9D',
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
    activeAppContainer : {
        backgroundColor: colors.activeBackground,
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
        marginBottom: 10,
    },
    timerText : {
        fontSize: 48,
        fontWeight: 'bold',
        padding: 20,
        color: colors.grey,
    },

    // Start/Stop Button
    buttonContainer : {
        marginBottom: 20,
        backgroundColor: colors.grey,
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: colors.grey, 
        shadowOffset: { width: 5, height: 5 }, 
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText : {
        fontSize: 20,
        fontWeight: 600,
        color: colors.black
    },
    pauseBtn : {
        backgroundColor: colors.primaryBackground,
    },
    pauseBtnText : {
        color: colors.grey,
    },
});

export default styles;