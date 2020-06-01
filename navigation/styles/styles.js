import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    NGOContainer: {
        flex: 1,
        margin: 3,
        // height: 50,
        borderRadius: 2,
        padding: 5,
        justifyContent: 'center',
    },
    NGOList: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
    },
    NGOText: {
        textTransform: 'uppercase',
    },
    DescriptionText: {
        marginBottom: 10,
    },
    popup: {
        backgroundColor: 'white',
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 80,
        borderRadius: 7,
        // borderColor: 'red',
        // borderWidth: 2,
    },
    popupOverlay: {
        backgroundColor: "#00000080",
        flex: 1,
    },
    popupContent: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
    },
    modalInfo: {
        width: 350,
        flex: 1,
        alignItems: "center",
        marginBottom: '5%',
        // justifyContent:'center'
    },
    name: {
        marginTop: 5,
        fontSize: 28,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold'
    },
    image: {
        marginTop: 5,
        width: '90%',
        height: '50%',
        borderRadius: 10,
    },
    type: {
        fontSize: 20,
        alignSelf: 'center',
        opacity: 0.5,
        // color:"#696969"
    },
    about: {
        flex: 1,
        marginTop: 20,
        width: '90%',
    },
    modalAnimationView: {
        alignItems: "flex-end",
        width: '100%',
        marginTop: 10,
        marginRight: 20,
    },
});

export default styles;