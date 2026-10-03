<p align="center">
  <img src="https://github.com/ihornone/RNE-UsTogether/blob/main/assets/screenshots/OnBoarding.jpg" width="23%" alt="Onboarding" />
  <img src="https://github.com/ihornone/RNE-UsTogether/blob/main/assets/screenshots/Home.jpg" width="23%" alt="Home Screen" />
  <img src="https://github.com/ihornone/RNE-UsTogether/blob/main/assets/screenshots/Calendar.jpg" width="23%" alt="Calendar" />
  <img src="https://github.com/ihornone/RNE-UsTogether/blob/main/assets/screenshots/Settings.jpg" width="23%" alt="Settings" />
</p>

<div align="center">

# 💕 UsTogether

**Romantic Relationship Tracker** — *Count every beautiful second of your love story.*

[![Expo](https://img.shields.io/badge/Expo-54-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-0.81-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Expo Router](https://img.shields.io/badge/Expo_Router-6-000020?style=for-the-badge&logo=expo&logoColor=white)](https://docs.expo.dev/router/introduction/)

<br />

[Features](#-features) •
[Tech Stack](#-tech-stack) •
[Architecture](#-project-architecture) •
[Getting Started](#-getting-started) •
[Build](#-build) •
[Design System](#-design-system) •
[Technical Deep Dive](#-technical-deep-dive)

</div>

---

## 📖 About

**UsTogether** is a cross-platform mobile application built with **Expo & React Native** that lets couples track their relationship timeline in real-time — days, months, weeks, hours, minutes, and seconds — with a beautiful interactive heart calendar and persistent local storage.

```
┌──────────────────────────────────────┐
│  Onboarding · Real-time counter      │
│  Heart calendar · Persistent storage │
└──────────────────────────────────────┘
```

The app features a warm onboarding flow, a live-updating home dashboard with large statistics cards, an interactive calendar with color-coded heart days, and a settings screen to configure the exact relationship start date and time.

---

## ✨ Features

| # | Feature | Details |
|:--:|---------|---------|
| 👋 | **Onboarding** | Welcome screen with romantic background & tagline |
| ⏱ | **Live Counter** | Real-time seconds, minutes, hours, days, weeks, months |
| ❤️ | **Interactive Calendar** | Monthly grid with red hearts for together-days, peach for future, outline for past |
| ⚙️ | **Date Settings** | Day / Month / Year / Hour / Minute input with validation & AsyncStorage persistence |
| 🎯 | **Haptic Tabs** | Soft haptic feedback on tab press (iOS) |
| 🎨 | **Warm Theme** | Coral-red (#E74C3C) accent on soft peach (#FFC6B3) background |
| 📱 | **Responsive** | Works seamlessly across all device sizes |

---

## 🛠 Tech Stack

### Frontend & Core

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | Expo | `54.0.33` | Managed React Native framework |
| **Language** | TypeScript | `5.9.2` | Static typing & developer experience |
| **UI Library** | React | `19.1.0` | Component-based UI architecture |
| **Navigation** | Expo Router (file-based) | `6.0.23` | Screens-as-files routing |
| **Bottom Tabs** | @react-navigation/bottom-tabs | `7.4.0` | Tab-based navigation |
| **Icons** | @expo/vector-icons (MaterialIcons) | `15.0.3` | Tab bar icons |
| **Haptics** | expo-haptics | `15.0.8` | Haptic tab feedback |
| **Safe Area** | react-native-safe-area-context | `5.6.0` | Notch/island-safe rendering |
| **Screen Mgmt** | react-native-screens | `4.16.0` | Native screen containers |
| **Gestures** | react-native-gesture-handler | `2.28.0` | Native gesture handling |
| **Animations** | react-native-reanimated | `4.1.1` | Smooth animations |
| **Date Picker** | @react-native-community/datetimepicker | `8.4.4` | Native date/time selection |

### Storage & Data

| Technology | Version | Purpose |
|------------|---------|---------|
| AsyncStorage | `2.2.0` | Local device persistence |
| JavaScript Date API | — | Date calculations & formatting |
| ISO 8601 | — | Date serialization format (`YYYY-MM-DDTHH:mm:ss`) |

### Tooling & Quality

| Tool | Version | Purpose |
|------|---------|---------|
| **Bundler** | Metro (via Expo) | JavaScript bundle & asset pipeline |
| **Linting** | ESLint 9 (`eslint-config-expo`) | Code quality & consistency |
| **TypeScript** | `5.9.2` | Type checking |

---

## 📂 Project Architecture

```
UsTogetherRNE/
│
├── app/                               # Expo Router (file-based routing)
│   ├── _layout.tsx                    # Root layout — theme & Stack navigator
│   ├── onboarding.tsx                 # 👋 Welcome / onboarding screen
│   └── (tabs)/
│       ├── _layout.tsx                # 📱 Tab navigator layout
│       ├── index.tsx                  # 🏠 Home — statistics dashboard
│       ├── calendar.tsx               # 📅 Interactive heart calendar
│       └── settings.tsx               # ⚙️ Date configuration
│
├── components/
│   ├── StatCard.tsx                   # 📊 Reusable statistics card
│   ├── haptic-tab.tsx                 # 🤖 Haptic feedback tab button
│   └── ui/
│       └── icon-symbol.tsx            # 🎯 Icon abstraction layer
│
├── constants/
│   └── theme.ts                       # 🎨 Color & font tokens
│
├── hooks/
│   ├── use-color-scheme.ts            # 🌗 Light/dark mode hook
│   ├── use-color-scheme.web.ts        # 🌐 Web variant
│   └── use-theme-color.ts             # 🎨 Theme-aware color hook
│
├── assets/
│   ├── images/                        # Icons, splash, logos
│   ├── screenshots/                   # App preview images
│   └── background.png                 # Onboarding background
│
├── app.json                           # Expo configuration
├── package.json
├── tsconfig.json
├── eslint.config.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Version | Check |
|-------------|---------|-------|
| **Node.js** | `>= 18` | `node --version` |
| **npm** | (bundled) | `npm --version` |
| **Expo Go** | latest | Install from App/Play Store |

> 💡 New to Expo? Follow the [official setup guide](https://docs.expo.dev/get-started/installation/).

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ihornone/RNE-UsTogether.git
cd RNE-UsTogether

# 2. Install dependencies
npm install
```

### Running the App

```bash
# Start Expo development server
npm start

# Or launch directly on platform:
npm run android     # Run on Android emulator / device
npm run ios         # Run on iOS simulator
npm run web         # Run in web browser
```

---

## 📋 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `npm start` | `expo start` | Start Expo development server |
| `npm run android` | `expo start --android` | Launch on Android |
| `npm run ios` | `expo start --ios` | Launch on iOS simulator |
| `npm run web` | `expo start --web` | Launch in web browser |
| `npm run lint` | `expo lint` | Lint all source files |

---

## 🔧 Build

### Expo Go (Development)

The easiest way to test the app is via **Expo Go** — simply scan the QR code from the dev server.

### Standalone APK / IPA

```bash
# Android APK
npx eas build --platform android --profile preview

# iOS IPA
npx eas build --platform ios --profile preview

# Production builds (requires EAS subscription)
npx eas build --platform all --profile production
```

> ⚠️ For custom builds, configure your `eas.json` and ensure your Expo account is set up.

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary Red** | `#E74C3C` | Hearts, titles, active states, buttons |
| **Secondary Coral** | `#E8856A` | Secondary text, week day labels |
| **Background** | `#FFC6B3` | App background |
| **Card Background** | `#FFF5F2` | Statistics card surfaces |
| **Badge/Light** | `#FFC6B3` | Date badge backgrounds |
| **Light Peach** | `#FFD4C4` | Future-day hearts (calendar) |
| **Gray** | `#DDD` | Pre-relationship hearts (faded) |
| **White** | `#FFFFFF` | Card backgrounds (calendar), text on red |

### Typography

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| **Main Value** | `64px` | Bold | Days together counter |
| **Secondary Value** | `48px` | Bold | Hours, months, weeks |
| **Mini Value** | `24px` | Bold | Minutes, seconds |
| **Title** | `32-36px` | Bold/900 | Screen titles |
| **Section Title** | `24-28px` | Bold/700 | Calendar title, Settings title |
| **Label** | `20px` | Regular | StatCard labels |
| **Month Title** | `18px` | 900 | Month header in calendar |
| **Body** | `16px` | Regular | Settings inputs, subtitle |

### Spacing & Radius

| Property | Value |
|----------|-------|
| **Card Border Radius** | `25px` (stats), `32px` (calendar) |
| **Button Border Radius** | `12px` |
| **Card Padding** | `20px` |
| **Screen Padding** | `16-20px` |
| **Element Gap** | `20-25px` (vertical), `8-12px` (horizontal grid) |

---

## 🔬 Technical Deep Dive

### Navigation Architecture

```
RootLayout (_layout.tsx)
├── onboarding                   # OnboardingScreen (no header)
└── (tabs)                       # TabNavigator (no header)
    ├── index                    # HomeScreen
    ├── calendar                 # CalendarScreen
    └── settings                 # SettingsScreen
```

The app uses **Expo Router** — a file-based routing system where every `.tsx` file in the `app/` directory automatically becomes a screen. The `(tabs)` group creates a bottom tab navigator with three tabs.

### Data Flow

```
┌──────────────┐   saveDate()    ┌──────────────┐
│ SettingsScreen│ ─────────────> │ AsyncStorage │
│ (date input)  │                │  (persist)   │
└──────────────┘                └──────┬───────┘
                                        │ getItem('togetherDate')
                                        ▼
┌──────────────┐   calcStats()   ┌──────────────┐
│  HomeScreen   │ <───────────── │ useState      │
│ (dashboard)   │ ────setInterval│ (live update) │
└──────────────┘  every 1s       └──────────────┘
                                        │
                                        ▼
┌──────────────┐   startDate     ┌──────────────┐
│CalendarScreen│ <───────────── │ AsyncStorage  │
│ (heart grid) │                │  (read only)  │
└──────────────┘                └──────────────┘
```

### Home Screen Counter Engine

```typescript
function calcStats(dateStr: string) {
  const start = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - start.getTime();
  return {
    seconds: Math.floor(diffMs / 1000),
    minutes: Math.floor(diffMs / (1000 * 60)),
    hours:   Math.floor(diffMs / (1000 * 60 * 60)),
    days:    Math.floor(diffMs / (1000 * 60 * 60 * 24)),
    weeks:   Math.floor(days / 7),
    months:  Math.floor(days / 30),
  };
}
```

The home screen uses a `setInterval` at **1-second granularity** to keep the counter in sync. All six metrics derive from the same `diffMs` value.

### Calendar Heart Logic

```typescript
const isLovePeriod = currentDate >= startDate && currentDate <= today;
const isBeforeTogether = currentDate < startDate;

// Heart icon:
isBeforeTogether ? 'heart-outline' : 'heart'

// Heart color:
isLovePeriod    → '#E74C3C' (red, opaque)    — days together
isBeforeTogether → '#DDD'   (gray, 0.3)      — pre-relationship
else             → '#FFD4C4' (peach, 0.3)    — future days
```

The calendar iterates from the relationship start year to the current year, rendering one `MonthCard` per month. Each day is displayed as a `HeartDayItem` with an Ionicons heart icon and numbered label.

### StatCard Component

```typescript
StatCard({ title, value, badge?, half?, main?, ms? })
```

A reusable card that adapts its layout:
- **`main`** → `64px` font, full width — for Days Together
- **`half`** → `(screenWidth - 60) / 2` — side-by-side (Months/Weeks, Minutes/Seconds)
- **`ms`** → `24px` font — for compact values (Minutes, Seconds)
- **`badge`** → shows a small pill with the formatted start date

### Persistence Strategy

| Operation | Mechanism | Format |
|-----------|-----------|--------|
| **Save** | `AsyncStorage.setItem('togetherDate', dateString)` | ISO 8601 string |
| **Load** | `AsyncStorage.getItem('togetherDate')` → `new Date()` | Parsed to Date object |
| **Reactive** | `useEffect` on mount & `setInterval` every 1s | Live dashboard updates |

### Design Tokens

```typescript
// Warm romantic palette
primary:    '#E74C3C'     // Red (hearts, titles, buttons)
background: '#FFC6B3'     // Peach (screen bg)
card:       '#FFF5F2'     // Light pink (card bg)
secondary:  '#E8856A'     // Coral (secondary text)
badge:      '#FFC6B3'     // Badge bg
futureDay:  '#FFD4C4'     // Peach (future hearts)
emptyDay:   '#DDD'        // Gray (pre-relationship)
```

### Key Patterns

| Pattern | Implementation | Benefit |
|---------|---------------|---------|
| **File-based routing** | Expo Router (`app/` directory) | Zero-config navigation, deep links out of the box |
| **Context-free state** | `useState` + `AsyncStorage` in individual screens | Simple, no global state overhead |
| **Live counter** | `setInterval` in `useEffect` with 1s interval | Real-time update without polling server |
| **Responsive cards** | `Dimensions.get('window').width` for half-width | Adapts to any screen size |
| **Heart color logic** | 3-state conditional (past / together / future) | Visual clarity for relationship timeline |
| **Haptic feedback** | `expo-haptics` on tab `onPressIn` (iOS only) | Native-feeling interactions |

---

## 🌐 Expo Build Details

| Property | Value |
|----------|-------|
| **SDK** | `54.0.33` |
| **New Architecture** | ✅ Enabled |
| **Orientation** | Portrait |
| **Scheme** | `ustogetherrne` |
| **User Interface Style** | `automatic` |
| **React Compiler** | ✅ Enabled (`experiments.reactCompiler`) |
| **Typed Routes** | ✅ Enabled |

---

## 🤝 Contributing

This is a private project. If you have access and want to suggest changes:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💻 Make your changes
4. ✅ Test the app (`npm start`)
5. 📝 Commit (`git commit -m 'feat: add amazing feature'`)
6. 🚀 Push (`git push origin feature/amazing-feature`)
7. 🔄 Open a Pull Request

---

<p align="center">
  <sub>Built with ❤️ using Expo · React Native · TypeScript</sub>
  <br />
  <sub>© 2026 ihornone</sub>
</p>
