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
       resultText:""
    }
  }
  calculateResult(){
    const text=this.state.resultText
    //now parse this text
  }

  buttonPressed(text){
  console.log(text)

    if(text =='='){
      return this.calculateResult()
    }

    this.setState({ 
      resultText:this.state.resultText+text})
}
  
operate(operations){
  switch(operations){
    case 'D':
       console.log(this.state.resultText)
       const text =this.state.resultText.split('')
       text.pop()
       //test.join('')
       this.setState({
         resultText:text.join('')
       })
  }
}

  render(){
    let rows=[]
    let nums =[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for(let i=0;i<4;i++){
      let row=[]
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity onPress={()=>this.buttonPressed(nums[i][j])}style={styles.btn}>
          <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }
    let operations=['D','+','-','=','/']
    let ops=[]
    for(let i=0;i<5;i++){
      ops.push(<TouchableOpacity style={styles.btn } onPress={()=>this.operate(operations[i])}>
        <Text style={!styles.btntext,styles.white}>{operations[i]}</Text>
      </TouchableOpacity>)
    
    }
    return (
      <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculations}>
            <Text style={styles.calculationsText}>121</Text>
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
      fontSize:30,
      color:'white'
    },
    btntext:{
      fontSize:30,
    },
    white:{
      color:'white',
      fontSize:30
    },
    btn:{
      flex:1,
      alignItems:'center',
      alignSelf:'stretch',
      justifyContent:'center'
    },
    calculationsText:{
      fontSize:24,
      color:'white'
    },
    row:{
      flexDirection:'row',
      flex:1,
      justifyContent:'space-around',
      alignItems:'center'
    },
    result:{
      flex:2,
      backgroundColor: 'red',
      justifyContent:'center',
      alignItems:'flex-end'
    },
    calculations:{
      flex:1,
      backgroundColor: 'green', 
      justifyContent:'center',
      alignItems:'flex-end'
    
    },
    buttons:{
      flex:7,
      flexDirection: 'row'
    },
    numbers:{
      flex:3,
      backgroundColor: 'yellow'
    },
    operations:{
      flex:1,
      justifyContent:'space-around',
      alignItems:'stretch',
      backgroundColor: 'black'
    },
    


})
