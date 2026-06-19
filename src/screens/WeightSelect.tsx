import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const WEIGHTS = ['106 lb','120 lb','132 lb','150 lb','170 lb','195 lb','200+ lb'];

export default function WeightSelect({ onSelect }:{ onSelect?: (w:string)=>void }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Weight Class</Text>
      <FlatList
        data={WEIGHTS}
        keyExtractor={(i)=>i}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect && onSelect(item)}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  title: { fontSize:20, fontWeight:'700', marginBottom:12, textAlign:'center' },
  item: { padding:12, borderRadius:8, backgroundColor:'#f0f0f0', marginBottom:8 },
  itemText: { fontSize:16 }
});
