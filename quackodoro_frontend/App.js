import { ScrollView } from 'react-native';
import PomodoroTimer from './components/PomodoroTimer';

export default function App() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <PomodoroTimer />
    </ScrollView>
  );
}
