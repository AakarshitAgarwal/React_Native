import React,{Component} from 'react';
import {  AppRegistry,Dimensions, Image,Platform,TouchableWithoutFeedback,Keyboard, PixelRatio,StyleSheet, TextInput,TouchableOpacity ,ScrollView,  View,  Text,  StatusBar, KeyboardAvoidingView,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animation from 'lottie-react-native';
import anim from '../src/rupee.json';


var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

 export default class paymentbill extends Component{
    constructor(props){
        super(props)
    }
      componentDidMount() {
        this.animation.play();
      }

  render() {
    const {item} = this.props.route.params

    var date = new Date().getDate();
    var month = monthNames[new Date().getMonth()];
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var TimeType;
    if(hour <= 11)
    {
      TimeType = 'AM';
    }
    else
    {
        TimeType = 'PM';
    }
    if( hour > 12 )
    {
      hour = hour - 12;
    }
    if( hour == 0 )
    {
        hour = 12;
    } 
    var min = new Date().getMinutes();
    if(min<9)
    {
        if(min==0)
            min='00'
        if(min>0)
            min='0'+min;
    }

    var gst=17,tds=1;
    var tot=item.amt-gst-tds;
    return(
        // <ImageBackground
        // source={require('../src/B1NEW.png')}
        // style={styles.container}>
      <View style={{flex:1,backgroundColor:'#FFF'}}>
          <StatusBar backgroundColor = "#000000" barStyle = "light-content"/>
        
        <View style={{flexDirection:'row',marginTop:hp('1%'),justifyContent:'center'}}>
            
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Image source={require('../src/tick.png')}
                style={{alignSelf:'center',width: wp('8%'),height:wp('8%'),marginRight:wp('7%')}}/>
            <Text style={{ alignSelf:'center',fontSize:wp('8%'),color:'#000000',fontWeight:'bold',marginVertical:hp('1%')}}>Donation Completed</Text>
            </View>

        </View>

        <View style={{marginTop:hp('2%')}}>
            <Text style={{color:'#000000',alignSelf:'flex-end',marginRight:wp('15%'),fontSize:wp('4%'),marginVertical:hp('-3%')}}>{date} {month} , {year} [ {hour} : {min} {TimeType} ]</Text>
             </View>
        
        <View style={{marginHorizontal:wp('15%'),marginVertical:hp('1%')}}>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                <Text style={{fontSize:wp('5%'),color:'#000000'}}>Paytm Collected</Text>
                <Image source={require('../src/paytm.png')}
                    style={{width: wp('10%'),height:wp('10%')}}/>
                </View>
            <Text style={{fontSize:wp('5%'),color:'#000000',margin:wp('1%'),alignSelf:'center'}}>₹{item.amt}</Text>
            </View>

           
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:wp('5%'),color:'#000000',margin:wp('1%'),fontWeight:'bold'}}>Driver Name</Text>
        <Text style={{fontSize:wp('5%'),color:'#000000',margin:wp('1%')}}>{item.drivername}</Text>
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#808080'}}>
                <Text style={{fontSize:wp('5%'),color:'#000000',margin:wp('1%'),fontWeight:'bold'}}>Taxi Number</Text>
        <Text style={{fontSize:wp('5%'),color:'#000000',margin:wp('1%')}}>{item.taxino}</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#808080',borderBottomWidth:1}}>
                <Text style={{fontSize:wp('5%'),color:'#000000',margin:wp('1%'),marginBottom:wp('3%'),fontWeight:'bold'}}>NGO Name</Text>
        <Text style={{fontSize:wp('5%'),color:'#000000',margin:wp('1%'),marginBottom:wp('3%')}}>Nanda ki chowki</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:wp('5%'),color:'#000000',margin:wp('1%')}}>GST</Text>
                <Text style={{fontSize:wp('5%'),color:'#000000',margin:wp('1%')}}>-₹{gst}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#808080',borderBottomWidth:1}}>
                <Text style={{fontSize:wp('5%'),color:'#000000',margin:wp('1%'),marginBottom:wp('3%')}}>TDS</Text>
                <Text style={{fontSize:wp('5%'),color:'#000000',margin:wp('1%'),marginBottom:wp('3%')}}>-₹{tds}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontWeight:'bold',fontSize:wp('5%'),color:'#000000',margin:wp('1%')}}>Total</Text>
                <Text style={{fontWeight:'bold',fontSize:wp('5%'),color:'#000000',margin:wp('1%')}}>₹{tot}</Text>
            </View>
    
        </View>

        <View style={{alignItems:'center'}}>
            <Text style={{color:'#000000',fontSize:wp('4%'),fontWeight:'bold'}}>
                Total Donation:
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Animation
                ref={animation => { this.animation = animation;}}
                style={{alignSelf:'center',width: wp('13%'),height:wp('13%'),marginRight:wp('0%')}}
                loop={true}
                source={anim}
            />
            <Text style={{color:'#000000',fontWeight:'bold',fontSize:wp('15%')}}>
             {tot}
            </Text>
            </View>
        </View> 
        <View>
        <ImageBackground
         source={require('../src/B2NEW.png')}
         style={{alignSelf:'center',width: wp('60%'),height:wp('60%'),marginRight:wp('0%')}}>

         </ImageBackground>
         <View>
                <Text style={{fontSize:wp('5%'),color:'#d02860',alignSelf:'center',fontWeight:'bold',marginVertical:hp('1%')}}>Thank you for your Donation</Text>
              
                </View>

        </View>

 </View>
    );
  }
}


const styles = StyleSheet.create({

    MainContainer: {
    flex: 1,
    // Set content's vertical alignment.
    justifyContent: 'center',
    // Set content's horizontal alignment.
    alignItems: 'center', 
    // Set hex color code here.
    backgroundColor: '#FFEB3B',
    },
   
    container: {
      flex: 1, 
      width:'100%',
      height:'100%',
    },
    overlaycontainer:{
      flex:1,
      backgroundColor:'rgba(255, 72, 88,0.1)'
  
    },
  });


