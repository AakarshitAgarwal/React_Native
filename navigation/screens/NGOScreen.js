import React, {useCallback, useEffect, useState} from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    Modal,
    ScrollView, Image,
} from 'react-native';
import styles from "../styles/styles";
import NGOcard from "../components/NGOcard";
import axios from 'axios';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import * as Animatable from 'react-native-animatable';

const NGOScreen = () => {

    const [data, setData] = useState({
        NGOdata: [],
    })

    const [modal, setModal] = useState({
        NGOselected: [],
        modalVisible: false,
    })

    useEffect(() => {
        axios.get('http://192.168.43.77:8000/NGO/')
            .then(function (response) {
                let list = []
                for (let i in response.data) {
                    list = [...list, response.data[i]]
                }
                setData({
                    ...data,
                    NGOdata: list,
                })
            }).catch(error => {
            console.log(error.response)
        });
    }, [modal.NGOselected])

    const clickEventListener = useCallback((item) => {
        setModalVisible(true, item)
    }, [])

    const setModalVisible = (visible, item) => {
        setModal({
            ...modal,
            NGOselected: item,
            modalVisible: visible,
        });
    }

    return (
        <View style={styles.NGOContainer}>
            <View style={styles.NGOList}>
                {/* <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => `${item.NGO_id}`}
                    data={[...data.NGOdata]}
                    renderItem={({item}) => <Animatable.View animation={"fadeIn"} duration={1000}><NGOcard item={item} click={clickEventListener}/></Animatable.View>}
                /> */}
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    onRequestClose={() => setModalVisible(false, [])}
                    visible={modal.modalVisible}
                >
                    <View style={styles.popupOverlay}>
                        <View style={styles.popup}>
                            <View style={styles.popupContent}>
                                <Animatable.View
                                    animation={"fadeInLeft"}
                                    duration={1000}
                                    style={styles.modalAnimationView}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalVisible(false, [])
                                        }}>
                                        <FontAwesome5Icon name={'times'} color={'gray'} size={25}/>
                                    </TouchableOpacity>
                                </Animatable.View>
                                <ScrollView
                                    contentContainerStyle={styles.modalInfo}
                                >
                                    <Image style={styles.image}
                                           source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                                    <Text style={styles.name}>{modal.NGOselected.name}</Text>
                                    <Text style={styles.type}>{modal.NGOselected.type}</Text>
                                    <Text style={styles.about}>{modal.NGOselected.description}</Text>
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

export default NGOScreen;