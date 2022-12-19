import { TouchableOpacity, Text, View, Modal, TextInput } from 'react-native'
import React from 'react'
import {styles} from './css/modal'
import {s} from './css/t__2'
import Square from './Square'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';



import { Audio } from 'expo-av';

const Table__two = () => {

    const [teamb, setTeamB] = React.useState('Team B')

    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)
    const [count3, setCount3] = React.useState(0)
    const [count4, setCount4] = React.useState(0)

    const [count5, setCount5] = React.useState(0)
    const [count6, setCount6] = React.useState(0)
    const [count7, setCount7] = React.useState(0)
    const [count8, setCount8] = React.useState(0)

    const t = count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8

    const [sound, setSound] = React.useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../assets/01.mp3')
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
    }

      React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);
    
      
      
      
      const [sound2, setSound2] = React.useState();

      async function playSound2() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../assets/02.mp3')
        );
        setSound2(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
    }

      React.useEffect(() => {
        return sound2
          ? () => {
              console.log('Unloading Sound');
              sound2.unloadAsync();
            }
          : undefined;
      }, [sound2]);
    
      
      
      const [sound5, setSound5] = React.useState();
    
      async function playSound5() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../assets/05.mp3')
        );
        setSound5(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
    }

      React.useEffect(() => {
        return sound5
          ? () => {
              console.log('Unloading Sound');
              sound5.unloadAsync();
            }
          : undefined;
      }, [sound5]);

      //////////////////////////////

      const [winSound, setWinSound] = React.useState();
    
      async function playWinSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../assets/win.mp3')
        );
        setWinSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
    }

      React.useEffect(() => {
        return winSound
          ? () => {
              console.log('Unloading Sound');
              winSound.unloadAsync();
            }
          : undefined;
      }, [winSound]);

    const Undo = () => {
        if (count1 == 0) {
            setCount1(count1)
        } else if ((count1 == 1 || count1 <= 5) && count2 == 0) {
            setCount1(count1 - 1)      
        } else if ((count2 == 1 || count2 <= 5) && count3 == 0) {
            setCount2(count2 - 1) 
        } else if ((count3 == 1 || count3 <= 5) && count4 == 0) {
            setCount3(count3 - 1) 
        } else if ((count4 == 1 || count4 <= 5) && count5 == 0) {
            setCount4(count4 - 1) 
        } else if ((count5 == 1 || count5 <= 5) && count6 == 0) {
            setCount5(count5 - 1) 
        } else if ((count6 == 1 || count6 <= 5) && count7 == 0) {
            setCount6(count6 - 1) 
        } else if ((count7 == 1 || count7 <= 5) && count8 == 0) {
            setCount7(count7 - 1) 
        } else if ((count8 == 1 || count8 <= 5)) {
            setCount8(count8 - 1) 
        }
    }

    const Counter1 = () => {
        if (count1 == 0 || count1 < 5) {
            setCount1(count1 + 1)      
        } else if (count1 == 5 && (count2 == 0 || count2 < 5)) {
            setCount2(count2 + 1) 
        } else if (count2 == 5 && (count3 == 0 || count3 < 5)) {
            setCount3(count3 + 1) 
        } else if (count3 == 5 && (count4 == 0 || count4 < 5)) {
            setCount4(count4 + 1) 
        } else if (count4 == 5 && (count5 == 0 || count5 < 5)) {
            setCount5(count5 + 1) 
        } else if (count5 == 5 && (count6 == 0 || count6 < 5)) {
            setCount6(count6 + 1) 
        } else if (count6 == 5 && (count7 == 0 || count7 < 5)) {
            setCount7(count7 + 1) 
        } else if (count7 == 5 && (count8 == 0 || count8 < 5)) {
            setCount8(count8 + 1) 
        }
    }


    const Counter5 = () => {
          // count1
          if (count1 == 0) {
            setCount1(count1 + 5)      
        } else if (count1 > 0 && count1 < 5) {
            setCount1(count1 + (5 - count1))
            setCount2(count1)
        } 
        // count2
        else if ( count1 == 5 && count2 == 0) {
            setCount2(count2 + 5)      
        } else if (count2 > 0 && count2 < 5) {
            setCount2(count2 + (5 - count2))
            setCount3(count2)
        } 
        // count3
        else if ( count2 == 5 && count3 == 0) {
            setCount3(count3 + 5 )      
        } else if (count3 > 0 && count3 < 5) {
            setCount3(count3 + (5 - count3))
            setCount4(count3)
        } 
        // count4
        else if (count3 == 5 && count4 == 0) {
            setCount4(count4 + 5 )      
        } else if (count4 > 0 && count4 < 5) {
            setCount4(count4 + (5 - count4))
            setCount5(count4)
        } 
        // count5
        else if (count4 == 5 && count5 == 0) {
            setCount5(count5 + 5)      
        } else if (count5 > 0 && count5 < 5) {
            setCount5(count5 + (5 - count5))
            setCount6(count5)
        } 
        // count6
        else if ( count5 == 5 && count6 == 0) {
            setCount6(count6 + 5)      
        } else if (count6 > 0 && count6 < 5) {
            setCount6(count6 + (5 - count6))
            setCount7(count6)
        } 
        // count7
        else if (count6 == 5 && count7 == 0) {
            setCount7(count7 + 5)      
        } else if (count7 > 0 && count7 < 5) {
            setCount7(count7 + (5 - count7))
            setCount8(count7)
        } 
        // count8
        else if (count7 == 5 && count8 == 0) {
            setCount8(count8 + 5)      
        } else if (count8 > 0 && count8 < 5) {
            setCount8(count8 + (5 - count8))
        } 
    }

    const animation = React.useRef(null);
    React.useEffect(() => {
        if (t == 40) {
            animation.current?.play()
            playWinSound()
        }
      }, [t])


      const cinco = React.useRef(null);

      const [modalVisible, setModalVisible] = React.useState(false)
    const [teamName, setTeamName] = React.useState('Team B')
    
    return (
    <View style={s.container}>
        <Modal
        
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
            <View style={styles.container}>
                   <LottieView
                        style={{width: 200,}}
                        autoPlay
                        source={require('../assets/c_banner.json')}
                    />
                    <TextInput
                    value={teamName}
                    onChangeText={(e) => setTeamName(e)}
                    placeholder={'Write your team name!'}
                    style={styles.input}
                    />
                    <TouchableOpacity style={styles.submit} onPress={() => {setModalVisible(!modalVisible)}}>
                        <Feather name="check" size={28} color="black" />
                    </TouchableOpacity>
                </View>
        </Modal>
        
        <LottieView
        ref={animation}
        loop={true}
        source={require('../assets/works.json')}
      />
      <View style={s.tableWrap}>
        <View style={s.totalWrap}>
            <Text style={{color: 'cyan', fontWeight: 'bold',fontSize: 20,}}>[ {t} ] </Text>
            <Text onPress={() => setModalVisible(!modalVisible)} style={s.total}>{teamName}</Text>
        </View>
            <View style={{width: 200, height: 10, marginVertical: 13}}>
                <LottieView
                        autoPlay
                        source={require('../assets/cyan.json')}
                    />
            </View>
        <View style={s.squares}>
            <Square count={count1}/>
            <Square count={count2}/>
            <Square count={count3}/>
            <Square count={count4}/>
        </View>
        <View style={s.squares}>
            <Square count={count5}/>
            <Square count={count6}/>
            <Square count={count7}/>
            <Square count={count8}/>
        </View>
        
        <View style={s.points}>
            <TouchableOpacity onPress={() => {Counter1(), playSound()}} style={s.point}><Text style={{ color:'white', fontSize: 18, fontWeight: 'bold'}}>1</Text></TouchableOpacity>
            <TouchableOpacity activeOpacity={0.1}  onPress={() => {Counter5(), playSound5(); cinco.current?.play()}} style={s.point5}>
                <MaterialCommunityIcons name="numeric-5" size={40} color="black" />
                <LottieView
                    style={{ width: 150, height: 150, position: 'absolute'}}
                    ref={cinco}
                    loop={false}
                    source={require('../assets/cinco.json')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={Undo} style={s.undo}>
                <Feather name="x-circle" size={45} color="red" />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Table__two

