import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);  //for removing the warning which might slow down the functioning of the the app
import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
  
} from 'react-native';

export default class App extends Component{

  constructor(){
    super()
    this.state={
       resultText:"",
       calculationsText:""
    }
    
    this.operations=['DEL','+','-','*','/']    //passing operations to the constructor
   
  }
  calculateResult(){
    const text=this.state.resultText
   // console.log(text)
    //now parse this text
    //use BODMAS
    this.setState({
      calculationsText:eval(text)
    })
    //eval is a special cheat for js for just to evaluate the string as a JS,rather than splitting the string into the array and checking for BODMAS

  }

  validate(){
    const text=this.state.resultText
    switch(text.slice(-1)){
      case '+':
        case '-':
          case '*':
            case '/':
              return false
        
    }
    return true
  }

  buttonPressed(text){
  //console.log(text)

    if(text =='='){
      return this.validate() && this.calculateResult()
    }//adding validate function so that if validate is true than only '=' will work

    this.setState({ 
      resultText:this.state.resultText+text})
}
  
operate(operations){
  switch(operations){
    case 'DEL':
       console.log(this.state.resultText)
       const text =this.state.resultText.split('')
       text.pop()                //to delete from the last character
       //test.join('')
       this.setState({
         resultText:text.join('')                     
       })
       break
    case '+':
    case '-':
    case '*':
    case '/':

       const lastChar=this.state.resultText.split('').pop()    //for tokenize the numbers
    
       if(this.operations.indexOf(lastChar)>0){return}      //we cannot try two operations on the screen continuously

       if(this.state.text=="") {return}   
       this.setState({
         resultText:this.state.resultText + operations
       })
  }
}

  render(){
    let rows=[]
    let nums =[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for(let i=0;i<4;i++){
      let row=[]
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity key={nums[i][j]} onPress={()=>this.buttonPressed(nums[i][j])}style={styles.btn}>
          <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }   //adding key=nums[i][j] in touchableopacity for JS warning

      rows.push(<View key={i} style={styles.row}>{row}</View>)   //adding key={i} for JS warning
    }
    let ops=[]          
    for(let i=0;i<5;i++)           //by this.operation we are making it class property
    {
      ops.push(<TouchableOpacity key={this.operations[i]} style={styles.btn } onPress={()=>this.operate(this.operations[i])}>     
        <Text style={!styles.btntext,styles.white}>{this.operations[i]}</Text>
      </TouchableOpacity>)                             //TouchableOpacity is better than button
    
    }   //key={this.operations[i]} for JS warning
   
    //1){this.state.calculationsText} used in styles.calculationsText is defined above
   
    return(
      <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>        
          <View style={styles.calculations}>
            <Text style={styles.calculationsText}>{this.state.calculationsText}</Text>   
          </View>  
          <View style={styles.buttons}>   
          <View style={styles.numbers}>
             {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
          </View>
      </View>
    );
  }
}

const styles =StyleSheet.create({
    container:{
      flex:1
    },
    resultText:{
      fontSize:50,
      color:'black' 
    },
    btntext:{
      fontSize:25,
      color: 'white'
    },
    white:{                    //for operation colours
      color:'white',
      fontSize:25
    },
    btn:{
      flex:1,
      alignItems:'center',
      alignSelf:'stretch',
      justifyContent:'center',
    },
    calculationsText:{
      fontSize:45,
      color:'rgb(168, 168, 168)'
    },
    row:{
      flexDirection:'row',
      flex:1,
      justifyContent:'space-around',
      alignItems:'center'
    },
    result:{
      flex:2,
      backgroundColor: 'white',
      justifyContent:'center',
      alignItems:'flex-end'
    },
    calculations:{
      flex:1,
      backgroundColor: 'white', 
      justifyContent:'center',
      alignItems:'flex-end'
    
    },
    buttons:{
      flex:7,
      flexDirection: 'row'
    },
    numbers:{
      flex:3,
      backgroundColor: 'rgb(60, 64, 66)'
      
    },
    operations:{
      flex:1,
      justifyContent:'space-around',
      alignItems:'stretch',
      backgroundColor: 'rgb(95, 98, 103)'
    },
    


})
