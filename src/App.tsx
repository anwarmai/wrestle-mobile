import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GenderSelect, { Gender } from './screens/GenderSelect';
import CountrySelect from './screens/CountrySelect';
import WeightSelect from './screens/WeightSelect';

export default function App() {
  const [step, setStep] = useState<'gender'|'country'|'weight'|'done'>('gender');
  const [gender, setGender] = useState<Gender | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [weight, setWeight] = useState<string | null>(null);

  return (
    <View style={{flex:1}}>
      {step === 'gender' && (
        <GenderSelect onSelect={(g)=>{ setGender(g); setStep('country'); }} />
      )}
      {step === 'country' && (
        <CountrySelect onSelect={(c)=>{ setCountry(c); setStep('weight'); }} />
      )}
      {step === 'weight' && (
        <WeightSelect onSelect={(w)=>{ setWeight(w); setStep('done'); }} />
      )}
      {step === 'done' && (
        <View style={styles.container}>
          <Text style={styles.title}>Setup Complete</Text>
          <Text>Gender: {gender}</Text>
          <Text>Country: {country}</Text>
          <Text>Weight: {weight}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8
  }
});
