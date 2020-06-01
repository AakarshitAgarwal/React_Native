import {Modal, Text, TouchableOpacity, View} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import {Card} from "react-native-elements";
import React from "react";
import styles from "../styles/styles";
import * as Animatable from 'react-native-animatable';
import {NGOContext} from '../components/context';

const NGOcard = (props) => {
    return (
        // <Animatable.View animation='bounceInLeft' duration={3000}>
        <Card>
            <View style={{
                // borderWidth: 2,
                // borderColor: 'red',
                height: 150,
            }}>
                <View style={{
                    flex: 4,
                    flexDirection: 'row',
                    // borderWidth: 2,
                    // borderColor: 'red',
                    justifyContent: "center",
                }}>
                    <View style={{
                        flex: 3,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        marginRight: 10,
                        alignItems: 'center',
                        // borderWidth: 2,
                        // borderColor: 'red',
                    }}>
                        {/*<Icon style={{color: 'black',}} size={50} name={"android-head"}/>*/}
                        <FontAwesome5Icon name={'people-carry'} size={50} style={{color: 'black'}}/>
                    </View>
                    <View style={{
                        flex: 8,
                        alignItems: "flex-end",
                        justifyContent: 'center'
                    }}>
                        <Text style={styles.NGOText}>
                            {props.item.name}
                        </Text>
                        <View style={styles.DescriptionText}>
                            <Text style={{
                                opacity: 0.5,
                            }}>
                                {props.item.location}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    borderBottomWidth: 2,
                    borderColor: 'grey',
                }}/>
                <TouchableOpacity style={{
                    flex: 1,
                    marginTop: 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // borderWidth: 2,
                    // borderColor: 'red',
                }} onPress={()=>props.click(props.item)}>
                    <Text style={[styles.NGOText, {
                        paddingLeft: 5,
                        paddingTop: 5,
                    }]}>
                        more info
                    </Text>
                    <FontAwesome5Icon name={'angle-right'} size={15} style={{
                        paddingRight: 5,
                        paddingTop: 5
                    }}/>
                </TouchableOpacity>
            </View>
        </Card>
        // </Animatable.View>
    )

}
export default NGOcard;