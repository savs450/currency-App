import React,{useState} from 'react';
import {Text, View,
ScrollView,
TouchableOpacity,
SafeAreaView,
StyleSheet,
TextInput,
Alert     /*react native snack bar */
 } from 'react-native';

 import Snackbar from 'react-native-snackbar'

const currencyPerRupee = {
  DOLLAR : 0.014,
  EURO : 0.012,
  POUND : 0.011,
  RUBEL : 0.93,
  AUSDOLLAR : 0.2,
  CANDOLLAR : 0.019,
  YEN: 1.54,
  DINAR : 0.0043,
  BITCOIN : 0.000004
}
 const App = () =>{
   const [input, setInput] = useState(0);
   const [result, setResult] = useState(0);

   const btnpressed = (currency) => {
     if(!input ){
       return Snackbar.show({
         text:"Please enter a value",
         backgroundColor:"#EA7773",
         textColor : "#000000",
         duration : Snackbar.LENGTH_SHORT,
       })
     }
     let resultV = parseFloat(input) * currencyPerRupee[currency]
     setResult(resultV.toFixed(2));
     setInput(0);
   }
   return  (
     <>
       <ScrollView backgroundColor = "#120E43"
       keyboardShouldPersistTaps = "handled" 
       contentInsetAdjustmentBehavior="automatic">
         <SafeAreaView style={styles.container}>
           <View style={styles.resultContainer}>
             <Text style={styles.resultValue}>{result}</Text>
           </View>
           <View style={styles.inputContainer}>
             <TextInput
             style = {styles.input}
             keyboardType =  "numeric"
             placeholder = "Enter Value"
             placeholderTextColor = "#c1c1c1" 
             value= {input}
             onChangeText={(input)=> setInput(input)}>
             </TextInput>
           </View>
           <View style= {styles.convertBtnContainer}>
             {Object.keys(currencyPerRupee).map((currency) =>(
               <TouchableOpacity
               onPress={()=>{btnpressed(currency)}}>
                 <Text style={styles.btntext}>{currency}</Text>
               </TouchableOpacity>
             ))}
           </View>          
         </SafeAreaView>
       </ScrollView>
     </>
   )
 }
export default App;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor:"#120E43"
  },
  resultContainer : {
    height : 70,
    marginTop : 80,
    justifyContent : "center",
    borderColor : "#bbe1fa",
    borderWidth : 2,
    alignItems : "center"
  },
  resultValue : {
    fontSize : 30,
    color : "#FFFFFF",
    fontWeight : "bold"
  },
  inputContainer : {
    height: 70,
    marginTop : 10,
    alignItems: "center",
    justifyContent :"center",
    borderWidth : 2,
    borderColor: "#bbe1fa"
  },
  input : {
    fontSize : 30,
    textAlign : "center",
    color : "#FFFFFF",
  },
  convertBtnContainer:{
    flexDirection : "row",
    flexWrap :"wrap",
    marginTop: 10,
  },
  btntext:{
    color: "#FFFFFF",
    fontSize: 18
  },
  converterbtn:{
   alignItems: "center",
   justifyContent:"center",
   height:100,
   width: "33.33%",
   borderWidth: 2,
   borderColor:"#bbe1fa",
   marginTop: 10,
   backgroundColor:"#51E1ED",

  }
})