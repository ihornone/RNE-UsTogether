import {Dimensions, StyleSheet, Text, View} from "react-native";

const { width } = Dimensions.get('window');

interface StatCardProps {
  title: string;
  value: number;
  badge?: boolean;
  badgeText?: string;
  half?: boolean;
  main?: boolean;
  ms?: boolean;
}

export default function StatCard( {title, badge, value, badgeText, half, main, ms}:StatCardProps) {
  const getFontSize = () => {
    if (main) return 64;
    if (ms) return 24;
    return 48;
  };

  return (
    <View style={[styles.container, half ? styles.half : styles.full]}>
      <Text style={[styles.valueText, {fontSize: getFontSize()}]}>{value}</Text>
      <Text style={styles.titleText}>{title}</Text>
      {badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeText}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5F2',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  full: {
    width: '100%',
  },
  half: {
    width: (width - 60) / 2,
  },
  badge: {
    backgroundColor: '#FFC6B3',
    borderRadius: 10,
    padding: 5,
  },
  badgeText: {
    fontSize: 16,
  },
  valueText: {
    fontWeight: 'bold',
    color: '#E74C3C',
    letterSpacing: 2,
  },
  titleText: {
    fontSize: 20,
    letterSpacing: 2,
    color: '#E8856A',
  }
});