import React, {useState} from 'react';
import {Linking, Text, TouchableOpacity, Alert, StyleSheet, View} from "react-native";
import QRCodeScanner from 'react-native-qrcode-scanner';
import Payment from "./Payment";
import axios from 'axios';

const QRCodeScreen = (props) => {

    const [state, setState] = useState({
        qrdata: ""
    })

    const ifScanned = e => {
        axios.get('http://192.168.29.77:8000/driver/' + e.data)
            .then(function (response) {
                setState({
                    qrdata: e.data
                })
                passData(e.data);
            }).catch(error => {
            Alert.alert('OOPS', 'Invalid QR code. Please try Again', [{text: 'Okay'}])
        });

    }

    const passData = (data) => {
        props.navigation.navigate('Payment', {
            qrData: data,
        });
    }

    return (
        <QRCodeScanner
            // containerStyle={{backgroundColor:"#FFF",marginBottom:"35%"}}
            onRead={ifScanned}
            reactivate={true}
            permissionDialogMessage="Need Permission To Access Camera"
            reactivateTimeout={2000}
            showMarker={true}
            markerStyle={{borderColor: "#FFF", borderRadius: 10}}

            bottomContent={
                <View style={styles.footer}>
                    <Text style={{fontSize: 21, color: '#1f65ff'}}>Scan QR Code</Text>
                    {/*<Text>{state.qrdata}</Text>*/}
                </View>
            }/>
    )

}
export default QRCodeScreen;
const styles = StyleSheet.create({
    containerStyle: {
        flex: 2,     //getting 2/3 of the screen
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: "100%"
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,   //for curves
        paddingVertical: 50,
        paddingHorizontal: 30
    },
});