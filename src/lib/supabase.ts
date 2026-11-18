import 'react-native-url-polyfill/auto';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL ?? 'http://localhost',
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? 'anon',
  { auth: {
      storage: Platform.OS === 'web' ? undefined : AsyncStorage, // web usa localStorage
      persistSession: true, autoRefreshToken: true,
      detectSessionInUrl: Platform.OS === 'web',
  } }
);
