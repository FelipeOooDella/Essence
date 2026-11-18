import { View, Text, Pressable, StyleSheet } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { c, r, shadow } from '../../theme/tokens';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { SCREENS, Block } from '../../data/mock';

const hov = ({ pressed, hovered }: any) => (hovered || pressed ? { backgroundColor: c.soft } : null);

function Card({ b, full }: { b: Block; full: boolean }) {
  const go = useRouter().push;
  return (
    <View style={[s.card, { flexBasis: full ? '100%' : '48.5%' }]}>
      <Text style={s.cardTitle}>{b.icon}  {b.title}</Text>
      {!!b.sub && <Text style={s.muted}>{b.sub}</Text>}
      {b.kpi && <View style={s.row}>{b.kpi.map(k => <View key={k.l} style={s.kpi}><Text style={s.kpiV}>{k.v}</Text><Text style={s.muted}>{k.l}</Text></View>)}</View>}
      {b.progress && <View><View style={s.bar}><View style={[s.fill, { width: `${b.progress.v * 100}%` }]} /></View><Text style={s.muted}>{b.progress.l}</Text></View>}
      {b.chips && <View style={s.row}>{b.chips.map(t => <Text key={t} style={s.chip}>{t}</Text>)}</View>}
      {b.rows?.map(x => (
        <Pressable key={x.t} disabled={!x.to} onPress={() => go(x.to as any)} style={(st: any) => [s.item, x.to ? hov(st) : null]}>
          {!!x.i && <Text style={{ fontSize: 20 }}>{x.i}</Text>}
          <View style={{ flex: 1 }}><Text style={s.text}>{x.t}</Text>{!!x.m && <Text style={s.muted}>{x.m}</Text>}</View>
        </Pressable>))}
      {b.cta && <Pressable onPress={() => go(b.cta!.to as any)} style={({ pressed, hovered }: any) => [s.cta, (hovered || pressed) && { backgroundColor: c.green }]}><Text style={s.ctaT}>{b.cta.label} →</Text></Pressable>}
    </View>
  );
}

export function ScreenView({ id }: { id: string }) {
  const bp = useBreakpoint(), router = useRouter(), path = usePathname(), sc = SCREENS[id], m = bp === 'mobile';
  if (!sc) return <Text style={s.text}>Tela não encontrada.</Text>;
  return (
    <View style={{ gap: 16 }}>
      <View style={[s.hero, m && { padding: 16 }]}>
        <Text style={{ fontSize: m ? 30 : 40 }}>{sc.icon}</Text>
        <View style={{ flex: 1 }}><Text style={[s.h1, m && { fontSize: 22 }]}>{sc.title}</Text><Text style={s.muted}>{sc.sub}</Text></View>
      </View>
      {sc.tabs && <View style={s.row}>{sc.tabs.map(t => (
        <Pressable key={t.to} onPress={() => router.push(t.to as any)} style={[s.tab, path === t.to && { backgroundColor: c.deep }]}>
          <Text style={{ color: path === t.to ? '#fff' : c.text, fontWeight: '600' }}>{t.label}</Text></Pressable>))}</View>}
      <View style={s.grid}>{sc.blocks.map(b => <Card key={b.title} b={b} full={m || b.span === 2} />)}</View>
    </View>
  );
}

const s = StyleSheet.create({
  hero: { flexDirection: 'row', gap: 14, alignItems: 'center', padding: 24, borderRadius: r.xl, backgroundColor: c.soft },
  h1: { fontSize: 30, fontWeight: '800', color: c.deep }, text: { color: c.text, fontSize: 15, fontWeight: '600' }, muted: { color: c.muted, fontSize: 13 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  card: { flexGrow: 1, backgroundColor: c.card, borderRadius: r.xl, borderWidth: 1, borderColor: c.border, padding: 18, gap: 10, ...shadow },
  cardTitle: { fontSize: 18, fontWeight: '700', color: c.text },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, kpi: { flex: 1, minWidth: 90, backgroundColor: c.bg, borderRadius: r.lg, padding: 12 }, kpiV: { fontSize: 24, fontWeight: '800', color: c.deep },
  chip: { backgroundColor: c.soft, color: c.deep, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 99, fontSize: 13, fontWeight: '600', overflow: 'hidden' },
  bar: { height: 10, borderRadius: 99, backgroundColor: '#EEE', overflow: 'hidden', marginBottom: 6 }, fill: { height: 10, backgroundColor: c.leaf },
  item: { flexDirection: 'row', gap: 10, alignItems: 'center', padding: 8, borderRadius: r.lg },
  cta: { alignSelf: 'flex-start', backgroundColor: c.deep, paddingHorizontal: 16, paddingVertical: 10, borderRadius: r.lg }, ctaT: { color: '#fff', fontWeight: '700' },
  tab: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 99, backgroundColor: c.card, borderWidth: 1, borderColor: c.border },
});
