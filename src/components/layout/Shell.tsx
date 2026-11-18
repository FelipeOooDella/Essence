import { useState, ReactNode } from 'react';
import { View, Text, Pressable, ScrollView, TextInput, Modal, StyleSheet } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { c, r } from '../../theme/tokens';
import { MENU, isActive } from '../../config/menu';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { user } from '../../data/mock';

function Item({ label, icon, active, onPress, compact, badge, sub }: any) {
  return (
    <Pressable onPress={onPress} accessibilityRole="link"
      style={({ pressed, hovered }: any) => [s.item, sub && { marginLeft: 24 }, active ? { backgroundColor: c.bg } : (hovered || pressed) && { backgroundColor: 'rgba(255,255,255,.12)' }]}>
      <Text style={{ fontSize: 18 }}>{icon}</Text>
      {!compact && <Text style={[s.lbl, active && { color: c.deep }]}>{label}</Text>}
      {badge && <View style={s.dot} />}
    </Pressable>
  );
}

const Essence = () => (
  <View style={s.ess}>
    <Text style={s.essK}>ESSÊNCIAS DA VIDA</Text><Text style={s.essV}>{user.essences}</Text>
    <Text style={s.essK}>Nível {user.lvl} • {user.level}</Text>
    <View style={s.bar}><View style={[s.fill, { width: `${user.pct * 100}%` }]} /></View>
    <Text style={s.essK}>Próximo nível: {user.nextLeft} essências</Text>
  </View>
);

function Sidebar({ compact }: { compact: boolean }) {
  const path = usePathname(), go = useRouter().push;
  return (
    <View style={[s.side, { width: compact ? 72 : 252 }]}>
      <Text style={s.brand}>{compact ? '🌿' : '🌿 TCS ESSENCE'}</Text>
      {!compact && <Text style={s.tag}>Conectar. Compartilhar. Crescer.</Text>}
      <View style={{ gap: 4, marginTop: 16, flex: 1 }}>
        {MENU.map(m => (<View key={m.id}>
          <Item {...m} compact={compact} active={isActive(path, m.href)} onPress={() => go(m.href as any)} />
          {!compact && isActive(path, m.href) && m.children?.map(ch => <Item key={ch.href} sub icon="↳" label={ch.label} active={path === ch.href} onPress={() => go(ch.href as any)} />)}
        </View>))}
      </View>
      {!compact && <Essence />}
    </View>
  );
}

const TopBar = () => (
  <View style={s.top}>
    <TextInput placeholder="Pesquisar campanhas, conteúdos, comunidades e mais..." placeholderTextColor={c.muted} style={s.search} />
    <Text style={{ fontSize: 20 }}>🔔</Text>
    <Text style={s.user}>{user.name.split(' ')[0]}</Text>
  </View>
);

function BottomTabs() {
  const path = usePathname(), go = useRouter().push, [more, setMore] = useState(false);
  return (<>
    <View style={s.tabs}>
      {MENU.slice(0, 4).map(m => (
        <Pressable key={m.id} style={s.tab} onPress={() => go(m.href as any)}>
          <Text style={{ fontSize: 20 }}>{m.icon}</Text>
          <Text style={[s.tabL, isActive(path, m.href) && { color: c.deep, fontWeight: '800' }]}>{m.label.split(' ')[0]}</Text>
        </Pressable>))}
      <Pressable style={s.tab} onPress={() => setMore(true)}><Text style={{ fontSize: 20 }}>⋯</Text><Text style={s.tabL}>Mais</Text></Pressable>
    </View>
    <Modal transparent animationType="slide" visible={more} onRequestClose={() => setMore(false)}>
      <Pressable style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.3)', justifyContent: 'flex-end' }} onPress={() => setMore(false)}>
        <View style={s.sheet}>
          {[...MENU.slice(4), ...MENU.flatMap(m => m.children ?? []).map(ch => ({ id: ch.href, label: ch.label, icon: '↳', href: ch.href }))].map((m: any) => (
            <Item key={m.id} {...m} active={path === m.href} onPress={() => { setMore(false); go(m.href as any); }} />))}
        </View>
      </Pressable>
    </Modal>
  </>);
}

export function Shell({ children }: { children: ReactNode }) {
  const bp = useBreakpoint(), mobile = bp === 'mobile';
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {!mobile && <Sidebar compact={bp === 'tablet'} />}
        <View style={{ flex: 1 }}>
          <TopBar />
          <ScrollView contentContainerStyle={{ padding: mobile ? 14 : 28, maxWidth: 1200, width: '100%', alignSelf: 'center' }}>{children}</ScrollView>
          {mobile && <BottomTabs />}
        </View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  side: { backgroundColor: c.deep, padding: 14 }, brand: { color: '#fff', fontSize: 20, fontWeight: '800' }, tag: { color: c.soft, fontSize: 12, marginTop: 4 },
  item: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 11, borderRadius: r.lg }, lbl: { color: '#fff', fontSize: 15, fontWeight: '600' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: c.gold },
  ess: { borderWidth: 1, borderColor: c.gold, borderRadius: r.xl, padding: 14, alignItems: 'center', gap: 6 }, essK: { color: '#fff', fontSize: 12 }, essV: { color: c.gold, fontSize: 38, fontWeight: '800' },
  bar: { height: 8, borderRadius: 99, backgroundColor: 'rgba(255,255,255,.25)', alignSelf: 'stretch', overflow: 'hidden' }, fill: { height: 8, backgroundColor: c.leaf },
  top: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 14 },
  search: { flex: 1, backgroundColor: c.card, borderWidth: 1, borderColor: c.border, borderRadius: 99, paddingHorizontal: 16, paddingVertical: 10, color: c.text },
  user: { fontWeight: '700', color: c.text },
  tabs: { flexDirection: 'row', backgroundColor: c.card, borderTopWidth: 1, borderColor: c.border, paddingBottom: 6 }, tab: { flex: 1, alignItems: 'center', paddingVertical: 8 }, tabL: { fontSize: 11, color: c.muted },
  sheet: { backgroundColor: c.deep, padding: 16, borderTopLeftRadius: r.xl, borderTopRightRadius: r.xl, gap: 4 },
});
