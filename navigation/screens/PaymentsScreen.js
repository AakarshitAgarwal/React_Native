import React,{Component} from 'react';
import {  Dimensions,Image, Platform,TouchableWithoutFeedback,Keyboard, PixelRatio,StyleSheet, TextInput,TouchableOpacity ,ScrollView,  View,  Text,  StatusBar, KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';


export default class PaymentsScreen extends Component{

  render() {
        var currbal=1200;
        var rides =[
            {
                id:0,
                taxino:'UP 420',
                taximodel:'Sedan',
                drivername:'Anand',
                rating:'8.0',
                amt:'418'
            },
            {
                id:1,
                taxino:'UP 336 AL',
                taximodel:'Sedan',
                drivername:'Aman',
                rating:'8.0',
                amt:'400'
            },
            {
                id:2,
                taxino:'UT 231',
                taximodel:'Sedan',
                drivername:'Amit',
                rating:'8.0',
                amt:'320'
            },
            {
                id:3,
                taxino:'UK 536',
                taximodel:'Sedan',
                drivername:'Anand',
                rating:'8.0',
                amt:'420'
            },
            {
                id:4,
                taxino:'UK 536',
                taximodel:'Sedan',
                drivername:'Anand',
                rating:'8.0',
                amt:'363'
            },
            {
                id:5,
                taxino:'UK 536',
                taximodel:'Sedan',
                drivername:'Anand',
                rating:'8.0',
                amt:'363'
            }
        ];
      
    return(
        
    <View style={{ flex:1,backgroundColor:'#FFF'}}>
        <StatusBar backgroundColor = "#000000" barStyle = "light-content"/>
            
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{alignSelf:'center',color:'#000000',fontSize:wp('6%'),marginVertical:wp('4%')}}> TOTAL DONATION</Text>
            </View>

            <Text style={{alignSelf:'center',color:'#000000',fontSize:wp('15%'),fontWeight:'bold',marginVertical:wp('-3%')}}>₹ {currbal}</Text>

        <ScrollView>
        <View style={{ backgroundColor:'#FFF'}}>
        {
            rides.map((item) => (
            <Card 
                style={{ borderRadius:wp('6%'),padding:wp('4%'),marginLeft:wp('3%'),marginRight:wp('3%'),marginVertical:wp('2%'),width:wp('94%'),elevation:8}}
                key = {item.id}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../src/car.png')}
                            style={{alignSelf:'center',width: wp('12%'),height:wp('10%'),marginRight:wp('4%')}}/>
                        <View>
                        <Text style={{alignSelf:'center',fontSize:wp('5%')}}>
                            {item.taxino}
                        </Text>
                        <Text style={{alignSelf:'flex-start',fontSize:wp('3.5%')}}>
                            {item.taximodel}
                        </Text>
                        </View>
                    </View>
                    <Text style={{alignSelf:'center',fontSize:wp('6%'),color:'#11598f',fontWeight:'bold'}}>
                    ₹ {item.amt}
                    </Text>

                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../src/driver1.png')}
                            style={{alignSelf:'center',width: wp('10%'),height:wp('10%'),marginRight:wp('6%'),marginVertical:wp('2%')}}/>
                        <View>
                        <Text style={{alignSelf:'center',fontSize:wp('5%'),marginVertical:wp('2%')}}>
                            {item.drivername}
                        </Text>
                        <Text style={{alignSelf:'flex-start',fontSize:wp('3.5%'),marginVertical:wp('-2%')}}>
                            {item.rating}/10
                        </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{justifyContent:'center'}}
                         onPress={()=>this.props.navigation.navigate('paymentbill',{item})}>
                        <Text style={{color:'#165686',alignSelf:'center',fontSize:wp('4%'),fontWeight:'bold'}} >View Details →</Text>
                    </TouchableOpacity>

                </View>

            </Card>
            ))
        }
        </View>
        </ScrollView>
    </View>
    
    );
  }
}