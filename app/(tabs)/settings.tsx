import { View, Text, StyleSheet, TextInput, Pressable, Alert, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const { width } = Dimensions.get('window');

interface SettingsScreenProps {}

function SettingsScreen({}: SettingsScreenProps): React.ReactElement {
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [hour, setHour] = useState<string>('');
  const [minute, setMinute] = useState<string>('');

  const saveDate = async (): Promise<void> => {
    if (!day || !month || !year || !hour || !minute) {
      Alert.alert('Error', 'Fill in all fields');
      return;
    }

    try {
      const dateString = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:00`;
      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
        Alert.alert('Error', 'Incorrect date');
        return;
      }

      await AsyncStorage.setItem('togetherDate', date.toISOString());
      Alert.alert('Success', 'Date saved');
    } catch {
      Alert.alert('Error', 'Failed to save');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start date</Text>

      <View style={styles.dateInputsRow}>
        <TextInput
          style={[styles.input, styles.inputSmall]}
          placeholder="Day"
          placeholderTextColor="#ccc"
          value={day}
          onChangeText={setDay}
          maxLength={2}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.inputSmall]}
          placeholder="Month"
          placeholderTextColor="#ccc"
          value={month}
          onChangeText={setMonth}
          maxLength={2}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.inputMedium]}
          placeholder="Year"
          placeholderTextColor="#ccc"
          value={year}
          onChangeText={setYear}
          maxLength={4}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.timeInputsRow}>
        <TextInput
          style={[styles.input, styles.inputSmall]}
          placeholder="Hour"
          placeholderTextColor="#ccc"
          value={hour}
          onChangeText={setHour}
          maxLength={2}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.inputSmall]}
          placeholder="Minutes"
          placeholderTextColor="#ccc"
          value={minute}
          onChangeText={setMinute}
          maxLength={2}
          keyboardType="numeric"
        />
      </View>

      <Pressable style={styles.button} onPress={saveDate}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
    gap: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#E74C3C',
    letterSpacing: 1,
  },
  dateInputsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  timeInputsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    fontWeight: '600',
    color: '#E74C3C',
    textAlign: 'center',
  },
  inputSmall: {
    flex: 1,
  },
  inputMedium: {
    flex: 1.5,
  },
  button: {
    backgroundColor: '#E74C3C',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
});

export default SettingsScreen;