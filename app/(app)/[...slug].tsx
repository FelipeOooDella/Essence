import { useLocalSearchParams } from 'expo-router';
import { ScreenView } from '../../src/components/ui/ScreenView';
export default function Dynamic() {
  const { slug } = useLocalSearchParams<{ slug: string | string[] }>();
  return <ScreenView id={([] as string[]).concat(slug ?? []).join('/')} />;
}
