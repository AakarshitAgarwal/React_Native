import React from 'react';
import {Linking,Text,TouchableOpacity,Alert,StyleSheet,View} from "react-native";
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCodeScreen extends React.Component{
  state={
    qr:""
  }
  ifScanned= e=>{
    Linking.openURL(e.data).catch(err=>
      Alert.alert(e.data));
      this.setState({qr:e.data})
  }

  render(){
    return(
      <QRCodeScanner
      // containerStyle={{backgroundColor:"#FFF",marginBottom:"35%"}}
      onRead={this.ifScanned}
      reactivate={true}
      permissionDialogMessage="Need Permission To Access Camera"
      reactivateTimeout={10}
      showMarker={true}
      markerStyle={{borderColor:"#FFF",borderRadius:10}}
      
      bottomContent={
        <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={{fontSize:21,color:'#1f65ff'}}>Scan QR Code</Text>
          <Text>{this.state.qr}</Text>
          
        </TouchableOpacity>
        </View>
      }/>
    )
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 2,     //getting 2/3 of the screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom:"100%"
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