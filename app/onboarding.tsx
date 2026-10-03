import {StyleSheet, View, Text, Pressable} from 'react-native';
import { ImageBackground } from "react-native";
import {router} from "expo-router";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/background.png')}
        resizeMode={'cover'}>
        <View style={styles.obContainer}>
          <Text style={styles.title}>UsTogether</Text>
          <Text style={styles.subtitle}>Every second counts when wee are together{"\n"}Let`s start counting your beautiful story.</Text>
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? '#FFC6B2' : '#EF5969',
              padding: 16,
              borderRadius: 12,
              alignItems: 'center',
          })}
            onPress={() => router.replace('/(tabs)')}>
          <Text style={{ color: '#fff', fontSize: 24, }}>HOW LONG TOGETHER?</Text>
        </Pressable>
        </View>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  obContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    color: 'black',
    textAlign: 'center',
  }
});
