import React, {useEffect, useState} from 'react';
import {View, Text,TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import styles from "../styles/styles";
import RadioGroup, {Radio} from "react-native-radio-input";
import Browser from "./Browser";

const Payment = (props) => {
    const {qrData} = props.route.params;

    const [name, setNames] = useState({
        NGO_names: [],
        driver_name: '',
    })

    const [check, setCheck] = useState({
        selected: [],
    })

    const [amount, setAmount] = useState({
        payableamount: 0,
    })

    useEffect(() => {
        axios.get('http://192.168.29.77:8000/driver/' + qrData)
            .then(function (response) {
                // for (let i in response.data) {
                //     list = [...list, response.data.Ngo_name]
                // }
                let list = response.data.Ngo_name
                setNames({
                    ...name,
                    NGO_names: list,
                    driver_name: response.data.driverName,
                })
            }).catch(error => {
            console.log(error.response)
        });
    }, [])

    const getChecked = (value) => {
        // value = our checked value
        setCheck({
            selected: value,
        })
    }

    return (
        <View style={styles.NGOContainer}>
            <View style={[styles.NGOList, {}]}>
                <View style={{
                    alignItems: "center",
                }}>
                    <Text style={{
                        fontSize: 20,
                        padding: 10,
                    }}>
                        {name.driver_name}
                    </Text>
                </View>
                <View style={{
                    marginTop: 50,
                }}>
                    <RadioGroup getChecked={getChecked} RadioStyle={{
                        backgroundColor: 'white',
                        margin: 5,
                        borderRadius: 5,
                    }}>
                        {name.NGO_names.map((item, key) => (
                            <Radio label={`${item}`} value={`${item}`}/>
                        ))}
                    </RadioGroup>
                </View>
                <View style={styles.viewPay}>
                    <TextInput
                        placeholder={"Amount to Pay"}
                        style={styles.textInputPay}
                        onChangeText={(text) => {
                            setAmount({
                                payableamount: text,
                            })
                        }}
                        underlineColorAndroid={'transparent'}
                        textContentType={"telephoneNumber"}/>
                    <TouchableOpacity
                        style={styles.buttonPay}
                        onPress={() => {
                            props.navigation.navigate('Browser', {
                                NGO:check.selected,
                                amount:amount.payableamount,
                            })
                        }}
                    >
                        <Text>
                            {'Pay Rs.' + amount.payableamount}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        // <View>{console.log(name)}</View>
    );
};
export default Payment;

