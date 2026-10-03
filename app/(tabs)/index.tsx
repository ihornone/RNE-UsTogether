import { StyleSheet, View, Text } from 'react-native';
import StatCard from "@/components/StatCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

function calcStats(dateStr: string) {
  const start = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - start.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  return { seconds, minutes, hours, days, weeks, months };
}

export default function HomeScreen() {
  const [stats, setStats] = useState({ seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 0, months: 0 });
  const [dateStr, setDateStr] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const saved = await AsyncStorage.getItem('togetherDate');
      if (saved) {
        setDateStr(saved);
        setStats(calcStats(saved));
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (!dateStr) return;

    const interval = setInterval(() => {
      setStats(calcStats(dateStr));
    }, 1000);

    return () => clearInterval(interval);
  }, [dateStr]);

  const formattedDate = dateStr
    ? new Date(dateStr).toLocaleDateString('en-US')
    : 'Не задано';

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>UsTogether</Text>
        <View style={styles.divider} />
      </View>

      <StatCard title="DAYS TOGETHER" value={stats.days} badge={true} badgeText={formattedDate} main={true} />

      <View style={styles.row}>
        <StatCard title="MONTHS" value={stats.months} half={true} />
        <StatCard title="WEEKS" value={stats.weeks} half={true} />
      </View>

      <StatCard title="TOTAL HOURS" value={stats.hours} />

      <View style={styles.row}>
        <StatCard title="MINUTES" value={stats.minutes} half={true} ms={true}/>
        <StatCard title="SECONDS" value={stats.seconds} half={true} ms={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 25,
    alignItems: "center",
  },
  row: {
    flexDirection: 'row',
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E74C3C',
  },
  divider: {
    borderWidth: 1.5,
    borderColor: '#E74C3C',
    marginTop: 5,
    borderRadius: 20,
  }
});