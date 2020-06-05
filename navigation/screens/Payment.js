import React, {useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import {CheckBox} from "react-native-elements";

const Payment = (props) => {
    const {qrData} = props.route.params;

    //TODO later on work when API will be completed
    // const passData = () => {
    //     axios.post()
    // }

    const [check, setCheck] = useState({
        checked: false,
    })

    const toggleCheck = () => {
        setCheck({
            ...check,
            checked: !check.checked,
        })
    }
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <CheckBox
                center
                title={<Text>{qrData} under progress</Text>}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                onPress={toggleCheck}
                checked={check.checked}
            />
        </View>
    );
};
export default Payment;

