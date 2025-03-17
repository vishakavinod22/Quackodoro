import { Dimensions } from "react-native";
import { StyleSheet, PixelRatio } from "react-native";

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
        width: '100%',  
        maxWidth: 750,
        paddingTop: 20,
        marginTop: height * 0.10,
    },
    
    // Reset Button
    resetBtnContainer: {
        // backgroundColor: colors.primaryBackground,
        paddingHorizontal: 20,
    },
    
    // Settings Button
    settingsBtnContainer: {
        // backgroundColor: colors.primaryBackground,
        paddingHorizontal: 20,
    },    

    // Tabs
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%',  
        maxWidth: 750,
        marginTop: 50,
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
        fontSize: dynamicFontSize(16),
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
        // marginBottom: -400,
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

    // Duck
    duckContainer : {
        margin: -20,
        width: 300, 
        height: 300,
    }
});

export default styles;