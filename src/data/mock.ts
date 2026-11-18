// Dados mockados — trocar por queries Supabase depois (mesma forma de Screen/Block).
export type Row = { t:string; m?:string; i?:string; to?:string };
export type Block = { title:string; icon?:string; span?:2; sub?:string; kpi?:{v:string;l:string}[]; rows?:Row[]; chips?:string[]; progress?:{v:number;l:string}; cta?:{label:string;to:string} };
export type Screen = { title:string; sub:string; icon:string; tabs?:{label:string;to:string}[]; blocks:Block[] };
export const user = { name:'Ana Colaboradora', level:'Cultivador', lvl:8, essences:340, nextLeft:160, pct:0.68 };
const casa = [{label:'🛋️ Sala de Estar',to:'/casa/sala-de-estar'},{label:'💻 Escritório',to:'/casa/escritorio'},{label:'🌱 Quintal',to:'/casa/quintal'}];
export const SCREENS: Record<string, Screen> = {
  praca: { title:'Praça Principal', icon:'🏛️', sub:'O ponto de encontro da nossa comunidade.', blocks:[
    { title:'Outubro Rosa', icon:'🎀', span:2, sub:'Um convite ao cuidado, à conscientização e à prevenção do câncer de mama.', cta:{label:'Conhecer a campanha',to:'/semeadores'} },
    { title:'Jardim da Comunidade', icon:'🌳', progress:{v:.43,l:'43% para o próximo nível'}, rows:[{t:'1.250 essências cultivadas',i:'🌿'},{t:'340 mensagens de apoio',i:'🧡'},{t:'180 conselhos compartilhados',i:'💬'}], cta:{label:'Abrir Jardim',to:'/jardim'} },
    { title:'Próximos eventos', icon:'📅', rows:[{t:'Roda de conversa Saúde Mental',m:'12 MAI · 14h00 · Online'},{t:'Encontro da Comunidade Neurodiversidade',m:'15 MAI · 16h00'},{t:'Workshop Bem-estar financeiro',m:'20 MAI · 10h00'}] },
    { title:'Comunidades em destaque', icon:'👥', rows:[{t:'QOLORS',m:'812 membros',i:'🌈',to:'/comunidades/qolors'},{t:'Neurodiversidade',m:'645 membros',i:'🧠'},{t:'Mulheres em Tech',m:'1.023 membros',i:'💻'}], cta:{label:'Ver todas',to:'/comunidades'} },
    { title:'Destaques dos Semeadores', icon:'🌱', rows:[{t:'Doação de Sangue',m:'Campanha ativa',i:'❤️'},{t:'João Colaborador',m:'Semeador em destaque · +120 contribuições',i:'⭐'}] } ] },
  correios: { title:'Correios TCS', icon:'✉️', sub:'Um espaço seguro para apoiar, compartilhar e receber apoio.', blocks:[
    { title:'Enviar Mensagem', icon:'💌', sub:'Compartilhe uma palavra de carinho. 1 por dia' },
    { title:'Receber Mensagem', icon:'💗', sub:'Descubra uma mensagem positiva. 3 por dia' },
    { title:'Pedir Conselho', icon:'❓', sub:'Compartilhe uma dúvida ou situação. 2 por semana' },
    { title:'Responder Conselho', icon:'💬', sub:'Ajude alguém com uma perspectiva. 3 por dia' },
    { title:'Caixa de Entrada TCS', icon:'📥', rows:[{t:'Mensagens recebidas',m:'18/20',i:'✉️'},{t:'Conselhos recebidos',m:'2 pedidos',i:'💬'}] },
    { title:'Atividades Recentes', icon:'🔔', rows:[{t:'Alguém amou sua mensagem!',m:'Hoje · 14h32'},{t:'Seu conselho recebeu uma reação',m:'Hoje · 11h15'},{t:'Você recebeu um novo conselho!',m:'Ontem · 16h40'}] },
    { title:'Acolhimento e Segurança', icon:'🛡️', rows:[{t:'Use os Correios com responsabilidade',i:'👥'},{t:'Precisa de apoio? Canais disponíveis',i:'❤️'},{t:'Denúncias e alertas de risco',i:'⚠️'}] } ] },
  semeadores: { title:'Semeadores TCS', icon:'🌱', sub:'Semear é transformar boas intenções em ações que fazem a diferença.', blocks:[
    { title:'Corrente do Bem', icon:'💚', span:2, sub:'Missão em destaque: Reconheça hoje alguém da sua equipe que fez a diferença para você.', rows:[{t:'Envie uma mensagem de apoio a um colega',i:'❤️'},{t:'Acolha um novo integrante da equipe',i:'👥'}], cta:{label:'Participar da missão',to:'/semeadores'} },
    { title:'Campanhas e Voluntariado', icon:'🤝', span:2, rows:[{t:'Patinhas Solidárias',m:'76% da meta · 182 participantes',i:'🐾'},{t:'Tampinhas que Transformam',m:'64% da meta · 97 participantes',i:'♻️'},{t:'Outubro Rosa',m:'92% da meta · 210 participantes',i:'🎀'}] },
    { title:'Fogueira', icon:'🔥', sub:'Rodas de conversa e troca de experiências.', rows:[{t:'Saúde Mental no Dia a Dia',m:'Qua, 23/out · 14h · Via Teams'}] },
    { title:'Constelação', icon:'✨', sub:'Um céu vivo que representa as conexões da nossa comunidade.', cta:{label:'Explorar Constelação',to:'/semeadores/constelacao'} } ] },
  'semeadores/constelacao': { title:'Constelação da Comunidade', icon:'✨', sub:'Um céu vivo que representa as conexões da nossa comunidade.', blocks:[
    { title:'O que fortalece o céu?', icon:'🌿', rows:[{t:'Interações nas Comunidades'},{t:'Acesso e trocas na Biblioteca'},{t:'Cuidado com o Jardim TCS'},{t:'Participação em campanhas'},{t:'Conexões nos Correios TCS'}] },
    { title:'Brilho das Estrelas', icon:'🌟', rows:[{t:'Radiante',m:'Participação recente e ativa',i:'🌟'},{t:'Serena',m:'Participação ocasional',i:'💠'},{t:'Adormecida',m:'Sem atividade recente',i:'✦'}] } ] },
  jardim: { title:'Jardim TCS', icon:'🌳', sub:'O crescimento da nossa comunidade, cultivado por cada contribuição.', blocks:[
    { title:'Nível 4 · Árvore Jovem', icon:'🌳', span:2, sub:'Temporada 01 · O Primeiro Florescer · 32 dias restantes', progress:{v:.86,l:'43.250 / 50.000 essências · 86% para Árvore Florescente'} },
    { title:'Transferir Essências', icon:'🌿', sub:'Contribua com o Jardim. Sua contribuição não reduz seu nível.', chips:['100 essências'], cta:{label:'Transferir para o Jardim',to:'/jardim'} },
    { title:'Marcos da Jornada', icon:'🏁', rows:[{t:'Semente ✓',i:'🌰'},{t:'Broto ✓',i:'🌱'},{t:'Muda ✓',i:'🌿'},{t:'Árvore Jovem',m:'Atual',i:'🌳'},{t:'Árvore Florescente',i:'🌸'},{t:'Árvore Ancestral',i:'🍂'}] },
    { title:'Guardiões do Jardim', icon:'👥', kpi:[{v:'980',l:'colaboradores'},{v:'65.240',l:'essências na temporada'}], cta:{label:'Ver todos os Guardiões',to:'/jardim/guardioes'} } ] },
  'jardim/guardioes': { title:'Guardiões do Jardim', icon:'🌿', sub:'Juntos, cultivamos um futuro melhor.', blocks:[
    { title:'Impacto coletivo da temporada', icon:'🌱', span:2, kpi:[{v:'65.240',l:'essências transferidas'},{v:'980',l:'colaboradores'},{v:'4',l:'estágio alcançado'}] },
    { title:'Guardiões em Destaque', icon:'👑', rows:[{t:'1. Ana Souza',m:'10.380',i:'🥇'},{t:'2. João Silva',m:'8.450',i:'🥈'},{t:'3. Maria Costa',m:'7.320',i:'🥉'},{t:'4. Pedro Lima',m:'6.210'},{t:'5. Camila Rocha',m:'5.890'}] },
    { title:'Minha Contribuição', icon:'🌿', kpi:[{v:'1.240',l:'essências'},{v:'#48',l:'classificação'},{v:'8',l:'contribuições'}] },
    { title:'Comunidades que Florescem', icon:'🌸', rows:[{t:'QOLORS',m:'32.480 · 62%',i:'🌈'},{t:'ARISE',m:'28.750 · 54%',i:'✊'},{t:'Wonder Women',m:'18.620 · 35%',i:'💜'}] } ] },
  comunidades: { title:'Comunidades TCS', icon:'👥', sub:'Conexão, representatividade e troca de experiências.', blocks:[
    { title:'Números', icon:'📊', span:2, kpi:[{v:'52',l:'comunidades'},{v:'2.150',l:'participantes'},{v:'280',l:'eventos'},{v:'12',l:'iniciativas'}] },
    { title:'Explore por categoria', icon:'🧭', chips:['Diversidade e Inclusão','Tecnologia e Inovação','Bem-estar','Hobbies e Interesses'] },
    { title:'Comunidades em destaque', icon:'⭐', rows:[{t:'IA\u2019s',m:'620 participantes',i:'🤖'},{t:'QOLORS',m:'480 participantes',i:'🌈',to:'/comunidades/qolors'},{t:'Neurodivergência',m:'390 participantes',i:'🧠'},{t:'ARISE',m:'410 participantes',i:'✊'}] },
    { title:'Próximos eventos', icon:'📅', rows:[{t:'IA na Prática',m:'20 AGO · 14h às 15h30'},{t:'Roda de Conversa LGBTQIA+',m:'25 AGO · 16h às 17h30'},{t:'ARISE Talks',m:'30 AGO · 15h às 16h30'}] } ] },
  'comunidades/minhas': { title:'Minhas Comunidades', icon:'👥', sub:'Acompanhe as novidades e mantenha suas conexões ativas.', blocks:[
    { title:'Suas Comunidades', icon:'🌱', span:2, rows:[{t:'Qolors · LGBTQ+ & Allies',m:'480 participantes · Próximo evento 20/10',i:'🌈',to:'/comunidades/qolors'},{t:'ARISE',m:'410 participantes · Próximo evento 20/10',i:'✊'},{t:'Wonder Women',m:'Fortalecendo conexões e o protagonismo feminino',i:'💜'}] },
    { title:'Para Você', icon:'🔔', rows:[{t:'Novo material disponível em QOLORS',m:'Há 1h'},{t:'Próximo encontro do ARISE',m:'Há 3h'},{t:'Você foi mencionado em um post',m:'Há 5h'}] } ] },
  'comunidades/qolors': { title:'QOLORS', icon:'🌈', sub:'Diversidade, inclusão e pertencimento · 480 participantes', tabs:[{label:'Publicações',to:'/comunidades/qolors'}], blocks:[
    { title:'QOLORS: 3 anos de conexões', icon:'✨', span:2, sub:'Celebramos mais um ano da nossa comunidade! Obrigado a todas as pessoas que fazem parte dessa jornada.', chips:['128 reações','24 comentários'] },
    { title:'Participe da nossa roda de conversa!', icon:'🌈', sub:'20 de outubro · 14h às 15h30 · Microsoft Teams', cta:{label:'Participar do evento',to:'/comunidades/qolors'} },
    { title:'Materiais Recentes', icon:'📁', rows:[{t:'Guia de Diversidade e Inclusão na TCS',m:'PDF · 2,4 MB'},{t:'Cartilha: Como ser um(a) Aliado(a) LGBTQIA+',m:'PDF · 1,8 MB'}] } ] },
  biblioteca: { title:'Biblioteca TCS', icon:'📖', sub:'Conhecimento compartilhado transforma caminhos.', blocks:[
    { title:'Explorar áreas', icon:'🧭', span:2, chips:['Tecnologia e Programação','Ferramentas de Trabalho','Idiomas','Desenvolvimento Profissional','Bem-estar e Produtividade'] },
    { title:'Materiais em destaque', icon:'📚', rows:[{t:'Excel do Básico ao Avançado',m:'Curso · Parceiro TCS'},{t:'Python Fundamentos',m:'Curso · Online'},{t:'PowerPoint para Negócios',m:'Tutorial · Comunidade'},{t:'Inglês Profissional',m:'Curso · Parceiro TCS'}] },
    { title:'Pessoas que compartilham conhecimentos', icon:'🧑‍🏫', rows:[{t:'Rafael M.',m:'Python · SQL · Dados'},{t:'Mariana S.',m:'Excel · Power BI · Inglês'},{t:'Lucas A.',m:'Java · C# · .NET'}] },
    { title:'Continue aprendendo', icon:'▶️', rows:[{t:'C# Essencial',m:'Último acesso: há 2 dias'},{t:'Excel: Funções Avançadas',m:'Último acesso: há 5 dias'}] } ] },
  'casa/sala-de-estar': { title:'Minha Casa', icon:'🏠', sub:'Um espaço para contar sua história, conquistas e contribuições.', tabs:casa, blocks:[
    { title:'Ana Colaboradora', icon:'👩', sub:'Analista de Projetos · TCS · 4 anos de jornada' },
    { title:'Minha Essência', icon:'🌿', sub:'Nível 8 – Cultivador', progress:{v:.68,l:'340 essências · próximo nível: 160'} },
    { title:'Minhas Comunidades', icon:'👥', chips:['Diversidade e Inclusão','Sustentabilidade TCS','Inovação e Tecnologia'], cta:{label:'Ver todas',to:'/comunidades/minhas'} },
    { title:'Minha Jornada no ESSENCE', icon:'🏅', rows:[{t:'Participei da campanha “Mês do Meio Ambiente”',m:'há 5 dias'},{t:'Contribuí com a comunidade de Inovação',m:'há 1 semana'},{t:'Recebi um reconhecimento da comunidade',m:'há 2 semanas'}] } ] },
  'casa/escritorio': { title:'Meu Escritório', icon:'💻', sub:'Seu espaço de desenvolvimento profissional e de novos aprendizados.', tabs:casa, blocks:[
    { title:'Minha Atuação', icon:'💼', rows:[{t:'Analista de Projetos',i:'🏢'},{t:'Área: Tecnologia e Inovação',i:'👥'},{t:'Tempo de empresa: 4 anos',i:'📅'}] },
    { title:'Minhas Competências', icon:'🎯', chips:['Gestão de Projetos','Excel Avançado','Power BI','SQL','Python','Comunicação'] },
    { title:'Meu Desenvolvimento', icon:'🎓', rows:[{t:'Python – Fundamentos',m:'75%',i:'🐍'},{t:'Excel – Funções Avançadas',m:'40%',i:'📗'}] },
    { title:'Meus Interesses', icon:'📈', chips:['Liderança','Dados e Análise','Inovação','Sustentabilidade'] } ] },
  'casa/quintal': { title:'Meu Quintal', icon:'🌱', sub:'O espaço das nossas ações coletivas, impacto social e cultivo de um futuro mais sustentável.', tabs:casa, blocks:[
    { title:'Jardim TCS', icon:'🌿', kpi:[{v:'12',l:'iniciativas apoiadas'},{v:'4',l:'ações participadas'},{v:'+320',l:'essências de impacto'}], cta:{label:'Abrir',to:'/jardim'} },
    { title:'Semeadores', icon:'🤲', sub:'Você é um Semeador ativo!', cta:{label:'Abrir',to:'/semeadores'} },
    { title:'Minhas Contribuições', icon:'🏅', rows:[{t:'Campanha “Mês do Meio Ambiente”',m:'há 5 dias'},{t:'Ação de Voluntariado na Comunidade',m:'há 1 semana'},{t:'Coleta de Eletrônicos TCS',m:'há 2 semanas'}] },
    { title:'Meu Impacto', icon:'🌱', kpi:[{v:'8',l:'pessoas impactadas'},{v:'3',l:'causas apoiadas'},{v:'5',l:'reconhecimentos'}] } ] },
};
