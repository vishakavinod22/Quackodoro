import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

var {height, width} = Dimensions.get('window');

const colors = {
    primaryBackground: '#1B1833',
    activeBackground: '#219B9D',
    black: '#000',
    white: '#fff',
    grey: '#F7F7F7',
    lightLavendar: '#EDE9F6',

}

// Adjust font size dynamically
const dynamicFontSize = (size) => {
    if (width > 750) {
        return size * 1.2;
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
        top: width > 750 ? '5%' : '10%',
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
        backgroundColor: colors.lightLavendar,
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
    modalCloseBtn: {
        flexDirection: "row", 
        justifyContent: "flex-end", 
        width: "100%",
    },
    settingsContainer: {
        paddingTop: width > 750 ? width * 0.1 : width * 0.3,
        alignItems: "center",
    },
    settingsTextContainer: {
        marginTop: '-20%',
        marginBottom: 80,
    },
    settingsTitle: {
        fontSize: dynamicFontSize(26),
        fontWeight: "bold",
    },
    inputContainer: {
        marginBottom: 25,
        alignItems: "center",
    },
    label: {
        fontSize: dynamicFontSize(20),
        marginBottom: 10,
    },
    input: {
        width: 100,
        height: 40,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "#ccc",
        textAlign: "center",
        fontSize: dynamicFontSize(18),
        backgroundColor: colors.white,
    },
    saveButton: {
        marginTop: 20,
        backgroundColor: colors.primaryBackground,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    saveButtonText: {
        color: "white",
        fontSize: dynamicFontSize(18),
        fontWeight: "bold",
    },
    

    // Tabs
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
        width: '100%', 
        marginTop: '15%',
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
        marginBottom: 50
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