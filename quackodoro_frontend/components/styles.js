import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

var {height, width} = Dimensions.get('window');

const colors = {
    primaryBackground: '#1B1833',
    activeBackground: '#219B9D',
    black: '#000',
    white: '#fff',
    grey: '#F7F7F7',
    yellow: '#FFB22C',
}

// Adjust font size dynamically
const dynamicFontSize = (size) => {
    if (width > 750) {
        return size * 1.5;
    }
    return size;
};

const styles = StyleSheet.create({
    // Pomodoro Main Container
    appContainer : {
        flex: 1,
        backgroundColor: colors.primaryBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeAppContainer : {
        backgroundColor: colors.activeBackground,
    },

    // Tops Buttons
    topButtonsContainer: {
        flexDirection: 'row',  
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: width > 750 ? '95%' : '100%', 
        position: 'absolute',
        top: width > 750 ? height * 0.05 : height * 0.10,
    },

    topBtnContainerItem: {
        paddingHorizontal: 20,
    },

    // Settings Modal
    modalContainer: {
        backgroundColor: colors.primaryBackground,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        width: '90%',
        height: '90%',
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: colors.grey,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    // Tabs
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
        width: '100%', 
        marginTop: 50,
        marginBottom: 40,
    },
    tab: {
        padding: 12,
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 10,
    },
    tabText: {
        fontSize: dynamicFontSize(20),
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
        fontSize: dynamicFontSize(48),
        fontWeight: 'bold',
        paddingTop: 20,
        color: colors.grey,
    },

    // Duck
    duckContainer : {
        margin: -40,
        width: width > 750 ? 500 : 300, 
        height: width > 750 ? 500 : 300, 
    },

    // Start/Stop Button
    buttonContainer : {
        backgroundColor: colors.grey,
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        shadowColor: colors.grey, 
        shadowOffset: { width: 5, height: 5 }, 
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText : {
        fontSize: dynamicFontSize(22),
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