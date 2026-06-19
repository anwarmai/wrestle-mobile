import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const COUNTRIES = ['USA','CAN','RUS','JPN','FRA','GER','ITA','BRA'];

export default function CountrySelect({ onSelect }:{ onSelect?: (c:string)=>void }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Country</Text>
      <FlatList
        data={COUNTRIES}
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
