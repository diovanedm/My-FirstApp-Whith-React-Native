import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      activeOpacity={1}
    >
    <Text style={ styles.textSkill }>
       {skill} 
    </Text>
    </TouchableOpacity>  
  );
}

export default SkillCard;

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: 'center',
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
})