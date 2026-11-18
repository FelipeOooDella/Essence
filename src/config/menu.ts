export type MenuItem = { id:string; label:string; icon:string; href:string; badge?:boolean; children?:{label:string;href:string}[] };
export const MENU: MenuItem[] = [
  { id:'praca', label:'Praça Principal', icon:'🏛️', href:'/' },
  { id:'casa', label:'Casa', icon:'🏠', href:'/casa/sala-de-estar' },
  { id:'correios', label:'Correios TCS', icon:'✉️', href:'/correios', badge:true },
  { id:'semeadores', label:'Semeadores', icon:'🌱', href:'/semeadores' },
  { id:'jardim', label:'Jardim TCS', icon:'🌳', href:'/jardim' },
  { id:'comunidades', label:'Comunidades', icon:'👥', href:'/comunidades', children:[{ label:'Minhas Comunidades', href:'/comunidades/minhas' }] },
  { id:'biblioteca', label:'Biblioteca', icon:'📖', href:'/biblioteca' },
];
export const isActive = (path:string, href:string) =>
  href === '/' ? path === '/' : path.startsWith('/' + href.split('/')[1]);
