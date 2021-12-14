import React, { useState, } from "react";
import {Button, Text, View, TextInput, Linking} from "react-native";
import GradientButton from 'react-native-gradient-buttons';
import Axios from 'axios'

const Chenshan = () => {
    const[result, setResult] = useState({})
    const[input, setInput] = useState("")
    const[output, setOutput] = useState("")
    const[wordList, setWordList] = useState([])
    const[tokens, setTokens] = useState([])
    const[senti, setSenti] = useState(-1)
    
    const appURL = 'https://bedb-35-247-74-49.ngrok.io'

    const Singleword = (word, flag) => {
        if (flag == 1) {
            return (
                <Text onPress={() => Linking.openURL('https://www.google.com/search?q=' + word + '&source=lnms&tbm=isch&sa=X&ved=2ahUKEwia0pnx58P0AhX-jIkEHfZiAysQ_AUoAXoECAMQAw&biw=1920&bih=969&dpr=1')}>{word}</Text>
            )
        } else {
            return (
                <Text>{word}</Text>
            )
        }
    }

    const Output = () => {
        if (senti == 0) {
            return (
                <View style={{marginTop: 20, height: '90%', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#7180B7'}}>
                {
                    wordList.map((word, index) => {
                        return (
                            <View style={{flexDirection: 'row'}}>
                                <View style={{maxHeight: '20'}}>
                                    {
                                    tokens[index] == 1 ? 
                                        <Text style={{backgroundColor: '#EBD3C4', fontSize: 20, fontWeight: 'bold'}} onPress={() => Linking.openURL('https://www.google.com/search?q=' + word + '&source=lnms&tbm=isch&sa=X&ved=2ahUKEwia0pnx58P0AhX-jIkEHfZiAysQ_AUoAXoECAMQAw&biw=1920&bih=969&dpr=1')}>{word}</Text>
                                    :
                                        <Text style={{fontSize: 20}}>{word}</Text>
                                    }
                                </View>
                                <Text style={{fontSize: 20}}> </Text>
                            </View>
                        )
                    })
                }
            </View>
            )
        } else if (senti == 1) {
            return (
                <View style={{fontSize:20, lineHeight:34, marginBottom: 20, marginTop: 20, height: '90%', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#A1B4C3'}}>
                {
                    wordList.map((word, index) => {
                        return (
                            <View style={{flexDirection: 'row'}}>
                                <View style={{maxHeight: '20'}}>
                                    {
                                    tokens[index] == 1 ? 
                                        <Text style={{backgroundColor: '#EBD3C4', fontSize: 20,  fontWeight: 'bold'}} onPress={() => Linking.openURL('https://www.google.com/search?q=' + word + '&source=lnms&tbm=isch&sa=X&ved=2ahUKEwia0pnx58P0AhX-jIkEHfZiAysQ_AUoAXoECAMQAw&biw=1920&bih=969&dpr=1')}>{word}</Text>
                                    :
                                        <Text style={{fontSize: 20}}>{word}</Text>
                                    }
                                </View>
                                <Text style={{fontSize: 20}}> </Text>
                            </View>
                        )
                    })
                }
                </View>
            )
        } else if (senti == 2) {
            return (
                <View style={{fontSize:20, lineHeight:34, marginBottom: 20, marginTop: 20, height: '90%', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#D5AB9E'}}>
                {
                    wordList.map((word, index) => {
                        return (
                            <View style={{flexDirection: 'row'}}>
                                <View style={{maxHeight: '20'}}>
                                    {
                                    tokens[index] == 1 ? 
                                        <Text style={{backgroundColor: '#EBD3C4' ,fontSize: 20, fontWeight: 'bold'}} onPress={() => Linking.openURL('https://www.google.com/search?q=' + word + '&source=lnms&tbm=isch&sa=X&ved=2ahUKEwia0pnx58P0AhX-jIkEHfZiAysQ_AUoAXoECAMQAw&biw=1920&bih=969&dpr=1')}>{word}</Text>
                                    :
                                    <Text style={{fontSize: 20}}>{word}</Text>
                                    }
                                </View>
                                <Text style={{fontSize: 20}}> </Text>
                            </View>
                        )
                    })
                }
                </View>
            )
        } else {
            return (
            <View style={{borderColor:'black',borderWidth:1,fontSize:20, lineHeight:34, marginBottom: 20, marginTop: 20, height: '90%', flexDirection: 'row', flexWrap: 'wrap'}}>
                <Text style={{fontSize: 20, color: 'grey'}}> Waiting for input ......</Text>
            </View>)
        }
    }

    const getData = async () => {
        const z = await Axios.get(appURL + '/predict?text=' + input)
        setResult(z.data)
        setTokens(z.data.tokens)
        setWordList(z.data.word_list)
        setSenti(z.data.senti)
        console.log(z.data)
        console.log(z.data.tokens)
        console.log(z.data.word_list)
    }

    return (
        <View style={{flexDirection: 'column', flex: 3.5, width: '100%', alignItems:'center'}}>
            
            <View style={{flex:0.35, justifyContent:'center'}}>
                <Text style={{fontSize:37}}>🍬MediReview💊</Text>
            </View>

            <View style={{flex:1, width:'80%'}}>
                <View style={{marginBottom: 20, marginTop: 20, flex:1 }}>
                    <TextInput multiline={true} style={{height: '100%', borderWidth : 1.2, fontSize:20, lineHeight:34}} placeholder="Enter your input here" onChangeText={text => setInput(text)} value={input}/>
                </View>
            </View>
            
            <View style={{flex:1, width:'80%'}}>
                <Output/>
            </View>

            <View style={{flex:0.65, justifyContent:'space-evenly', alignItems: 'flex-start', width: "80%"}}>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Text style={{fontSize:20}}>Neg:   </Text>
                    <View style={{width:60, height:'100%', backgroundColor:'#7180B7', borderRadius:5}}>
                    <Text style={{fontSize:20}}>🤯</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Text style={{fontSize:20}}>Neu:   </Text>
                    <View style={{width:60, height:'100%', backgroundColor:'#A1B4C3', borderRadius:5}}>
                    <Text style={{fontSize:20}}>🤨</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Text style={{fontSize:20}}>Pos:    </Text>
                    <View style={{width:60, height:'100%', backgroundColor:'#D5AB9E', borderRadius:5}}>
                    <Text style={{fontSize:20}}>😆</Text>
                    </View>
                </View>
            </View>

            <View style={{flex:0.5, justifyContent: 'flex-start', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <View style={{marginLeft: 10, marginRight: 10, minWidth: '50%'}}>
                        <GradientButton 
                            gradientBegin= "#eecba5"
                            gradientEnd= "#D2D0F5"
                            gradientDirection="diagonal"
                            impact
                            impactStyle='Light'
                            textStyle={{ fontSize: 23 }}
                            radius={15}
                            height={61.8}
                            text='Random'
                            onPressAction = {() => {getData(input)}}/>
                    </View> */}
                    <View style={{marginLeft: 10, marginRight: 10, minWidth: '65%'}}>
                        <GradientButton 
                            gradientBegin= "#eecba5"
                            gradientEnd= "#D2D0F5"
                            gradientDirection="diagonal"
                            impact
                            impactStyle='Light'
                            textStyle={{ fontSize: 23 }}
                            radius={15}
                            height={61.8}
                            text='🔥Light_Up'
                            onPressAction = {() => {getData(input)}}/>
                    </View>
                    <View style={{marginLeft: 10, marginRight: 10, minWidth: '50%'}}>
                        <GradientButton 
                            gradientBegin="#E9E1DE"
                            gradientEnd= "#E9E1DE"
                            gradientDirection="diagonal"
                            impact
                            impactStyle='Light'
                            gradientDirection="diagonal"s
                            radius={15}
                            textStyle={{ fontSize: 23 }}
                            // color='red'
                            text='💨Clear'
                            height={61.8}
                            onPressAction = {() => {setInput(""), setOutput("")}}/>
                    </View>
                </View>
                <Text style={{fontSize: 13, marginTop: 25}}>©️217 project by Shan Chen</Text>
            </View>
        </View>
    )
}

export default Chenshan;