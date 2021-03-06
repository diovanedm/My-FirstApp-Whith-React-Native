import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  Vibration,
  FlatList,
  StatusBar
} from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

export const Home = () => {
  const [ newSkill, setNewSkill ] = useState()
  const [ mySkills, setMySkills] = useState([])




  const handleNewMySkill = () => {
    Vibration.vibrate(100)
    setMySkills([...mySkills, newSkill])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome, Diovane </Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite uma skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleNewMySkill}/>

      <Text style={[ styles.title, {marginTop: 30, marginBottom: 15} ]}>
        My Skills 
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item}/> 
        )}
      />

    </View>
  )
}                        
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    backgroundColor: '#121015'
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  }, 
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
})