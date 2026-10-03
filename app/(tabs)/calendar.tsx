import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

function CalendarScreen() {
  const [dateStr, setDateStr] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);

  useEffect(() => {
    const load = async () => {
      const saved = await AsyncStorage.getItem('togetherDate');
      if (saved) {
        setDateStr(saved);
        setStartDate(new Date(saved));
      }
    };
    load();
  }, []);

  if (!startDate) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Встановіть дату в налаштуваннях</Text>
      </View>
    );
  }

  const today = new Date();
  const startYear = startDate.getFullYear();
  const currentYear = today.getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>OUR STORY</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {Array.from({ length: currentYear - startYear + 1 }).map((_, yearIndex) => {
          const year = startYear + yearIndex;
          const startMonth = year === startYear ? startDate.getMonth() + 1 : 1;
          const endMonth = year === currentYear ? today.getMonth() + 1 : 12;

          return (
            <View key={year}>
              {Array.from({ length: endMonth - startMonth + 1 }).map((_, monthIndex) => {
                const month = startMonth + monthIndex;
                return (
                  <MonthCard
                    key={`${year}-${month}`}
                    year={year}
                    month={month}
                    startDate={startDate}
                    today={today}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

interface MonthCardProps {
  year: number;
  month: number;
  startDate: Date;
  today: Date;
}

function MonthCard({ year, month, startDate, today }: MonthCardProps) {
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const dayOfWeek = firstDayOfMonth.getDay();
  const offset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const monthName = firstDayOfMonth.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  return (
    <View style={styles.monthCard}>
      <Text style={styles.monthTitle}>{monthName} {year}</Text>

      <View style={styles.weekDaysRow}>
        {weekDays.map((day) => (
          <View key={day} style={styles.weekDayCell}>
            <Text style={styles.weekDayText}>{day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.daysGrid}>
        {Array.from({ length: offset }).map((_, i) => (
          <View key={`spacer-${i}`} style={styles.dayCell} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const currentDate = new Date(year, month - 1, day);
          const isLovePeriod = currentDate >= startDate && currentDate <= today;
          const isBeforeTogether = currentDate < startDate;

          return (
            <HeartDayItem
              key={day}
              day={day}
              isLovePeriod={isLovePeriod}
              isBeforeTogether={isBeforeTogether}
            />
          );
        })}
      </View>
    </View>
  );
}

interface HeartDayItemProps {
  day: number;
  isLovePeriod: boolean;
  isBeforeTogether: boolean;
}

function HeartDayItem({ day, isLovePeriod, isBeforeTogether }: HeartDayItemProps) {
  const heartColor = isLovePeriod ? '#E74C3C' : isBeforeTogether ? '#DDD' : '#FFD4C4';
  const textColor = isLovePeriod ? '#fff' : '#E8856A';

  return (
    <View style={styles.dayCell}>
      <View style={[styles.heartContainer, { opacity: isLovePeriod ? 1 : 0.3 }]}>
        <Ionicons
          name={isBeforeTogether ? 'heart-outline' : 'heart'}
          size={32}
          color={heartColor}
        />
      </View>
      <Text style={[styles.dayNumber, { color: textColor }]}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: '#E74C3C',
    letterSpacing: 1,
    marginTop: 25,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
    gap: 24,
  },
  monthCard: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 32,
    padding: 16,
    marginBottom: 24,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#E74C3C',
    marginBottom: 12,
    textAlign: 'center',
  },
  weekDaysRow: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 8,
  },
  weekDayCell: {
    flex: 1,
    alignItems: 'center',
  },
  weekDayText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#E8856A',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  dayCell: {
    width: (width - 64) / 7,
    height: (width - 64) / 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumber: {
    fontSize: 11,
    fontWeight: '900',
    position: 'absolute',
  },
  emptyText: {
    fontSize: 16,
    color: '#E74C3C',
    textAlign: 'center',
    marginTop: 40,
  },
});

export default CalendarScreen;