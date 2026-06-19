import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export type Gender = 'male' | 'female';

export default function GenderSelect({ onSelect }:{ onSelect?: (g:Gender)=>void }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Gender</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => onSelect && onSelect('male')}>
          <Text style={styles.buttonText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onSelect && onSelect('female')}>
          <Text style={styles.buttonText}>Women</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  title: { fontSize:22, fontWeight:'700', marginBottom:16 },
  row: { flexDirection:'row', gap:12 },
  button: { backgroundColor:'#0a84ff', paddingVertical:12, paddingHorizontal:20, borderRadius:8, marginHorizontal:8 },
  buttonText: { color:'#fff', fontWeight:'600' }
});
