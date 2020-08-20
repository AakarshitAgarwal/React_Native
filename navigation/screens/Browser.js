import React from "react";
import {
    Text,
    View,
} from "react-native";
import {WebView} from 'react-native-webview';

const Browser = (props) => {

    const {NGO,amount}=props.route.params

    return (
        <View style={{
            flex: 1
        }}>
            <WebView
                source={{uri: 'https://google.com/'}}
                showsVerticalScrollIndicator={false}
            />
            <View style={{
                flex:1,
            }}>
                <Text>{NGO+" "+amount}</Text>
            </View>
        </View>
    );
};

export default Browser;
