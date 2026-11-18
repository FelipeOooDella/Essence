import { useWindowDimensions } from 'react-native';
export type BP = 'mobile' | 'tablet' | 'desktop';
export function useBreakpoint(): BP {
  const { width } = useWindowDimensions();
  return width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
}
