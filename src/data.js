// Modelo pequeno para testes. IDs são estáveis: não os reutilize com significados diferentes.
// kind: word | phrase | grammar; category: noun | verb | adjective | other | phrase
// situations: contextos selecionáveis; kana é a leitura completa da expressão.
// japanese pode conter kanji e kana. Para frases, inclua tradução natural.
export const studySituations = [
  '👋 Cumprimentos',
  '🗣️ Conversas básicas',
  '❓ Perguntas comuns',
  '🎓 Aula de japonês',
  '🍜 Restaurante',
  '☕ Cafeteria',
  '🏠 Cotidiano',
  '📅 Planos e horários',
  '❤️ Gostos e preferências',
  '🌦️ Clima',
  '👥 Amigos e socialização',
  '😊 Sentimentos',
  '🛍️ Compras',
  '🚆 Transporte',
  '✈️ Viagens',
  '🎵 Música',
  '🎮 Videogames',
  '🍥 Anime e mangá',
  '💻 Tecnologia',
  '🎬 Filmes e séries',
  '💬 Opiniões',
  '📖 Histórias pessoais',
  '🔮 Planos futuros',
  '🤝 Problemas cotidianos',
  '🇯🇵 Cultura japonesa'
];

export const cards = [
  {id:'taberu',kind:'word',category:'verb',japanese:'食べる',kana:'たべる',romaji:'taberu',pt:'comer',situations:['🏠 Cotidiano','🍜 Restaurante']},
  {id:'mizu',kind:'word',category:'noun',japanese:'水',kana:'みず',romaji:'mizu',pt:'água',situations:['🍜 Restaurante','🏠 Cotidiano']},
  {id:'eki',kind:'word',category:'noun',japanese:'駅',kana:'えき',romaji:'eki',pt:'estação',situations:['🚆 Transporte']},
  {id:'arigatou',kind:'phrase',category:'phrase',japanese:'ありがとうございます',kana:'ありがとうございます',romaji:'arigatou gozaimasu',pt:'muito obrigado(a)',situations:['👋 Cumprimentos','🍜 Restaurante']},
  {id:'eki-doko',kind:'phrase',category:'phrase',japanese:'すみません、駅はどこですか？',kana:'すみません、えきはどこですか？',romaji:'sumimasen, eki wa doko desu ka?',pt:'com licença, onde fica a estação?',situations:['❓ Perguntas comuns','🚆 Transporte']},
  {id:'menu',kind:'phrase',category:'phrase',japanese:'メニューをください',kana:'めにゅーをください',romaji:'menyuu o kudasai',pt:'o cardápio, por favor',situations:['🍜 Restaurante']},
  {id:'passport',kind:'word',category:'noun',japanese:'パスポート',kana:'ぱすぽーと',romaji:'pasupooto',pt:'passaporte',situations:['✈️ Viagens']},
  {id:'kankou',kind:'phrase',category:'phrase',japanese:'観光で来ました',kana:'かんこうできました',romaji:'kankou de kimashita',pt:'vim a turismo',situations:['✈️ Viagens','🇯🇵 Cultura japonesa']},
  {id:'hotel',kind:'phrase',category:'phrase',japanese:'予約しています',kana:'よやくしています',romaji:'yoyaku shite imasu',pt:'tenho uma reserva',situations:['✈️ Viagens']},
  {id:'tasukete',kind:'phrase',category:'phrase',japanese:'助けてください',kana:'たすけてください',romaji:'tasukete kudasai',pt:'por favor, me ajude',situations:['🤝 Problemas cotidianos']},
  {id:'grammar-wa-topic',kind:'grammar',category:'grammar',japanese:'私は学生です',kana:'わたしはがくせいです',romaji:'watashi wa gakusei desu',pt:'Eu sou estudante. (は marca o tópico da frase.)',situations:['🗣️ Conversas básicas']},
  {id:'grammar-wo-object',kind:'grammar',category:'grammar',japanese:'水を飲みます',kana:'みずをのみます',romaji:'mizu o nomimasu',pt:'Eu bebo água. (を marca o objeto da ação.)',situations:['🏠 Cotidiano','🍜 Restaurante']},
  {id:'grammar-ni-destination',kind:'grammar',category:'grammar',japanese:'駅に行きます',kana:'えきにいきます',romaji:'eki ni ikimasu',pt:'Vou à estação. (に marca o destino.)',situations:['🚆 Transporte']},
  {id:'grammar-de-location',kind:'grammar',category:'grammar',japanese:'駅で食べます',kana:'えきでたべます',romaji:'eki de tabemasu',pt:'Como na estação. (で marca o local da ação.)',situations:['🚆 Transporte','🍜 Restaurante']},
  {id:'grammar-te-kudasai',kind:'grammar',category:'grammar',japanese:'水を飲んでください',kana:'みずをのんでください',romaji:'mizu o nonde kudasai',pt:'Por favor, beba água. (てください forma um pedido.)',situations:['🍜 Restaurante']},
  {id:'grammar-tai-desu',kind:'grammar',category:'grammar',japanese:'日本へ行きたいです',kana:'にほんへいきたいです',romaji:'nihon e ikitai desu',pt:'Quero ir ao Japão. (たい expressa desejo.)',situations:['📅 Planos e horários','✈️ Viagens']},
{
  id: 'mj-w-72e083ed3616',
  kind: 'word',
  category: 'noun',
  japanese: '朝',
  kana: 'あさ',
  romaji: 'asa',
  pt: 'manhã',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-30ec3b0793b7',
  kind: 'word',
  category: 'noun',
  japanese: '昼',
  kana: 'ひる',
  romaji: 'hiru',
  pt: 'meio-dia',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-839bd11e8b61',
  kind: 'word',
  category: 'noun',
  japanese: '夜',
  kana: 'よる',
  romaji: 'yoru',
  pt: 'noite',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-2809b9d127e2',
  kind: 'word',
  category: 'noun',
  japanese: '挨拶',
  kana: 'あいさつ',
  romaji: 'aisatsu',
  pt: 'cumprimento',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-17a199ee2665',
  kind: 'word',
  category: 'noun',
  japanese: '笑顔',
  kana: 'えがお',
  romaji: 'egao',
  pt: 'sorriso',
  situations: ['👋 Cumprimentos', '😊 Sentimentos']
},
{
  id: 'mj-w-bfe3d2a39868',
  kind: 'word',
  category: 'noun',
  japanese: '名前',
  kana: 'なまえ',
  romaji: 'namae',
  pt: 'nome',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-96e831341b77',
  kind: 'word',
  category: 'other',
  japanese: '久しぶり',
  kana: 'ひさしぶり',
  romaji: 'hisashiburi',
  pt: 'há quanto tempo',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-bf58c3748e1f',
  kind: 'word',
  category: 'noun',
  japanese: '元気',
  kana: 'げんき',
  romaji: 'genki',
  pt: 'bem; saudável',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-93500881e360',
  kind: 'word',
  category: 'noun',
  japanese: '初対面',
  kana: 'しょたいめん',
  romaji: 'shotaimen',
  pt: 'primeiro encontro',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-344d7f60574f',
  kind: 'word',
  category: 'noun',
  japanese: 'お礼',
  kana: 'おれい',
  romaji: 'orei',
  pt: 'agradecimento',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-14a4eff092c1',
  kind: 'word',
  category: 'noun',
  japanese: '失礼',
  kana: 'しつれい',
  romaji: 'shitsurei',
  pt: 'falta de educação; licença',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-ebd294ec50be',
  kind: 'word',
  category: 'noun',
  japanese: '別れ',
  kana: 'わかれ',
  romaji: 'wakare',
  pt: 'despedida',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-bc0412540d4a',
  kind: 'word',
  category: 'noun',
  japanese: '私',
  kana: 'わたし',
  romaji: 'watashi',
  pt: 'eu',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-5a754da4205e',
  kind: 'word',
  category: 'noun',
  japanese: 'あなた',
  kana: 'あなた',
  romaji: 'anata',
  pt: 'você',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-3a0ade3adbe6',
  kind: 'word',
  category: 'noun',
  japanese: '人',
  kana: 'ひと',
  romaji: 'hito',
  pt: 'pessoa',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-6419e42b69e2',
  kind: 'word',
  category: 'noun',
  japanese: '友達',
  kana: 'ともだち',
  romaji: 'tomodachi',
  pt: 'amigo(a)',
  situations: ['🗣️ Conversas básicas', '👥 Amigos e socialização', '📖 Histórias pessoais']
},
{
  id: 'mj-w-f058f2e6430c',
  kind: 'word',
  category: 'noun',
  japanese: '家族',
  kana: 'かぞく',
  romaji: 'kazoku',
  pt: 'família',
  situations: ['🗣️ Conversas básicas', '📖 Histórias pessoais']
},
{
  id: 'mj-w-2a463ed9fd80',
  kind: 'word',
  category: 'noun',
  japanese: '母',
  kana: 'はは',
  romaji: 'haha',
  pt: 'minha mãe',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-59983264ff1c',
  kind: 'word',
  category: 'noun',
  japanese: '父',
  kana: 'ちち',
  romaji: 'chichi',
  pt: 'meu pai',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-4b36b1a02b89',
  kind: 'word',
  category: 'noun',
  japanese: '兄',
  kana: 'あに',
  romaji: 'ani',
  pt: 'meu irmão mais velho',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-eaae4a4ac64c',
  kind: 'word',
  category: 'noun',
  japanese: '姉',
  kana: 'あね',
  romaji: 'ane',
  pt: 'minha irmã mais velha',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-0d856a25cf0d',
  kind: 'word',
  category: 'noun',
  japanese: '弟',
  kana: 'おとうと',
  romaji: 'otouto',
  pt: 'meu irmão mais novo',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-d74ab7a11a1b',
  kind: 'word',
  category: 'noun',
  japanese: '妹',
  kana: 'いもうと',
  romaji: 'imouto',
  pt: 'minha irmã mais nova',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-2a3fccdf3919',
  kind: 'word',
  category: 'noun',
  japanese: '仕事',
  kana: 'しごと',
  romaji: 'shigoto',
  pt: 'trabalho',
  situations: ['🗣️ Conversas básicas', '📖 Histórias pessoais', '🔮 Planos futuros']
},
{
  id: 'mj-w-feb1911e1191',
  kind: 'word',
  category: 'noun',
  japanese: '学生',
  kana: 'がくせい',
  romaji: 'gakusei',
  pt: 'estudante',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-3f4f5fb3ff6e',
  kind: 'word',
  category: 'noun',
  japanese: '先生',
  kana: 'せんせい',
  romaji: 'sensei',
  pt: 'professor(a)',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-09054b5257e3',
  kind: 'word',
  category: 'noun',
  japanese: '日本人',
  kana: 'にほんじん',
  romaji: 'nihonjin',
  pt: 'japonês (pessoa)',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-471154e935a7',
  kind: 'word',
  category: 'noun',
  japanese: 'ブラジル人',
  kana: 'ぶらじるじん',
  romaji: 'burajirujin',
  pt: 'brasileiro(a)',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-b43166f45cda',
  kind: 'word',
  category: 'noun',
  japanese: 'ポルトガル語',
  kana: 'ぽるとがるご',
  romaji: 'porutogarugo',
  pt: 'língua portuguesa',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-dbbb65f084ca',
  kind: 'word',
  category: 'noun',
  japanese: '日本語',
  kana: 'にほんご',
  romaji: 'nihongo',
  pt: 'língua japonesa',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-8c6016a16b2f',
  kind: 'word',
  category: 'noun',
  japanese: '英語',
  kana: 'えいご',
  romaji: 'eigo',
  pt: 'língua inglesa',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-f0ec79c0682e',
  kind: 'word',
  category: 'noun',
  japanese: '趣味',
  kana: 'しゅみ',
  romaji: 'shumi',
  pt: 'hobby',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-8ebb893b2d9e',
  kind: 'word',
  category: 'noun',
  japanese: '出身',
  kana: 'しゅっしん',
  romaji: 'shusshin',
  pt: 'origem; terra natal',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-w-f03fc8f66cbf',
  kind: 'word',
  category: 'other',
  japanese: '何',
  kana: 'なに',
  romaji: 'nani',
  pt: 'o quê',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-d98d7dcb32f3',
  kind: 'word',
  category: 'other',
  japanese: '誰',
  kana: 'だれ',
  romaji: 'dare',
  pt: 'quem',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-20a6950ab48d',
  kind: 'word',
  category: 'other',
  japanese: 'どこ',
  kana: 'どこ',
  romaji: 'doko',
  pt: 'onde',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-099f0c3b3284',
  kind: 'word',
  category: 'other',
  japanese: 'いつ',
  kana: 'いつ',
  romaji: 'itsu',
  pt: 'quando',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-a58688642b92',
  kind: 'word',
  category: 'other',
  japanese: 'どうして',
  kana: 'どうして',
  romaji: 'doushite',
  pt: 'por quê',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-5b25a9339360',
  kind: 'word',
  category: 'other',
  japanese: 'なぜ',
  kana: 'なぜ',
  romaji: 'naze',
  pt: 'por quê (mais formal)',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-c9573423d8fc',
  kind: 'word',
  category: 'other',
  japanese: 'どう',
  kana: 'どう',
  romaji: 'dou',
  pt: 'como',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-28efcdbc2b6a',
  kind: 'word',
  category: 'other',
  japanese: 'どんな',
  kana: 'どんな',
  romaji: 'donna',
  pt: 'que tipo de',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-d98436390a09',
  kind: 'word',
  category: 'other',
  japanese: 'どれ',
  kana: 'どれ',
  romaji: 'dore',
  pt: 'qual (entre opções)',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-44814e7f56ef',
  kind: 'word',
  category: 'other',
  japanese: 'どちら',
  kana: 'どちら',
  romaji: 'dochira',
  pt: 'qual direção; qual dos dois',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-88f95888fb89',
  kind: 'word',
  category: 'other',
  japanese: 'いくら',
  kana: 'いくら',
  romaji: 'ikura',
  pt: 'quanto custa',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-7ea88a976da3',
  kind: 'word',
  category: 'other',
  japanese: 'いくつ',
  kana: 'いくつ',
  romaji: 'ikutsu',
  pt: 'quantos; qual idade (informal)',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-62007ebdb1af',
  kind: 'word',
  category: 'other',
  japanese: '本当',
  kana: 'ほんとう',
  romaji: 'hontou',
  pt: 'verdade',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-4c09f1518ff2',
  kind: 'word',
  category: 'noun',
  japanese: '理由',
  kana: 'りゆう',
  romaji: 'riyuu',
  pt: 'motivo',
  situations: ['❓ Perguntas comuns', '💬 Opiniões']
},
{
  id: 'mj-w-2d923e0749e0',
  kind: 'word',
  category: 'noun',
  japanese: '意味',
  kana: 'いみ',
  romaji: 'imi',
  pt: 'significado',
  situations: ['❓ Perguntas comuns', '💬 Opiniões']
},
{
  id: 'mj-w-cd81ccb3e0db',
  kind: 'word',
  category: 'noun',
  japanese: '質問',
  kana: 'しつもん',
  romaji: 'shitsumon',
  pt: 'pergunta',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-w-6c92b243f384',
  kind: 'word',
  category: 'noun',
  japanese: '教科書',
  kana: 'きょうかしょ',
  romaji: 'kyoukasho',
  pt: 'livro didático',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-b83db2d5003f',
  kind: 'word',
  category: 'noun',
  japanese: 'ノート',
  kana: 'のーと',
  romaji: 'nooto',
  pt: 'caderno',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-4391ba4c6110',
  kind: 'word',
  category: 'noun',
  japanese: '鉛筆',
  kana: 'えんぴつ',
  romaji: 'enpitsu',
  pt: 'lápis',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-316a7f59ba45',
  kind: 'word',
  category: 'noun',
  japanese: '消しゴム',
  kana: 'けしごむ',
  romaji: 'keshigomu',
  pt: 'borracha',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-a88c38ad7334',
  kind: 'word',
  category: 'noun',
  japanese: '宿題',
  kana: 'しゅくだい',
  romaji: 'shukudai',
  pt: 'lição de casa',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-80877177dd4c',
  kind: 'word',
  category: 'noun',
  japanese: '授業',
  kana: 'じゅぎょう',
  romaji: 'jugyou',
  pt: 'aula',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-6c3f18a6d309',
  kind: 'word',
  category: 'noun',
  japanese: '練習',
  kana: 'れんしゅう',
  romaji: 'renshuu',
  pt: 'prática; exercício',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-0950ad9160be',
  kind: 'word',
  category: 'noun',
  japanese: '文法',
  kana: 'ぶんぽう',
  romaji: 'bunpou',
  pt: 'gramática',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-5f1335e8d5fd',
  kind: 'word',
  category: 'noun',
  japanese: '単語',
  kana: 'たんご',
  romaji: 'tango',
  pt: 'palavra; vocábulo',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-cdb46f03c5d6',
  kind: 'word',
  category: 'noun',
  japanese: '漢字',
  kana: 'かんじ',
  romaji: 'kanji',
  pt: 'kanji',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-66dfbba85a72',
  kind: 'word',
  category: 'noun',
  japanese: '平仮名',
  kana: 'ひらがな',
  romaji: 'hiragana',
  pt: 'hiragana',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-7270626104c5',
  kind: 'word',
  category: 'noun',
  japanese: '片仮名',
  kana: 'かたかな',
  romaji: 'katakana',
  pt: 'katakana',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-938a25137659',
  kind: 'word',
  category: 'noun',
  japanese: '発音',
  kana: 'はつおん',
  romaji: 'hatsuon',
  pt: 'pronúncia',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-25e89004e086',
  kind: 'word',
  category: 'noun',
  japanese: '読み方',
  kana: 'よみかた',
  romaji: 'yomikata',
  pt: 'modo de ler',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-97e9c4e373c7',
  kind: 'word',
  category: 'noun',
  japanese: '書き方',
  kana: 'かきかた',
  romaji: 'kakikata',
  pt: 'modo de escrever',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-c88978b9b36c',
  kind: 'word',
  category: 'noun',
  japanese: '答え',
  kana: 'こたえ',
  romaji: 'kotae',
  pt: 'resposta',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-f28c17e9ccd7',
  kind: 'word',
  category: 'noun',
  japanese: '間違い',
  kana: 'まちがい',
  romaji: 'machigai',
  pt: 'erro',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-000ce4fa6556',
  kind: 'word',
  category: 'noun',
  japanese: '例文',
  kana: 'れいぶん',
  romaji: 'reibun',
  pt: 'frase de exemplo',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-df4371995cf4',
  kind: 'word',
  category: 'noun',
  japanese: '復習',
  kana: 'ふくしゅう',
  romaji: 'fukushuu',
  pt: 'revisão',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-1362e551b294',
  kind: 'word',
  category: 'noun',
  japanese: 'お茶',
  kana: 'おちゃ',
  romaji: 'ocha',
  pt: 'chá',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-4bce29176284',
  kind: 'word',
  category: 'noun',
  japanese: 'ご飯',
  kana: 'ごはん',
  romaji: 'gohan',
  pt: 'arroz cozido; refeição',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-4cdefe471e7b',
  kind: 'word',
  category: 'noun',
  japanese: '味噌汁',
  kana: 'みそしる',
  romaji: 'misoshiru',
  pt: 'sopa de missô',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-e4ec7b3304c2',
  kind: 'word',
  category: 'noun',
  japanese: '寿司',
  kana: 'すし',
  romaji: 'sushi',
  pt: 'sushi',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-a653ee3aaaf0',
  kind: 'word',
  category: 'noun',
  japanese: '刺身',
  kana: 'さしみ',
  romaji: 'sashimi',
  pt: 'sashimi',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-0e9c822f7205',
  kind: 'word',
  category: 'noun',
  japanese: 'ラーメン',
  kana: 'らーめん',
  romaji: 'raamen',
  pt: 'lámen',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-9559435e0b62',
  kind: 'word',
  category: 'noun',
  japanese: 'うどん',
  kana: 'うどん',
  romaji: 'udon',
  pt: 'udon',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-d5dbf0315884',
  kind: 'word',
  category: 'noun',
  japanese: 'そば',
  kana: 'そば',
  romaji: 'soba',
  pt: 'sobá; macarrão de trigo-sarraceno',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-8b30506e295d',
  kind: 'word',
  category: 'noun',
  japanese: '天ぷら',
  kana: 'てんぷら',
  romaji: 'tenpura',
  pt: 'tempurá',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-30e69d95adf5',
  kind: 'word',
  category: 'noun',
  japanese: '焼き鳥',
  kana: 'やきとり',
  romaji: 'yakitori',
  pt: 'espetinho de frango',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-daad19eb9333',
  kind: 'word',
  category: 'noun',
  japanese: '野菜',
  kana: 'やさい',
  romaji: 'yasai',
  pt: 'legumes; verduras',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-458be9d6b8cd',
  kind: 'word',
  category: 'noun',
  japanese: '肉',
  kana: 'にく',
  romaji: 'niku',
  pt: 'carne',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-ebe4a90f9b69',
  kind: 'word',
  category: 'noun',
  japanese: '魚',
  kana: 'さかな',
  romaji: 'sakana',
  pt: 'peixe',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-9e41a7d42553',
  kind: 'word',
  category: 'noun',
  japanese: '卵',
  kana: 'たまご',
  romaji: 'tamago',
  pt: 'ovo',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-a91d00ca8605',
  kind: 'word',
  category: 'noun',
  japanese: '塩',
  kana: 'しお',
  romaji: 'shio',
  pt: 'sal',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-04f0928eff25',
  kind: 'word',
  category: 'noun',
  japanese: '砂糖',
  kana: 'さとう',
  romaji: 'satou',
  pt: 'açúcar',
  situations: ['🍜 Restaurante', '☕ Cafeteria']
},
{
  id: 'mj-w-56ca1ee83e31',
  kind: 'word',
  category: 'noun',
  japanese: '醤油',
  kana: 'しょうゆ',
  romaji: 'shouyu',
  pt: 'molho de soja',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-c555f61d7840',
  kind: 'word',
  category: 'noun',
  japanese: '箸',
  kana: 'はし',
  romaji: 'hashi',
  pt: 'hashi; palitinhos',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-ccfdb08f4e5a',
  kind: 'word',
  category: 'noun',
  japanese: '皿',
  kana: 'さら',
  romaji: 'sara',
  pt: 'prato',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-b4cee14467c4',
  kind: 'word',
  category: 'noun',
  japanese: 'メニュー',
  kana: 'めにゅー',
  romaji: 'menyuu',
  pt: 'cardápio',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-0a1634b5cb56',
  kind: 'word',
  category: 'noun',
  japanese: '注文',
  kana: 'ちゅうもん',
  romaji: 'chuumon',
  pt: 'pedido',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-26c2d0b3362c',
  kind: 'word',
  category: 'noun',
  japanese: '会計',
  kana: 'かいけい',
  romaji: 'kaikei',
  pt: 'conta; pagamento',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-69d5e4b7fcb9',
  kind: 'word',
  category: 'noun',
  japanese: '店員',
  kana: 'てんいん',
  romaji: 'tenin',
  pt: 'atendente',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-0091f1f3a548',
  kind: 'word',
  category: 'noun',
  japanese: '辛さ',
  kana: 'からさ',
  romaji: 'karasa',
  pt: 'nível de picância',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-1814a7137ccb',
  kind: 'word',
  category: 'noun',
  japanese: 'コーヒー',
  kana: 'こーひー',
  romaji: 'koohii',
  pt: 'café',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-1005360b7062',
  kind: 'word',
  category: 'noun',
  japanese: '紅茶',
  kana: 'こうちゃ',
  romaji: 'koucha',
  pt: 'chá preto',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-b2d733687ab6',
  kind: 'word',
  category: 'noun',
  japanese: '牛乳',
  kana: 'ぎゅうにゅう',
  romaji: 'gyuunyuu',
  pt: 'leite',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-bbcbc40fac8a',
  kind: 'word',
  category: 'noun',
  japanese: '豆乳',
  kana: 'とうにゅう',
  romaji: 'tounyuu',
  pt: 'leite de soja',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-29860fd8dcbc',
  kind: 'word',
  category: 'noun',
  japanese: 'ジュース',
  kana: 'じゅーす',
  romaji: 'juusu',
  pt: 'suco',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-052025722f7b',
  kind: 'word',
  category: 'noun',
  japanese: '氷',
  kana: 'こおり',
  romaji: 'koori',
  pt: 'gelo',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-321e58c46107',
  kind: 'word',
  category: 'noun',
  japanese: 'ケーキ',
  kana: 'けーき',
  romaji: 'keeki',
  pt: 'bolo',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-550c53e0854c',
  kind: 'word',
  category: 'noun',
  japanese: 'パン',
  kana: 'ぱん',
  romaji: 'pan',
  pt: 'pão',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-5abd0a965fd7',
  kind: 'word',
  category: 'noun',
  japanese: 'サンドイッチ',
  kana: 'さんどいっち',
  romaji: 'sandoitchi',
  pt: 'sanduíche',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-56fe47e8b87d',
  kind: 'word',
  category: 'noun',
  japanese: 'クッキー',
  kana: 'くっきー',
  romaji: 'kukkii',
  pt: 'biscoito',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-a47cf40c8d84',
  kind: 'word',
  category: 'noun',
  japanese: 'カフェラテ',
  kana: 'かふぇらて',
  romaji: 'kaferate',
  pt: 'café com leite (latte)',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-e62d7ad2dcd1',
  kind: 'word',
  category: 'noun',
  japanese: 'カプチーノ',
  kana: 'かぷちーの',
  romaji: 'kapuchiino',
  pt: 'cappuccino',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-2b52b4a1c5f0',
  kind: 'word',
  category: 'noun',
  japanese: '席',
  kana: 'せき',
  romaji: 'seki',
  pt: 'assento; lugar',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-9f24f2ec2801',
  kind: 'word',
  category: 'noun',
  japanese: '持ち帰り',
  kana: 'もちかえり',
  romaji: 'mochikaeri',
  pt: 'para viagem (pedido)',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-73d4901e27a3',
  kind: 'word',
  category: 'noun',
  japanese: '店内',
  kana: 'てんない',
  romaji: 'tennai',
  pt: 'dentro da loja',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-w-32ceefc564dc',
  kind: 'word',
  category: 'noun',
  japanese: '家',
  kana: 'いえ',
  romaji: 'ie',
  pt: 'casa',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-8ad7e8b78e29',
  kind: 'word',
  category: 'noun',
  japanese: '部屋',
  kana: 'へや',
  romaji: 'heya',
  pt: 'quarto; cômodo',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-4f2522a3a4be',
  kind: 'word',
  category: 'noun',
  japanese: '台所',
  kana: 'だいどころ',
  romaji: 'daidokoro',
  pt: 'cozinha',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-0ac52b8ce01a',
  kind: 'word',
  category: 'noun',
  japanese: 'トイレ',
  kana: 'といれ',
  romaji: 'toire',
  pt: 'banheiro',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-3168423e4856',
  kind: 'word',
  category: 'noun',
  japanese: 'お風呂',
  kana: 'おふろ',
  romaji: 'ofuro',
  pt: 'banho; banheira',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-69941c63c65e',
  kind: 'word',
  category: 'noun',
  japanese: 'ベッド',
  kana: 'べっど',
  romaji: 'beddo',
  pt: 'cama',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-ca88b8840375',
  kind: 'word',
  category: 'noun',
  japanese: '机',
  kana: 'つくえ',
  romaji: 'tsukue',
  pt: 'mesa de trabalho',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-53c7aca034cc',
  kind: 'word',
  category: 'noun',
  japanese: '椅子',
  kana: 'いす',
  romaji: 'isu',
  pt: 'cadeira',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-db51d80d5421',
  kind: 'word',
  category: 'noun',
  japanese: '窓',
  kana: 'まど',
  romaji: 'mado',
  pt: 'janela',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-f5a2a105fb67',
  kind: 'word',
  category: 'noun',
  japanese: 'ドア',
  kana: 'どあ',
  romaji: 'doa',
  pt: 'porta',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-c0125fe369e5',
  kind: 'word',
  category: 'noun',
  japanese: '鍵',
  kana: 'かぎ',
  romaji: 'kagi',
  pt: 'chave',
  situations: ['🏠 Cotidiano', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-9224af2caf0c',
  kind: 'word',
  category: 'noun',
  japanese: '電気',
  kana: 'でんき',
  romaji: 'denki',
  pt: 'eletricidade; luz',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-6ae10bda3158',
  kind: 'word',
  category: 'noun',
  japanese: '掃除',
  kana: 'そうじ',
  romaji: 'souji',
  pt: 'limpeza',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-d79a651538fc',
  kind: 'word',
  category: 'noun',
  japanese: '洗濯',
  kana: 'せんたく',
  romaji: 'sentaku',
  pt: 'lavagem de roupa',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-3c1b85cb2a73',
  kind: 'word',
  category: 'noun',
  japanese: '料理',
  kana: 'りょうり',
  romaji: 'ryouri',
  pt: 'culinária; prato',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-8c0524a79441',
  kind: 'word',
  category: 'noun',
  japanese: '朝ご飯',
  kana: 'あさごはん',
  romaji: 'asagohan',
  pt: 'café da manhã',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-a984dafac2ab',
  kind: 'word',
  category: 'noun',
  japanese: '昼ご飯',
  kana: 'ひるごはん',
  romaji: 'hirugohan',
  pt: 'almoço',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-a0042f8dae22',
  kind: 'word',
  category: 'noun',
  japanese: '晩ご飯',
  kana: 'ばんごはん',
  romaji: 'bangohan',
  pt: 'jantar',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-665949a81e09',
  kind: 'word',
  category: 'noun',
  japanese: '散歩',
  kana: 'さんぽ',
  romaji: 'sanpo',
  pt: 'passeio a pé',
  situations: ['🏠 Cotidiano', '👥 Amigos e socialização']
},
{
  id: 'mj-w-426375058761',
  kind: 'word',
  category: 'noun',
  japanese: '犬',
  kana: 'いぬ',
  romaji: 'inu',
  pt: 'cachorro',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-a9bcb42b5fe8',
  kind: 'word',
  category: 'noun',
  japanese: '猫',
  kana: 'ねこ',
  romaji: 'neko',
  pt: 'gato',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-49c21b65bcbf',
  kind: 'word',
  category: 'other',
  japanese: '今日',
  kana: 'きょう',
  romaji: 'kyou',
  pt: 'hoje',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-245b115b9c6c',
  kind: 'word',
  category: 'other',
  japanese: '昨日',
  kana: 'きのう',
  romaji: 'kinou',
  pt: 'ontem',
  situations: ['📅 Planos e horários', '📖 Histórias pessoais']
},
{
  id: 'mj-w-beb5c753bcc9',
  kind: 'word',
  category: 'other',
  japanese: '明日',
  kana: 'あした',
  romaji: 'ashita',
  pt: 'amanhã',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-4f777a71c01a',
  kind: 'word',
  category: 'other',
  japanese: '一昨日',
  kana: 'おととい',
  romaji: 'ototoi',
  pt: 'anteontem',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-1729b83c81b9',
  kind: 'word',
  category: 'other',
  japanese: '明後日',
  kana: 'あさって',
  romaji: 'asatte',
  pt: 'depois de amanhã',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-ba0eb01392fd',
  kind: 'word',
  category: 'other',
  japanese: '今週',
  kana: 'こんしゅう',
  romaji: 'konshuu',
  pt: 'esta semana',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-735da02fbc07',
  kind: 'word',
  category: 'other',
  japanese: '来週',
  kana: 'らいしゅう',
  romaji: 'raishuu',
  pt: 'semana que vem',
  situations: ['📅 Planos e horários', '🔮 Planos futuros']
},
{
  id: 'mj-w-4a136a6336d5',
  kind: 'word',
  category: 'other',
  japanese: '先週',
  kana: 'せんしゅう',
  romaji: 'senshuu',
  pt: 'semana passada',
  situations: ['📅 Planos e horários', '📖 Histórias pessoais']
},
{
  id: 'mj-w-f293d492969c',
  kind: 'word',
  category: 'other',
  japanese: '今月',
  kana: 'こんげつ',
  romaji: 'kongetsu',
  pt: 'este mês',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-8f6ebec0fd04',
  kind: 'word',
  category: 'other',
  japanese: '来月',
  kana: 'らいげつ',
  romaji: 'raigetsu',
  pt: 'mês que vem',
  situations: ['📅 Planos e horários', '🔮 Planos futuros']
},
{
  id: 'mj-w-ed06d4204105',
  kind: 'word',
  category: 'other',
  japanese: '今年',
  kana: 'ことし',
  romaji: 'kotoshi',
  pt: 'este ano',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-d5eeffa6eb5f',
  kind: 'word',
  category: 'other',
  japanese: '来年',
  kana: 'らいねん',
  romaji: 'rainen',
  pt: 'ano que vem',
  situations: ['📅 Planos e horários', '🔮 Planos futuros']
},
{
  id: 'mj-w-da75e3ee91a3',
  kind: 'word',
  category: 'other',
  japanese: '毎日',
  kana: 'まいにち',
  romaji: 'mainichi',
  pt: 'todos os dias',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-9a16807a26b9',
  kind: 'word',
  category: 'other',
  japanese: '毎週',
  kana: 'まいしゅう',
  romaji: 'maishuu',
  pt: 'toda semana',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-0ce48e4f1a38',
  kind: 'word',
  category: 'other',
  japanese: '週末',
  kana: 'しゅうまつ',
  romaji: 'shuumatsu',
  pt: 'fim de semana',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-bcd11b5a1ece',
  kind: 'word',
  category: 'noun',
  japanese: '予定',
  kana: 'よてい',
  romaji: 'yotei',
  pt: 'plano; compromisso',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-1dcbdad335fd',
  kind: 'word',
  category: 'noun',
  japanese: '約束',
  kana: 'やくそく',
  romaji: 'yakusoku',
  pt: 'compromisso; promessa',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-3373441fcc19',
  kind: 'word',
  category: 'noun',
  japanese: '時間',
  kana: 'じかん',
  romaji: 'jikan',
  pt: 'tempo; hora',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-e2619331ffaa',
  kind: 'word',
  category: 'noun',
  japanese: '一時間',
  kana: 'いちじかん',
  romaji: 'ichijikan',
  pt: 'uma hora (duração)',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-ece6a7737cbb',
  kind: 'word',
  category: 'noun',
  japanese: '半分',
  kana: 'はんぶん',
  romaji: 'hanbun',
  pt: 'metade',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-81441e0c493e',
  kind: 'word',
  category: 'noun',
  japanese: '午前',
  kana: 'ごぜん',
  romaji: 'gozen',
  pt: 'antes do meio-dia',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-f57e2c4bd0ff',
  kind: 'word',
  category: 'noun',
  japanese: '午後',
  kana: 'ごご',
  romaji: 'gogo',
  pt: 'depois do meio-dia',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-092726282465',
  kind: 'word',
  category: 'noun',
  japanese: '音楽',
  kana: 'おんがく',
  romaji: 'ongaku',
  pt: 'música',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-w-e2d919de51a9',
  kind: 'word',
  category: 'noun',
  japanese: '映画',
  kana: 'えいが',
  romaji: 'eiga',
  pt: 'filme',
  situations: ['❤️ Gostos e preferências', '🎬 Filmes e séries']
},
{
  id: 'mj-w-b16283707fcd',
  kind: 'word',
  category: 'noun',
  japanese: 'ゲーム',
  kana: 'げーむ',
  romaji: 'geemu',
  pt: 'jogo',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-9abafbe65326',
  kind: 'word',
  category: 'noun',
  japanese: '本',
  kana: 'ほん',
  romaji: 'hon',
  pt: 'livro',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-19d3b82cc2ad',
  kind: 'word',
  category: 'noun',
  japanese: '料理',
  kana: 'りょうり',
  romaji: 'ryouri',
  pt: 'culinária',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-fcdbc9b196c3',
  kind: 'word',
  category: 'noun',
  japanese: '旅行',
  kana: 'りょこう',
  romaji: 'ryokou',
  pt: 'viagem',
  situations: ['❤️ Gostos e preferências', '✈️ Viagens', '📖 Histórias pessoais', '🔮 Planos futuros']
},
{
  id: 'mj-w-2acf801fa22f',
  kind: 'word',
  category: 'noun',
  japanese: '趣味',
  kana: 'しゅみ',
  romaji: 'shumi',
  pt: 'passatempo',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-0f477ebc00a3',
  kind: 'word',
  category: 'noun',
  japanese: '好み',
  kana: 'このみ',
  romaji: 'konomi',
  pt: 'preferência',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-c0b7781e2ebd',
  kind: 'word',
  category: 'other',
  japanese: '一番',
  kana: 'いちばん',
  romaji: 'ichiban',
  pt: 'primeiro lugar; o mais',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-ac5d7d460a11',
  kind: 'word',
  category: 'other',
  japanese: '特に',
  kana: 'とくに',
  romaji: 'tokuni',
  pt: 'especialmente',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-5409930dfe3c',
  kind: 'word',
  category: 'other',
  japanese: 'どちらも',
  kana: 'どちらも',
  romaji: 'dochiramo',
  pt: 'ambos',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-1b6c45d053b8',
  kind: 'word',
  category: 'noun',
  japanese: '興味',
  kana: 'きょうみ',
  romaji: 'kyoumi',
  pt: 'interesse',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-c23fd9b35a9d',
  kind: 'word',
  category: 'noun',
  japanese: 'お気に入り',
  kana: 'おきにいり',
  romaji: 'okiniiri',
  pt: 'favorito',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-493dd4671c61',
  kind: 'word',
  category: 'noun',
  japanese: '理由',
  kana: 'りゆう',
  romaji: 'riyuu',
  pt: 'razão; motivo',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-0b9b54889202',
  kind: 'word',
  category: 'noun',
  japanese: '選択',
  kana: 'せんたく',
  romaji: 'sentaku',
  pt: 'escolha',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-w-1c56e68e948a',
  kind: 'word',
  category: 'noun',
  japanese: '天気',
  kana: 'てんき',
  romaji: 'tenki',
  pt: 'tempo meteorológico',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-d2d56f08022a',
  kind: 'word',
  category: 'noun',
  japanese: '晴れ',
  kana: 'はれ',
  romaji: 'hare',
  pt: 'tempo ensolarado',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-72e6d0d0b586',
  kind: 'word',
  category: 'noun',
  japanese: '曇り',
  kana: 'くもり',
  romaji: 'kumori',
  pt: 'tempo nublado',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-53a43950e676',
  kind: 'word',
  category: 'noun',
  japanese: '雨',
  kana: 'あめ',
  romaji: 'ame',
  pt: 'chuva',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-092c8c6d56d3',
  kind: 'word',
  category: 'noun',
  japanese: '雪',
  kana: 'ゆき',
  romaji: 'yuki',
  pt: 'neve',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-1907372efac1',
  kind: 'word',
  category: 'noun',
  japanese: '風',
  kana: 'かぜ',
  romaji: 'kaze',
  pt: 'vento',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-560cee9a9398',
  kind: 'word',
  category: 'noun',
  japanese: '雷',
  kana: 'かみなり',
  romaji: 'kaminari',
  pt: 'trovão',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-838346af203d',
  kind: 'word',
  category: 'noun',
  japanese: '台風',
  kana: 'たいふう',
  romaji: 'taifuu',
  pt: 'tufão',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-f9bb61ff6086',
  kind: 'word',
  category: 'noun',
  japanese: '気温',
  kana: 'きおん',
  romaji: 'kion',
  pt: 'temperatura do ar',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-87ce5d388ee4',
  kind: 'word',
  category: 'noun',
  japanese: '湿度',
  kana: 'しつど',
  romaji: 'shitsudo',
  pt: 'umidade',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-f921aec18b76',
  kind: 'word',
  category: 'noun',
  japanese: '春',
  kana: 'はる',
  romaji: 'haru',
  pt: 'primavera',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-731579743a79',
  kind: 'word',
  category: 'noun',
  japanese: '夏',
  kana: 'なつ',
  romaji: 'natsu',
  pt: 'verão',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-728d12123010',
  kind: 'word',
  category: 'noun',
  japanese: '秋',
  kana: 'あき',
  romaji: 'aki',
  pt: 'outono',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-c9b97bf20195',
  kind: 'word',
  category: 'noun',
  japanese: '冬',
  kana: 'ふゆ',
  romaji: 'fuyu',
  pt: 'inverno',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-e065e526aed1',
  kind: 'word',
  category: 'noun',
  japanese: '傘',
  kana: 'かさ',
  romaji: 'kasa',
  pt: 'guarda-chuva',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-599c3ceb4b03',
  kind: 'word',
  category: 'noun',
  japanese: '上着',
  kana: 'うわぎ',
  romaji: 'uwagi',
  pt: 'casaco; agasalho',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-1cea7f677c48',
  kind: 'word',
  category: 'noun',
  japanese: '空',
  kana: 'そら',
  romaji: 'sora',
  pt: 'céu',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-fd409d51ebc3',
  kind: 'word',
  category: 'noun',
  japanese: '仲間',
  kana: 'なかま',
  romaji: 'nakama',
  pt: 'companheiro(a); colega do grupo',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-efe1cabf969a',
  kind: 'word',
  category: 'noun',
  japanese: '同僚',
  kana: 'どうりょう',
  romaji: 'douryou',
  pt: 'colega de trabalho',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-2670f061dd18',
  kind: 'word',
  category: 'noun',
  japanese: '近所',
  kana: 'きんじょ',
  romaji: 'kinjo',
  pt: 'vizinhança',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-8f7e269873b1',
  kind: 'word',
  category: 'noun',
  japanese: '会話',
  kana: 'かいわ',
  romaji: 'kaiwa',
  pt: 'conversa',
  situations: ['👥 Amigos e socialização', '🗣️ Conversas básicas']
},
{
  id: 'mj-w-197cb9c9822a',
  kind: 'word',
  category: 'noun',
  japanese: '招待',
  kana: 'しょうたい',
  romaji: 'shoutai',
  pt: 'convite',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-12c735b37a54',
  kind: 'word',
  category: 'noun',
  japanese: '誕生日',
  kana: 'たんじょうび',
  romaji: 'tanjoubi',
  pt: 'aniversário',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-a82738fa6c0d',
  kind: 'word',
  category: 'noun',
  japanese: 'パーティー',
  kana: 'ぱーてぃー',
  romaji: 'paatii',
  pt: 'festa',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-ce682781f11a',
  kind: 'word',
  category: 'noun',
  japanese: '約束',
  kana: 'やくそく',
  romaji: 'yakusoku',
  pt: 'compromisso',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-55c888365359',
  kind: 'word',
  category: 'noun',
  japanese: '連絡',
  kana: 'れんらく',
  romaji: 'renraku',
  pt: 'contato; mensagem',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-1cb48021edb1',
  kind: 'word',
  category: 'noun',
  japanese: '電話',
  kana: 'でんわ',
  romaji: 'denwa',
  pt: 'telefone; ligação',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-771fced2438d',
  kind: 'word',
  category: 'noun',
  japanese: 'メッセージ',
  kana: 'めっせーじ',
  romaji: 'messeeji',
  pt: 'mensagem',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-e9fd2f5d0002',
  kind: 'word',
  category: 'noun',
  japanese: '写真',
  kana: 'しゃしん',
  romaji: 'shashin',
  pt: 'fotografia',
  situations: ['👥 Amigos e socialização', '📖 Histórias pessoais']
},
{
  id: 'mj-w-7caad9c4869f',
  kind: 'word',
  category: 'noun',
  japanese: '公園',
  kana: 'こうえん',
  romaji: 'kouen',
  pt: 'parque',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-4a252cb371e0',
  kind: 'word',
  category: 'noun',
  japanese: '週末',
  kana: 'しゅうまつ',
  romaji: 'shuumatsu',
  pt: 'fim de semana',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-5fee45b8f27d',
  kind: 'word',
  category: 'noun',
  japanese: '気持ち',
  kana: 'きもち',
  romaji: 'kimochi',
  pt: 'sentimento',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-ce18d5a9ebe7',
  kind: 'word',
  category: 'noun',
  japanese: '喜び',
  kana: 'よろこび',
  romaji: 'yorokobi',
  pt: 'alegria',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-fa28b65ff383',
  kind: 'word',
  category: 'noun',
  japanese: '悲しみ',
  kana: 'かなしみ',
  romaji: 'kanashimi',
  pt: 'tristeza',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-c5ece55c1b7a',
  kind: 'word',
  category: 'noun',
  japanese: '怒り',
  kana: 'いかり',
  romaji: 'ikari',
  pt: 'raiva',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-cabf131a47df',
  kind: 'word',
  category: 'noun',
  japanese: '不安',
  kana: 'ふあん',
  romaji: 'fuan',
  pt: 'ansiedade; insegurança',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-7cfc44d8b4a7',
  kind: 'word',
  category: 'noun',
  japanese: '安心',
  kana: 'あんしん',
  romaji: 'anshin',
  pt: 'alívio; tranquilidade',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-62d3ac9d5379',
  kind: 'word',
  category: 'noun',
  japanese: '緊張',
  kana: 'きんちょう',
  romaji: 'kinchou',
  pt: 'nervosismo; tensão',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-1ca7737c0c7b',
  kind: 'word',
  category: 'noun',
  japanese: '希望',
  kana: 'きぼう',
  romaji: 'kibou',
  pt: 'esperança',
  situations: ['😊 Sentimentos', '🔮 Planos futuros']
},
{
  id: 'mj-w-3b3c57142f54',
  kind: 'word',
  category: 'noun',
  japanese: '勇気',
  kana: 'ゆうき',
  romaji: 'yuuki',
  pt: 'coragem',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-25890a17a84f',
  kind: 'word',
  category: 'noun',
  japanese: '自信',
  kana: 'じしん',
  romaji: 'jishin',
  pt: 'autoconfiança',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-2621353bbccf',
  kind: 'word',
  category: 'noun',
  japanese: '感謝',
  kana: 'かんしゃ',
  romaji: 'kansha',
  pt: 'gratidão',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-36ca8ace0a4f',
  kind: 'word',
  category: 'noun',
  japanese: '孤独',
  kana: 'こどく',
  romaji: 'kodoku',
  pt: 'solidão',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-43a8b50183ff',
  kind: 'word',
  category: 'noun',
  japanese: '幸せ',
  kana: 'しあわせ',
  romaji: 'shiawase',
  pt: 'felicidade',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-c99274c70631',
  kind: 'word',
  category: 'noun',
  japanese: '心',
  kana: 'こころ',
  romaji: 'kokoro',
  pt: 'coração; mente',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-b84aed424085',
  kind: 'word',
  category: 'noun',
  japanese: '涙',
  kana: 'なみだ',
  romaji: 'namida',
  pt: 'lágrima',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-4cc2d03bb56f',
  kind: 'word',
  category: 'noun',
  japanese: '疲れ',
  kana: 'つかれ',
  romaji: 'tsukare',
  pt: 'cansaço',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-f2eeba934bed',
  kind: 'word',
  category: 'noun',
  japanese: '心配',
  kana: 'しんぱい',
  romaji: 'shinpai',
  pt: 'preocupação',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-01c39747e859',
  kind: 'word',
  category: 'noun',
  japanese: '値段',
  kana: 'ねだん',
  romaji: 'nedan',
  pt: 'preço',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-2f63432a176a',
  kind: 'word',
  category: 'noun',
  japanese: 'お金',
  kana: 'おかね',
  romaji: 'okane',
  pt: 'dinheiro',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-39c68832f7e7',
  kind: 'word',
  category: 'noun',
  japanese: '現金',
  kana: 'げんきん',
  romaji: 'genkin',
  pt: 'dinheiro em espécie',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-17817ed0c19a',
  kind: 'word',
  category: 'noun',
  japanese: 'カード',
  kana: 'かーど',
  romaji: 'kaado',
  pt: 'cartão',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-bf60122db2b9',
  kind: 'word',
  category: 'noun',
  japanese: '財布',
  kana: 'さいふ',
  romaji: 'saifu',
  pt: 'carteira',
  situations: ['🛍️ Compras', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-d374fee51726',
  kind: 'word',
  category: 'noun',
  japanese: '袋',
  kana: 'ふくろ',
  romaji: 'fukuro',
  pt: 'sacola',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-0a14222bffeb',
  kind: 'word',
  category: 'noun',
  japanese: 'レシート',
  kana: 'れしーと',
  romaji: 'reshiito',
  pt: 'recibo',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-fd8d669255d4',
  kind: 'word',
  category: 'noun',
  japanese: 'サイズ',
  kana: 'さいず',
  romaji: 'saizu',
  pt: 'tamanho',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-36bf0bf2b6fa',
  kind: 'word',
  category: 'noun',
  japanese: '色',
  kana: 'いろ',
  romaji: 'iro',
  pt: 'cor',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-c3c0872b4c94',
  kind: 'word',
  category: 'noun',
  japanese: '靴',
  kana: 'くつ',
  romaji: 'kutsu',
  pt: 'sapatos',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-816e2bc66eb8',
  kind: 'word',
  category: 'noun',
  japanese: '服',
  kana: 'ふく',
  romaji: 'fuku',
  pt: 'roupa',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-17e039cd5502',
  kind: 'word',
  category: 'noun',
  japanese: '帽子',
  kana: 'ぼうし',
  romaji: 'boushi',
  pt: 'boné; chapéu',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-7d52ea1d2b41',
  kind: 'word',
  category: 'noun',
  japanese: '本屋',
  kana: 'ほんや',
  romaji: 'honya',
  pt: 'livraria',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-a7188730ae56',
  kind: 'word',
  category: 'noun',
  japanese: '薬局',
  kana: 'やっきょく',
  romaji: 'yakkyoku',
  pt: 'farmácia',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-74f37c4355e2',
  kind: 'word',
  category: 'noun',
  japanese: 'コンビニ',
  kana: 'こんびに',
  romaji: 'konbini',
  pt: 'loja de conveniência',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-a793f3a0dd62',
  kind: 'word',
  category: 'noun',
  japanese: 'スーパー',
  kana: 'すーぱー',
  romaji: 'suupaa',
  pt: 'supermercado',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-83ab493ec957',
  kind: 'word',
  category: 'noun',
  japanese: '割引',
  kana: 'わりびき',
  romaji: 'waribiki',
  pt: 'desconto',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-5d617f9fded4',
  kind: 'word',
  category: 'noun',
  japanese: '試着',
  kana: 'しちゃく',
  romaji: 'shichaku',
  pt: 'experimentar roupa',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-55cfe7410aac',
  kind: 'word',
  category: 'noun',
  japanese: '電車',
  kana: 'でんしゃ',
  romaji: 'densha',
  pt: 'trem',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-c0c9982bd087',
  kind: 'word',
  category: 'noun',
  japanese: '地下鉄',
  kana: 'ちかてつ',
  romaji: 'chikatetsu',
  pt: 'metrô',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-f7f3318d9a2e',
  kind: 'word',
  category: 'noun',
  japanese: 'バス',
  kana: 'ばす',
  romaji: 'basu',
  pt: 'ônibus',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-8007673de8cd',
  kind: 'word',
  category: 'noun',
  japanese: 'タクシー',
  kana: 'たくしー',
  romaji: 'takushii',
  pt: 'táxi',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-ba4cd424c50a',
  kind: 'word',
  category: 'noun',
  japanese: '切符',
  kana: 'きっぷ',
  romaji: 'kippu',
  pt: 'bilhete',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-58ac64b83c43',
  kind: 'word',
  category: 'noun',
  japanese: '改札',
  kana: 'かいさつ',
  romaji: 'kaisatsu',
  pt: 'catraca; controle de bilhetes',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-23e294c49004',
  kind: 'word',
  category: 'noun',
  japanese: 'ホーム',
  kana: 'ほーむ',
  romaji: 'hoomu',
  pt: 'plataforma da estação',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-32d92d6e07f0',
  kind: 'word',
  category: 'noun',
  japanese: '乗り換え',
  kana: 'のりかえ',
  romaji: 'norikae',
  pt: 'baldeação',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-b1edae84220d',
  kind: 'word',
  category: 'noun',
  japanese: '時刻表',
  kana: 'じこくひょう',
  romaji: 'jikokuhyou',
  pt: 'tabela de horários',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-db18b0457d84',
  kind: 'word',
  category: 'noun',
  japanese: '出発',
  kana: 'しゅっぱつ',
  romaji: 'shuppatsu',
  pt: 'partida',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-d1862d487b6d',
  kind: 'word',
  category: 'noun',
  japanese: '到着',
  kana: 'とうちゃく',
  romaji: 'touchaku',
  pt: 'chegada',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-f7b190d50508',
  kind: 'word',
  category: 'noun',
  japanese: '出口',
  kana: 'でぐち',
  romaji: 'deguchi',
  pt: 'saída',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-3827ac9a40c7',
  kind: 'word',
  category: 'noun',
  japanese: '入口',
  kana: 'いりぐち',
  romaji: 'iriguchi',
  pt: 'entrada',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-339ee88cab07',
  kind: 'word',
  category: 'noun',
  japanese: '右',
  kana: 'みぎ',
  romaji: 'migi',
  pt: 'direita',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-21835bfdaefa',
  kind: 'word',
  category: 'noun',
  japanese: '左',
  kana: 'ひだり',
  romaji: 'hidari',
  pt: 'esquerda',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-da17cd9eafea',
  kind: 'word',
  category: 'noun',
  japanese: '真っすぐ',
  kana: 'まっすぐ',
  romaji: 'massugu',
  pt: 'em linha reta',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-ee765280e943',
  kind: 'word',
  category: 'noun',
  japanese: '交差点',
  kana: 'こうさてん',
  romaji: 'kousaten',
  pt: 'cruzamento',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-6847a3923e0b',
  kind: 'word',
  category: 'noun',
  japanese: '信号',
  kana: 'しんごう',
  romaji: 'shingou',
  pt: 'semáforo',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-2bc576e09372',
  kind: 'word',
  category: 'noun',
  japanese: '道',
  kana: 'みち',
  romaji: 'michi',
  pt: 'rua; caminho',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-3ce7645fefd0',
  kind: 'word',
  category: 'noun',
  japanese: '空港',
  kana: 'くうこう',
  romaji: 'kuukou',
  pt: 'aeroporto',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-8f22cd8f047f',
  kind: 'word',
  category: 'noun',
  japanese: '飛行機',
  kana: 'ひこうき',
  romaji: 'hikouki',
  pt: 'avião',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-82491bd38174',
  kind: 'word',
  category: 'noun',
  japanese: '観光',
  kana: 'かんこう',
  romaji: 'kankou',
  pt: 'turismo',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-03b1eeb601db',
  kind: 'word',
  category: 'noun',
  japanese: '航空券',
  kana: 'こうくうけん',
  romaji: 'koukuuken',
  pt: 'passagem aérea',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-4d7b785a80bb',
  kind: 'word',
  category: 'noun',
  japanese: '搭乗券',
  kana: 'とうじょうけん',
  romaji: 'toujouken',
  pt: 'cartão de embarque',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-5325dd520b0c',
  kind: 'word',
  category: 'noun',
  japanese: '荷物',
  kana: 'にもつ',
  romaji: 'nimotsu',
  pt: 'bagagem',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-7ea357ad7f24',
  kind: 'word',
  category: 'noun',
  japanese: '手荷物',
  kana: 'てにもつ',
  romaji: 'tenimotsu',
  pt: 'bagagem de mão',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-caf654609f1f',
  kind: 'word',
  category: 'noun',
  japanese: '入国審査',
  kana: 'にゅうこくしんさ',
  romaji: 'nyuukokushinsa',
  pt: 'controle de imigração',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-c90345ff4cb3',
  kind: 'word',
  category: 'noun',
  japanese: '税関',
  kana: 'ぜいかん',
  romaji: 'zeikan',
  pt: 'alfândega',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-c8e7adac89b9',
  kind: 'word',
  category: 'noun',
  japanese: 'ホテル',
  kana: 'ほてる',
  romaji: 'hoteru',
  pt: 'hotel',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-ea42065d5286',
  kind: 'word',
  category: 'noun',
  japanese: '予約',
  kana: 'よやく',
  romaji: 'yoyaku',
  pt: 'reserva',
  situations: ['✈️ Viagens', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-3fecc1623527',
  kind: 'word',
  category: 'noun',
  japanese: '部屋',
  kana: 'へや',
  romaji: 'heya',
  pt: 'quarto',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-798eca21a930',
  kind: 'word',
  category: 'noun',
  japanese: '地図',
  kana: 'ちず',
  romaji: 'chizu',
  pt: 'mapa',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-8f4d0037db5d',
  kind: 'word',
  category: 'noun',
  japanese: '観光地',
  kana: 'かんこうち',
  romaji: 'kankouchi',
  pt: 'ponto turístico',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-c2d266542404',
  kind: 'word',
  category: 'noun',
  japanese: 'お土産',
  kana: 'おみやげ',
  romaji: 'omiyage',
  pt: 'lembrancinha de viagem',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-fb5a93001980',
  kind: 'word',
  category: 'noun',
  japanese: '旅行者',
  kana: 'りょこうしゃ',
  romaji: 'ryokousha',
  pt: 'viajante',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-e75426f69578',
  kind: 'word',
  category: 'noun',
  japanese: '外国',
  kana: 'がいこく',
  romaji: 'gaikoku',
  pt: 'país estrangeiro',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-eaa8ec69c00e',
  kind: 'word',
  category: 'noun',
  japanese: '歌',
  kana: 'うた',
  romaji: 'uta',
  pt: 'canção',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-4f1858345df1',
  kind: 'word',
  category: 'noun',
  japanese: '歌詞',
  kana: 'かし',
  romaji: 'kashi',
  pt: 'letra da música',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-cf182ce4dbfd',
  kind: 'word',
  category: 'noun',
  japanese: '曲',
  kana: 'きょく',
  romaji: 'kyoku',
  pt: 'música; faixa',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-1744709f9d95',
  kind: 'word',
  category: 'noun',
  japanese: 'アルバム',
  kana: 'あるばむ',
  romaji: 'arubamu',
  pt: 'álbum',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-8e9013c87356',
  kind: 'word',
  category: 'noun',
  japanese: 'バンド',
  kana: 'ばんど',
  romaji: 'bando',
  pt: 'banda',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-c0a21761e55a',
  kind: 'word',
  category: 'noun',
  japanese: '歌手',
  kana: 'かしゅ',
  romaji: 'kashu',
  pt: 'cantor(a)',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-46ecd9ff1b72',
  kind: 'word',
  category: 'noun',
  japanese: '作曲家',
  kana: 'さっきょくか',
  romaji: 'sakkyokuka',
  pt: 'compositor(a)',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-9c2f78895d20',
  kind: 'word',
  category: 'noun',
  japanese: '演奏',
  kana: 'えんそう',
  romaji: 'ensou',
  pt: 'execução musical',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-34a3d34436ad',
  kind: 'word',
  category: 'noun',
  japanese: '楽器',
  kana: 'がっき',
  romaji: 'gakki',
  pt: 'instrumento musical',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-2694ac89a9f2',
  kind: 'word',
  category: 'noun',
  japanese: 'ギター',
  kana: 'ぎたー',
  romaji: 'gitaa',
  pt: 'guitarra',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-6e50b9b54a79',
  kind: 'word',
  category: 'noun',
  japanese: 'ピアノ',
  kana: 'ぴあの',
  romaji: 'piano',
  pt: 'piano',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-aa502e1fe2a5',
  kind: 'word',
  category: 'noun',
  japanese: 'ドラム',
  kana: 'どらむ',
  romaji: 'doramu',
  pt: 'bateria',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-916e508ba8ca',
  kind: 'word',
  category: 'noun',
  japanese: 'バイオリン',
  kana: 'ばいおりん',
  romaji: 'baiorin',
  pt: 'violino',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-35af4ed09219',
  kind: 'word',
  category: 'noun',
  japanese: 'メロディー',
  kana: 'めろでぃー',
  romaji: 'merodii',
  pt: 'melodia',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-1aef83da0e3a',
  kind: 'word',
  category: 'noun',
  japanese: 'リズム',
  kana: 'りずむ',
  romaji: 'rizumu',
  pt: 'ritmo',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-5d73b1ee12ce',
  kind: 'word',
  category: 'noun',
  japanese: '歌声',
  kana: 'うたごえ',
  romaji: 'utagoe',
  pt: 'voz cantada',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-6d5a105cadc6',
  kind: 'word',
  category: 'noun',
  japanese: 'ロック',
  kana: 'ろっく',
  romaji: 'rokku',
  pt: 'rock',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-6eb84505bd16',
  kind: 'word',
  category: 'noun',
  japanese: 'クラシック',
  kana: 'くらしっく',
  romaji: 'kurashikku',
  pt: 'música clássica',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-eb3a1e217346',
  kind: 'word',
  category: 'noun',
  japanese: '電子音楽',
  kana: 'でんしおんがく',
  romaji: 'denshiongaku',
  pt: 'música eletrônica',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-0d8f9f4f6692',
  kind: 'word',
  category: 'noun',
  japanese: 'コンサート',
  kana: 'こんさーと',
  romaji: 'konsaato',
  pt: 'concerto; show',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-22a9cb22af11',
  kind: 'word',
  category: 'noun',
  japanese: 'ライブ',
  kana: 'らいぶ',
  romaji: 'raibu',
  pt: 'show ao vivo',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-0602f08b8aaf',
  kind: 'word',
  category: 'noun',
  japanese: 'イヤホン',
  kana: 'いやほん',
  romaji: 'iyahon',
  pt: 'fones de ouvido',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-1e3d21d5a7d6',
  kind: 'word',
  category: 'noun',
  japanese: 'ヘッドホン',
  kana: 'へっどほん',
  romaji: 'heddohon',
  pt: 'headphones',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-99db34a2b8fb',
  kind: 'word',
  category: 'noun',
  japanese: '音量',
  kana: 'おんりょう',
  romaji: 'onryou',
  pt: 'volume do som',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-b95884498b7c',
  kind: 'word',
  category: 'noun',
  japanese: 'ゲーム',
  kana: 'げーむ',
  romaji: 'geemu',
  pt: 'jogo eletrônico',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-c8513f1768c6',
  kind: 'word',
  category: 'noun',
  japanese: 'テレビゲーム',
  kana: 'てれびげーむ',
  romaji: 'terebigeemu',
  pt: 'videogame',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-02611f5393a9',
  kind: 'word',
  category: 'noun',
  japanese: 'ゲーム機',
  kana: 'げーむき',
  romaji: 'geemuki',
  pt: 'console',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-c18338c51d95',
  kind: 'word',
  category: 'noun',
  japanese: 'コントローラー',
  kana: 'こんとろーらー',
  romaji: 'kontorooraa',
  pt: 'controle de videogame',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-24e0c8fc69f5',
  kind: 'word',
  category: 'noun',
  japanese: '画面',
  kana: 'がめん',
  romaji: 'gamen',
  pt: 'tela',
  situations: ['🎮 Videogames', '💻 Tecnologia']
},
{
  id: 'mj-w-8afca9eca69e',
  kind: 'word',
  category: 'noun',
  japanese: 'キャラクター',
  kana: 'きゃらくたー',
  romaji: 'kyarakutaa',
  pt: 'personagem',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-c10655c50e2b',
  kind: 'word',
  category: 'noun',
  japanese: '主人公',
  kana: 'しゅじんこう',
  romaji: 'shujinkou',
  pt: 'protagonista',
  situations: ['🎮 Videogames', '🍥 Anime e mangá', '🎬 Filmes e séries']
},
{
  id: 'mj-w-0c6562a12f9c',
  kind: 'word',
  category: 'noun',
  japanese: '敵',
  kana: 'てき',
  romaji: 'teki',
  pt: 'inimigo',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-13794b6e1d03',
  kind: 'word',
  category: 'noun',
  japanese: '仲間',
  kana: 'なかま',
  romaji: 'nakama',
  pt: 'companheiro(a) de equipe',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-de2572a193cb',
  kind: 'word',
  category: 'noun',
  japanese: '冒険',
  kana: 'ぼうけん',
  romaji: 'bouken',
  pt: 'aventura',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-2e8c6c870454',
  kind: 'word',
  category: 'noun',
  japanese: 'ステージ',
  kana: 'すてーじ',
  romaji: 'suteeji',
  pt: 'fase de jogo',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-4720da77af1d',
  kind: 'word',
  category: 'noun',
  japanese: 'レベル',
  kana: 'れべる',
  romaji: 'reberu',
  pt: 'nível',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-de5056f45add',
  kind: 'word',
  category: 'noun',
  japanese: '難易度',
  kana: 'なんいど',
  romaji: 'nanido',
  pt: 'dificuldade',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-9296139dd177',
  kind: 'word',
  category: 'noun',
  japanese: '攻略',
  kana: 'こうりゃく',
  romaji: 'kouryaku',
  pt: 'estratégia para vencer no jogo',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-4ed40cd2ae9b',
  kind: 'word',
  category: 'noun',
  japanese: '技',
  kana: 'わざ',
  romaji: 'waza',
  pt: 'golpe; técnica',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-51e8f000eff3',
  kind: 'word',
  category: 'noun',
  japanese: 'スピード',
  kana: 'すぴーど',
  romaji: 'supiido',
  pt: 'velocidade',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-a05c90c84007',
  kind: 'word',
  category: 'noun',
  japanese: 'ジャンプ',
  kana: 'じゃんぷ',
  romaji: 'janpu',
  pt: 'pulo',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-8fad6c387bd9',
  kind: 'word',
  category: 'noun',
  japanese: 'スケートボード',
  kana: 'すけーとぼーど',
  romaji: 'sukeetoboodo',
  pt: 'skate',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-f526848cd849',
  kind: 'word',
  category: 'noun',
  japanese: 'トリック',
  kana: 'とりっく',
  romaji: 'torikku',
  pt: 'manobra',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-4c1f29c2ae44',
  kind: 'word',
  category: 'noun',
  japanese: 'セーブ',
  kana: 'せーぶ',
  romaji: 'seebu',
  pt: 'salvar o progresso',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-3978986a879e',
  kind: 'word',
  category: 'noun',
  japanese: '対戦',
  kana: 'たいせん',
  romaji: 'taisen',
  pt: 'partida competitiva',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-3a8f385dc547',
  kind: 'word',
  category: 'noun',
  japanese: '協力',
  kana: 'きょうりょく',
  romaji: 'kyouryoku',
  pt: 'cooperação',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-2ea8deee64dc',
  kind: 'word',
  category: 'noun',
  japanese: 'ボス',
  kana: 'ぼす',
  romaji: 'bosu',
  pt: 'chefe de fase',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-37034482eb5c',
  kind: 'word',
  category: 'noun',
  japanese: 'クリア',
  kana: 'くりあ',
  romaji: 'kuria',
  pt: 'completar uma fase ou jogo',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-3ba2bbf23d0f',
  kind: 'word',
  category: 'noun',
  japanese: 'アニメ',
  kana: 'あにめ',
  romaji: 'anime',
  pt: 'anime',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-76d13a0d8f9b',
  kind: 'word',
  category: 'noun',
  japanese: '漫画',
  kana: 'まんが',
  romaji: 'manga',
  pt: 'mangá',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-a86b27167169',
  kind: 'word',
  category: 'noun',
  japanese: '作品',
  kana: 'さくひん',
  romaji: 'sakuhin',
  pt: 'obra',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-1147fb7353f1',
  kind: 'word',
  category: 'noun',
  japanese: '登場人物',
  kana: 'とうじょうじんぶつ',
  romaji: 'toujoujinbutsu',
  pt: 'personagem de uma história',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-8207b01e8b93',
  kind: 'word',
  category: 'noun',
  japanese: '物語',
  kana: 'ものがたり',
  romaji: 'monogatari',
  pt: 'história; narrativa',
  situations: ['🍥 Anime e mangá', '🎬 Filmes e séries']
},
{
  id: 'mj-w-5a93ceeab744',
  kind: 'word',
  category: 'noun',
  japanese: '設定',
  kana: 'せってい',
  romaji: 'settei',
  pt: 'ambientação; premissa',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-a77ca9e4168e',
  kind: 'word',
  category: 'noun',
  japanese: '世界観',
  kana: 'せかいかん',
  romaji: 'sekaikan',
  pt: 'visão de mundo; universo da obra',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-74c01894c218',
  kind: 'word',
  category: 'noun',
  japanese: '能力',
  kana: 'のうりょく',
  romaji: 'nouryoku',
  pt: 'habilidade; poder',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-046e30aa21e0',
  kind: 'word',
  category: 'noun',
  japanese: '魔法',
  kana: 'まほう',
  romaji: 'mahou',
  pt: 'magia',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-702ecdf21d5e',
  kind: 'word',
  category: 'noun',
  japanese: '忍者',
  kana: 'にんじゃ',
  romaji: 'ninja',
  pt: 'ninja',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-886c2a07bae5',
  kind: 'word',
  category: 'noun',
  japanese: '戦い',
  kana: 'たたかい',
  romaji: 'tatakai',
  pt: 'luta; batalha',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-e9a46c4214e9',
  kind: 'word',
  category: 'noun',
  japanese: '友情',
  kana: 'ゆうじょう',
  romaji: 'yuujou',
  pt: 'amizade',
  situations: ['🍥 Anime e mangá', '👥 Amigos e socialização']
},
{
  id: 'mj-w-46c6b3d65601',
  kind: 'word',
  category: 'noun',
  japanese: '成長',
  kana: 'せいちょう',
  romaji: 'seichou',
  pt: 'crescimento; desenvolvimento',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-77a1d184070c',
  kind: 'word',
  category: 'noun',
  japanese: '最終回',
  kana: 'さいしゅうかい',
  romaji: 'saishuukai',
  pt: 'episódio final',
  situations: ['🍥 Anime e mangá', '🎬 Filmes e séries']
},
{
  id: 'mj-w-199bf1d5e653',
  kind: 'word',
  category: 'noun',
  japanese: '続編',
  kana: 'ぞくへん',
  romaji: 'zokuhen',
  pt: 'continuação',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-f3ebed12cb89',
  kind: 'word',
  category: 'noun',
  japanese: '原作',
  kana: 'げんさく',
  romaji: 'gensaku',
  pt: 'obra original',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-d2a278e6bc0f',
  kind: 'word',
  category: 'noun',
  japanese: '声優',
  kana: 'せいゆう',
  romaji: 'seiyuu',
  pt: 'dublador(a) japonês(a)',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-b170c70d763e',
  kind: 'word',
  category: 'noun',
  japanese: '悪役',
  kana: 'あくやく',
  romaji: 'akuyaku',
  pt: 'vilão',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-39163b35bd44',
  kind: 'word',
  category: 'noun',
  japanese: '感想',
  kana: 'かんそう',
  romaji: 'kansou',
  pt: 'impressão; opinião',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-95347732922e',
  kind: 'word',
  category: 'noun',
  japanese: '技術',
  kana: 'ぎじゅつ',
  romaji: 'gijutsu',
  pt: 'tecnologia; técnica',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-02e4066d66f7',
  kind: 'word',
  category: 'noun',
  japanese: 'スマホ',
  kana: 'すまほ',
  romaji: 'sumaho',
  pt: 'smartphone',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-01a3be73e530',
  kind: 'word',
  category: 'noun',
  japanese: '携帯電話',
  kana: 'けいたいでんわ',
  romaji: 'keitaidenwa',
  pt: 'telefone celular',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-3a4eb6c7cdac',
  kind: 'word',
  category: 'noun',
  japanese: 'パソコン',
  kana: 'ぱそこん',
  romaji: 'pasokon',
  pt: 'computador pessoal',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-7a5f3610641e',
  kind: 'word',
  category: 'noun',
  japanese: 'プログラミング',
  kana: 'ぷろぐらみんぐ',
  romaji: 'puroguramingu',
  pt: 'programação',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-0082bba29bc7',
  kind: 'word',
  category: 'noun',
  japanese: 'コード',
  kana: 'こーど',
  romaji: 'koodo',
  pt: 'código',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-c68473f3a8fd',
  kind: 'word',
  category: 'noun',
  japanese: 'ソフトウェア',
  kana: 'そふとうぇあ',
  romaji: 'sofutowea',
  pt: 'software',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-eae00939597b',
  kind: 'word',
  category: 'noun',
  japanese: 'ハードウェア',
  kana: 'はーどうぇあ',
  romaji: 'haadowea',
  pt: 'hardware',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-7824ea47cd15',
  kind: 'word',
  category: 'noun',
  japanese: 'アプリ',
  kana: 'あぷり',
  romaji: 'apuri',
  pt: 'aplicativo',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-60027b9519e2',
  kind: 'word',
  category: 'noun',
  japanese: 'ウェブサイト',
  kana: 'うぇぶさいと',
  romaji: 'webusaito',
  pt: 'site',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-13b1bff173b0',
  kind: 'word',
  category: 'noun',
  japanese: 'インターネット',
  kana: 'いんたーねっと',
  romaji: 'intaanetto',
  pt: 'internet',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-eabff017c002',
  kind: 'word',
  category: 'noun',
  japanese: '人工知能',
  kana: 'じんこうちのう',
  romaji: 'jinkouchinou',
  pt: 'inteligência artificial',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-89d211f32c52',
  kind: 'word',
  category: 'noun',
  japanese: 'キーボード',
  kana: 'きーぼーど',
  romaji: 'kiiboodo',
  pt: 'teclado',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-51d6fb1d5943',
  kind: 'word',
  category: 'noun',
  japanese: 'マウス',
  kana: 'まうす',
  romaji: 'mausu',
  pt: 'mouse',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-64fcdbb3da90',
  kind: 'word',
  category: 'noun',
  japanese: 'バグ',
  kana: 'ばぐ',
  romaji: 'bagu',
  pt: 'bug; defeito no código',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-675b6bb0f835',
  kind: 'word',
  category: 'noun',
  japanese: 'エラー',
  kana: 'えらー',
  romaji: 'eraa',
  pt: 'erro',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-ae7a2d8de010',
  kind: 'word',
  category: 'noun',
  japanese: '更新',
  kana: 'こうしん',
  romaji: 'koushin',
  pt: 'atualização',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-61db362efdf9',
  kind: 'word',
  category: 'noun',
  japanese: '設定',
  kana: 'せってい',
  romaji: 'settei',
  pt: 'configuração',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-0170d54cd7ec',
  kind: 'word',
  category: 'noun',
  japanese: '電池',
  kana: 'でんち',
  romaji: 'denchi',
  pt: 'pilha; bateria',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-91d6deb97b0f',
  kind: 'word',
  category: 'noun',
  japanese: '充電',
  kana: 'じゅうでん',
  romaji: 'juuden',
  pt: 'carregamento de bateria',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-264df9475a0f',
  kind: 'word',
  category: 'noun',
  japanese: '通信',
  kana: 'つうしん',
  romaji: 'tsuushin',
  pt: 'comunicação de dados',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-d44b808e6ced',
  kind: 'word',
  category: 'noun',
  japanese: 'ドラマ',
  kana: 'どらま',
  romaji: 'dorama',
  pt: 'série; drama de TV',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-b8638ed4d5fe',
  kind: 'word',
  category: 'noun',
  japanese: '番組',
  kana: 'ばんぐみ',
  romaji: 'bangumi',
  pt: 'programa de TV',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-20f1465d13f9',
  kind: 'word',
  category: 'noun',
  japanese: '俳優',
  kana: 'はいゆう',
  romaji: 'haiyuu',
  pt: 'ator',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-95f99f59b570',
  kind: 'word',
  category: 'noun',
  japanese: '女優',
  kana: 'じょゆう',
  romaji: 'joyuu',
  pt: 'atriz',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-f828cfae626f',
  kind: 'word',
  category: 'noun',
  japanese: '監督',
  kana: 'かんとく',
  romaji: 'kantoku',
  pt: 'diretor(a)',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-68b88b72a90d',
  kind: 'word',
  category: 'noun',
  japanese: '脚本',
  kana: 'きゃくほん',
  romaji: 'kyakuhon',
  pt: 'roteiro',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-129da46e3200',
  kind: 'word',
  category: 'noun',
  japanese: '字幕',
  kana: 'じまく',
  romaji: 'jimaku',
  pt: 'legendas',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-d467d052a452',
  kind: 'word',
  category: 'noun',
  japanese: '吹き替え',
  kana: 'ふきかえ',
  romaji: 'fukikae',
  pt: 'dublagem',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-2eb87cacf7f6',
  kind: 'word',
  category: 'noun',
  japanese: '場面',
  kana: 'ばめん',
  romaji: 'bamen',
  pt: 'cena',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-84efe567a637',
  kind: 'word',
  category: 'noun',
  japanese: '結末',
  kana: 'けつまつ',
  romaji: 'ketsumatsu',
  pt: 'desfecho',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-1f8751cca9d8',
  kind: 'word',
  category: 'noun',
  japanese: '登場人物',
  kana: 'とうじょうじんぶつ',
  romaji: 'toujoujinbutsu',
  pt: 'personagem',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-995309624092',
  kind: 'word',
  category: 'noun',
  japanese: '映画館',
  kana: 'えいがかん',
  romaji: 'eigakan',
  pt: 'cinema',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-0a2d25a17cde',
  kind: 'word',
  category: 'noun',
  japanese: '予告編',
  kana: 'よこくへん',
  romaji: 'yokokuhen',
  pt: 'trailer',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-3436aebc7166',
  kind: 'word',
  category: 'noun',
  japanese: '配信',
  kana: 'はいしん',
  romaji: 'haishin',
  pt: 'distribuição por streaming',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-20c3f238db74',
  kind: 'word',
  category: 'noun',
  japanese: '感動',
  kana: 'かんどう',
  romaji: 'kandou',
  pt: 'emoção; comoção',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-w-3b0bdc15c750',
  kind: 'word',
  category: 'noun',
  japanese: '意見',
  kana: 'いけん',
  romaji: 'iken',
  pt: 'opinião',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-64db974ad3eb',
  kind: 'word',
  category: 'noun',
  japanese: '考え',
  kana: 'かんがえ',
  romaji: 'kangae',
  pt: 'pensamento; ideia',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-31ed2e239944',
  kind: 'word',
  category: 'noun',
  japanese: '賛成',
  kana: 'さんせい',
  romaji: 'sansei',
  pt: 'concordância',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-86a80b947713',
  kind: 'word',
  category: 'noun',
  japanese: '反対',
  kana: 'はんたい',
  romaji: 'hantai',
  pt: 'oposição',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-43ef3c391f1a',
  kind: 'word',
  category: 'noun',
  japanese: '違い',
  kana: 'ちがい',
  romaji: 'chigai',
  pt: 'diferença',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-2280ab815f1f',
  kind: 'word',
  category: 'noun',
  japanese: '共通点',
  kana: 'きょうつうてん',
  romaji: 'kyoutsuuten',
  pt: 'ponto em comum',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-645bb2de476c',
  kind: 'word',
  category: 'noun',
  japanese: '問題',
  kana: 'もんだい',
  romaji: 'mondai',
  pt: 'problema; questão',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-eb08f16c18c3',
  kind: 'word',
  category: 'noun',
  japanese: '解決',
  kana: 'かいけつ',
  romaji: 'kaiketsu',
  pt: 'solução',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-2e0644035278',
  kind: 'word',
  category: 'noun',
  japanese: '自由',
  kana: 'じゆう',
  romaji: 'jiyuu',
  pt: 'liberdade',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-0c2609436353',
  kind: 'word',
  category: 'noun',
  japanese: '責任',
  kana: 'せきにん',
  romaji: 'sekinin',
  pt: 'responsabilidade',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-1513f5c72fe8',
  kind: 'word',
  category: 'noun',
  japanese: '正義',
  kana: 'せいぎ',
  romaji: 'seigi',
  pt: 'justiça',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-e46c173791d4',
  kind: 'word',
  category: 'noun',
  japanese: '倫理',
  kana: 'りんり',
  romaji: 'rinri',
  pt: 'ética',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-9a52490556eb',
  kind: 'word',
  category: 'noun',
  japanese: '哲学',
  kana: 'てつがく',
  romaji: 'tetsugaku',
  pt: 'filosofia',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-c015fdc952c8',
  kind: 'word',
  category: 'noun',
  japanese: '価値観',
  kana: 'かちかん',
  romaji: 'kachikan',
  pt: 'valores pessoais',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-fe054c52f637',
  kind: 'word',
  category: 'noun',
  japanese: '幸福',
  kana: 'こうふく',
  romaji: 'koufuku',
  pt: 'felicidade',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-fe0f47add919',
  kind: 'word',
  category: 'noun',
  japanese: '人生',
  kana: 'じんせい',
  romaji: 'jinsei',
  pt: 'vida humana',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-858584e06909',
  kind: 'word',
  category: 'noun',
  japanese: '平和',
  kana: 'へいわ',
  romaji: 'heiwa',
  pt: 'paz',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-5e08c47e67d6',
  kind: 'word',
  category: 'noun',
  japanese: '環境',
  kana: 'かんきょう',
  romaji: 'kankyou',
  pt: 'meio ambiente',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-bf1e441d5a13',
  kind: 'word',
  category: 'noun',
  japanese: '政治',
  kana: 'せいじ',
  romaji: 'seiji',
  pt: 'política',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-42060ac0f8c7',
  kind: 'word',
  category: 'other',
  japanese: '子供の頃',
  kana: 'こどものころ',
  romaji: 'kodomonokoro',
  pt: 'quando era criança',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-23c41b07de69',
  kind: 'word',
  category: 'other',
  japanese: '昔',
  kana: 'むかし',
  romaji: 'mukashi',
  pt: 'antigamente',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-1172430b3b6b',
  kind: 'word',
  category: 'noun',
  japanese: '思い出',
  kana: 'おもいで',
  romaji: 'omoide',
  pt: 'lembrança',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-201af20e1276',
  kind: 'word',
  category: 'noun',
  japanese: '経験',
  kana: 'けいけん',
  romaji: 'keiken',
  pt: 'experiência',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-ac086bdea798',
  kind: 'word',
  category: 'noun',
  japanese: '出来事',
  kana: 'できごと',
  romaji: 'dekigoto',
  pt: 'acontecimento',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-ace2a227e94e',
  kind: 'word',
  category: 'noun',
  japanese: '去年',
  kana: 'きょねん',
  romaji: 'kyonen',
  pt: 'ano passado',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-98c2fab81173',
  kind: 'word',
  category: 'other',
  japanese: '初めて',
  kana: 'はじめて',
  romaji: 'hajimete',
  pt: 'pela primeira vez',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-549cf8ab6cd2',
  kind: 'word',
  category: 'other',
  japanese: '久しぶり',
  kana: 'ひさしぶり',
  romaji: 'hisashiburi',
  pt: 'depois de muito tempo',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-e30741ca677f',
  kind: 'word',
  category: 'noun',
  japanese: '学校',
  kana: 'がっこう',
  romaji: 'gakkou',
  pt: 'escola',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-159c5db79382',
  kind: 'word',
  category: 'noun',
  japanese: '故郷',
  kana: 'ふるさと',
  romaji: 'furusato',
  pt: 'terra natal',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-7c9454f37fc3',
  kind: 'word',
  category: 'noun',
  japanese: '将来',
  kana: 'しょうらい',
  romaji: 'shourai',
  pt: 'futuro',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-8c907be02f7d',
  kind: 'word',
  category: 'noun',
  japanese: '夢',
  kana: 'ゆめ',
  romaji: 'yume',
  pt: 'sonho',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-bb97b148e44e',
  kind: 'word',
  category: 'noun',
  japanese: '目標',
  kana: 'もくひょう',
  romaji: 'mokuhyou',
  pt: 'objetivo',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-6091f9c0f990',
  kind: 'word',
  category: 'noun',
  japanese: '計画',
  kana: 'けいかく',
  romaji: 'keikaku',
  pt: 'plano',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-d5d91b46cdaf',
  kind: 'word',
  category: 'noun',
  japanese: '予定',
  kana: 'よてい',
  romaji: 'yotei',
  pt: 'compromisso; plano',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-74d0bd6b9065',
  kind: 'word',
  category: 'noun',
  japanese: '勉強',
  kana: 'べんきょう',
  romaji: 'benkyou',
  pt: 'estudo',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-dc8ff5575c86',
  kind: 'word',
  category: 'noun',
  japanese: '挑戦',
  kana: 'ちょうせん',
  romaji: 'chousen',
  pt: 'desafio',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-c27d6640c803',
  kind: 'word',
  category: 'noun',
  japanese: '練習',
  kana: 'れんしゅう',
  romaji: 'renshuu',
  pt: 'treino',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-d5adb17a9821',
  kind: 'word',
  category: 'noun',
  japanese: '努力',
  kana: 'どりょく',
  romaji: 'doryoku',
  pt: 'esforço',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-ea7cf85bd6d1',
  kind: 'word',
  category: 'noun',
  japanese: '成功',
  kana: 'せいこう',
  romaji: 'seikou',
  pt: 'sucesso',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-3abbd4bd9b04',
  kind: 'word',
  category: 'noun',
  japanese: '失敗',
  kana: 'しっぱい',
  romaji: 'shippai',
  pt: 'fracasso',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-953de693176d',
  kind: 'word',
  category: 'noun',
  japanese: '習慣',
  kana: 'しゅうかん',
  romaji: 'shuukan',
  pt: 'hábito',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-f2fa82ef3c5b',
  kind: 'word',
  category: 'noun',
  japanese: '成長',
  kana: 'せいちょう',
  romaji: 'seichou',
  pt: 'crescimento pessoal',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-e0509d84d3ea',
  kind: 'word',
  category: 'noun',
  japanese: '問題',
  kana: 'もんだい',
  romaji: 'mondai',
  pt: 'problema',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-97d012705e6b',
  kind: 'word',
  category: 'noun',
  japanese: '助け',
  kana: 'たすけ',
  romaji: 'tasuke',
  pt: 'ajuda',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-b45b24b349e4',
  kind: 'word',
  category: 'noun',
  japanese: '道',
  kana: 'みち',
  romaji: 'michi',
  pt: 'caminho',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-3d2bdd38c6b3',
  kind: 'word',
  category: 'noun',
  japanese: '迷子',
  kana: 'まいご',
  romaji: 'maigo',
  pt: 'pessoa perdida',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-84e6858de2f2',
  kind: 'word',
  category: 'noun',
  japanese: '故障',
  kana: 'こしょう',
  romaji: 'koshou',
  pt: 'avaria; defeito',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-480d20e1e108',
  kind: 'word',
  category: 'noun',
  japanese: '事故',
  kana: 'じこ',
  romaji: 'jiko',
  pt: 'acidente',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-cf56c3ac8bbb',
  kind: 'word',
  category: 'noun',
  japanese: '病院',
  kana: 'びょういん',
  romaji: 'byouin',
  pt: 'hospital',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-d7857b5c56c2',
  kind: 'word',
  category: 'noun',
  japanese: '薬',
  kana: 'くすり',
  romaji: 'kusuri',
  pt: 'remédio',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-75de8efdac2f',
  kind: 'word',
  category: 'noun',
  japanese: '携帯電話',
  kana: 'けいたいでんわ',
  romaji: 'keitaidenwa',
  pt: 'celular',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-8a769a4fb149',
  kind: 'word',
  category: 'noun',
  japanese: '警察',
  kana: 'けいさつ',
  romaji: 'keisatsu',
  pt: 'polícia',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-b841e6b9eb48',
  kind: 'word',
  category: 'noun',
  japanese: '忘れ物',
  kana: 'わすれもの',
  romaji: 'wasuremono',
  pt: 'objeto esquecido',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-717cbc7cbe24',
  kind: 'word',
  category: 'noun',
  japanese: '遅刻',
  kana: 'ちこく',
  romaji: 'chikoku',
  pt: 'atraso',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-989d48db6913',
  kind: 'word',
  category: 'noun',
  japanese: '住所',
  kana: 'じゅうしょ',
  romaji: 'juusho',
  pt: 'endereço',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-9e1d184090d8',
  kind: 'word',
  category: 'noun',
  japanese: '電話番号',
  kana: 'でんわばんごう',
  romaji: 'denwabangou',
  pt: 'número de telefone',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-57577d644396',
  kind: 'word',
  category: 'noun',
  japanese: '危険',
  kana: 'きけん',
  romaji: 'kiken',
  pt: 'perigo',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-99343552f182',
  kind: 'word',
  category: 'noun',
  japanese: '日本',
  kana: 'にほん',
  romaji: 'nihon',
  pt: 'Japão',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-4025cb53b3b2',
  kind: 'word',
  category: 'noun',
  japanese: '日本語',
  kana: 'にほんご',
  romaji: 'nihongo',
  pt: 'idioma japonês',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-7eab58e13c5b',
  kind: 'word',
  category: 'noun',
  japanese: '文化',
  kana: 'ぶんか',
  romaji: 'bunka',
  pt: 'cultura',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-266ea472b09a',
  kind: 'word',
  category: 'noun',
  japanese: '習慣',
  kana: 'しゅうかん',
  romaji: 'shuukan',
  pt: 'costume; hábito',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-981054668d5b',
  kind: 'word',
  category: 'noun',
  japanese: '伝統',
  kana: 'でんとう',
  romaji: 'dentou',
  pt: 'tradição',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-8e45a4ce88e4',
  kind: 'word',
  category: 'noun',
  japanese: '祭り',
  kana: 'まつり',
  romaji: 'matsuri',
  pt: 'festival',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-6a52b9266801',
  kind: 'word',
  category: 'noun',
  japanese: '神社',
  kana: 'じんじゃ',
  romaji: 'jinja',
  pt: 'santuário xintoísta',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-9b288f3b12db',
  kind: 'word',
  category: 'noun',
  japanese: 'お寺',
  kana: 'おてら',
  romaji: 'otera',
  pt: 'templo budista',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-9d356d2f1106',
  kind: 'word',
  category: 'noun',
  japanese: '着物',
  kana: 'きもの',
  romaji: 'kimono',
  pt: 'quimono',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-6c999a7e1e0b',
  kind: 'word',
  category: 'noun',
  japanese: '茶道',
  kana: 'さどう',
  romaji: 'sadou',
  pt: 'cerimônia do chá',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-9df66e7586f4',
  kind: 'word',
  category: 'noun',
  japanese: '温泉',
  kana: 'おんせん',
  romaji: 'onsen',
  pt: 'fonte termal',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-652c597c6d2c',
  kind: 'word',
  category: 'noun',
  japanese: '畳',
  kana: 'たたみ',
  romaji: 'tatami',
  pt: 'tatame',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-4729a244c870',
  kind: 'word',
  category: 'noun',
  japanese: 'お辞儀',
  kana: 'おじぎ',
  romaji: 'ojigi',
  pt: 'reverência',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-4694b9b4e768',
  kind: 'word',
  category: 'noun',
  japanese: '敬語',
  kana: 'けいご',
  romaji: 'keigo',
  pt: 'linguagem honorífica',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-620e9656b829',
  kind: 'word',
  category: 'noun',
  japanese: '礼儀',
  kana: 'れいぎ',
  romaji: 'reigi',
  pt: 'boas maneiras',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-ca86b44de6e1',
  kind: 'word',
  category: 'noun',
  japanese: '季節',
  kana: 'きせつ',
  romaji: 'kisetsu',
  pt: 'estação do ano',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-cd65042562f8',
  kind: 'word',
  category: 'noun',
  japanese: '桜',
  kana: 'さくら',
  romaji: 'sakura',
  pt: 'flor de cerejeira',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-7b7148f27004',
  kind: 'word',
  category: 'noun',
  japanese: '紅葉',
  kana: 'こうよう',
  romaji: 'kouyou',
  pt: 'folhas avermelhadas de outono',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-7ed13191a441',
  kind: 'word',
  category: 'noun',
  japanese: '花火',
  kana: 'はなび',
  romaji: 'hanabi',
  pt: 'fogos de artifício',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-2421bb622265',
  kind: 'word',
  category: 'noun',
  japanese: '富士山',
  kana: 'ふじさん',
  romaji: 'fujisan',
  pt: 'monte Fuji',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-8ab84a8193b6',
  kind: 'word',
  category: 'verb',
  japanese: '飲む',
  kana: 'のむ',
  romaji: 'nomu',
  pt: 'beber',
  situations: ['🍜 Restaurante', '☕ Cafeteria', '🏠 Cotidiano']
},
{
  id: 'mj-w-542ed41cb576',
  kind: 'word',
  category: 'verb',
  japanese: '行く',
  kana: 'いく',
  romaji: 'iku',
  pt: 'ir',
  situations: ['🏠 Cotidiano', '🚆 Transporte', '✈️ Viagens']
},
{
  id: 'mj-w-0b6f02c8c582',
  kind: 'word',
  category: 'verb',
  japanese: '来る',
  kana: 'くる',
  romaji: 'kuru',
  pt: 'vir',
  situations: ['🏠 Cotidiano', '👥 Amigos e socialização']
},
{
  id: 'mj-w-35b01a74f8a1',
  kind: 'word',
  category: 'verb',
  japanese: '帰る',
  kana: 'かえる',
  romaji: 'kaeru',
  pt: 'voltar para casa',
  situations: ['🏠 Cotidiano', '📅 Planos e horários']
},
{
  id: 'mj-w-bcbcd1fc420f',
  kind: 'word',
  category: 'verb',
  japanese: '見る',
  kana: 'みる',
  romaji: 'miru',
  pt: 'ver; assistir',
  situations: ['🎮 Videogames', '🍥 Anime e mangá', '🎬 Filmes e séries']
},
{
  id: 'mj-w-ba9b44878f3c',
  kind: 'word',
  category: 'verb',
  japanese: '聞く',
  kana: 'きく',
  romaji: 'kiku',
  pt: 'ouvir; perguntar',
  situations: ['🎓 Aula de japonês', '🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-w-b45dc1a4b6ed',
  kind: 'word',
  category: 'verb',
  japanese: '話す',
  kana: 'はなす',
  romaji: 'hanasu',
  pt: 'falar',
  situations: ['🗣️ Conversas básicas', '🎓 Aula de japonês', '👥 Amigos e socialização']
},
{
  id: 'mj-w-d9bab7ba4c7a',
  kind: 'word',
  category: 'verb',
  japanese: '読む',
  kana: 'よむ',
  romaji: 'yomu',
  pt: 'ler',
  situations: ['🎓 Aula de japonês', '🍥 Anime e mangá']
},
{
  id: 'mj-w-27e897500ac3',
  kind: 'word',
  category: 'verb',
  japanese: '書く',
  kana: 'かく',
  romaji: 'kaku',
  pt: 'escrever',
  situations: ['🎓 Aula de japonês', '💻 Tecnologia']
},
{
  id: 'mj-w-af7c7ca18479',
  kind: 'word',
  category: 'verb',
  japanese: '買う',
  kana: 'かう',
  romaji: 'kau',
  pt: 'comprar',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-b4771f9be17e',
  kind: 'word',
  category: 'verb',
  japanese: '売る',
  kana: 'うる',
  romaji: 'uru',
  pt: 'vender',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-97810fab4b49',
  kind: 'word',
  category: 'verb',
  japanese: '払う',
  kana: 'はらう',
  romaji: 'harau',
  pt: 'pagar',
  situations: ['🍜 Restaurante', '🛍️ Compras']
},
{
  id: 'mj-w-c479e6a5398f',
  kind: 'word',
  category: 'verb',
  japanese: '待つ',
  kana: 'まつ',
  romaji: 'matsu',
  pt: 'esperar',
  situations: ['👥 Amigos e socialização', '🚆 Transporte']
},
{
  id: 'mj-w-7c3550dbe916',
  kind: 'word',
  category: 'verb',
  japanese: '会う',
  kana: 'あう',
  romaji: 'au',
  pt: 'encontrar alguém',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-b3e5a7338718',
  kind: 'word',
  category: 'verb',
  japanese: '遊ぶ',
  kana: 'あそぶ',
  romaji: 'asobu',
  pt: 'brincar; se divertir',
  situations: ['👥 Amigos e socialização', '🎮 Videogames']
},
{
  id: 'mj-w-27670924bf3c',
  kind: 'word',
  category: 'verb',
  japanese: '使う',
  kana: 'つかう',
  romaji: 'tsukau',
  pt: 'usar',
  situations: ['🏠 Cotidiano', '💻 Tecnologia']
},
{
  id: 'mj-w-996e9065820b',
  kind: 'word',
  category: 'verb',
  japanese: '作る',
  kana: 'つくる',
  romaji: 'tsukuru',
  pt: 'fazer; criar',
  situations: ['🏠 Cotidiano', '🎵 Música', '💻 Tecnologia']
},
{
  id: 'mj-w-179c2d265506',
  kind: 'word',
  category: 'verb',
  japanese: '始める',
  kana: 'はじめる',
  romaji: 'hajimeru',
  pt: 'começar',
  situations: ['🎓 Aula de japonês', '📅 Planos e horários', '🔮 Planos futuros']
},
{
  id: 'mj-w-a5ef917068d6',
  kind: 'word',
  category: 'verb',
  japanese: '終わる',
  kana: 'おわる',
  romaji: 'owaru',
  pt: 'terminar',
  situations: ['🎓 Aula de japonês', '📅 Planos e horários']
},
{
  id: 'mj-w-fc282a068e2c',
  kind: 'word',
  category: 'verb',
  japanese: '続ける',
  kana: 'つづける',
  romaji: 'tsuzukeru',
  pt: 'continuar',
  situations: ['🎓 Aula de japonês', '🔮 Planos futuros']
},
{
  id: 'mj-w-cb4e2b9ff38f',
  kind: 'word',
  category: 'verb',
  japanese: '止める',
  kana: 'とめる',
  romaji: 'tomeru',
  pt: 'parar algo',
  situations: ['🏠 Cotidiano', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-5976ee223d91',
  kind: 'word',
  category: 'verb',
  japanese: '休む',
  kana: 'やすむ',
  romaji: 'yasumu',
  pt: 'descansar; faltar',
  situations: ['🏠 Cotidiano', '😊 Sentimentos']
},
{
  id: 'mj-w-9f06955575e6',
  kind: 'word',
  category: 'verb',
  japanese: '寝る',
  kana: 'ねる',
  romaji: 'neru',
  pt: 'dormir',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-86ea85b4a631',
  kind: 'word',
  category: 'verb',
  japanese: '起きる',
  kana: 'おきる',
  romaji: 'okiru',
  pt: 'acordar; levantar',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-9859f6703291',
  kind: 'word',
  category: 'verb',
  japanese: '働く',
  kana: 'はたらく',
  romaji: 'hataraku',
  pt: 'trabalhar',
  situations: ['🗣️ Conversas básicas', '🏠 Cotidiano']
},
{
  id: 'mj-w-c1470091002b',
  kind: 'word',
  category: 'verb',
  japanese: '勉強する',
  kana: 'べんきょうする',
  romaji: 'benkyousuru',
  pt: 'estudar',
  situations: ['🎓 Aula de japonês', '🔮 Planos futuros']
},
{
  id: 'mj-w-fea441452b7a',
  kind: 'word',
  category: 'verb',
  japanese: '練習する',
  kana: 'れんしゅうする',
  romaji: 'renshuusuru',
  pt: 'praticar',
  situations: ['🎓 Aula de japonês', '🔮 Planos futuros']
},
{
  id: 'mj-w-e681e345d37b',
  kind: 'word',
  category: 'verb',
  japanese: '覚える',
  kana: 'おぼえる',
  romaji: 'oboeru',
  pt: 'memorizar',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-a6b3e508988e',
  kind: 'word',
  category: 'verb',
  japanese: '忘れる',
  kana: 'わすれる',
  romaji: 'wasureru',
  pt: 'esquecer',
  situations: ['🎓 Aula de japonês', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-1add78b22c03',
  kind: 'word',
  category: 'verb',
  japanese: '思い出す',
  kana: 'おもいだす',
  romaji: 'omoidasu',
  pt: 'lembrar-se',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-5efb30823931',
  kind: 'word',
  category: 'verb',
  japanese: '分かる',
  kana: 'わかる',
  romaji: 'wakaru',
  pt: 'entender',
  situations: ['❓ Perguntas comuns', '🎓 Aula de japonês']
},
{
  id: 'mj-w-f8dec749a156',
  kind: 'word',
  category: 'verb',
  japanese: '知る',
  kana: 'しる',
  romaji: 'shiru',
  pt: 'saber; conhecer',
  situations: ['❓ Perguntas comuns', '💬 Opiniões']
},
{
  id: 'mj-w-46a47e3e65a3',
  kind: 'word',
  category: 'verb',
  japanese: '教える',
  kana: 'おしえる',
  romaji: 'oshieru',
  pt: 'ensinar; informar',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-5bb6c60be99e',
  kind: 'word',
  category: 'verb',
  japanese: '習う',
  kana: 'ならう',
  romaji: 'narau',
  pt: 'aprender com professor',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-e2133a511d80',
  kind: 'word',
  category: 'verb',
  japanese: '質問する',
  kana: 'しつもんする',
  romaji: 'shitsumonsuru',
  pt: 'fazer uma pergunta',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-1aa0dc006855',
  kind: 'word',
  category: 'verb',
  japanese: '答える',
  kana: 'こたえる',
  romaji: 'kotaeru',
  pt: 'responder',
  situations: ['❓ Perguntas comuns', '🎓 Aula de japonês']
},
{
  id: 'mj-w-0bfc6845cbf7',
  kind: 'word',
  category: 'verb',
  japanese: '選ぶ',
  kana: 'えらぶ',
  romaji: 'erabu',
  pt: 'escolher',
  situations: ['❤️ Gostos e preferências', '🛍️ Compras']
},
{
  id: 'mj-w-4684131fb8ae',
  kind: 'word',
  category: 'verb',
  japanese: '決める',
  kana: 'きめる',
  romaji: 'kimeru',
  pt: 'decidir',
  situations: ['📅 Planos e horários', '🔮 Planos futuros']
},
{
  id: 'mj-w-014d58754eb3',
  kind: 'word',
  category: 'verb',
  japanese: '考える',
  kana: 'かんがえる',
  romaji: 'kangaeru',
  pt: 'pensar',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-5b656ae43268',
  kind: 'word',
  category: 'verb',
  japanese: '感じる',
  kana: 'かんじる',
  romaji: 'kanjiru',
  pt: 'sentir',
  situations: ['😊 Sentimentos', '💬 Opiniões']
},
{
  id: 'mj-w-988a2724d4d4',
  kind: 'word',
  category: 'verb',
  japanese: '信じる',
  kana: 'しんじる',
  romaji: 'shinjiru',
  pt: 'acreditar; confiar',
  situations: ['😊 Sentimentos', '💬 Opiniões']
},
{
  id: 'mj-w-d01466a2dcf8',
  kind: 'word',
  category: 'verb',
  japanese: '笑う',
  kana: 'わらう',
  romaji: 'warau',
  pt: 'rir; sorrir',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-2cf8d2ad4c04',
  kind: 'word',
  category: 'verb',
  japanese: '泣く',
  kana: 'なく',
  romaji: 'naku',
  pt: 'chorar',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-e8ad320f8c1e',
  kind: 'word',
  category: 'verb',
  japanese: '怒る',
  kana: 'おこる',
  romaji: 'okoru',
  pt: 'ficar com raiva',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-e3149a508be7',
  kind: 'word',
  category: 'verb',
  japanese: '心配する',
  kana: 'しんぱいする',
  romaji: 'shinpaisuru',
  pt: 'preocupar-se',
  situations: ['😊 Sentimentos', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-ca79fa727251',
  kind: 'word',
  category: 'verb',
  japanese: '楽しむ',
  kana: 'たのしむ',
  romaji: 'tanoshimu',
  pt: 'aproveitar; divertir-se',
  situations: ['👥 Amigos e socialização', '🎵 Música']
},
{
  id: 'mj-w-6b14ba7beada',
  kind: 'word',
  category: 'verb',
  japanese: '頑張る',
  kana: 'がんばる',
  romaji: 'ganbaru',
  pt: 'esforçar-se',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-205610419c44',
  kind: 'word',
  category: 'verb',
  japanese: '諦める',
  kana: 'あきらめる',
  romaji: 'akirameru',
  pt: 'desistir',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-e5926970bf28',
  kind: 'word',
  category: 'verb',
  japanese: '手伝う',
  kana: 'てつだう',
  romaji: 'tetsudau',
  pt: 'ajudar alguém',
  situations: ['👥 Amigos e socialização', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-64bdf305dd4a',
  kind: 'word',
  category: 'verb',
  japanese: '助ける',
  kana: 'たすける',
  romaji: 'tasukeru',
  pt: 'salvar; ajudar',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-1ae82a8b1466',
  kind: 'word',
  category: 'verb',
  japanese: '探す',
  kana: 'さがす',
  romaji: 'sagasu',
  pt: 'procurar',
  situations: ['🛍️ Compras', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-670c982f97bf',
  kind: 'word',
  category: 'verb',
  japanese: '見つける',
  kana: 'みつける',
  romaji: 'mitsukeru',
  pt: 'encontrar algo',
  situations: ['🛍️ Compras', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-11eeef0560e0',
  kind: 'word',
  category: 'verb',
  japanese: 'なくす',
  kana: 'なくす',
  romaji: 'nakusu',
  pt: 'perder algo',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-00a228a756e9',
  kind: 'word',
  category: 'verb',
  japanese: '落とす',
  kana: 'おとす',
  romaji: 'otosu',
  pt: 'deixar cair',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-4c3afdce06c2',
  kind: 'word',
  category: 'verb',
  japanese: '開ける',
  kana: 'あける',
  romaji: 'akeru',
  pt: 'abrir algo',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-cbdcc5c5c08d',
  kind: 'word',
  category: 'verb',
  japanese: '閉める',
  kana: 'しめる',
  romaji: 'shimeru',
  pt: 'fechar algo',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-fd018ee336f3',
  kind: 'word',
  category: 'verb',
  japanese: '入る',
  kana: 'はいる',
  romaji: 'hairu',
  pt: 'entrar',
  situations: ['🚆 Transporte', '✈️ Viagens']
},
{
  id: 'mj-w-5856f167e032',
  kind: 'word',
  category: 'verb',
  japanese: '出る',
  kana: 'でる',
  romaji: 'deru',
  pt: 'sair',
  situations: ['🚆 Transporte', '✈️ Viagens']
},
{
  id: 'mj-w-02d5b0bd4d73',
  kind: 'word',
  category: 'verb',
  japanese: '乗る',
  kana: 'のる',
  romaji: 'noru',
  pt: 'embarcar; andar de veículo',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-e056ab4dca6c',
  kind: 'word',
  category: 'verb',
  japanese: '降りる',
  kana: 'おりる',
  romaji: 'oriru',
  pt: 'descer de veículo',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-6e508f32ba29',
  kind: 'word',
  category: 'verb',
  japanese: '歩く',
  kana: 'あるく',
  romaji: 'aruku',
  pt: 'andar a pé',
  situations: ['🏠 Cotidiano', '🚆 Transporte']
},
{
  id: 'mj-w-2a8b1991a321',
  kind: 'word',
  category: 'verb',
  japanese: '走る',
  kana: 'はしる',
  romaji: 'hashiru',
  pt: 'correr',
  situations: ['🏠 Cotidiano', '🎮 Videogames']
},
{
  id: 'mj-w-5a0b4acb8e0d',
  kind: 'word',
  category: 'verb',
  japanese: '曲がる',
  kana: 'まがる',
  romaji: 'magaru',
  pt: 'virar; dobrar',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-42ed579a60d1',
  kind: 'word',
  category: 'verb',
  japanese: '渡る',
  kana: 'わたる',
  romaji: 'wataru',
  pt: 'atravessar',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-f72a48f714ed',
  kind: 'word',
  category: 'verb',
  japanese: '旅行する',
  kana: 'りょこうする',
  romaji: 'ryokousuru',
  pt: 'viajar',
  situations: ['✈️ Viagens', '🔮 Planos futuros']
},
{
  id: 'mj-w-a88f6edd9a4c',
  kind: 'word',
  category: 'verb',
  japanese: '予約する',
  kana: 'よやくする',
  romaji: 'yoyakusuru',
  pt: 'reservar',
  situations: ['🍜 Restaurante', '✈️ Viagens']
},
{
  id: 'mj-w-183eaff141fc',
  kind: 'word',
  category: 'verb',
  japanese: '注文する',
  kana: 'ちゅうもんする',
  romaji: 'chuumonsuru',
  pt: 'pedir comida; encomendar',
  situations: ['🍜 Restaurante', '☕ Cafeteria']
},
{
  id: 'mj-w-159ad3039afe',
  kind: 'word',
  category: 'verb',
  japanese: '料理する',
  kana: 'りょうりする',
  romaji: 'ryourisuru',
  pt: 'cozinhar',
  situations: ['🍜 Restaurante', '🏠 Cotidiano']
},
{
  id: 'mj-w-ae3264ead80a',
  kind: 'word',
  category: 'verb',
  japanese: '洗う',
  kana: 'あらう',
  romaji: 'arau',
  pt: 'lavar',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-576abebcd8fd',
  kind: 'word',
  category: 'verb',
  japanese: '掃除する',
  kana: 'そうじする',
  romaji: 'soujisuru',
  pt: 'limpar',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-3ff02833270b',
  kind: 'word',
  category: 'verb',
  japanese: '片付ける',
  kana: 'かたづける',
  romaji: 'katazukeru',
  pt: 'arrumar; guardar',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-aa430ef9806a',
  kind: 'word',
  category: 'verb',
  japanese: '直す',
  kana: 'なおす',
  romaji: 'naosu',
  pt: 'consertar; corrigir',
  situations: ['💻 Tecnologia', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-e795d61bd552',
  kind: 'word',
  category: 'verb',
  japanese: '壊れる',
  kana: 'こわれる',
  romaji: 'kowareru',
  pt: 'quebrar; estragar (intransitivo)',
  situations: ['💻 Tecnologia', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-b699796ca5b5',
  kind: 'word',
  category: 'verb',
  japanese: '充電する',
  kana: 'じゅうでんする',
  romaji: 'juudensuru',
  pt: 'carregar a bateria',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-b8087e4028a9',
  kind: 'word',
  category: 'verb',
  japanese: '接続する',
  kana: 'せつぞくする',
  romaji: 'setsuzokusuru',
  pt: 'conectar',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-3a54b1e8e84b',
  kind: 'word',
  category: 'verb',
  japanese: '保存する',
  kana: 'ほぞんする',
  romaji: 'hozonsuru',
  pt: 'salvar dados',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-w-7a9fa60fdfdd',
  kind: 'word',
  category: 'verb',
  japanese: '送る',
  kana: 'おくる',
  romaji: 'okuru',
  pt: 'enviar',
  situations: ['👥 Amigos e socialização', '💻 Tecnologia']
},
{
  id: 'mj-w-359980cc1375',
  kind: 'word',
  category: 'verb',
  japanese: '受け取る',
  kana: 'うけとる',
  romaji: 'uketoru',
  pt: 'receber algo',
  situations: ['👥 Amigos e socialização', '🛍️ Compras']
},
{
  id: 'mj-w-0aab69802d6d',
  kind: 'word',
  category: 'verb',
  japanese: '調べる',
  kana: 'しらべる',
  romaji: 'shiraberu',
  pt: 'pesquisar; verificar',
  situations: ['🎓 Aula de japonês', '💻 Tecnologia']
},
{
  id: 'mj-w-9c7c692d018e',
  kind: 'word',
  category: 'verb',
  japanese: '比べる',
  kana: 'くらべる',
  romaji: 'kuraberu',
  pt: 'comparar',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-w-c0e735bb77eb',
  kind: 'word',
  category: 'verb',
  japanese: '説明する',
  kana: 'せつめいする',
  romaji: 'setsumeisuru',
  pt: 'explicar',
  situations: ['🎓 Aula de japonês', '💬 Opiniões']
},
{
  id: 'mj-w-c237bf84262b',
  kind: 'word',
  category: 'verb',
  japanese: '紹介する',
  kana: 'しょうかいする',
  romaji: 'shoukaisuru',
  pt: 'apresentar; recomendar',
  situations: ['🗣️ Conversas básicas', '👥 Amigos e socialização']
},
{
  id: 'mj-w-71b5ace26cd9',
  kind: 'word',
  category: 'verb',
  japanese: '演奏する',
  kana: 'えんそうする',
  romaji: 'ensousuru',
  pt: 'tocar um instrumento',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-9733c0080ba6',
  kind: 'word',
  category: 'verb',
  japanese: '歌う',
  kana: 'うたう',
  romaji: 'utau',
  pt: 'cantar',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-fc5fa1ea2b75',
  kind: 'word',
  category: 'verb',
  japanese: '踊る',
  kana: 'おどる',
  romaji: 'odoru',
  pt: 'dançar',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-9653316e2643',
  kind: 'word',
  category: 'verb',
  japanese: '聴く',
  kana: 'きく',
  romaji: 'kiku',
  pt: 'escutar atentamente',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-96dc028d756d',
  kind: 'word',
  category: 'verb',
  japanese: '弾く',
  kana: 'ひく',
  romaji: 'hiku',
  pt: 'tocar instrumento de cordas ou teclado',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-ea1474d0d37e',
  kind: 'word',
  category: 'verb',
  japanese: '勝つ',
  kana: 'かつ',
  romaji: 'katsu',
  pt: 'ganhar; vencer',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-57c2f2a706b4',
  kind: 'word',
  category: 'verb',
  japanese: '負ける',
  kana: 'まける',
  romaji: 'makeru',
  pt: 'perder uma disputa',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-4d77812d5955',
  kind: 'word',
  category: 'verb',
  japanese: '試す',
  kana: 'ためす',
  romaji: 'tamesu',
  pt: 'experimentar; testar',
  situations: ['🎮 Videogames', '💻 Tecnologia']
},
{
  id: 'mj-w-881d774f2647',
  kind: 'word',
  category: 'verb',
  japanese: '攻略する',
  kana: 'こうりゃくする',
  romaji: 'kouryakusuru',
  pt: 'superar desafio de jogo',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-w-97ab95a154f4',
  kind: 'word',
  category: 'verb',
  japanese: '変える',
  kana: 'かえる',
  romaji: 'kaeru',
  pt: 'mudar algo',
  situations: ['💻 Tecnologia', '💬 Opiniões']
},
{
  id: 'mj-w-08d699017b13',
  kind: 'word',
  category: 'verb',
  japanese: '変わる',
  kana: 'かわる',
  romaji: 'kawaru',
  pt: 'mudar; transformar-se',
  situations: ['💬 Opiniões', '🔮 Planos futuros']
},
{
  id: 'mj-w-b907d994ca62',
  kind: 'word',
  category: 'verb',
  japanese: '学ぶ',
  kana: 'まなぶ',
  romaji: 'manabu',
  pt: 'aprender; estudar',
  situations: ['🎓 Aula de japonês', '💬 Opiniões']
},
{
  id: 'mj-w-66000197602f',
  kind: 'word',
  category: 'verb',
  japanese: '成長する',
  kana: 'せいちょうする',
  romaji: 'seichousuru',
  pt: 'crescer; desenvolver-se',
  situations: ['🍥 Anime e mangá', '🔮 Planos futuros']
},
{
  id: 'mj-w-416f383c1243',
  kind: 'word',
  category: 'adjective',
  japanese: '大きい',
  kana: 'おおきい',
  romaji: 'ookii',
  pt: 'grande',
  situations: ['🏠 Cotidiano', '🛍️ Compras']
},
{
  id: 'mj-w-d2ff8e4505a6',
  kind: 'word',
  category: 'adjective',
  japanese: '小さい',
  kana: 'ちいさい',
  romaji: 'chiisai',
  pt: 'pequeno',
  situations: ['🏠 Cotidiano', '🛍️ Compras']
},
{
  id: 'mj-w-b2c5c1728245',
  kind: 'word',
  category: 'adjective',
  japanese: '新しい',
  kana: 'あたらしい',
  romaji: 'atarashii',
  pt: 'novo',
  situations: ['🛍️ Compras', '💻 Tecnologia']
},
{
  id: 'mj-w-2a80ebb76eab',
  kind: 'word',
  category: 'adjective',
  japanese: '古い',
  kana: 'ふるい',
  romaji: 'furui',
  pt: 'velho; antigo',
  situations: ['🛍️ Compras', '💻 Tecnologia']
},
{
  id: 'mj-w-b6590bcf21ae',
  kind: 'word',
  category: 'adjective',
  japanese: '高い',
  kana: 'たかい',
  romaji: 'takai',
  pt: 'caro; alto',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-c9e1e549701b',
  kind: 'word',
  category: 'adjective',
  japanese: '安い',
  kana: 'やすい',
  romaji: 'yasui',
  pt: 'barato',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-9dbcfe128950',
  kind: 'word',
  category: 'adjective',
  japanese: '長い',
  kana: 'ながい',
  romaji: 'nagai',
  pt: 'longo',
  situations: ['📅 Planos e horários', '🎬 Filmes e séries']
},
{
  id: 'mj-w-322de47eabc9',
  kind: 'word',
  category: 'adjective',
  japanese: '短い',
  kana: 'みじかい',
  romaji: 'mijikai',
  pt: 'curto',
  situations: ['📅 Planos e horários', '🎬 Filmes e séries']
},
{
  id: 'mj-w-6f1e1965519c',
  kind: 'word',
  category: 'adjective',
  japanese: '早い',
  kana: 'はやい',
  romaji: 'hayai',
  pt: 'cedo; rápido (tempo)',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-e9a896276f05',
  kind: 'word',
  category: 'adjective',
  japanese: '遅い',
  kana: 'おそい',
  romaji: 'osoi',
  pt: 'tardio; lento',
  situations: ['📅 Planos e horários', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-06139be71fc2',
  kind: 'word',
  category: 'adjective',
  japanese: '速い',
  kana: 'はやい',
  romaji: 'hayai',
  pt: 'rápido (velocidade)',
  situations: ['🚆 Transporte', '🎮 Videogames']
},
{
  id: 'mj-w-f50e22582d4d',
  kind: 'word',
  category: 'adjective',
  japanese: '遅い',
  kana: 'おそい',
  romaji: 'osoi',
  pt: 'lento; atrasado',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-6249646fbab6',
  kind: 'word',
  category: 'adjective',
  japanese: '難しい',
  kana: 'むずかしい',
  romaji: 'muzukashii',
  pt: 'difícil',
  situations: ['🎓 Aula de japonês', '🎮 Videogames']
},
{
  id: 'mj-w-5beed066ce9c',
  kind: 'word',
  category: 'adjective',
  japanese: '易しい',
  kana: 'やさしい',
  romaji: 'yasashii',
  pt: 'fácil',
  situations: ['🎓 Aula de japonês', '🎮 Videogames']
},
{
  id: 'mj-w-15e6e138eba1',
  kind: 'word',
  category: 'adjective',
  japanese: '面白い',
  kana: 'おもしろい',
  romaji: 'omoshiroi',
  pt: 'interessante; divertido',
  situations: ['🎮 Videogames', '🍥 Anime e mangá', '🎬 Filmes e séries']
},
{
  id: 'mj-w-5aada6dd0c59',
  kind: 'word',
  category: 'adjective',
  japanese: 'つまらない',
  kana: 'つまらない',
  romaji: 'tsumaranai',
  pt: 'sem graça; entediante',
  situations: ['🎮 Videogames', '🎬 Filmes e séries']
},
{
  id: 'mj-w-a7011fb89ba2',
  kind: 'word',
  category: 'adjective',
  japanese: '楽しい',
  kana: 'たのしい',
  romaji: 'tanoshii',
  pt: 'divertido',
  situations: ['👥 Amigos e socialização', '🎮 Videogames']
},
{
  id: 'mj-w-cf2e34e5e4a2',
  kind: 'word',
  category: 'adjective',
  japanese: '嬉しい',
  kana: 'うれしい',
  romaji: 'ureshii',
  pt: 'feliz; contente',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-27e926581380',
  kind: 'word',
  category: 'adjective',
  japanese: '悲しい',
  kana: 'かなしい',
  romaji: 'kanashii',
  pt: 'triste',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-87e5767dc624',
  kind: 'word',
  category: 'adjective',
  japanese: '寂しい',
  kana: 'さびしい',
  romaji: 'sabishii',
  pt: 'solitário; saudoso',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-3e4de80c109e',
  kind: 'word',
  category: 'adjective',
  japanese: '怖い',
  kana: 'こわい',
  romaji: 'kowai',
  pt: 'assustador; com medo',
  situations: ['😊 Sentimentos', '🎬 Filmes e séries']
},
{
  id: 'mj-w-b4d05a8d9425',
  kind: 'word',
  category: 'adjective',
  japanese: '恥ずかしい',
  kana: 'はずかしい',
  romaji: 'hazukashii',
  pt: 'constrangedor; envergonhado',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-f86e872963a6',
  kind: 'word',
  category: 'adjective',
  japanese: '眠い',
  kana: 'ねむい',
  romaji: 'nemui',
  pt: 'sonolento',
  situations: ['🏠 Cotidiano', '😊 Sentimentos']
},
{
  id: 'mj-w-cadd92a41f53',
  kind: 'word',
  category: 'adjective',
  japanese: '痛い',
  kana: 'いたい',
  romaji: 'itai',
  pt: 'dolorido; dói',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-w-1846f82b02a8',
  kind: 'word',
  category: 'adjective',
  japanese: '暑い',
  kana: 'あつい',
  romaji: 'atsui',
  pt: 'quente (clima)',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-622c13d68f62',
  kind: 'word',
  category: 'adjective',
  japanese: '寒い',
  kana: 'さむい',
  romaji: 'samui',
  pt: 'frio (clima)',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-76f92e464f1c',
  kind: 'word',
  category: 'adjective',
  japanese: '暖かい',
  kana: 'あたたかい',
  romaji: 'atatakai',
  pt: 'morno; quente e agradável',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-b051b597b4bf',
  kind: 'word',
  category: 'adjective',
  japanese: '涼しい',
  kana: 'すずしい',
  romaji: 'suzushii',
  pt: 'fresco (clima)',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-w-dd1aaab17a09',
  kind: 'word',
  category: 'adjective',
  japanese: '熱い',
  kana: 'あつい',
  romaji: 'atsui',
  pt: 'quente (ao toque)',
  situations: ['🍜 Restaurante', '☕ Cafeteria']
},
{
  id: 'mj-w-afa5971b7a67',
  kind: 'word',
  category: 'adjective',
  japanese: '冷たい',
  kana: 'つめたい',
  romaji: 'tsumetai',
  pt: 'frio (ao toque)',
  situations: ['🍜 Restaurante', '☕ Cafeteria']
},
{
  id: 'mj-w-6245e9383d91',
  kind: 'word',
  category: 'adjective',
  japanese: '美味しい',
  kana: 'おいしい',
  romaji: 'oishii',
  pt: 'gostoso; delicioso',
  situations: ['🍜 Restaurante', '☕ Cafeteria']
},
{
  id: 'mj-w-827d6e3dfd7c',
  kind: 'word',
  category: 'adjective',
  japanese: 'まずい',
  kana: 'まずい',
  romaji: 'mazui',
  pt: 'de gosto ruim',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-dd2d1a071865',
  kind: 'word',
  category: 'adjective',
  japanese: '甘い',
  kana: 'あまい',
  romaji: 'amai',
  pt: 'doce',
  situations: ['🍜 Restaurante', '☕ Cafeteria']
},
{
  id: 'mj-w-334182ce32ef',
  kind: 'word',
  category: 'adjective',
  japanese: '辛い',
  kana: 'からい',
  romaji: 'karai',
  pt: 'apimentado',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-b08bde92ea5b',
  kind: 'word',
  category: 'adjective',
  japanese: '苦い',
  kana: 'にがい',
  romaji: 'nigai',
  pt: 'amargo',
  situations: ['🍜 Restaurante', '☕ Cafeteria']
},
{
  id: 'mj-w-9f26a063bb4d',
  kind: 'word',
  category: 'adjective',
  japanese: '酸っぱい',
  kana: 'すっぱい',
  romaji: 'suppai',
  pt: 'azedo',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-c1a4f63940ab',
  kind: 'word',
  category: 'adjective',
  japanese: 'しょっぱい',
  kana: 'しょっぱい',
  romaji: 'shoppai',
  pt: 'salgado',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-w-ac779c5f1c26',
  kind: 'word',
  category: 'adjective',
  japanese: '忙しい',
  kana: 'いそがしい',
  romaji: 'isogashii',
  pt: 'ocupado',
  situations: ['🏠 Cotidiano', '📅 Planos e horários']
},
{
  id: 'mj-w-60d0a47eb24c',
  kind: 'word',
  category: 'adjective',
  japanese: '優しい',
  kana: 'やさしい',
  romaji: 'yasashii',
  pt: 'gentil',
  situations: ['👥 Amigos e socialização', '😊 Sentimentos']
},
{
  id: 'mj-w-2974fa2abb8d',
  kind: 'word',
  category: 'adjective',
  japanese: '厳しい',
  kana: 'きびしい',
  romaji: 'kibishii',
  pt: 'rigoroso; severo',
  situations: ['🎓 Aula de japonês', '💬 Opiniões']
},
{
  id: 'mj-w-16eaffe3c239',
  kind: 'word',
  category: 'adjective',
  japanese: '強い',
  kana: 'つよい',
  romaji: 'tsuyoi',
  pt: 'forte',
  situations: ['🎮 Videogames', '🍥 Anime e mangá']
},
{
  id: 'mj-w-63a26db32f1f',
  kind: 'word',
  category: 'adjective',
  japanese: '弱い',
  kana: 'よわい',
  romaji: 'yowai',
  pt: 'fraco',
  situations: ['🎮 Videogames', '🍥 Anime e mangá']
},
{
  id: 'mj-w-71b9edabba75',
  kind: 'word',
  category: 'adjective',
  japanese: '可愛い',
  kana: 'かわいい',
  romaji: 'kawaii',
  pt: 'fofo; bonitinho',
  situations: ['👥 Amigos e socialização', '🍥 Anime e mangá']
},
{
  id: 'mj-w-fe3ae14fdf8e',
  kind: 'word',
  category: 'adjective',
  japanese: 'かっこいい',
  kana: 'かっこいい',
  romaji: 'kakkoii',
  pt: 'legal; estiloso',
  situations: ['🎮 Videogames', '🍥 Anime e mangá']
},
{
  id: 'mj-w-97ff030eb39e',
  kind: 'word',
  category: 'adjective',
  japanese: '素晴らしい',
  kana: 'すばらしい',
  romaji: 'subarashii',
  pt: 'maravilhoso',
  situations: ['🎵 Música', '🎬 Filmes e séries']
},
{
  id: 'mj-w-873862e2e2e4',
  kind: 'word',
  category: 'adjective',
  japanese: '美しい',
  kana: 'うつくしい',
  romaji: 'utsukushii',
  pt: 'belo',
  situations: ['🎵 Música', '🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-36049e95dffe',
  kind: 'word',
  category: 'adjective',
  japanese: 'うるさい',
  kana: 'うるさい',
  romaji: 'urusai',
  pt: 'barulhento',
  situations: ['🏠 Cotidiano', '🎵 Música']
},
{
  id: 'mj-w-8cb3f8c4d01a',
  kind: 'word',
  category: 'adjective',
  japanese: '静か',
  kana: 'しずか',
  romaji: 'shizuka',
  pt: 'silencioso; tranquilo',
  situations: ['🏠 Cotidiano', '😊 Sentimentos']
},
{
  id: 'mj-w-c5d96b8e6e73',
  kind: 'word',
  category: 'adjective',
  japanese: '便利',
  kana: 'べんり',
  romaji: 'benri',
  pt: 'prático; conveniente',
  situations: ['🛍️ Compras', '💻 Tecnologia']
},
{
  id: 'mj-w-f22bf7ab2f71',
  kind: 'word',
  category: 'adjective',
  japanese: '不便',
  kana: 'ふべん',
  romaji: 'fuben',
  pt: 'inconveniente',
  situations: ['🚆 Transporte', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-9afd725f99ef',
  kind: 'word',
  category: 'adjective',
  japanese: '大切',
  kana: 'たいせつ',
  romaji: 'taisetsu',
  pt: 'importante; precioso',
  situations: ['👥 Amigos e socialização', '💬 Opiniões']
},
{
  id: 'mj-w-c90d11c40093',
  kind: 'word',
  category: 'adjective',
  japanese: '大事',
  kana: 'だいじ',
  romaji: 'daiji',
  pt: 'importante',
  situations: ['👥 Amigos e socialização', '💬 Opiniões']
},
{
  id: 'mj-w-7d5de1aac673',
  kind: 'word',
  category: 'adjective',
  japanese: '有名',
  kana: 'ゆうめい',
  romaji: 'yuumei',
  pt: 'famoso',
  situations: ['✈️ Viagens', '🍥 Anime e mangá']
},
{
  id: 'mj-w-bca8a59b54b3',
  kind: 'word',
  category: 'adjective',
  japanese: '人気',
  kana: 'にんき',
  romaji: 'ninki',
  pt: 'popularidade; popular',
  situations: ['🍥 Anime e mangá', '🎬 Filmes e séries']
},
{
  id: 'mj-w-788e704f2829',
  kind: 'word',
  category: 'adjective',
  japanese: '簡単',
  kana: 'かんたん',
  romaji: 'kantan',
  pt: 'simples; fácil',
  situations: ['🎓 Aula de japonês', '💻 Tecnologia']
},
{
  id: 'mj-w-562bc8a795cd',
  kind: 'word',
  category: 'adjective',
  japanese: '複雑',
  kana: 'ふくざつ',
  romaji: 'fukuzatsu',
  pt: 'complicado',
  situations: ['💻 Tecnologia', '💬 Opiniões']
},
{
  id: 'mj-w-c5575b8271c1',
  kind: 'word',
  category: 'adjective',
  japanese: '安全',
  kana: 'あんぜん',
  romaji: 'anzen',
  pt: 'seguro',
  situations: ['🚆 Transporte', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-facba94fbf28',
  kind: 'word',
  category: 'adjective',
  japanese: '危険',
  kana: 'きけん',
  romaji: 'kiken',
  pt: 'perigoso',
  situations: ['🚆 Transporte', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-f81e2dc39731',
  kind: 'word',
  category: 'adjective',
  japanese: '元気',
  kana: 'げんき',
  romaji: 'genki',
  pt: 'bem; disposto',
  situations: ['👋 Cumprimentos', '😊 Sentimentos']
},
{
  id: 'mj-w-ccd1f2f7adaa',
  kind: 'word',
  category: 'adjective',
  japanese: '幸せ',
  kana: 'しあわせ',
  romaji: 'shiawase',
  pt: 'feliz; afortunado',
  situations: ['😊 Sentimentos', '💬 Opiniões']
},
{
  id: 'mj-w-e5a4033ff9f6',
  kind: 'word',
  category: 'adjective',
  japanese: '不安',
  kana: 'ふあん',
  romaji: 'fuan',
  pt: 'ansioso; inseguro',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-3ab10d0ce61d',
  kind: 'word',
  category: 'adjective',
  japanese: '心配',
  kana: 'しんぱい',
  romaji: 'shinpai',
  pt: 'preocupado',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-a4dc82c08e27',
  kind: 'word',
  category: 'adjective',
  japanese: '必要',
  kana: 'ひつよう',
  romaji: 'hitsuyou',
  pt: 'necessário',
  situations: ['💬 Opiniões', '🤝 Problemas cotidianos']
},
{
  id: 'mj-w-2987cc5d5d44',
  kind: 'word',
  category: 'adjective',
  japanese: '自由',
  kana: 'じゆう',
  romaji: 'jiyuu',
  pt: 'livre',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-f9333845ce21',
  kind: 'word',
  category: 'adjective',
  japanese: '同じ',
  kana: 'おなじ',
  romaji: 'onaji',
  pt: 'igual; o mesmo',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-dc587d4f7c4c',
  kind: 'word',
  category: 'adjective',
  japanese: '違う',
  kana: 'ちがう',
  romaji: 'chigau',
  pt: 'diferente; errado',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-d867255b964e',
  kind: 'word',
  category: 'other',
  japanese: '一',
  kana: 'いち',
  romaji: 'ichi',
  pt: 'um',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-8669709a9ed8',
  kind: 'word',
  category: 'other',
  japanese: '二',
  kana: 'に',
  romaji: 'ni',
  pt: 'dois',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-37633b5fee22',
  kind: 'word',
  category: 'other',
  japanese: '三',
  kana: 'さん',
  romaji: 'san',
  pt: 'três',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-efee20c14f10',
  kind: 'word',
  category: 'other',
  japanese: '四',
  kana: 'よん',
  romaji: 'yon',
  pt: 'quatro',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-7087a7649c96',
  kind: 'word',
  category: 'other',
  japanese: '五',
  kana: 'ご',
  romaji: 'go',
  pt: 'cinco',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-3d44b663bab3',
  kind: 'word',
  category: 'other',
  japanese: '六',
  kana: 'ろく',
  romaji: 'roku',
  pt: 'seis',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-aeedd37044d6',
  kind: 'word',
  category: 'other',
  japanese: '七',
  kana: 'なな',
  romaji: 'nana',
  pt: 'sete',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-c8029a95b0b1',
  kind: 'word',
  category: 'other',
  japanese: '八',
  kana: 'はち',
  romaji: 'hachi',
  pt: 'oito',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-ad6401dda3ea',
  kind: 'word',
  category: 'other',
  japanese: '九',
  kana: 'きゅう',
  romaji: 'kyuu',
  pt: 'nove',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-79cff2f814ee',
  kind: 'word',
  category: 'other',
  japanese: '十',
  kana: 'じゅう',
  romaji: 'juu',
  pt: 'dez',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-863268e233e6',
  kind: 'word',
  category: 'other',
  japanese: '百',
  kana: 'ひゃく',
  romaji: 'hyaku',
  pt: 'cem',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-470e7285596c',
  kind: 'word',
  category: 'other',
  japanese: '千',
  kana: 'せん',
  romaji: 'sen',
  pt: 'mil',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-66fc9a162c80',
  kind: 'word',
  category: 'other',
  japanese: '一万',
  kana: 'いちまん',
  romaji: 'ichiman',
  pt: 'dez mil',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-0f058dccdc1f',
  kind: 'word',
  category: 'other',
  japanese: '月曜日',
  kana: 'げつようび',
  romaji: 'getsuyoubi',
  pt: 'segunda-feira',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-f2825471a8b4',
  kind: 'word',
  category: 'other',
  japanese: '火曜日',
  kana: 'かようび',
  romaji: 'kayoubi',
  pt: 'terça-feira',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-238e85b79cce',
  kind: 'word',
  category: 'other',
  japanese: '水曜日',
  kana: 'すいようび',
  romaji: 'suiyoubi',
  pt: 'quarta-feira',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-2c63cdf2ae10',
  kind: 'word',
  category: 'other',
  japanese: '木曜日',
  kana: 'もくようび',
  romaji: 'mokuyoubi',
  pt: 'quinta-feira',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-6af45d544edf',
  kind: 'word',
  category: 'other',
  japanese: '金曜日',
  kana: 'きんようび',
  romaji: 'kinyoubi',
  pt: 'sexta-feira',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-edf04a36be76',
  kind: 'word',
  category: 'other',
  japanese: '土曜日',
  kana: 'どようび',
  romaji: 'doyoubi',
  pt: 'sábado',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-1bf5dfa2a398',
  kind: 'word',
  category: 'other',
  japanese: '日曜日',
  kana: 'にちようび',
  romaji: 'nichiyoubi',
  pt: 'domingo',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-e9ee687ee681',
  kind: 'word',
  category: 'other',
  japanese: '一月',
  kana: 'いちがつ',
  romaji: 'ichigatsu',
  pt: 'janeiro',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-275e4a2afd76',
  kind: 'word',
  category: 'other',
  japanese: '二月',
  kana: 'にがつ',
  romaji: 'nigatsu',
  pt: 'fevereiro',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-a69e106d0563',
  kind: 'word',
  category: 'other',
  japanese: '三月',
  kana: 'さんがつ',
  romaji: 'sangatsu',
  pt: 'março',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-ebc106673c5d',
  kind: 'word',
  category: 'other',
  japanese: '四月',
  kana: 'しがつ',
  romaji: 'shigatsu',
  pt: 'abril',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-85741921be1b',
  kind: 'word',
  category: 'other',
  japanese: '五月',
  kana: 'ごがつ',
  romaji: 'gogatsu',
  pt: 'maio',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-1100372d8092',
  kind: 'word',
  category: 'other',
  japanese: '六月',
  kana: 'ろくがつ',
  romaji: 'rokugatsu',
  pt: 'junho',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-d233ffc41e3c',
  kind: 'word',
  category: 'other',
  japanese: '七月',
  kana: 'しちがつ',
  romaji: 'shichigatsu',
  pt: 'julho',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-70a4be347105',
  kind: 'word',
  category: 'other',
  japanese: '八月',
  kana: 'はちがつ',
  romaji: 'hachigatsu',
  pt: 'agosto',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-a1f9770f4951',
  kind: 'word',
  category: 'other',
  japanese: '九月',
  kana: 'くがつ',
  romaji: 'kugatsu',
  pt: 'setembro',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-5a905e8d5c87',
  kind: 'word',
  category: 'other',
  japanese: '十月',
  kana: 'じゅうがつ',
  romaji: 'juugatsu',
  pt: 'outubro',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-b40608d245b2',
  kind: 'word',
  category: 'other',
  japanese: '十一月',
  kana: 'じゅういちがつ',
  romaji: 'juuichigatsu',
  pt: 'novembro',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-dfca5d6ca947',
  kind: 'word',
  category: 'other',
  japanese: '十二月',
  kana: 'じゅうにがつ',
  romaji: 'juunigatsu',
  pt: 'dezembro',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-db040369d219',
  kind: 'word',
  category: 'other',
  japanese: '赤',
  kana: 'あか',
  romaji: 'aka',
  pt: 'vermelho',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-59a44405bd35',
  kind: 'word',
  category: 'other',
  japanese: '青',
  kana: 'あお',
  romaji: 'ao',
  pt: 'azul',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-3f4b27260d35',
  kind: 'word',
  category: 'other',
  japanese: '緑',
  kana: 'みどり',
  romaji: 'midori',
  pt: 'verde',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-b29fe03817e8',
  kind: 'word',
  category: 'other',
  japanese: '黄色',
  kana: 'きいろ',
  romaji: 'kiiro',
  pt: 'amarelo',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-0db78f5c0161',
  kind: 'word',
  category: 'other',
  japanese: '白',
  kana: 'しろ',
  romaji: 'shiro',
  pt: 'branco',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-eb5ee10a92d4',
  kind: 'word',
  category: 'other',
  japanese: '黒',
  kana: 'くろ',
  romaji: 'kuro',
  pt: 'preto',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-79f07e647a55',
  kind: 'word',
  category: 'other',
  japanese: '茶色',
  kana: 'ちゃいろ',
  romaji: 'chairo',
  pt: 'marrom',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-928ed8430601',
  kind: 'word',
  category: 'other',
  japanese: '紫',
  kana: 'むらさき',
  romaji: 'murasaki',
  pt: 'roxo',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-d49b70f47991',
  kind: 'word',
  category: 'other',
  japanese: 'ピンク',
  kana: 'ぴんく',
  romaji: 'pinku',
  pt: 'rosa',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-a47c0e55e632',
  kind: 'word',
  category: 'other',
  japanese: 'オレンジ色',
  kana: 'おれんじいろ',
  romaji: 'orenjiiro',
  pt: 'laranja (cor)',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-w-705af1984b35',
  kind: 'word',
  category: 'other',
  japanese: '上',
  kana: 'うえ',
  romaji: 'ue',
  pt: 'em cima',
  situations: ['🏠 Cotidiano', '🚆 Transporte']
},
{
  id: 'mj-w-8d0f19334ea3',
  kind: 'word',
  category: 'other',
  japanese: '下',
  kana: 'した',
  romaji: 'shita',
  pt: 'embaixo',
  situations: ['🏠 Cotidiano', '🚆 Transporte']
},
{
  id: 'mj-w-4349e026bb9b',
  kind: 'word',
  category: 'other',
  japanese: '中',
  kana: 'なか',
  romaji: 'naka',
  pt: 'dentro',
  situations: ['🏠 Cotidiano', '🚆 Transporte']
},
{
  id: 'mj-w-eb7136c62861',
  kind: 'word',
  category: 'other',
  japanese: '外',
  kana: 'そと',
  romaji: 'soto',
  pt: 'fora',
  situations: ['🏠 Cotidiano', '🚆 Transporte']
},
{
  id: 'mj-w-bf5599170fb3',
  kind: 'word',
  category: 'other',
  japanese: '前',
  kana: 'まえ',
  romaji: 'mae',
  pt: 'na frente; antes',
  situations: ['🏠 Cotidiano', '🚆 Transporte']
},
{
  id: 'mj-w-c4f505639482',
  kind: 'word',
  category: 'other',
  japanese: '後ろ',
  kana: 'うしろ',
  romaji: 'ushiro',
  pt: 'atrás',
  situations: ['🏠 Cotidiano', '🚆 Transporte']
},
{
  id: 'mj-w-450899018da4',
  kind: 'word',
  category: 'other',
  japanese: '隣',
  kana: 'となり',
  romaji: 'tonari',
  pt: 'ao lado',
  situations: ['🏠 Cotidiano', '🚆 Transporte']
},
{
  id: 'mj-w-0a1e77e18109',
  kind: 'word',
  category: 'other',
  japanese: '近く',
  kana: 'ちかく',
  romaji: 'chikaku',
  pt: 'perto',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-4d2f9545b4d0',
  kind: 'word',
  category: 'other',
  japanese: '遠く',
  kana: 'とおく',
  romaji: 'tooku',
  pt: 'longe',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-14bc1ad8cebc',
  kind: 'word',
  category: 'other',
  japanese: '一緒に',
  kana: 'いっしょに',
  romaji: 'isshoni',
  pt: 'junto(s)',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-w-82c171e5f83d',
  kind: 'word',
  category: 'other',
  japanese: 'たぶん',
  kana: 'たぶん',
  romaji: 'tabun',
  pt: 'talvez; provavelmente',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-2e86fc188b2a',
  kind: 'word',
  category: 'other',
  japanese: 'もちろん',
  kana: 'もちろん',
  romaji: 'mochiron',
  pt: 'claro; é evidente',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-0058799818e6',
  kind: 'word',
  category: 'other',
  japanese: '本当に',
  kana: 'ほんとうに',
  romaji: 'hontouni',
  pt: 'realmente',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-d8d712093661',
  kind: 'word',
  category: 'other',
  japanese: '少し',
  kana: 'すこし',
  romaji: 'sukoshi',
  pt: 'um pouco',
  situations: ['🗣️ Conversas básicas', '🎓 Aula de japonês']
},
{
  id: 'mj-w-5938d7c8a4e5',
  kind: 'word',
  category: 'other',
  japanese: 'たくさん',
  kana: 'たくさん',
  romaji: 'takusan',
  pt: 'muito; em grande quantidade',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-2aea30f894a2',
  kind: 'word',
  category: 'other',
  japanese: 'いつも',
  kana: 'いつも',
  romaji: 'itsumo',
  pt: 'sempre',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-b4cb70a3529e',
  kind: 'word',
  category: 'other',
  japanese: '時々',
  kana: 'ときどき',
  romaji: 'tokidoki',
  pt: 'às vezes',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-8e1e36fe651d',
  kind: 'word',
  category: 'other',
  japanese: 'あまり',
  kana: 'あまり',
  romaji: 'amari',
  pt: 'não muito (com negativo)',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-w-b27a55284579',
  kind: 'word',
  category: 'other',
  japanese: '全然',
  kana: 'ぜんぜん',
  romaji: 'zenzen',
  pt: 'de jeito nenhum (com negativo)',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-bdb21f38e23b',
  kind: 'word',
  category: 'other',
  japanese: 'もう',
  kana: 'もう',
  romaji: 'mou',
  pt: 'já',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-aa41b0deb9e0',
  kind: 'word',
  category: 'other',
  japanese: 'まだ',
  kana: 'まだ',
  romaji: 'mada',
  pt: 'ainda',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-e4b87458a4ac',
  kind: 'word',
  category: 'other',
  japanese: 'ゆっくり',
  kana: 'ゆっくり',
  romaji: 'yukkuri',
  pt: 'devagar; com calma',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-e238e2454872',
  kind: 'word',
  category: 'other',
  japanese: 'もう一度',
  kana: 'もういちど',
  romaji: 'mouichido',
  pt: 'mais uma vez',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-w-abc9bb410361',
  kind: 'word',
  category: 'other',
  japanese: 'どうぞ',
  kana: 'どうぞ',
  romaji: 'douzo',
  pt: 'por favor; fique à vontade',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-e4ef3c8a4e05',
  kind: 'word',
  category: 'other',
  japanese: 'はい',
  kana: 'はい',
  romaji: 'hai',
  pt: 'sim',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-dd428eae5a58',
  kind: 'word',
  category: 'other',
  japanese: 'いいえ',
  kana: 'いいえ',
  romaji: 'iie',
  pt: 'não',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-w-0cc475a17f9c',
  kind: 'word',
  category: 'noun',
  japanese: '歴史',
  kana: 'れきし',
  romaji: 'rekishi',
  pt: 'história',
  situations: ['💬 Opiniões', '🇯🇵 Cultura japonesa']
},
{
  id: 'mj-w-463e2c53d793',
  kind: 'word',
  category: 'noun',
  japanese: '自然',
  kana: 'しぜん',
  romaji: 'shizen',
  pt: 'natureza',
  situations: ['🌦️ Clima', '💬 Opiniões']
},
{
  id: 'mj-w-b69d0727ebbf',
  kind: 'word',
  category: 'noun',
  japanese: '科学',
  kana: 'かがく',
  romaji: 'kagaku',
  pt: 'ciência',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-de3feef0c72c',
  kind: 'word',
  category: 'noun',
  japanese: '宇宙',
  kana: 'うちゅう',
  romaji: 'uchuu',
  pt: 'universo; espaço sideral',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-80175f7c0876',
  kind: 'word',
  category: 'noun',
  japanese: '人生',
  kana: 'じんせい',
  romaji: 'jinsei',
  pt: 'vida',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-a9282364b6ce',
  kind: 'word',
  category: 'noun',
  japanese: '世界',
  kana: 'せかい',
  romaji: 'sekai',
  pt: 'mundo',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-711a41d2f2d7',
  kind: 'word',
  category: 'noun',
  japanese: '時間',
  kana: 'じかん',
  romaji: 'jikan',
  pt: 'tempo',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-w-7a9a67bee257',
  kind: 'word',
  category: 'noun',
  japanese: '健康',
  kana: 'けんこう',
  romaji: 'kenkou',
  pt: 'saúde',
  situations: ['🏠 Cotidiano', '😊 Sentimentos']
},
{
  id: 'mj-w-e73b191e0147',
  kind: 'word',
  category: 'noun',
  japanese: '未来',
  kana: 'みらい',
  romaji: 'mirai',
  pt: 'futuro',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-w-0d514855ede7',
  kind: 'word',
  category: 'noun',
  japanese: '過去',
  kana: 'かこ',
  romaji: 'kako',
  pt: 'passado',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-w-1e8f47bd515c',
  kind: 'word',
  category: 'noun',
  japanese: '愛',
  kana: 'あい',
  romaji: 'ai',
  pt: 'amor',
  situations: ['😊 Sentimentos', '💬 Opiniões']
},
{
  id: 'mj-w-5af0e69efccc',
  kind: 'word',
  category: 'noun',
  japanese: '信頼',
  kana: 'しんらい',
  romaji: 'shinrai',
  pt: 'confiança',
  situations: ['👥 Amigos e socialização', '😊 Sentimentos']
},
{
  id: 'mj-w-b504f30d5592',
  kind: 'word',
  category: 'noun',
  japanese: '尊敬',
  kana: 'そんけい',
  romaji: 'sonkei',
  pt: 'respeito',
  situations: ['👥 Amigos e socialização', '💬 Opiniões']
},
{
  id: 'mj-w-902019743dae',
  kind: 'word',
  category: 'noun',
  japanese: '静けさ',
  kana: 'しずけさ',
  romaji: 'shizukesa',
  pt: 'silêncio; tranquilidade',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-w-096e9fcc58b2',
  kind: 'word',
  category: 'noun',
  japanese: '音',
  kana: 'おと',
  romaji: 'oto',
  pt: 'som',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-07f053afc82c',
  kind: 'word',
  category: 'noun',
  japanese: '声',
  kana: 'こえ',
  romaji: 'koe',
  pt: 'voz',
  situations: ['🎵 Música']
},
{
  id: 'mj-w-80612dee1f20',
  kind: 'word',
  category: 'noun',
  japanese: '景色',
  kana: 'けしき',
  romaji: 'keshiki',
  pt: 'paisagem',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-e5c6fb2e6a24',
  kind: 'word',
  category: 'noun',
  japanese: '乗り物',
  kana: 'のりもの',
  romaji: 'norimono',
  pt: 'meio de transporte',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-w-96e61038be66',
  kind: 'word',
  category: 'noun',
  japanese: '海外',
  kana: 'かいがい',
  romaji: 'kaigai',
  pt: 'exterior; fora do país',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-234f7619d882',
  kind: 'word',
  category: 'noun',
  japanese: '国',
  kana: 'くに',
  romaji: 'kuni',
  pt: 'país',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-w-a9584092c57c',
  kind: 'word',
  category: 'noun',
  japanese: '社会',
  kana: 'しゃかい',
  romaji: 'shakai',
  pt: 'sociedade',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-3f6d61312584',
  kind: 'word',
  category: 'noun',
  japanese: 'ニュース',
  kana: 'にゅーす',
  romaji: 'nyuusu',
  pt: 'notícias',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-w-cc89d6e483ae',
  kind: 'word',
  category: 'noun',
  japanese: '世界観',
  kana: 'せかいかん',
  romaji: 'sekaikan',
  pt: 'universo ficcional',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-w-333f789bf710',
  kind: 'word',
  category: 'noun',
  japanese: 'ゲーム音楽',
  kana: 'げーむおんがく',
  romaji: 'geemuongaku',
  pt: 'trilha sonora de videogame',
  situations: ['🎵 Música', '🎮 Videogames']
},
{
  id: 'mj-w-a0c0f0ba671d',
  kind: 'word',
  category: 'noun',
  japanese: 'サウンドトラック',
  kana: 'さうんどとらっく',
  romaji: 'saundotorakku',
  pt: 'trilha sonora',
  situations: ['🎵 Música', '🎬 Filmes e séries']
},
{
  id: 'mj-w-00989f2d1660',
  kind: 'word',
  category: 'noun',
  japanese: '感情',
  kana: 'かんじょう',
  romaji: 'kanjou',
  pt: 'emoção',
  situations: ['😊 Sentimentos', '💬 Opiniões']
},
{
  id: 'mj-p-d53d429ba6ae',
  kind: 'phrase',
  category: 'phrase',
  japanese: '音楽が好きです。',
  kana: 'おんがくがすきです。',
  romaji: 'ongaku ga suki desu.',
  pt: 'Gosto de música.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-310fea16d8ed',
  kind: 'phrase',
  category: 'phrase',
  japanese: '音楽に興味があります。',
  kana: 'おんがくにきょうみがあります。',
  romaji: 'ongaku ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em música.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-f9d60f7500ba',
  kind: 'phrase',
  category: 'phrase',
  japanese: '音楽についてもっと知りたいです。',
  kana: 'おんがくについてもっとしりたいです。',
  romaji: 'ongaku ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre música.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-6023630a8b8f',
  kind: 'phrase',
  category: 'phrase',
  japanese: '映画が好きです。',
  kana: 'えいががすきです。',
  romaji: 'eiga ga suki desu.',
  pt: 'Gosto de filme.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-232496e20b36',
  kind: 'phrase',
  category: 'phrase',
  japanese: '映画に興味があります。',
  kana: 'えいがにきょうみがあります。',
  romaji: 'eiga ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em filme.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-f96742379676',
  kind: 'phrase',
  category: 'phrase',
  japanese: '映画についてもっと知りたいです。',
  kana: 'えいがについてもっとしりたいです。',
  romaji: 'eiga ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre filme.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-0fcce591e4c2',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ゲームが好きです。',
  kana: 'げーむがすきです。',
  romaji: 'geemu ga suki desu.',
  pt: 'Gosto de jogo.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-c18f9fd68381',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ゲームに興味があります。',
  kana: 'げーむにきょうみがあります。',
  romaji: 'geemu ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em jogo.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-944da735a817',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ゲームについてもっと知りたいです。',
  kana: 'げーむについてもっとしりたいです。',
  romaji: 'geemu ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre jogo.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-ae488dd261b0',
  kind: 'phrase',
  category: 'phrase',
  japanese: '本が好きです。',
  kana: 'ほんがすきです。',
  romaji: 'hon ga suki desu.',
  pt: 'Gosto de livro.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-e005d8fd037b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '本に興味があります。',
  kana: 'ほんにきょうみがあります。',
  romaji: 'hon ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em livro.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-abd138e6cf23',
  kind: 'phrase',
  category: 'phrase',
  japanese: '本についてもっと知りたいです。',
  kana: 'ほんについてもっとしりたいです。',
  romaji: 'hon ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre livro.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-82d78a416c7a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '料理が好きです。',
  kana: 'りょうりがすきです。',
  romaji: 'ryouri ga suki desu.',
  pt: 'Gosto de culinária; prato.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-879bced149fb',
  kind: 'phrase',
  category: 'phrase',
  japanese: '料理に興味があります。',
  kana: 'りょうりにきょうみがあります。',
  romaji: 'ryouri ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em culinária; prato.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-5a37f4ba974a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '料理についてもっと知りたいです。',
  kana: 'りょうりについてもっとしりたいです。',
  romaji: 'ryouri ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre culinária; prato.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-4f3c57b2413d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '旅行が好きです。',
  kana: 'りょこうがすきです。',
  romaji: 'ryokou ga suki desu.',
  pt: 'Gosto de viagem.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-233ef21f0735',
  kind: 'phrase',
  category: 'phrase',
  japanese: '旅行に興味があります。',
  kana: 'りょこうにきょうみがあります。',
  romaji: 'ryokou ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em viagem.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-bfbc21a6bb7f',
  kind: 'phrase',
  category: 'phrase',
  japanese: '旅行についてもっと知りたいです。',
  kana: 'りょこうについてもっとしりたいです。',
  romaji: 'ryokou ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre viagem.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-9df370a63f51',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'アニメが好きです。',
  kana: 'あにめがすきです。',
  romaji: 'anime ga suki desu.',
  pt: 'Gosto de anime.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-13d687686ee0',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'アニメに興味があります。',
  kana: 'あにめにきょうみがあります。',
  romaji: 'anime ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em anime.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-d85b6bbd7aef',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'アニメについてもっと知りたいです。',
  kana: 'あにめについてもっとしりたいです。',
  romaji: 'anime ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre anime.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-31dbccc3db0d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '漫画が好きです。',
  kana: 'まんががすきです。',
  romaji: 'manga ga suki desu.',
  pt: 'Gosto de mangá.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-d698d36df3de',
  kind: 'phrase',
  category: 'phrase',
  japanese: '漫画に興味があります。',
  kana: 'まんがにきょうみがあります。',
  romaji: 'manga ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em mangá.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-22030adb7c8a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '漫画についてもっと知りたいです。',
  kana: 'まんがについてもっとしりたいです。',
  romaji: 'manga ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre mangá.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-8d39cc4d8a5a',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ロックが好きです。',
  kana: 'ろっくがすきです。',
  romaji: 'rokku ga suki desu.',
  pt: 'Gosto de rock.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-ee0a166d9aa1',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ロックに興味があります。',
  kana: 'ろっくにきょうみがあります。',
  romaji: 'rokku ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em rock.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-bab8ca66cb09',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ロックについてもっと知りたいです。',
  kana: 'ろっくについてもっとしりたいです。',
  romaji: 'rokku ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre rock.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-9792d6a946d2',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'クラシックが好きです。',
  kana: 'くらしっくがすきです。',
  romaji: 'kurashikku ga suki desu.',
  pt: 'Gosto de música clássica.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-e10809e32e7b',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'クラシックに興味があります。',
  kana: 'くらしっくにきょうみがあります。',
  romaji: 'kurashikku ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em música clássica.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-b3213cf2d95b',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'クラシックについてもっと知りたいです。',
  kana: 'くらしっくについてもっとしりたいです。',
  romaji: 'kurashikku ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre música clássica.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-5d312e1ea63e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '電子音楽が好きです。',
  kana: 'でんしおんがくがすきです。',
  romaji: 'denshiongaku ga suki desu.',
  pt: 'Gosto de música eletrônica.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-01496f3edd65',
  kind: 'phrase',
  category: 'phrase',
  japanese: '電子音楽に興味があります。',
  kana: 'でんしおんがくにきょうみがあります。',
  romaji: 'denshiongaku ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em música eletrônica.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-a4cc71726549',
  kind: 'phrase',
  category: 'phrase',
  japanese: '電子音楽についてもっと知りたいです。',
  kana: 'でんしおんがくについてもっとしりたいです。',
  romaji: 'denshiongaku ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre música eletrônica.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-a9b498a09748',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ギターが好きです。',
  kana: 'ぎたーがすきです。',
  romaji: 'gitaa ga suki desu.',
  pt: 'Gosto de guitarra.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-2ddbac25cc63',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ギターに興味があります。',
  kana: 'ぎたーにきょうみがあります。',
  romaji: 'gitaa ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em guitarra.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-8ef80e3bbf02',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ギターについてもっと知りたいです。',
  kana: 'ぎたーについてもっとしりたいです。',
  romaji: 'gitaa ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre guitarra.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-c8c3b0d3be62',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ピアノが好きです。',
  kana: 'ぴあのがすきです。',
  romaji: 'piano ga suki desu.',
  pt: 'Gosto de piano.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-a62ae5bc974a',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ピアノに興味があります。',
  kana: 'ぴあのにきょうみがあります。',
  romaji: 'piano ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em piano.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-425b2e34b105',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ピアノについてもっと知りたいです。',
  kana: 'ぴあのについてもっとしりたいです。',
  romaji: 'piano ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre piano.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-c802e87b9655',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'コンサートが好きです。',
  kana: 'こんさーとがすきです。',
  romaji: 'konsaato ga suki desu.',
  pt: 'Gosto de concerto; show.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-db936b71258d',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'コンサートに興味があります。',
  kana: 'こんさーとにきょうみがあります。',
  romaji: 'konsaato ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em concerto; show.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-f0b1e60e0a5d',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'コンサートについてもっと知りたいです。',
  kana: 'こんさーとについてもっとしりたいです。',
  romaji: 'konsaato ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre concerto; show.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-74da1db3970b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歌が好きです。',
  kana: 'うたがすきです。',
  romaji: 'uta ga suki desu.',
  pt: 'Gosto de canção.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-0bc0275fb200',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歌に興味があります。',
  kana: 'うたにきょうみがあります。',
  romaji: 'uta ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em canção.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-561c1d527b0e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歌についてもっと知りたいです。',
  kana: 'うたについてもっとしりたいです。',
  romaji: 'uta ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre canção.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-7abca4d338b6',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本語が好きです。',
  kana: 'にほんごがすきです。',
  romaji: 'nihongo ga suki desu.',
  pt: 'Gosto de língua japonesa.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-f406d1bd3a15',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本語に興味があります。',
  kana: 'にほんごにきょうみがあります。',
  romaji: 'nihongo ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em língua japonesa.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-7a5c0e7f07e2',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本語についてもっと知りたいです。',
  kana: 'にほんごについてもっとしりたいです。',
  romaji: 'nihongo ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre língua japonesa.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-2a3aac80ffcb',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'プログラミングが好きです。',
  kana: 'ぷろぐらみんぐがすきです。',
  romaji: 'puroguramingu ga suki desu.',
  pt: 'Gosto de programação.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-ca381c3c1332',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'プログラミングに興味があります。',
  kana: 'ぷろぐらみんぐにきょうみがあります。',
  romaji: 'puroguramingu ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em programação.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-e7f45179c0db',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'プログラミングについてもっと知りたいです。',
  kana: 'ぷろぐらみんぐについてもっとしりたいです。',
  romaji: 'puroguramingu ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre programação.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-d0287931ba51',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'スマホが好きです。',
  kana: 'すまほがすきです。',
  romaji: 'sumaho ga suki desu.',
  pt: 'Gosto de smartphone.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-4a51de060324',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'スマホに興味があります。',
  kana: 'すまほにきょうみがあります。',
  romaji: 'sumaho ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em smartphone.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-f21a153495d6',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'スマホについてもっと知りたいです。',
  kana: 'すまほについてもっとしりたいです。',
  romaji: 'sumaho ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre smartphone.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-c3fddc23da2a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '技術が好きです。',
  kana: 'ぎじゅつがすきです。',
  romaji: 'gijutsu ga suki desu.',
  pt: 'Gosto de tecnologia; técnica.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-f2c55e47a55b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '技術に興味があります。',
  kana: 'ぎじゅつにきょうみがあります。',
  romaji: 'gijutsu ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em tecnologia; técnica.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-df0e63c184ca',
  kind: 'phrase',
  category: 'phrase',
  japanese: '技術についてもっと知りたいです。',
  kana: 'ぎじゅつについてもっとしりたいです。',
  romaji: 'gijutsu ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre tecnologia; técnica.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-2cae38762d25',
  kind: 'phrase',
  category: 'phrase',
  japanese: '人工知能が好きです。',
  kana: 'じんこうちのうがすきです。',
  romaji: 'jinkouchinou ga suki desu.',
  pt: 'Gosto de inteligência artificial.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-3aa2e2e8b287',
  kind: 'phrase',
  category: 'phrase',
  japanese: '人工知能に興味があります。',
  kana: 'じんこうちのうにきょうみがあります。',
  romaji: 'jinkouchinou ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em inteligência artificial.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-695d60705dc0',
  kind: 'phrase',
  category: 'phrase',
  japanese: '人工知能についてもっと知りたいです。',
  kana: 'じんこうちのうについてもっとしりたいです。',
  romaji: 'jinkouchinou ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre inteligência artificial.',
  situations: ['❤️ Gostos e preferências', '💻 Tecnologia']
},
{
  id: 'mj-p-48c530c910be',
  kind: 'phrase',
  category: 'phrase',
  japanese: '哲学が好きです。',
  kana: 'てつがくがすきです。',
  romaji: 'tetsugaku ga suki desu.',
  pt: 'Gosto de filosofia.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-25c3b2227c8a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '哲学に興味があります。',
  kana: 'てつがくにきょうみがあります。',
  romaji: 'tetsugaku ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em filosofia.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-291cb7141c48',
  kind: 'phrase',
  category: 'phrase',
  japanese: '哲学についてもっと知りたいです。',
  kana: 'てつがくについてもっとしりたいです。',
  romaji: 'tetsugaku ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre filosofia.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-8cbeab8ed6e5',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歴史が好きです。',
  kana: 'れきしがすきです。',
  romaji: 'rekishi ga suki desu.',
  pt: 'Gosto de história.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-799a1d486871',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歴史に興味があります。',
  kana: 'れきしにきょうみがあります。',
  romaji: 'rekishi ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em história.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-41fc54f53dd4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歴史についてもっと知りたいです。',
  kana: 'れきしについてもっとしりたいです。',
  romaji: 'rekishi ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre história.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-0e720e275be2',
  kind: 'phrase',
  category: 'phrase',
  japanese: '自然が好きです。',
  kana: 'しぜんがすきです。',
  romaji: 'shizen ga suki desu.',
  pt: 'Gosto de natureza.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-a7ea10b37a41',
  kind: 'phrase',
  category: 'phrase',
  japanese: '自然に興味があります。',
  kana: 'しぜんにきょうみがあります。',
  romaji: 'shizen ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em natureza.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-d6db98a2c032',
  kind: 'phrase',
  category: 'phrase',
  japanese: '自然についてもっと知りたいです。',
  kana: 'しぜんについてもっとしりたいです。',
  romaji: 'shizen ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre natureza.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-183ea1c0b304',
  kind: 'phrase',
  category: 'phrase',
  japanese: '犬が好きです。',
  kana: 'いぬがすきです。',
  romaji: 'inu ga suki desu.',
  pt: 'Gosto de cachorro.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-7d74a586cdc7',
  kind: 'phrase',
  category: 'phrase',
  japanese: '犬に興味があります。',
  kana: 'いぬにきょうみがあります。',
  romaji: 'inu ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em cachorro.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-79789a5807c7',
  kind: 'phrase',
  category: 'phrase',
  japanese: '犬についてもっと知りたいです。',
  kana: 'いぬについてもっとしりたいです。',
  romaji: 'inu ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre cachorro.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-0734f3ca4670',
  kind: 'phrase',
  category: 'phrase',
  japanese: '猫が好きです。',
  kana: 'ねこがすきです。',
  romaji: 'neko ga suki desu.',
  pt: 'Gosto de gato.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-f9b6e69f0b16',
  kind: 'phrase',
  category: 'phrase',
  japanese: '猫に興味があります。',
  kana: 'ねこにきょうみがあります。',
  romaji: 'neko ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em gato.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-f7d5b75c3517',
  kind: 'phrase',
  category: 'phrase',
  japanese: '猫についてもっと知りたいです。',
  kana: 'ねこについてもっとしりたいです。',
  romaji: 'neko ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre gato.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-e9c175ab3d50',
  kind: 'phrase',
  category: 'phrase',
  japanese: '寿司が好きです。',
  kana: 'すしがすきです。',
  romaji: 'sushi ga suki desu.',
  pt: 'Gosto de sushi.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-074da9a02a93',
  kind: 'phrase',
  category: 'phrase',
  japanese: '寿司に興味があります。',
  kana: 'すしにきょうみがあります。',
  romaji: 'sushi ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em sushi.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-b1d90d9950c8',
  kind: 'phrase',
  category: 'phrase',
  japanese: '寿司についてもっと知りたいです。',
  kana: 'すしについてもっとしりたいです。',
  romaji: 'sushi ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre sushi.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-c2ffe10b238c',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ラーメンが好きです。',
  kana: 'らーめんがすきです。',
  romaji: 'raamen ga suki desu.',
  pt: 'Gosto de lámen.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-851c6c7be99a',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ラーメンに興味があります。',
  kana: 'らーめんにきょうみがあります。',
  romaji: 'raamen ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em lámen.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-7c6febd9af21',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ラーメンについてもっと知りたいです。',
  kana: 'らーめんについてもっとしりたいです。',
  romaji: 'raamen ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre lámen.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-a9c48a0a01f8',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'コーヒーが好きです。',
  kana: 'こーひーがすきです。',
  romaji: 'koohii ga suki desu.',
  pt: 'Gosto de café.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-af3655d0bec7',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'コーヒーに興味があります。',
  kana: 'こーひーにきょうみがあります。',
  romaji: 'koohii ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em café.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-b5c1376bb92c',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'コーヒーについてもっと知りたいです。',
  kana: 'こーひーについてもっとしりたいです。',
  romaji: 'koohii ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre café.',
  situations: ['❤️ Gostos e preferências', '❤️ Gostos e preferências']
},
{
  id: 'mj-p-1a075f7a9e71',
  kind: 'phrase',
  category: 'phrase',
  japanese: '紅茶が好きです。',
  kana: 'こうちゃがすきです。',
  romaji: 'koucha ga suki desu.',
  pt: 'Gosto de chá preto.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-fea293ed187a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '紅茶に興味があります。',
  kana: 'こうちゃにきょうみがあります。',
  romaji: 'koucha ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em chá preto.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-34edff11a917',
  kind: 'phrase',
  category: 'phrase',
  japanese: '紅茶についてもっと知りたいです。',
  kana: 'こうちゃについてもっとしりたいです。',
  romaji: 'koucha ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre chá preto.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-79bccc85ceed',
  kind: 'phrase',
  category: 'phrase',
  japanese: '紅葉が好きです。',
  kana: 'こうようがすきです。',
  romaji: 'kouyou ga suki desu.',
  pt: 'Gosto de folhas avermelhadas de outono.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-502e97468a87',
  kind: 'phrase',
  category: 'phrase',
  japanese: '紅葉に興味があります。',
  kana: 'こうようにきょうみがあります。',
  romaji: 'kouyou ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em folhas avermelhadas de outono.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-d13507c53a1c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '紅葉についてもっと知りたいです。',
  kana: 'こうようについてもっとしりたいです。',
  romaji: 'kouyou ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre folhas avermelhadas de outono.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-e00740273423',
  kind: 'phrase',
  category: 'phrase',
  japanese: '桜が好きです。',
  kana: 'さくらがすきです。',
  romaji: 'sakura ga suki desu.',
  pt: 'Gosto de flor de cerejeira.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-cdc9a80184ab',
  kind: 'phrase',
  category: 'phrase',
  japanese: '桜に興味があります。',
  kana: 'さくらにきょうみがあります。',
  romaji: 'sakura ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em flor de cerejeira.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-2b15bea3897d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '桜についてもっと知りたいです。',
  kana: 'さくらについてもっとしりたいです。',
  romaji: 'sakura ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre flor de cerejeira.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-322530c6eb42',
  kind: 'phrase',
  category: 'phrase',
  japanese: '温泉が好きです。',
  kana: 'おんせんがすきです。',
  romaji: 'onsen ga suki desu.',
  pt: 'Gosto de fonte termal.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-2f68ef7dae47',
  kind: 'phrase',
  category: 'phrase',
  japanese: '温泉に興味があります。',
  kana: 'おんせんにきょうみがあります。',
  romaji: 'onsen ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em fonte termal.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-35e5be346311',
  kind: 'phrase',
  category: 'phrase',
  japanese: '温泉についてもっと知りたいです。',
  kana: 'おんせんについてもっとしりたいです。',
  romaji: 'onsen ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre fonte termal.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-1317e0c0f406',
  kind: 'phrase',
  category: 'phrase',
  japanese: '映画館が好きです。',
  kana: 'えいがかんがすきです。',
  romaji: 'eigakan ga suki desu.',
  pt: 'Gosto de cinema.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-bd9d569b6823',
  kind: 'phrase',
  category: 'phrase',
  japanese: '映画館に興味があります。',
  kana: 'えいがかんにきょうみがあります。',
  romaji: 'eigakan ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em cinema.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-b1bc12fd2a28',
  kind: 'phrase',
  category: 'phrase',
  japanese: '映画館についてもっと知りたいです。',
  kana: 'えいがかんについてもっとしりたいです。',
  romaji: 'eigakan ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre cinema.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-0040c58e3d77',
  kind: 'phrase',
  category: 'phrase',
  japanese: '忍者が好きです。',
  kana: 'にんじゃがすきです。',
  romaji: 'ninja ga suki desu.',
  pt: 'Gosto de ninja.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-5d191c79b3cb',
  kind: 'phrase',
  category: 'phrase',
  japanese: '忍者に興味があります。',
  kana: 'にんじゃにきょうみがあります。',
  romaji: 'ninja ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em ninja.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-b226e5208040',
  kind: 'phrase',
  category: 'phrase',
  japanese: '忍者についてもっと知りたいです。',
  kana: 'にんじゃについてもっとしりたいです。',
  romaji: 'ninja ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre ninja.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-2e1c90bca0a6',
  kind: 'phrase',
  category: 'phrase',
  japanese: '魔法が好きです。',
  kana: 'まほうがすきです。',
  romaji: 'mahou ga suki desu.',
  pt: 'Gosto de magia.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-37bb80df2f05',
  kind: 'phrase',
  category: 'phrase',
  japanese: '魔法に興味があります。',
  kana: 'まほうにきょうみがあります。',
  romaji: 'mahou ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em magia.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-20cb65262dea',
  kind: 'phrase',
  category: 'phrase',
  japanese: '魔法についてもっと知りたいです。',
  kana: 'まほうについてもっとしりたいです。',
  romaji: 'mahou ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre magia.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-e844f38df373',
  kind: 'phrase',
  category: 'phrase',
  japanese: '冒険が好きです。',
  kana: 'ぼうけんがすきです。',
  romaji: 'bouken ga suki desu.',
  pt: 'Gosto de aventura.',
  situations: ['❤️ Gostos e preferências', '🎮 Videogames']
},
{
  id: 'mj-p-6765e5e9e4cd',
  kind: 'phrase',
  category: 'phrase',
  japanese: '冒険に興味があります。',
  kana: 'ぼうけんにきょうみがあります。',
  romaji: 'bouken ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em aventura.',
  situations: ['❤️ Gostos e preferências', '🎮 Videogames']
},
{
  id: 'mj-p-5f252b2db900',
  kind: 'phrase',
  category: 'phrase',
  japanese: '冒険についてもっと知りたいです。',
  kana: 'ぼうけんについてもっとしりたいです。',
  romaji: 'bouken ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre aventura.',
  situations: ['❤️ Gostos e preferências', '🎮 Videogames']
},
{
  id: 'mj-p-38dda793d82d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '物語が好きです。',
  kana: 'ものがたりがすきです。',
  romaji: 'monogatari ga suki desu.',
  pt: 'Gosto de história; narrativa.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-81916486ce5e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '物語に興味があります。',
  kana: 'ものがたりにきょうみがあります。',
  romaji: 'monogatari ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em história; narrativa.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-118954275013',
  kind: 'phrase',
  category: 'phrase',
  japanese: '物語についてもっと知りたいです。',
  kana: 'ものがたりについてもっとしりたいです。',
  romaji: 'monogatari ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre história; narrativa.',
  situations: ['❤️ Gostos e preferências', '🍥 Anime e mangá']
},
{
  id: 'mj-p-0e206f40c292',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'バンドが好きです。',
  kana: 'ばんどがすきです。',
  romaji: 'bando ga suki desu.',
  pt: 'Gosto de banda.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-efe793aaabff',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'バンドに興味があります。',
  kana: 'ばんどにきょうみがあります。',
  romaji: 'bando ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em banda.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-6e87f0e44265',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'バンドについてもっと知りたいです。',
  kana: 'ばんどについてもっとしりたいです。',
  romaji: 'bando ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre banda.',
  situations: ['❤️ Gostos e preferências', '🎵 Música']
},
{
  id: 'mj-p-108f092eb5ee',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ドラマが好きです。',
  kana: 'どらまがすきです。',
  romaji: 'dorama ga suki desu.',
  pt: 'Gosto de série; drama de TV.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-93a537293042',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ドラマに興味があります。',
  kana: 'どらまにきょうみがあります。',
  romaji: 'dorama ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em série; drama de TV.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-b7320378255f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ドラマについてもっと知りたいです。',
  kana: 'どらまについてもっとしりたいです。',
  romaji: 'dorama ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre série; drama de TV.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-6a2cb9ecce0d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '科学が好きです。',
  kana: 'かがくがすきです。',
  romaji: 'kagaku ga suki desu.',
  pt: 'Gosto de ciência.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-da4fd5e6b6a6',
  kind: 'phrase',
  category: 'phrase',
  japanese: '科学に興味があります。',
  kana: 'かがくにきょうみがあります。',
  romaji: 'kagaku ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em ciência.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-88d7144a2ce7',
  kind: 'phrase',
  category: 'phrase',
  japanese: '科学についてもっと知りたいです。',
  kana: 'かがくについてもっとしりたいです。',
  romaji: 'kagaku ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre ciência.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-0b67b3bf6fb5',
  kind: 'phrase',
  category: 'phrase',
  japanese: '宇宙が好きです。',
  kana: 'うちゅうがすきです。',
  romaji: 'uchuu ga suki desu.',
  pt: 'Gosto de universo; espaço sideral.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-7b39848cfa82',
  kind: 'phrase',
  category: 'phrase',
  japanese: '宇宙に興味があります。',
  kana: 'うちゅうにきょうみがあります。',
  romaji: 'uchuu ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em universo; espaço sideral.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-b05ab8dae505',
  kind: 'phrase',
  category: 'phrase',
  japanese: '宇宙についてもっと知りたいです。',
  kana: 'うちゅうについてもっとしりたいです。',
  romaji: 'uchuu ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre universo; espaço sideral.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-4e40f05e489a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '環境が好きです。',
  kana: 'かんきょうがすきです。',
  romaji: 'kankyou ga suki desu.',
  pt: 'Gosto de meio ambiente.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-7e575d18915d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '環境に興味があります。',
  kana: 'かんきょうにきょうみがあります。',
  romaji: 'kankyou ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em meio ambiente.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-2c60a68fbab4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '環境についてもっと知りたいです。',
  kana: 'かんきょうについてもっとしりたいです。',
  romaji: 'kankyou ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre meio ambiente.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-7f2f2b9ec22f',
  kind: 'phrase',
  category: 'phrase',
  japanese: '文化が好きです。',
  kana: 'ぶんかがすきです。',
  romaji: 'bunka ga suki desu.',
  pt: 'Gosto de cultura.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-47e4d0760995',
  kind: 'phrase',
  category: 'phrase',
  japanese: '文化に興味があります。',
  kana: 'ぶんかにきょうみがあります。',
  romaji: 'bunka ni kyoumi ga arimasu.',
  pt: 'Tenho interesse em cultura.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-52367b593b2a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '文化についてもっと知りたいです。',
  kana: 'ぶんかについてもっとしりたいです。',
  romaji: 'bunka ni tsuite motto shiritai desu.',
  pt: 'Quero saber mais sobre cultura.',
  situations: ['❤️ Gostos e preferências', '💬 Opiniões']
},
{
  id: 'mj-p-cb4517975dd4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '水をください。',
  kana: 'みずをください。',
  romaji: 'mizu o kudasai.',
  pt: 'Água, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-53c128ca20d4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '水はありますか？',
  kana: 'みずはありますか？',
  romaji: 'mizu wa arimasu ka?',
  pt: 'Tem água?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-ed9eaba440e6',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'お茶をください。',
  kana: 'おちゃをください。',
  romaji: 'ocha o kudasai.',
  pt: 'Chá, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-e6243a257cf3',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'お茶はありますか？',
  kana: 'おちゃはありますか？',
  romaji: 'ocha wa arimasu ka?',
  pt: 'Tem chá?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-11a1d80a4c68',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ご飯をください。',
  kana: 'ごはんをください。',
  romaji: 'gohan o kudasai.',
  pt: 'Arroz cozido; refeição, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-3ff1c4cb2c9f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ご飯はありますか？',
  kana: 'ごはんはありますか？',
  romaji: 'gohan wa arimasu ka?',
  pt: 'Tem arroz cozido; refeição?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-cc90d46b197b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '味噌汁をください。',
  kana: 'みそしるをください。',
  romaji: 'misoshiru o kudasai.',
  pt: 'Sopa de missô, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-958078145213',
  kind: 'phrase',
  category: 'phrase',
  japanese: '味噌汁はありますか？',
  kana: 'みそしるはありますか？',
  romaji: 'misoshiru wa arimasu ka?',
  pt: 'Tem sopa de missô?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-39717a661cdd',
  kind: 'phrase',
  category: 'phrase',
  japanese: '寿司をください。',
  kana: 'すしをください。',
  romaji: 'sushi o kudasai.',
  pt: 'Sushi, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-f82083c9c03f',
  kind: 'phrase',
  category: 'phrase',
  japanese: '寿司はありますか？',
  kana: 'すしはありますか？',
  romaji: 'sushi wa arimasu ka?',
  pt: 'Tem sushi?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-498e5a251148',
  kind: 'phrase',
  category: 'phrase',
  japanese: '刺身をください。',
  kana: 'さしみをください。',
  romaji: 'sashimi o kudasai.',
  pt: 'Sashimi, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-f57c30ec3ad5',
  kind: 'phrase',
  category: 'phrase',
  japanese: '刺身はありますか？',
  kana: 'さしみはありますか？',
  romaji: 'sashimi wa arimasu ka?',
  pt: 'Tem sashimi?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-72a8d219dbac',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ラーメンをください。',
  kana: 'らーめんをください。',
  romaji: 'raamen o kudasai.',
  pt: 'Lámen, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-d50e1d2cd9e9',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ラーメンはありますか？',
  kana: 'らーめんはありますか？',
  romaji: 'raamen wa arimasu ka?',
  pt: 'Tem lámen?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-74ec8e34805c',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'うどんをください。',
  kana: 'うどんをください。',
  romaji: 'udon o kudasai.',
  pt: 'Udon, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-0f6f3009cd0c',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'うどんはありますか？',
  kana: 'うどんはありますか？',
  romaji: 'udon wa arimasu ka?',
  pt: 'Tem udon?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-e0e7601a8f4f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'そばをください。',
  kana: 'そばをください。',
  romaji: 'soba o kudasai.',
  pt: 'Sobá; macarrão de trigo-sarraceno, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-9da3a48ff8fa',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'そばはありますか？',
  kana: 'そばはありますか？',
  romaji: 'soba wa arimasu ka?',
  pt: 'Tem sobá; macarrão de trigo-sarraceno?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-b7415766b930',
  kind: 'phrase',
  category: 'phrase',
  japanese: '天ぷらをください。',
  kana: 'てんぷらをください。',
  romaji: 'tenpura o kudasai.',
  pt: 'Tempurá, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-0870ae905e6a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '天ぷらはありますか？',
  kana: 'てんぷらはありますか？',
  romaji: 'tenpura wa arimasu ka?',
  pt: 'Tem tempurá?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-b8bfbff7d15c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '焼き鳥をください。',
  kana: 'やきとりをください。',
  romaji: 'yakitori o kudasai.',
  pt: 'Espetinho de frango, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-073ed1b7134e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '焼き鳥はありますか？',
  kana: 'やきとりはありますか？',
  romaji: 'yakitori wa arimasu ka?',
  pt: 'Tem espetinho de frango?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-377ab3db2e3d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '野菜をください。',
  kana: 'やさいをください。',
  romaji: 'yasai o kudasai.',
  pt: 'Legumes; verduras, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-be29bc4bb4fa',
  kind: 'phrase',
  category: 'phrase',
  japanese: '野菜はありますか？',
  kana: 'やさいはありますか？',
  romaji: 'yasai wa arimasu ka?',
  pt: 'Tem legumes; verduras?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-9dad764616f4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '肉をください。',
  kana: 'にくをください。',
  romaji: 'niku o kudasai.',
  pt: 'Carne, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-e733ec3056d6',
  kind: 'phrase',
  category: 'phrase',
  japanese: '肉はありますか？',
  kana: 'にくはありますか？',
  romaji: 'niku wa arimasu ka?',
  pt: 'Tem carne?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-b8cf5f29b947',
  kind: 'phrase',
  category: 'phrase',
  japanese: '魚をください。',
  kana: 'さかなをください。',
  romaji: 'sakana o kudasai.',
  pt: 'Peixe, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-acf8bee39b2e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '魚はありますか？',
  kana: 'さかなはありますか？',
  romaji: 'sakana wa arimasu ka?',
  pt: 'Tem peixe?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-7437cd6bece1',
  kind: 'phrase',
  category: 'phrase',
  japanese: '卵をください。',
  kana: 'たまごをください。',
  romaji: 'tamago o kudasai.',
  pt: 'Ovo, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-931c61511997',
  kind: 'phrase',
  category: 'phrase',
  japanese: '卵はありますか？',
  kana: 'たまごはありますか？',
  romaji: 'tamago wa arimasu ka?',
  pt: 'Tem ovo?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-a3a1979e1fca',
  kind: 'phrase',
  category: 'phrase',
  japanese: '醤油をください。',
  kana: 'しょうゆをください。',
  romaji: 'shouyu o kudasai.',
  pt: 'Molho de soja, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-b1df9689f290',
  kind: 'phrase',
  category: 'phrase',
  japanese: '醤油はありますか？',
  kana: 'しょうゆはありますか？',
  romaji: 'shouyu wa arimasu ka?',
  pt: 'Tem molho de soja?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-b174b30f9f0b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '箸をください。',
  kana: 'はしをください。',
  romaji: 'hashi o kudasai.',
  pt: 'Hashi; palitinhos, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-b79f3cce9cd5',
  kind: 'phrase',
  category: 'phrase',
  japanese: '箸はありますか？',
  kana: 'はしはありますか？',
  romaji: 'hashi wa arimasu ka?',
  pt: 'Tem hashi; palitinhos?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-598cb0f92b69',
  kind: 'phrase',
  category: 'phrase',
  japanese: '皿をください。',
  kana: 'さらをください。',
  romaji: 'sara o kudasai.',
  pt: 'Prato, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-aa4ef754a07b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '皿はありますか？',
  kana: 'さらはありますか？',
  romaji: 'sara wa arimasu ka?',
  pt: 'Tem prato?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-b5487a7af23d',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'メニューをください。',
  kana: 'めにゅーをください。',
  romaji: 'menyuu o kudasai.',
  pt: 'Cardápio, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-5bdb52bc6438',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'メニューはありますか？',
  kana: 'めにゅーはありますか？',
  romaji: 'menyuu wa arimasu ka?',
  pt: 'Tem cardápio?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-34cca4a4e6e1',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'コーヒーをください。',
  kana: 'こーひーをください。',
  romaji: 'koohii o kudasai.',
  pt: 'Café, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-99e474ab97a5',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'コーヒーはありますか？',
  kana: 'こーひーはありますか？',
  romaji: 'koohii wa arimasu ka?',
  pt: 'Tem café?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-4a6539866f4d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '紅茶をください。',
  kana: 'こうちゃをください。',
  romaji: 'koucha o kudasai.',
  pt: 'Chá preto, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-ba5285a6a8e9',
  kind: 'phrase',
  category: 'phrase',
  japanese: '紅茶はありますか？',
  kana: 'こうちゃはありますか？',
  romaji: 'koucha wa arimasu ka?',
  pt: 'Tem chá preto?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-f1fab0fdb1f1',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ジュースをください。',
  kana: 'じゅーすをください。',
  romaji: 'juusu o kudasai.',
  pt: 'Suco, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-092beb897599',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ジュースはありますか？',
  kana: 'じゅーすはありますか？',
  romaji: 'juusu wa arimasu ka?',
  pt: 'Tem suco?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-f0e8375d65bc',
  kind: 'phrase',
  category: 'phrase',
  japanese: '牛乳をください。',
  kana: 'ぎゅうにゅうをください。',
  romaji: 'gyuunyuu o kudasai.',
  pt: 'Leite, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-ac295fbb9e70',
  kind: 'phrase',
  category: 'phrase',
  japanese: '牛乳はありますか？',
  kana: 'ぎゅうにゅうはありますか？',
  romaji: 'gyuunyuu wa arimasu ka?',
  pt: 'Tem leite?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-9f83d75ad02e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '豆乳をください。',
  kana: 'とうにゅうをください。',
  romaji: 'tounyuu o kudasai.',
  pt: 'Leite de soja, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-894dde7be80d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '豆乳はありますか？',
  kana: 'とうにゅうはありますか？',
  romaji: 'tounyuu wa arimasu ka?',
  pt: 'Tem leite de soja?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-a81fccfec802',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ケーキをください。',
  kana: 'けーきをください。',
  romaji: 'keeki o kudasai.',
  pt: 'Bolo, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-4af996c25ad6',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ケーキはありますか？',
  kana: 'けーきはありますか？',
  romaji: 'keeki wa arimasu ka?',
  pt: 'Tem bolo?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-58a153cc0a33',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'パンをください。',
  kana: 'ぱんをください。',
  romaji: 'pan o kudasai.',
  pt: 'Pão, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-b46e059c3725',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'パンはありますか？',
  kana: 'ぱんはありますか？',
  romaji: 'pan wa arimasu ka?',
  pt: 'Tem pão?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-623bcd0d28ae',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'サンドイッチをください。',
  kana: 'さんどいっちをください。',
  romaji: 'sandoitchi o kudasai.',
  pt: 'Sanduíche, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-01f53936152b',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'サンドイッチはありますか？',
  kana: 'さんどいっちはありますか？',
  romaji: 'sandoitchi wa arimasu ka?',
  pt: 'Tem sanduíche?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-b43ab2b2abdd',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'クッキーをください。',
  kana: 'くっきーをください。',
  romaji: 'kukkii o kudasai.',
  pt: 'Biscoito, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-0f23b977c6f1',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'クッキーはありますか？',
  kana: 'くっきーはありますか？',
  romaji: 'kukkii wa arimasu ka?',
  pt: 'Tem biscoito?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-3349ceaef253',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'カフェラテをください。',
  kana: 'かふぇらてをください。',
  romaji: 'kaferate o kudasai.',
  pt: 'Café com leite (latte), por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-297b3cdfc9c0',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'カフェラテはありますか？',
  kana: 'かふぇらてはありますか？',
  romaji: 'kaferate wa arimasu ka?',
  pt: 'Tem café com leite (latte)?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-1c208adcde08',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'カプチーノをください。',
  kana: 'かぷちーのをください。',
  romaji: 'kapuchiino o kudasai.',
  pt: 'Cappuccino, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-8c4afa1a70d4',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'カプチーノはありますか？',
  kana: 'かぷちーのはありますか？',
  romaji: 'kapuchiino wa arimasu ka?',
  pt: 'Tem cappuccino?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-ce8124e981b9',
  kind: 'phrase',
  category: 'phrase',
  japanese: '駅はどこですか？',
  kana: 'えきはどこですか？',
  romaji: 'eki wa doko desu ka?',
  pt: 'Onde fica estação?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-45fddbc6b8c4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '駅は近くにありますか？',
  kana: 'えきはちかくにありますか？',
  romaji: 'eki wa chikaku ni arimasu ka?',
  pt: 'Tem estação aqui perto?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-b0ff5ec06daf',
  kind: 'phrase',
  category: 'phrase',
  japanese: '地下鉄はどこですか？',
  kana: 'ちかてつはどこですか？',
  romaji: 'chikatetsu wa doko desu ka?',
  pt: 'Onde fica metrô?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-9d560fdd2fa2',
  kind: 'phrase',
  category: 'phrase',
  japanese: '地下鉄は近くにありますか？',
  kana: 'ちかてつはちかくにありますか？',
  romaji: 'chikatetsu wa chikaku ni arimasu ka?',
  pt: 'Tem metrô aqui perto?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-6b7ebbfe661c',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'バスはどこですか？',
  kana: 'ばすはどこですか？',
  romaji: 'basu wa doko desu ka?',
  pt: 'Onde fica ônibus?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-e1bc9bb07eb5',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'バスは近くにありますか？',
  kana: 'ばすはちかくにありますか？',
  romaji: 'basu wa chikaku ni arimasu ka?',
  pt: 'Tem ônibus aqui perto?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-8ae4322b45d7',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'タクシーはどこですか？',
  kana: 'たくしーはどこですか？',
  romaji: 'takushii wa doko desu ka?',
  pt: 'Onde fica táxi?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-445186ddd46a',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'タクシーは近くにありますか？',
  kana: 'たくしーはちかくにありますか？',
  romaji: 'takushii wa chikaku ni arimasu ka?',
  pt: 'Tem táxi aqui perto?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-2636cc4db518',
  kind: 'phrase',
  category: 'phrase',
  japanese: '改札はどこですか？',
  kana: 'かいさつはどこですか？',
  romaji: 'kaisatsu wa doko desu ka?',
  pt: 'Onde fica catraca; controle de bilhetes?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-b368db8ce160',
  kind: 'phrase',
  category: 'phrase',
  japanese: '改札は近くにありますか？',
  kana: 'かいさつはちかくにありますか？',
  romaji: 'kaisatsu wa chikaku ni arimasu ka?',
  pt: 'Tem catraca; controle de bilhetes aqui perto?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-28a02e4a106a',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ホームはどこですか？',
  kana: 'ほーむはどこですか？',
  romaji: 'hoomu wa doko desu ka?',
  pt: 'Onde fica plataforma da estação?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-651dd68f6deb',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ホームは近くにありますか？',
  kana: 'ほーむはちかくにありますか？',
  romaji: 'hoomu wa chikaku ni arimasu ka?',
  pt: 'Tem plataforma da estação aqui perto?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-b882500718f7',
  kind: 'phrase',
  category: 'phrase',
  japanese: '出口はどこですか？',
  kana: 'でぐちはどこですか？',
  romaji: 'deguchi wa doko desu ka?',
  pt: 'Onde fica saída?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-c0387a98ac54',
  kind: 'phrase',
  category: 'phrase',
  japanese: '出口は近くにありますか？',
  kana: 'でぐちはちかくにありますか？',
  romaji: 'deguchi wa chikaku ni arimasu ka?',
  pt: 'Tem saída aqui perto?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-feda5441f07b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '入口はどこですか？',
  kana: 'いりぐちはどこですか？',
  romaji: 'iriguchi wa doko desu ka?',
  pt: 'Onde fica entrada?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-1e2b176dbba8',
  kind: 'phrase',
  category: 'phrase',
  japanese: '入口は近くにありますか？',
  kana: 'いりぐちはちかくにありますか？',
  romaji: 'iriguchi wa chikaku ni arimasu ka?',
  pt: 'Tem entrada aqui perto?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-825fd3fd3179',
  kind: 'phrase',
  category: 'phrase',
  japanese: '交差点はどこですか？',
  kana: 'こうさてんはどこですか？',
  romaji: 'kousaten wa doko desu ka?',
  pt: 'Onde fica cruzamento?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-7b86f9e6c2f5',
  kind: 'phrase',
  category: 'phrase',
  japanese: '交差点は近くにありますか？',
  kana: 'こうさてんはちかくにありますか？',
  romaji: 'kousaten wa chikaku ni arimasu ka?',
  pt: 'Tem cruzamento aqui perto?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-6082222d9374',
  kind: 'phrase',
  category: 'phrase',
  japanese: '信号はどこですか？',
  kana: 'しんごうはどこですか？',
  romaji: 'shingou wa doko desu ka?',
  pt: 'Onde fica semáforo?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-bb5d2fb42737',
  kind: 'phrase',
  category: 'phrase',
  japanese: '信号は近くにありますか？',
  kana: 'しんごうはちかくにありますか？',
  romaji: 'shingou wa chikaku ni arimasu ka?',
  pt: 'Tem semáforo aqui perto?',
  situations: ['🚆 Transporte', '❓ Perguntas comuns']
},
{
  id: 'mj-p-19345204371b',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ホテルはどこですか？',
  kana: 'ほてるはどこですか？',
  romaji: 'hoteru wa doko desu ka?',
  pt: 'Onde fica hotel?',
  situations: ['✈️ Viagens', '❓ Perguntas comuns']
},
{
  id: 'mj-p-a431a751e352',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ホテルは近くにありますか？',
  kana: 'ほてるはちかくにありますか？',
  romaji: 'hoteru wa chikaku ni arimasu ka?',
  pt: 'Tem hotel aqui perto?',
  situations: ['✈️ Viagens', '❓ Perguntas comuns']
},
{
  id: 'mj-p-5a31524a86aa',
  kind: 'phrase',
  category: 'phrase',
  japanese: '空港はどこですか？',
  kana: 'くうこうはどこですか？',
  romaji: 'kuukou wa doko desu ka?',
  pt: 'Onde fica aeroporto?',
  situations: ['✈️ Viagens', '❓ Perguntas comuns']
},
{
  id: 'mj-p-0b02c4691162',
  kind: 'phrase',
  category: 'phrase',
  japanese: '空港は近くにありますか？',
  kana: 'くうこうはちかくにありますか？',
  romaji: 'kuukou wa chikaku ni arimasu ka?',
  pt: 'Tem aeroporto aqui perto?',
  situations: ['✈️ Viagens', '❓ Perguntas comuns']
},
{
  id: 'mj-p-620c316f095d',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'トイレはどこですか？',
  kana: 'といれはどこですか？',
  romaji: 'toire wa doko desu ka?',
  pt: 'Onde fica banheiro?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-52336bf59e89',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'トイレは近くにありますか？',
  kana: 'といれはちかくにありますか？',
  romaji: 'toire wa chikaku ni arimasu ka?',
  pt: 'Tem banheiro aqui perto?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-e50b7e1dca61',
  kind: 'phrase',
  category: 'phrase',
  japanese: '薬局はどこですか？',
  kana: 'やっきょくはどこですか？',
  romaji: 'yakkyoku wa doko desu ka?',
  pt: 'Onde fica farmácia?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-e40d72bd1d67',
  kind: 'phrase',
  category: 'phrase',
  japanese: '薬局は近くにありますか？',
  kana: 'やっきょくはちかくにありますか？',
  romaji: 'yakkyoku wa chikaku ni arimasu ka?',
  pt: 'Tem farmácia aqui perto?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-64abc66ffc08',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'コンビニはどこですか？',
  kana: 'こんびにはどこですか？',
  romaji: 'konbini wa doko desu ka?',
  pt: 'Onde fica loja de conveniência?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-9a7e68b12ad2',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'コンビニは近くにありますか？',
  kana: 'こんびにはちかくにありますか？',
  romaji: 'konbini wa chikaku ni arimasu ka?',
  pt: 'Tem loja de conveniência aqui perto?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-259facbf70a0',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'スーパーはどこですか？',
  kana: 'すーぱーはどこですか？',
  romaji: 'suupaa wa doko desu ka?',
  pt: 'Onde fica supermercado?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-3f48204bc49f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'スーパーは近くにありますか？',
  kana: 'すーぱーはちかくにありますか？',
  romaji: 'suupaa wa chikaku ni arimasu ka?',
  pt: 'Tem supermercado aqui perto?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-82ba0950f0b4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '本屋はどこですか？',
  kana: 'ほんやはどこですか？',
  romaji: 'honya wa doko desu ka?',
  pt: 'Onde fica livraria?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-3a345f10461b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '本屋は近くにありますか？',
  kana: 'ほんやはちかくにありますか？',
  romaji: 'honya wa chikaku ni arimasu ka?',
  pt: 'Tem livraria aqui perto?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-feaabe719353',
  kind: 'phrase',
  category: 'phrase',
  japanese: '映画館はどこですか？',
  kana: 'えいがかんはどこですか？',
  romaji: 'eigakan wa doko desu ka?',
  pt: 'Onde fica cinema?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-d9f6563b2dc7',
  kind: 'phrase',
  category: 'phrase',
  japanese: '映画館は近くにありますか？',
  kana: 'えいがかんはちかくにありますか？',
  romaji: 'eigakan wa chikaku ni arimasu ka?',
  pt: 'Tem cinema aqui perto?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-03ce9eac8f57',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'お寺はどこですか？',
  kana: 'おてらはどこですか？',
  romaji: 'otera wa doko desu ka?',
  pt: 'Onde fica templo budista?',
  situations: ['✈️ Viagens', '❓ Perguntas comuns']
},
{
  id: 'mj-p-5eb1708c9281',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'お寺は近くにありますか？',
  kana: 'おてらはちかくにありますか？',
  romaji: 'otera wa chikaku ni arimasu ka?',
  pt: 'Tem templo budista aqui perto?',
  situations: ['✈️ Viagens', '❓ Perguntas comuns']
},
{
  id: 'mj-p-a500b62c7123',
  kind: 'phrase',
  category: 'phrase',
  japanese: '神社はどこですか？',
  kana: 'じんじゃはどこですか？',
  romaji: 'jinja wa doko desu ka?',
  pt: 'Onde fica santuário xintoísta?',
  situations: ['✈️ Viagens', '❓ Perguntas comuns']
},
{
  id: 'mj-p-9ed77f66e175',
  kind: 'phrase',
  category: 'phrase',
  japanese: '神社は近くにありますか？',
  kana: 'じんじゃはちかくにありますか？',
  romaji: 'jinja wa chikaku ni arimasu ka?',
  pt: 'Tem santuário xintoísta aqui perto?',
  situations: ['✈️ Viagens', '❓ Perguntas comuns']
},
{
  id: 'mj-p-fd23201f50f9',
  kind: 'phrase',
  category: 'phrase',
  japanese: '公園はどこですか？',
  kana: 'こうえんはどこですか？',
  romaji: 'kouen wa doko desu ka?',
  pt: 'Onde fica parque?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-8a010e78d583',
  kind: 'phrase',
  category: 'phrase',
  japanese: '公園は近くにありますか？',
  kana: 'こうえんはちかくにありますか？',
  romaji: 'kouen wa chikaku ni arimasu ka?',
  pt: 'Tem parque aqui perto?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-8f85c9b3ce0f',
  kind: 'phrase',
  category: 'phrase',
  japanese: '病院はどこですか？',
  kana: 'びょういんはどこですか？',
  romaji: 'byouin wa doko desu ka?',
  pt: 'Onde fica hospital?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-3bbb65b8fe53',
  kind: 'phrase',
  category: 'phrase',
  japanese: '病院は近くにありますか？',
  kana: 'びょういんはちかくにありますか？',
  romaji: 'byouin wa chikaku ni arimasu ka?',
  pt: 'Tem hospital aqui perto?',
  situations: ['🤝 Problemas cotidianos', '❓ Perguntas comuns']
},
{
  id: 'mj-p-cecd248e1acc',
  kind: 'phrase',
  category: 'phrase',
  japanese: '観光地はどこですか？',
  kana: 'かんこうちはどこですか？',
  romaji: 'kankouchi wa doko desu ka?',
  pt: 'Onde fica ponto turístico?',
  situations: ['✈️ Viagens', '❓ Perguntas comuns']
},
{
  id: 'mj-p-fbb4d7ade8a5',
  kind: 'phrase',
  category: 'phrase',
  japanese: '観光地は近くにありますか？',
  kana: 'かんこうちはちかくにありますか？',
  romaji: 'kankouchi wa chikaku ni arimasu ka?',
  pt: 'Tem ponto turístico aqui perto?',
  situations: ['✈️ Viagens', '❓ Perguntas comuns']
},
{
  id: 'mj-p-4c68112813b4',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'おはようございます。',
  kana: 'おはようございます。',
  romaji: 'owayougozaimasu。',
  pt: 'Bom dia.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-bd546d682bfd',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'こんにちは。',
  kana: 'こんにちは。',
  romaji: 'konnichiwa.',
  pt: 'Olá; boa tarde.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-965b225739be',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'こんばんは。',
  kana: 'こんばんは。',
  romaji: 'konbanwa。',
  pt: 'Boa noite (cumprimento).',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-442f749a8bd8',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'おやすみなさい。',
  kana: 'おやすみなさい。',
  romaji: 'oyasuminasai。',
  pt: 'Boa noite (antes de dormir).',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-e7b22f87bc90',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ありがとうございます。',
  kana: 'ありがとうございます。',
  romaji: 'arigatougozaimasu。',
  pt: 'Muito obrigado(a).',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-9645999d49e3',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どうもありがとうございます。',
  kana: 'どうもありがとうございます。',
  romaji: 'doumoarigatougozaimasu。',
  pt: 'Muito obrigado(a) mesmo.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-c44ca178ec38',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どういたしまして。',
  kana: 'どういたしまして。',
  romaji: 'douitashimashite。',
  pt: 'De nada.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-61371cf6ae6e',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'すみません。',
  kana: 'すみません。',
  romaji: 'sumimasen。',
  pt: 'Com licença; desculpe.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-a4224dd68a80',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ごめんなさい。',
  kana: 'ごめんなさい。',
  romaji: 'gomennasai。',
  pt: 'Me desculpe.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-f8a4cbf742c0',
  kind: 'phrase',
  category: 'phrase',
  japanese: '失礼します。',
  kana: 'しつれいします。',
  romaji: 'shitsureishimasu。',
  pt: 'Com licença (ao entrar ou sair).',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-736f60593a7b',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'はじめまして。',
  kana: 'はじめまして。',
  romaji: 'hajimemashite。',
  pt: 'Prazer em conhecer você.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-37f26de73a8d',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'よろしくお願いします。',
  kana: 'よろしくおねがいします。',
  romaji: 'yoroshikuonegaishimasu。',
  pt: 'Conto com você; prazer em conhecê-lo(a).',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-1c3913d89de2',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'また明日。',
  kana: 'またあした。',
  romaji: 'mataashita。',
  pt: 'Até amanhã.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-b1c535826a4f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'またね。',
  kana: 'またね。',
  romaji: 'matane。',
  pt: 'Até mais.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-5d88e6701186',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'じゃあ、また。',
  kana: 'じゃあ、また。',
  romaji: 'jaa、mata。',
  pt: 'Então, até mais.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-eedca224ebb7',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'お元気ですか？',
  kana: 'おげんきですか？',
  romaji: 'ogenkidesuka？',
  pt: 'Tudo bem com você?',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-f855fd10a25e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '元気です。',
  kana: 'げんきです。',
  romaji: 'genkidesu。',
  pt: 'Estou bem.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-57e03f173b34',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'お久しぶりです。',
  kana: 'おひさしぶりです。',
  romaji: 'ohisashiburidesu。',
  pt: 'Quanto tempo!',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-b9b3348222ad',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'お先に失礼します。',
  kana: 'おさきにしつれいします。',
  romaji: 'osakinishitsureishimasu。',
  pt: 'Com licença, vou indo antes.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-90da98f5b9d7',
  kind: 'phrase',
  category: 'phrase',
  japanese: '気をつけて。',
  kana: 'きをつけて。',
  romaji: 'kiotsukete。',
  pt: 'Se cuida.',
  situations: ['👋 Cumprimentos']
},
{
  id: 'mj-p-b030820656d4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '私はブラジル人です。',
  kana: 'わたしはぶらじるじんです。',
  romaji: 'watashiwaburajirujindesu。',
  pt: 'Sou brasileiro(a).',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-p-55eada556ef6',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ブラジルから来ました。',
  kana: 'ぶらじるからきました。',
  romaji: 'burajirukarakimashita。',
  pt: 'Vim do Brasil.',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-p-bc79e128ce8c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今はアイルランドに住んでいます。',
  kana: 'いまはあいるらんどにすんでいます。',
  romaji: 'imawaairurandonisundeimasu。',
  pt: 'Atualmente moro na Irlanda.',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-p-a91bded5d9ca',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本語を勉強しています。',
  kana: 'にほんごをべんきょうしています。',
  romaji: 'nihongoobenkyoushiteimasu。',
  pt: 'Estou estudando japonês.',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-p-8d1f6ea57edc',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本語はまだ初心者です。',
  kana: 'にほんごはまだしょしんしゃです。',
  romaji: 'nihongowamadashoshinshadesu。',
  pt: 'Ainda sou iniciante em japonês.',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-p-0982351091c5',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'よろしくお願いします。',
  kana: 'よろしくおねがいします。',
  romaji: 'yoroshikuonegaishimasu。',
  pt: 'Prazer; conto com você.',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-p-3da17a7f425f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'お名前は何ですか？',
  kana: 'おなまえはなんですか？',
  romaji: 'onamaewanandesuka？',
  pt: 'Como você se chama?',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-p-097b085d9b1f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どこから来ましたか？',
  kana: 'どこからきましたか？',
  romaji: 'dokokarakimashitaka？',
  pt: 'De onde você veio?',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-p-599502bc9558',
  kind: 'phrase',
  category: 'phrase',
  japanese: '何をしていますか？',
  kana: 'なにをしていますか？',
  romaji: 'nanioshiteimasuka？',
  pt: 'O que você está fazendo?',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-p-5205d78329ca',
  kind: 'phrase',
  category: 'phrase',
  japanese: '趣味は何ですか？',
  kana: 'しゅみはなんですか？',
  romaji: 'shumiwanandesuka？',
  pt: 'Qual é seu hobby?',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-p-95b89dd368d6',
  kind: 'phrase',
  category: 'phrase',
  japanese: '週末は何をしますか？',
  kana: 'しゅうまつはなにをしますか？',
  romaji: 'shuumatsuwananioshimasuka？',
  pt: 'O que você faz no fim de semana?',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-p-1954c42265d2',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'これは何ですか？',
  kana: 'これはなんですか？',
  romaji: 'korewanandesuka？',
  pt: 'O que é isto?',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-p-f16ca10182a6',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'それは何ですか？',
  kana: 'それはなんですか？',
  romaji: 'sorewanandesuka？',
  pt: 'O que é isso?',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-p-22b11e850bc4',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どういう意味ですか？',
  kana: 'どういういみですか？',
  romaji: 'douiuimidesuka？',
  pt: 'O que isso significa?',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-p-9b7a880722fe',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どうしてですか？',
  kana: 'どうしてですか？',
  romaji: 'doushitedesuka？',
  pt: 'Por quê?',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-p-871df4ef6a79',
  kind: 'phrase',
  category: 'phrase',
  japanese: '本当ですか？',
  kana: 'ほんとうですか？',
  romaji: 'hontoudesuka？',
  pt: 'É verdade?',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-p-b40efb204ce6',
  kind: 'phrase',
  category: 'phrase',
  japanese: '何時ですか？',
  kana: 'なんじですか？',
  romaji: 'nanjidesuka？',
  pt: 'Que horas são?',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-p-d38292cca07c',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'いくらですか？',
  kana: 'いくらですか？',
  romaji: 'ikuradesuka？',
  pt: 'Quanto custa?',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-p-6857543d756d',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どちらが好きですか？',
  kana: 'どちらがすきですか？',
  romaji: 'dochiragasukidesuka？',
  pt: 'Qual dos dois você prefere?',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-p-4d13fa63fc3b',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どう思いますか？',
  kana: 'どうおもいますか？',
  romaji: 'douomoimasuka？',
  pt: 'O que você acha?',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-p-5efa46fbcec9',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'もう一度お願いします。',
  kana: 'もういちどおねがいします。',
  romaji: 'mouichidoonegaishimasu。',
  pt: 'Mais uma vez, por favor.',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-p-01625acc0e0b',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'もう一度言ってください。',
  kana: 'もういちどいってください。',
  romaji: 'mouichidoittekudasai。',
  pt: 'Diga mais uma vez, por favor.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-aa5baf6b9950',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ゆっくり話してください。',
  kana: 'ゆっくりはなしてください。',
  romaji: 'yukkurihanashitekudasai。',
  pt: 'Fale devagar, por favor.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-543ed6dce06d',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'よく分かりません。',
  kana: 'よくわかりません。',
  romaji: 'yokuwakarimasen。',
  pt: 'Não entendi muito bem.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-56cb6aa2978c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '分かりました。',
  kana: 'わかりました。',
  romaji: 'wakarimashita。',
  pt: 'Entendi.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-9260eb26b14e',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'まだ分かりません。',
  kana: 'まだわかりません。',
  romaji: 'madawakarimasen。',
  pt: 'Ainda não entendi.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-087be026d040',
  kind: 'phrase',
  category: 'phrase',
  japanese: '質問があります。',
  kana: 'しつもんがあります。',
  romaji: 'shitsumongaarimasu。',
  pt: 'Tenho uma pergunta.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-1da1f355da35',
  kind: 'phrase',
  category: 'phrase',
  japanese: '質問してもいいですか？',
  kana: 'しつもんしてもいいですか？',
  romaji: 'shitsumonshitemoiidesuka？',
  pt: 'Posso fazer uma pergunta?',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-0560088aef39',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'これは日本語で何と言いますか？',
  kana: 'これはにほんごでなんといいますか？',
  romaji: 'korewanihongodenantoiimasuka？',
  pt: 'Como se diz isto em japonês?',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-3a7cf1453727',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この漢字は何と読みますか？',
  kana: 'このかんじはなんとよみますか？',
  romaji: 'konokanjiwanantoyomimasuka？',
  pt: 'Como se lê este kanji?',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-f6817d44ab5c',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この言葉はどういう意味ですか？',
  kana: 'このことばはどういういみですか？',
  romaji: 'konokotobawadouiuimidesuka？',
  pt: 'O que significa esta palavra?',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-7736217f46a0',
  kind: 'phrase',
  category: 'phrase',
  japanese: '例文を教えてください。',
  kana: 'れいぶんをおしえてください。',
  romaji: 'reibunooshietekudasai。',
  pt: 'Por favor, me dê uma frase de exemplo.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-e9cc9f893d42',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ここを説明してください。',
  kana: 'ここをせつめいしてください。',
  romaji: 'kokoosetsumeishitekudasai。',
  pt: 'Por favor, explique esta parte.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-bb6e800adb89',
  kind: 'phrase',
  category: 'phrase',
  japanese: '発音は合っていますか？',
  kana: 'はつおんはあっていますか？',
  romaji: 'watsuonhaatteimasuka？',
  pt: 'Minha pronúncia está correta?',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-ab1771926a63',
  kind: 'phrase',
  category: 'phrase',
  japanese: '宿題は何ですか？',
  kana: 'しゅくだいはなんですか？',
  romaji: 'shukudaiwanandesuka？',
  pt: 'Qual é a lição de casa?',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-919f3cff083d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日はここまでですか？',
  kana: 'きょうはここまでですか？',
  romaji: 'kyouwakokomadedesuka？',
  pt: 'A aula termina por aqui hoje?',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-a89a4153a466',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本語で話してみたいです。',
  kana: 'にほんごではなしてみたいです。',
  romaji: 'nihongodehanashitemitaidesu。',
  pt: 'Quero tentar conversar em japonês.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-de93c24641e8',
  kind: 'phrase',
  category: 'phrase',
  japanese: '一人です。',
  kana: 'ひとりです。',
  romaji: 'hitoridesu。',
  pt: 'É para uma pessoa.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-375c53f47afd',
  kind: 'phrase',
  category: 'phrase',
  japanese: '二人です。',
  kana: 'ふたりです。',
  romaji: 'futaridesu。',
  pt: 'É para duas pessoas.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-92964791fe17',
  kind: 'phrase',
  category: 'phrase',
  japanese: '予約していません。',
  kana: 'よやくしていません。',
  romaji: 'yoyakushiteimasen。',
  pt: 'Não tenho reserva.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-212c34aea94d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '予約しています。',
  kana: 'よやくしています。',
  romaji: 'yoyakushiteimasu。',
  pt: 'Tenho uma reserva.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-2ca93a54d77d',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'おすすめは何ですか？',
  kana: 'おすすめはなんですか？',
  romaji: 'osusumewanandesuka？',
  pt: 'O que você recomenda?',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-61547a56c88c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '辛くしないでください。',
  kana: 'からくしないでください。',
  romaji: 'karakushinaidekudasai。',
  pt: 'Por favor, não deixe apimentado.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-f5144f4dfe2e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '肉は食べません。',
  kana: 'にくはたべません。',
  romaji: 'nikuwatabemasen。',
  pt: 'Eu não como carne.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-098c68dbb0ef',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'アレルギーがあります。',
  kana: 'あれるぎーがあります。',
  romaji: 'arerugiigaarimasu。',
  pt: 'Tenho alergia.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-4ef9c90529ef',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'お会計をお願いします。',
  kana: 'おかいけいをおねがいします。',
  romaji: 'okaikeioonegaishimasu。',
  pt: 'A conta, por favor.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-f0abb31f719e',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'とても美味しいです。',
  kana: 'とてもおいしいです。',
  romaji: 'totemooishiidesu。',
  pt: 'Está muito gostoso.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-6dd23ec8a658',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ごちそうさまでした。',
  kana: 'ごちそうさまでした。',
  romaji: 'gochisousamadeshita。',
  pt: 'Obrigado(a) pela refeição.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-4badf75a5792',
  kind: 'phrase',
  category: 'phrase',
  japanese: '店内で飲みます。',
  kana: 'てんないでのみます。',
  romaji: 'tennaidenomimasu。',
  pt: 'Vou beber aqui.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-4e2e285ce720',
  kind: 'phrase',
  category: 'phrase',
  japanese: '持ち帰りでお願いします。',
  kana: 'もちかえりでおねがいします。',
  romaji: 'mochikaerideonegaishimasu。',
  pt: 'Para viagem, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-3c05063d45ae',
  kind: 'phrase',
  category: 'phrase',
  japanese: '砂糖なしでお願いします。',
  kana: 'さとうなしでおねがいします。',
  romaji: 'satounashideonegaishimasu。',
  pt: 'Sem açúcar, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-9763d4481d5a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '氷なしでお願いします。',
  kana: 'こおりなしでおねがいします。',
  romaji: 'koorinashideonegaishimasu。',
  pt: 'Sem gelo, por favor.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-444bc7da5eab',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ここに座ってもいいですか？',
  kana: 'ここにすわってもいいですか？',
  romaji: 'kokonisuwattemoiidesuka？',
  pt: 'Posso sentar aqui?',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-6469f25ef015',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今、家にいます。',
  kana: 'いま、いえにいます。',
  romaji: 'ima、ieniimasu。',
  pt: 'Estou em casa agora.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-p-ccddf768eb95',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日は仕事があります。',
  kana: 'きょうはしごとがあります。',
  romaji: 'kyouwashigotogaarimasu。',
  pt: 'Tenho trabalho hoje.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-p-bd3e5b8621c5',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今から勉強します。',
  kana: 'いまからべんきょうします。',
  romaji: 'imakarabenkyoushimasu。',
  pt: 'Vou estudar agora.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-p-c1b7bd352bab',
  kind: 'phrase',
  category: 'phrase',
  japanese: '毎朝コーヒーを飲みます。',
  kana: 'まいあさこーひーをのみます。',
  romaji: 'maiasakoohiionomimasu。',
  pt: 'Bebo café toda manhã.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-p-03e6b77c07fb',
  kind: 'phrase',
  category: 'phrase',
  japanese: '週末に掃除します。',
  kana: 'しゅうまつにそうじします。',
  romaji: 'shuumatsunisoujishimasu。',
  pt: 'Faço limpeza no fim de semana.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-p-962ec2213e55',
  kind: 'phrase',
  category: 'phrase',
  japanese: '少し休みたいです。',
  kana: 'すこしやすみたいです。',
  romaji: 'sukoshiyasumitaidesu。',
  pt: 'Quero descansar um pouco.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-p-1d2486aebd70',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'そろそろ寝ます。',
  kana: 'そろそろねます。',
  romaji: 'sorosoronemasu。',
  pt: 'Vou dormir daqui a pouco.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-p-bf9e9102626b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日は何曜日ですか？',
  kana: 'きょうはなんようびですか？',
  romaji: 'kyouwananyoubidesuka？',
  pt: 'Que dia da semana é hoje?',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-415674c5f2d3',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日は何日ですか？',
  kana: 'きょうはなんにちですか？',
  romaji: 'kyouwanannichidesuka？',
  pt: 'Que dia do mês é hoje?',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-5b3c449d56b6',
  kind: 'phrase',
  category: 'phrase',
  japanese: '何時に始まりますか？',
  kana: 'なんじにはじまりますか？',
  romaji: 'nanjinihajimarimasuka？',
  pt: 'A que horas começa?',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-2901f8274b87',
  kind: 'phrase',
  category: 'phrase',
  japanese: '何時に終わりますか？',
  kana: 'なんじにおわりますか？',
  romaji: 'nanjiniowarimasuka？',
  pt: 'A que horas termina?',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-7b628ac51d31',
  kind: 'phrase',
  category: 'phrase',
  japanese: '明日は暇ですか？',
  kana: 'あしたはひまですか？',
  romaji: 'ashitawahimadesuka？',
  pt: 'Você está livre amanhã?',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-aeee227e19bc',
  kind: 'phrase',
  category: 'phrase',
  japanese: '週末に予定があります。',
  kana: 'しゅうまつによていがあります。',
  romaji: 'shuumatsuniyoteigaarimasu。',
  pt: 'Tenho planos para o fim de semana.',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-b521af913a4e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '来週会いましょう。',
  kana: 'らいしゅうあいましょう。',
  romaji: 'raishuuaimashou。',
  pt: 'Vamos nos encontrar na semana que vem.',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-4fd1d6b9f5e4',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どんな音楽が好きですか？',
  kana: 'どんなおんがくがすきですか？',
  romaji: 'donnaongakugasukidesuka？',
  pt: 'De que tipo de música você gosta?',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-p-b330c26421b0',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どんなゲームが好きですか？',
  kana: 'どんなげーむがすきですか？',
  romaji: 'donnageemugasukidesuka？',
  pt: 'De que tipo de jogos você gosta?',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-p-468395e2249c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '一番好きな映画は何ですか？',
  kana: 'いちばんすきなえいがはなんですか？',
  romaji: 'ichibansukinaeigawanandesuka？',
  pt: 'Qual é seu filme favorito?',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-p-d5e1c12b4b50',
  kind: 'phrase',
  category: 'phrase',
  japanese: '私もそう思います。',
  kana: 'わたしもそうおもいます。',
  romaji: 'watashimosouomoimasu。',
  pt: 'Eu também acho isso.',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-p-6da1790907fb',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'あまり好きではありません。',
  kana: 'あまりすきではありません。',
  romaji: 'amarisukidewaarimasen。',
  pt: 'Não gosto muito.',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-p-5367ceb6ca15',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どちらも好きです。',
  kana: 'どちらもすきです。',
  romaji: 'dochiramosukidesu。',
  pt: 'Gosto dos dois.',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-p-bc2f1a9b3d1e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日は暑いですね。',
  kana: 'きょうはあついですね。',
  romaji: 'kyouwaatsuidesune。',
  pt: 'Hoje está quente, né?',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-p-9452be4aa261',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日は寒いですね。',
  kana: 'きょうはさむいですね。',
  romaji: 'kyouwasamuidesune。',
  pt: 'Hoje está frio, né?',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-p-c859165bdc05',
  kind: 'phrase',
  category: 'phrase',
  japanese: '雨が降っています。',
  kana: 'あめがふっています。',
  romaji: 'amegafutteimasu。',
  pt: 'Está chovendo.',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-p-44f2a2462ec6',
  kind: 'phrase',
  category: 'phrase',
  japanese: '雪が降っています。',
  kana: 'ゆきがふっています。',
  romaji: 'yukigafutteimasu。',
  pt: 'Está nevando.',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-p-10e18b1a28fc',
  kind: 'phrase',
  category: 'phrase',
  japanese: '明日は晴れますか？',
  kana: 'あしたははれますか？',
  romaji: 'ashitawaharemasuka？',
  pt: 'Amanhã fará sol?',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-p-0d1c5a1a767e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '傘を持っていますか？',
  kana: 'かさをもっていますか？',
  romaji: 'kasaomotteimasuka？',
  pt: 'Você está com guarda-chuva?',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-p-49be46b28f1c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今度一緒に遊びませんか？',
  kana: 'こんどいっしょにあそびませんか？',
  romaji: 'kondoisshoniasobimasenka？',
  pt: 'Quer fazer alguma coisa junto outro dia?',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-p-7152eb7861dd',
  kind: 'phrase',
  category: 'phrase',
  japanese: '一緒にご飯を食べませんか？',
  kana: 'いっしょにごはんをたべませんか？',
  romaji: 'isshonigohanotabemasenka？',
  pt: 'Vamos comer juntos?',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-p-4cb87cd3127b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '連絡してもいいですか？',
  kana: 'れんらくしてもいいですか？',
  romaji: 'renrakushitemoiidesuka？',
  pt: 'Posso entrar em contato?',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-p-c0543765b603',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'また会いたいです。',
  kana: 'またあいたいです。',
  romaji: 'mataaitaidesu。',
  pt: 'Quero encontrar você de novo.',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-p-8e2be764f33d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '楽しかったです。',
  kana: 'たのしかったです。',
  romaji: 'tanoshikattadesu。',
  pt: 'Foi divertido.',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-p-ea2d93937ec8',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日は嬉しいです。',
  kana: 'きょうはうれしいです。',
  romaji: 'kyouwaureshiidesu。',
  pt: 'Hoje estou feliz.',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-p-e8c9fb9fb710',
  kind: 'phrase',
  category: 'phrase',
  japanese: '少し緊張しています。',
  kana: 'すこしきんちょうしています。',
  romaji: 'sukoshikinchoushiteimasu。',
  pt: 'Estou um pouco nervoso(a).',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-p-dce7f4b5e9d0',
  kind: 'phrase',
  category: 'phrase',
  japanese: '少し不安です。',
  kana: 'すこしふあんです。',
  romaji: 'sukoshifuandesu。',
  pt: 'Estou um pouco ansioso(a).',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-p-c5f71f7a3d5c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '安心しました。',
  kana: 'あんしんしました。',
  romaji: 'anshinshimashita。',
  pt: 'Fiquei aliviado(a).',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-p-d9016f255930',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日は疲れています。',
  kana: 'きょうはつかれています。',
  romaji: 'kyouwatsukareteimasu。',
  pt: 'Estou cansado(a) hoje.',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-p-104c7dfea654',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ちょっと寂しいです。',
  kana: 'ちょっとさびしいです。',
  romaji: 'chottosabishiidesu。',
  pt: 'Estou um pouco solitário(a).',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-p-ac2dbaddbaca',
  kind: 'phrase',
  category: 'phrase',
  japanese: '自信がありません。',
  kana: 'じしんがありません。',
  romaji: 'jishingaarimasen。',
  pt: 'Não tenho confiança em mim.',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-p-796b9d0c2a02',
  kind: 'phrase',
  category: 'phrase',
  japanese: '気持ちを伝えたいです。',
  kana: 'きもちをつたえたいです。',
  romaji: 'kimochiotsutaetaidesu。',
  pt: 'Quero expressar meus sentimentos.',
  situations: ['😊 Sentimentos']
},
{
  id: 'mj-p-f99a6eda3e64',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'これを見せてください。',
  kana: 'これをみせてください。',
  romaji: 'koreomisetekudasai。',
  pt: 'Mostre-me isto, por favor.',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-p-714bdc7fc108',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'もっと小さいサイズはありますか？',
  kana: 'もっとちいさいさいずはありますか？',
  romaji: 'mottochiisaisaizuwaarimasuka？',
  pt: 'Tem um tamanho menor?',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-p-55b5bc266018',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'もっと大きいサイズはありますか？',
  kana: 'もっとおおきいさいずはありますか？',
  romaji: 'mottoookiisaizuwaarimasuka？',
  pt: 'Tem um tamanho maior?',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-p-bd5f29c5101a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '試着してもいいですか？',
  kana: 'しちゃくしてもいいですか？',
  romaji: 'shichakushitemoiidesuka？',
  pt: 'Posso experimentar a roupa?',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-p-191112669f3e',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'カードで払えますか？',
  kana: 'かーどではらえますか？',
  romaji: 'kaadodeharaemasuka？',
  pt: 'Posso pagar com cartão?',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-p-046f8314179a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '袋はいりません。',
  kana: 'ふくろはいりません。',
  romaji: 'fukurowairimasen。',
  pt: 'Não preciso de sacola.',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-p-b1df8f17e353',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この電車は東京に行きますか？',
  kana: 'このでんしゃはとうきょうにいきますか？',
  romaji: 'konodenshawatoukyouniikimasuka？',
  pt: 'Este trem vai para Tóquio?',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-4e618333b258',
  kind: 'phrase',
  category: 'phrase',
  japanese: '次の駅はどこですか？',
  kana: 'つぎのえきはどこですか？',
  romaji: 'tsuginoekiwadokodesuka？',
  pt: 'Qual é a próxima estação?',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-2b8fe542f602',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どこで乗り換えますか？',
  kana: 'どこでのりかえますか？',
  romaji: 'dokodenorikaemasuka？',
  pt: 'Onde faço a baldeação?',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-a984730790c0',
  kind: 'phrase',
  category: 'phrase',
  japanese: '切符はどこで買えますか？',
  kana: 'きっぷはどこでかえますか？',
  romaji: 'kippuwadokodekaemasuka？',
  pt: 'Onde posso comprar a passagem?',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-2bd468d8311d',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ここで降ります。',
  kana: 'ここでおります。',
  romaji: 'kokodeorimasu。',
  pt: 'Vou descer aqui.',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-4fd2420f2fd0',
  kind: 'phrase',
  category: 'phrase',
  japanese: '右に曲がってください。',
  kana: 'みぎにまがってください。',
  romaji: 'miginimagattekudasai。',
  pt: 'Vire à direita, por favor.',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-520343d02a2a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '左に曲がってください。',
  kana: 'ひだりにまがってください。',
  romaji: 'hidarinimagattekudasai。',
  pt: 'Vire à esquerda, por favor.',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-4de6ace77cfe',
  kind: 'phrase',
  category: 'phrase',
  japanese: '真っすぐ行ってください。',
  kana: 'まっすぐいってください。',
  romaji: 'massuguittekudasai。',
  pt: 'Siga em frente, por favor.',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-5fa7e3f24770',
  kind: 'phrase',
  category: 'phrase',
  japanese: '観光で来ました。',
  kana: 'かんこうできました。',
  romaji: 'kankoudekimashita。',
  pt: 'Vim a turismo.',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-p-dbdfb002a7f9',
  kind: 'phrase',
  category: 'phrase',
  japanese: '五日間滞在します。',
  kana: 'いつかかんたいざいします。',
  romaji: 'itsukakantaizaishimasu。',
  pt: 'Vou ficar por cinco dias.',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-p-6c3055b3bbc4',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'パスポートを見せます。',
  kana: 'ぱすぽーとをみせます。',
  romaji: 'pasupootoomisemasu。',
  pt: 'Vou mostrar meu passaporte.',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-p-07ad05dd0d2f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'チェックインをお願いします。',
  kana: 'ちぇっくいんをおねがいします。',
  romaji: 'chekkuinoonegaishimasu。',
  pt: 'Gostaria de fazer o check-in.',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-p-69a167c98aab',
  kind: 'phrase',
  category: 'phrase',
  japanese: '朝食は何時からですか？',
  kana: 'ちょうしょくはなんじからですか？',
  romaji: 'choushokuwananjikaradesuka？',
  pt: 'A partir de que horas é o café da manhã?',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-p-2ae7053a5e69',
  kind: 'phrase',
  category: 'phrase',
  japanese: '荷物を預けてもいいですか？',
  kana: 'にもつをあずけてもいいですか？',
  romaji: 'nimotsuoazuketemoiidesuka？',
  pt: 'Posso deixar minha bagagem?',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-p-030cbfdc626b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '写真を撮ってもいいですか？',
  kana: 'しゃしんをとってもいいですか？',
  romaji: 'shashinotottemoiidesuka？',
  pt: 'Posso tirar foto?',
  situations: ['✈️ Viagens']
},
{
  id: 'mj-p-ec6422190dbd',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ロックをよく聴きます。',
  kana: 'ろっくをよくききます。',
  romaji: 'rokkuoyokukikimasu。',
  pt: 'Escuto rock com frequência.',
  situations: ['🎵 Música']
},
{
  id: 'mj-p-45bacd0d2b49',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'クラシックも好きです。',
  kana: 'くらしっくもすきです。',
  romaji: 'kurashikkumosukidesu。',
  pt: 'Também gosto de música clássica.',
  situations: ['🎵 Música']
},
{
  id: 'mj-p-3f59c9e87ff2',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この曲のメロディーが好きです。',
  kana: 'このきょくのめろでぃーがすきです。',
  romaji: 'konokyokunomerodiigasukidesu。',
  pt: 'Gosto da melodia desta música.',
  situations: ['🎵 Música']
},
{
  id: 'mj-p-e38f5853d184',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歌詞の意味を知りたいです。',
  kana: 'かしのいみをしりたいです。',
  romaji: 'kashinoimioshiritaidesu。',
  pt: 'Quero entender o significado da letra.',
  situations: ['🎵 Música']
},
{
  id: 'mj-p-97816395f23f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'おすすめの曲はありますか？',
  kana: 'おすすめのきょくはありますか？',
  romaji: 'osusumenokyokuwaarimasuka？',
  pt: 'Tem alguma música para recomendar?',
  situations: ['🎵 Música']
},
{
  id: 'mj-p-51b4a0fd3a0e',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どんなバンドを聴きますか？',
  kana: 'どんなばんどをききますか？',
  romaji: 'donnabandookikimasuka？',
  pt: 'Que bandas você costuma ouvir?',
  situations: ['🎵 Música']
},
{
  id: 'mj-p-74b2043c07e9',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ソニックが好きです。',
  kana: 'そにっくがすきです。',
  romaji: 'sonikkugasukidesu。',
  pt: 'Gosto de Sonic.',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-p-0232a440f607',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'トニーホークのゲームが好きです。',
  kana: 'とにーほーくのげーむがすきです。',
  romaji: 'toniihookunogeemugasukidesu。',
  pt: 'Gosto dos jogos do Tony Hawk.',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-p-eec41a804227',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このゲームは難しいです。',
  kana: 'このげーむはむずかしいです。',
  romaji: 'konogeemuwamuzukashiidesu。',
  pt: 'Este jogo é difícil.',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-p-c65bb3861c56',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このボスに勝てません。',
  kana: 'このぼすにかてません。',
  romaji: 'konobosunikatemasen。',
  pt: 'Não consigo vencer este chefe.',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-p-b7bd6ec91cb2',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'もう一回やってみます。',
  kana: 'もういっかいやってみます。',
  romaji: 'mouikkaiyattemimasu。',
  pt: 'Vou tentar de novo.',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-p-f41ab674b425',
  kind: 'phrase',
  category: 'phrase',
  japanese: '一緒にゲームをしませんか？',
  kana: 'いっしょにげーむをしませんか？',
  romaji: 'isshonigeemuoshimasenka？',
  pt: 'Quer jogar comigo?',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-p-144d5a5848e9',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'どのゲーム機を使っていますか？',
  kana: 'どのげーむきをつかっていますか？',
  romaji: 'donogeemukiotsukatteimasuka？',
  pt: 'Qual console você usa?',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-p-e39c261e6d61',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ナルトが好きです。',
  kana: 'なるとがすきです。',
  romaji: 'narutogasukidesu。',
  pt: 'Gosto de Naruto.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-79a298b3babf',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ハンター×ハンターが好きです。',
  kana: 'はんたー×はんたーがすきです。',
  romaji: 'hantaa×hantaagasukidesu。',
  pt: 'Gosto de Hunter × Hunter.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-309f5d4691ed',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'オーバーロードも見ています。',
  kana: 'おーばーろーどもみています。',
  romaji: 'oobaaroodomomiteimasu。',
  pt: 'Também estou assistindo Overlord.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-15a8e2cb09eb',
  kind: 'phrase',
  category: 'phrase',
  japanese: '好きなキャラクターは誰ですか？',
  kana: 'すきなきゃらくたーはだれですか？',
  romaji: 'sukinakyarakutaawadaredesuka？',
  pt: 'Qual é seu personagem favorito?',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-4611b867280e',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この物語は面白いです。',
  kana: 'このものがたりはおもしろいです。',
  romaji: 'konomonogatariwaomoshiroidesu。',
  pt: 'Esta história é interessante.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-e5a147d45fb4',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ネタバレしないでください。',
  kana: 'ねたばれしないでください。',
  romaji: 'netabareshinaidekudasai。',
  pt: 'Por favor, não dê spoilers.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-dbb168a16faa',
  kind: 'phrase',
  category: 'phrase',
  japanese: '原作も読みたいです。',
  kana: 'げんさくもよみたいです。',
  romaji: 'gensakumoyomitaidesu。',
  pt: 'Também quero ler a obra original.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-6b79ecc4a19e',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'プログラミングを勉強しています。',
  kana: 'ぷろぐらみんぐをべんきょうしています。',
  romaji: 'puroguraminguobenkyoushiteimasu。',
  pt: 'Estou estudando programação.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-4a0de453be81',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ソフトウェアを作っています。',
  kana: 'そふとうぇあをつくっています。',
  romaji: 'sofutoweaotsukutteimasu。',
  pt: 'Estou desenvolvendo software.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-794498914d3b',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このコードを直したいです。',
  kana: 'このこーどをなおしたいです。',
  romaji: 'konokoodoonaoshitaidesu。',
  pt: 'Quero corrigir este código.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-022c2f32a8a5',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'アプリが動きません。',
  kana: 'あぷりがうごきません。',
  romaji: 'apurigaugokimasen。',
  pt: 'O aplicativo não funciona.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-8fe9cac94f03',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'スマホの電池がありません。',
  kana: 'すまほのでんちがありません。',
  romaji: 'sumahonodenchigaarimasen。',
  pt: 'Meu celular está sem bateria.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-6d3f1d541e23',
  kind: 'phrase',
  category: 'phrase',
  japanese: '充電してもいいですか？',
  kana: 'じゅうでんしてもいいですか？',
  romaji: 'juudenshitemoiidesuka？',
  pt: 'Posso carregar a bateria?',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-c03555955f78',
  kind: 'phrase',
  category: 'phrase',
  japanese: '人工知能について話しましょう。',
  kana: 'じんこうちのうについてはなしましょう。',
  romaji: 'jinkouchinounitsuitehanashimashou。',
  pt: 'Vamos conversar sobre inteligência artificial.',
  situations: ['💻 Tecnologia', '👥 Amigos e socialização']
},
{
  id: 'mj-p-76771193e392',
  kind: 'phrase',
  category: 'phrase',
  japanese: '最近どんな映画を見ましたか？',
  kana: 'さいきんどんなえいがをみましたか？',
  romaji: 'saikindonnaeigaomimashitaka？',
  pt: 'Que filmes você viu recentemente?',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-p-0e6da3124a83',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このドラマをおすすめします。',
  kana: 'このどらまをおすすめします。',
  romaji: 'konodoramaoosusumeshimasu。',
  pt: 'Recomendo esta série.',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-p-45ed572030b6',
  kind: 'phrase',
  category: 'phrase',
  japanese: '字幕で見ています。',
  kana: 'じまくでみています。',
  romaji: 'jimakudemiteimasu。',
  pt: 'Estou assistindo com legendas.',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-p-78611bb6c4d2',
  kind: 'phrase',
  category: 'phrase',
  japanese: '結末が意外でした。',
  kana: 'けつまつがいがいでした。',
  romaji: 'ketsumatsugaigaideshita。',
  pt: 'O final foi inesperado.',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-p-4a8c4a05148b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '次の話が楽しみです。',
  kana: 'つぎのはなしがたのしみです。',
  romaji: 'tsuginohanashigatanoshimidesu。',
  pt: 'Estou ansioso(a) pelo próximo episódio.',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-p-aee48d9b7f9c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '幸せとは何ですか？',
  kana: 'しあわせとはなんですか？',
  romaji: 'shiawasetowanandesuka？',
  pt: 'O que é felicidade?',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-p-fbfb05f5c434',
  kind: 'phrase',
  category: 'phrase',
  japanese: '人生の意味について考えます。',
  kana: 'じんせいのいみについてかんがえます。',
  romaji: 'jinseinoiminitsuitekangaemasu。',
  pt: 'Penso sobre o sentido da vida.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-p-fa3c5f60749f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'それは面白い考えですね。',
  kana: 'それはおもしろいかんがえですね。',
  romaji: 'sorewaomoshiroikangaedesune。',
  pt: 'Essa é uma ideia interessante, né?',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-p-49c699bbf63b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '少し違うと思います。',
  kana: 'すこしちがうとおもいます。',
  romaji: 'sukoshichigautoomoimasu。',
  pt: 'Acho um pouco diferente.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-p-280df8a890b9',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'あなたの意見を聞きたいです。',
  kana: 'あなたのいけんをききたいです。',
  romaji: 'anatanoikenokikitaidesu。',
  pt: 'Quero ouvir sua opinião.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-p-ae7f2bf9f1f4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '人それぞれだと思います。',
  kana: 'ひとそれぞれだとおもいます。',
  romaji: 'hitosorezoredatoomoimasu。',
  pt: 'Acho que depende de cada pessoa.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-p-f6ab1f1d0f03',
  kind: 'phrase',
  category: 'phrase',
  japanese: '環境を大切にしたいです。',
  kana: 'かんきょうをたいせつにしたいです。',
  romaji: 'kankyouotaisetsunishitaidesu。',
  pt: 'Quero cuidar do meio ambiente.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-p-01e05ccae675',
  kind: 'phrase',
  category: 'phrase',
  japanese: '政治にはあまり詳しくありません。',
  kana: 'せいじにはあまりくわしくありません。',
  romaji: 'seijiniwaamarikuwashikuarimasen。',
  pt: 'Não entendo muito de política.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-p-4e1e31c3e3aa',
  kind: 'phrase',
  category: 'phrase',
  japanese: '昨日、映画を見ました。',
  kana: 'きのう、えいがをみました。',
  romaji: 'kinou、eigaomimashita。',
  pt: 'Ontem assisti a um filme.',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-p-46c221d46c5e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '先週、友達に会いました。',
  kana: 'せんしゅう、ともだちにあいました。',
  romaji: 'senshuu、tomodachiniaimashita。',
  pt: 'Semana passada encontrei um amigo.',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-p-c0185475ab85',
  kind: 'phrase',
  category: 'phrase',
  japanese: '子供の頃、よくゲームをしました。',
  kana: 'こどものころ、よくげーむをしました。',
  romaji: 'kodomonokoro、yokugeemuoshimashita。',
  pt: 'Quando criança, jogava videogame com frequência.',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-p-e7ca25f2fdeb',
  kind: 'phrase',
  category: 'phrase',
  japanese: '初めて日本に行きました。',
  kana: 'はじめてにほんにいきました。',
  romaji: 'hajimetenihonniikimashita。',
  pt: 'Fui ao Japão pela primeira vez.',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-p-293d55873e9e',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'とてもいい経験でした。',
  kana: 'とてもいいけいけんでした。',
  romaji: 'totemoiikeikendeshita。',
  pt: 'Foi uma experiência muito boa.',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-p-21118e9340f1',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'いつか日本に行きたいです。',
  kana: 'いつかにほんにいきたいです。',
  romaji: 'itsukanihonniikitaidesu。',
  pt: 'Quero ir ao Japão algum dia.',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-p-5942b66371db',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'もっと日本語が上手になりたいです。',
  kana: 'もっとにほんごがじょうずになりたいです。',
  romaji: 'mottonihongogajouzuninaritaidesu。',
  pt: 'Quero melhorar meu japonês.',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-p-c075f8e070bc',
  kind: 'phrase',
  category: 'phrase',
  japanese: '将来、海外で働きたいです。',
  kana: 'しょうらい、かいがいではたらきたいです。',
  romaji: 'shourai、kaigaidehatarakitaidesu。',
  pt: 'Quero trabalhar fora do país no futuro.',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-p-e986eb044888',
  kind: 'phrase',
  category: 'phrase',
  japanese: '毎日少しずつ勉強します。',
  kana: 'まいにちすこしずつべんきょうします。',
  romaji: 'mainichisukoshizutsubenkyoushimasu。',
  pt: 'Vou estudar um pouco todos os dias.',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-p-907658ed5993',
  kind: 'phrase',
  category: 'phrase',
  japanese: '新しいことに挑戦したいです。',
  kana: 'あたらしいことにちょうせんしたいです。',
  romaji: 'atarashiikotonichousenshitaidesu。',
  pt: 'Quero experimentar novos desafios.',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-p-799d4a5a5140',
  kind: 'phrase',
  category: 'phrase',
  japanese: '道に迷いました。',
  kana: 'みちにまよいました。',
  romaji: 'michinimayoimashita。',
  pt: 'Me perdi.',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-p-0eeb3342e384',
  kind: 'phrase',
  category: 'phrase',
  japanese: '手伝ってもらえますか？',
  kana: 'てつだってもらえますか？',
  romaji: 'tetsudattemoraemasuka？',
  pt: 'Pode me ajudar?',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-p-d388d1bb6df5',
  kind: 'phrase',
  category: 'phrase',
  japanese: '財布をなくしました。',
  kana: 'さいふをなくしました。',
  romaji: 'saifuonakushimashita。',
  pt: 'Perdi minha carteira.',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-p-a13c9245e75f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'スマホが壊れました。',
  kana: 'すまほがこわれました。',
  romaji: 'sumahogakowaremashita。',
  pt: 'Meu celular quebrou.',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-p-9d169e75feb7',
  kind: 'phrase',
  category: 'phrase',
  japanese: '体調が悪いです。',
  kana: 'たいちょうがわるいです。',
  romaji: 'taichougawaruidesu。',
  pt: 'Não estou me sentindo bem.',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-p-05467d673a6d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '病院に行きたいです。',
  kana: 'びょういんにいきたいです。',
  romaji: 'byouinniikitaidesu。',
  pt: 'Quero ir ao hospital.',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-p-d098890b0ec7',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'もう少し待ってください。',
  kana: 'もうすこしまってください。',
  romaji: 'mousukoshimattekudasai。',
  pt: 'Espere mais um pouco, por favor.',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-p-27255562c28c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '助けてください。',
  kana: 'たすけてください。',
  romaji: 'tasuketekudasai。',
  pt: 'Por favor, me ajude.',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-p-5bcc5ad2694c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本の文化に興味があります。',
  kana: 'にほんのぶんかにきょうみがあります。',
  romaji: 'nihonnobunkanikyoumigaarimasu。',
  pt: 'Tenho interesse na cultura japonesa.',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-p-a4c7d8602e3f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'お辞儀はいつしますか？',
  kana: 'おじぎはいつしますか？',
  romaji: 'ojigiwaitsushimasuka？',
  pt: 'Quando se faz uma reverência?',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-p-c8423a792b5b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '神社で写真を撮ってもいいですか？',
  kana: 'じんじゃでしゃしんをとってもいいですか？',
  romaji: 'jinjadeshashinotottemoiidesuka？',
  pt: 'Posso tirar fotos no santuário?',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-p-789229e0ffea',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本の祭りに行ってみたいです。',
  kana: 'にほんのまつりにいってみたいです。',
  romaji: 'nihonnomatsuriniittemitaidesu。',
  pt: 'Quero conhecer um festival japonês.',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-p-d7373eca81c9',
  kind: 'phrase',
  category: 'phrase',
  japanese: '敬語は難しいですね。',
  kana: 'けいごはむずかしいですね。',
  romaji: 'keigowamuzukashiidesune。',
  pt: 'A linguagem honorífica é difícil, né?',
  situations: ['🇯🇵 Cultura japonesa']
},
{
  id: 'mj-p-a35e4aecb0cf',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このゲームは面白いです。',
  kana: 'このげーむはおもしろいです。',
  romaji: 'konogeemu wa omoshiroi desu.',
  pt: 'Este jogo é interessante.',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-p-f219914df353',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このゲームは楽しいです。',
  kana: 'このげーむはたのしいです。',
  romaji: 'konogeemu wa tanoshii desu.',
  pt: 'Este jogo é divertido.',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-p-c52f36259bdb',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このゲームは簡単です。',
  kana: 'このげーむはかんたんです。',
  romaji: 'konogeemu wa kantan desu.',
  pt: 'Este jogo é fácil.',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-p-94738cc8e2cd',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このゲームは複雑です。',
  kana: 'このげーむはふくざつです。',
  romaji: 'konogeemu wa fukuzatsu desu.',
  pt: 'Este jogo é complicado.',
  situations: ['🎮 Videogames']
},
{
  id: 'mj-p-d9c2d47c9533',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このキャラクターは強いです。',
  kana: 'このきゃらくたーはつよいです。',
  romaji: 'konokyarakutaa wa tsuyoi desu.',
  pt: 'Este personagem é forte.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-9c94b544defc',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このキャラクターはかっこいいです。',
  kana: 'このきゃらくたーはかっこいいです。',
  romaji: 'konokyarakutaa wa kakkoii desu.',
  pt: 'Este personagem é estiloso.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-7ad273fb8d63',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このキャラクターは可愛いです。',
  kana: 'このきゃらくたーはかわいいです。',
  romaji: 'konokyarakutaa wa kawaii desu.',
  pt: 'Este personagem é fofo.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-10545a41326d',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この物語は長いです。',
  kana: 'このものがたりはながいです。',
  romaji: 'konomonogatari wa nagai desu.',
  pt: 'Esta história é longa.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-c0c24aee5a80',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このアニメは面白いです。',
  kana: 'このあにめはおもしろいです。',
  romaji: 'konoanime wa omoshiroi desu.',
  pt: 'Este anime é interessante.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-4b445fa30ad9',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このアニメは有名です。',
  kana: 'このあにめはゆうめいです。',
  romaji: 'konoanime wa yuumei desu.',
  pt: 'Este anime é famoso.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-27738e7daa99',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この映画は面白いです。',
  kana: 'このえいがはおもしろいです。',
  romaji: 'konoeiga wa omoshiroi desu.',
  pt: 'Este filme é interessante.',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-p-6f3e4b282abe',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この映画は長いです。',
  kana: 'このえいがはながいです。',
  romaji: 'konoeiga wa nagai desu.',
  pt: 'Este filme é longo.',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-p-744e4ac3f561',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この映画は怖いです。',
  kana: 'このえいがはこわいです。',
  romaji: 'konoeiga wa kowai desu.',
  pt: 'Este filme é assustador.',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-p-251517e622fc',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この映画は素晴らしいです。',
  kana: 'このえいがはすばらしいです。',
  romaji: 'konoeiga wa subarashii desu.',
  pt: 'Este filme é maravilhoso.',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-p-94248d94a895',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このドラマは面白いです。',
  kana: 'このどらまはおもしろいです。',
  romaji: 'konodorama wa omoshiroi desu.',
  pt: 'Esta série é interessante.',
  situations: ['🎬 Filmes e séries']
},
{
  id: 'mj-p-ce715b8d2c7a',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この曲は美しいです。',
  kana: 'このきょくはうつくしいです。',
  romaji: 'konokyoku wa utsukushii desu.',
  pt: 'Esta música é bonita.',
  situations: ['🎵 Música']
},
{
  id: 'mj-p-8d52b2132882',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この曲は素晴らしいです。',
  kana: 'このきょくはすばらしいです。',
  romaji: 'konokyoku wa subarashii desu.',
  pt: 'Esta música é maravilhosa.',
  situations: ['🎵 Música']
},
{
  id: 'mj-p-ac4989611168',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この曲は長いです。',
  kana: 'このきょくはながいです。',
  romaji: 'konokyoku wa nagai desu.',
  pt: 'Esta música é longa.',
  situations: ['🎵 Música']
},
{
  id: 'mj-p-66e4041cabfc',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この曲は短いです。',
  kana: 'このきょくはみじかいです。',
  romaji: 'konokyoku wa mijikai desu.',
  pt: 'Esta música é curta.',
  situations: ['🎵 Música']
},
{
  id: 'mj-p-00e1289185c3',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この歌詞は難しいです。',
  kana: 'このかしはむずかしいです。',
  romaji: 'konokashi wa muzukashii desu.',
  pt: 'Esta letra é difícil.',
  situations: ['🎵 Música']
},
{
  id: 'mj-p-ee3fb5cd1623',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この料理は美味しいです。',
  kana: 'このりょうりはおいしいです。',
  romaji: 'konoryouri wa oishii desu.',
  pt: 'Este prato é gostosa.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-0020f6ef1535',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この料理は辛いです。',
  kana: 'このりょうりはからいです。',
  romaji: 'konoryouri wa karai desu.',
  pt: 'Este prato é apimentada.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-1589be87425c',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この料理は甘いです。',
  kana: 'このりょうりはあまいです。',
  romaji: 'konoryouri wa amai desu.',
  pt: 'Este prato é doce.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-8f1bc4f0885c',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この料理はしょっぱいです。',
  kana: 'このりょうりはしょっぱいです。',
  romaji: 'konoryouri wa shoppai desu.',
  pt: 'Este prato é salgada.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-p-40ad6afa7ff4',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このコーヒーは苦いです。',
  kana: 'このこーひーはにがいです。',
  romaji: 'konokoohii wa nigai desu.',
  pt: 'Este café é amargo.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-9a7fcfe6e6e6',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このコーヒーは熱いです。',
  kana: 'このこーひーはあついです。',
  romaji: 'konokoohii wa atsui desu.',
  pt: 'Este café é quente.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-06f6703b3d91',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このジュースは冷たいです。',
  kana: 'このじゅーすはつめたいです。',
  romaji: 'konojuusu wa tsumetai desu.',
  pt: 'Este suco é gelado.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-1e0ce34663cc',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このケーキは甘いです。',
  kana: 'このけーきはあまいです。',
  romaji: 'konokeeki wa amai desu.',
  pt: 'Este bolo é doce.',
  situations: ['☕ Cafeteria']
},
{
  id: 'mj-p-aeac243a97e6',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このアプリは便利です。',
  kana: 'このあぷりはべんりです。',
  romaji: 'konoapuri wa benri desu.',
  pt: 'Este aplicativo é prático.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-455c12650e35',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このアプリは複雑です。',
  kana: 'このあぷりはふくざつです。',
  romaji: 'konoapuri wa fukuzatsu desu.',
  pt: 'Este aplicativo é complicado.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-cb6c26840675',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このアプリは新しいです。',
  kana: 'このあぷりはあたらしいです。',
  romaji: 'konoapuri wa atarashii desu.',
  pt: 'Este aplicativo é novo.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-63e51a5aaf67',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このコードは複雑です。',
  kana: 'このこーどはふくざつです。',
  romaji: 'konokoodo wa fukuzatsu desu.',
  pt: 'Este código é complicado.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-9ff8844dcdbe',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このコードは短いです。',
  kana: 'このこーどはみじかいです。',
  romaji: 'konokoodo wa mijikai desu.',
  pt: 'Este código é curto.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-12ecff094676',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このスマホは高いです。',
  kana: 'このすまほはたかいです。',
  romaji: 'konosumaho wa takai desu.',
  pt: 'Este celular é caro.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-39e5252155a1',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このスマホは新しいです。',
  kana: 'このすまほはあたらしいです。',
  romaji: 'konosumaho wa atarashii desu.',
  pt: 'Este celular é novo.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-0d656e4d749a',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'このスマホは古いです。',
  kana: 'このすまほはふるいです。',
  romaji: 'konosumaho wa furui desu.',
  pt: 'Este celular é velho.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-p-a6a34338b60f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この駅は大きいです。',
  kana: 'このえきはおおきいです。',
  romaji: 'konoeki wa ookii desu.',
  pt: 'Esta estação é grande.',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-5579112dc31c',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この駅は便利です。',
  kana: 'このえきはべんりです。',
  romaji: 'konoeki wa benri desu.',
  pt: 'Esta estação é prática.',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-6182746577e6',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この道は危険です。',
  kana: 'このみちはきけんです。',
  romaji: 'konomichi wa kiken desu.',
  pt: 'Esta rua é perigoso.',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-08e960c5d601',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この道は長いです。',
  kana: 'このみちはながいです。',
  romaji: 'konomichi wa nagai desu.',
  pt: 'Esta rua é longo.',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-p-e5a610dc2a53',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この店は安いです。',
  kana: 'このみせはやすいです。',
  romaji: 'konomise wa yasui desu.',
  pt: 'Esta loja é barata.',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-p-96f5675caa6c',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この店は有名です。',
  kana: 'このみせはゆうめいです。',
  romaji: 'konomise wa yuumei desu.',
  pt: 'Esta loja é famosa.',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-p-9155a0e05d6a',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この部屋は静かです。',
  kana: 'このへやはしずかです。',
  romaji: 'konoheya wa shizuka desu.',
  pt: 'Este quarto é silencioso.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-p-40a70f8f3bcf',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この部屋は大きいです。',
  kana: 'このへやはおおきいです。',
  romaji: 'konoheya wa ookii desu.',
  pt: 'Este quarto é grande.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-p-51a1398e7aa4',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この部屋は小さいです。',
  kana: 'このへやはちいさいです。',
  romaji: 'konoheya wa chiisai desu.',
  pt: 'Este quarto é pequeno.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-p-68e3b66c7cbc',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この話は面白いです。',
  kana: 'このはなしはおもしろいです。',
  romaji: 'konohanashi wa omoshiroi desu.',
  pt: 'Esta história é interessante.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-p-041da66f99b7',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'この考えは大切です。',
  kana: 'このかんがえはたいせつです。',
  romaji: 'konokangae wa taisetsu desu.',
  pt: 'Esta ideia é importante.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-p-743f566651ae',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本語は難しいです。',
  kana: 'にほんごはむずかしいです。',
  romaji: 'nihongo wa muzukashii desu.',
  pt: 'O japonês é difícil.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-c24a25cc7ed0',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本語は面白いです。',
  kana: 'にほんごはおもしろいです。',
  romaji: 'nihongo wa omoshiroi desu.',
  pt: 'O japonês é interessante.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-641100cadc83',
  kind: 'phrase',
  category: 'phrase',
  japanese: '漢字は難しいです。',
  kana: 'かんじはむずかしいです。',
  romaji: 'kanji wa muzukashii desu.',
  pt: 'Kanji é difícil.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-3cefcdc36a7a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '文法は複雑です。',
  kana: 'ぶんぽうはふくざつです。',
  romaji: 'bunpou wa fukuzatsu desu.',
  pt: 'A gramática é complicada.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-0b657a39e5aa',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日は暑いです。',
  kana: 'きょうはあついです。',
  romaji: 'kyou wa atsui desu.',
  pt: 'Hoje está quente.',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-p-ae56617e82c3',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日は寒いです。',
  kana: 'きょうはさむいです。',
  romaji: 'kyou wa samui desu.',
  pt: 'Hoje está frio.',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-p-57c9c2a3ea11',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日は涼しいです。',
  kana: 'きょうはすずしいです。',
  romaji: 'kyou wa suzushii desu.',
  pt: 'Hoje está fresco.',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-p-f1a768a4aafb',
  kind: 'phrase',
  category: 'phrase',
  japanese: '今日は暖かいです。',
  kana: 'きょうはあたたかいです。',
  romaji: 'kyou wa atatakai desu.',
  pt: 'Hoje está agradavelmente quente.',
  situations: ['🌦️ Clima']
},
{
  id: 'mj-g-92c3d8feec80',
  kind: 'grammar',
  category: 'grammar',
  japanese: '私は学生です。',
  kana: 'わたしはがくせいです。',
  romaji: 'watashiwagakuseidesu。',
  pt: 'Sou estudante. Estrutura: A は B です apresenta ou identifica A.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-g-bcc1985a554f',
  kind: 'grammar',
  category: 'grammar',
  japanese: '私は学生ではありません。',
  kana: 'わたしはがくせいではありません。',
  romaji: 'watashiwagakuseidehaarimasen。',
  pt: 'Não sou estudante. Estrutura: ではありません é negação educada de です.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-g-f26f72f3d4ea',
  kind: 'grammar',
  category: 'grammar',
  japanese: 'これは本ですか？',
  kana: 'これはほんですか？',
  romaji: 'korehahondesuka？',
  pt: 'Isto é um livro? Estrutura: か transforma uma afirmação em pergunta.',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-g-4b37e4ba0c91',
  kind: 'grammar',
  category: 'grammar',
  japanese: '私もブラジル人です。',
  kana: 'わたしもぶらじるじんです。',
  romaji: 'watashimoburajirujindesu。',
  pt: 'Também sou brasileiro(a). Estrutura: も indica também.',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-g-146883146f77',
  kind: 'grammar',
  category: 'grammar',
  japanese: '私の名前はリックです。',
  kana: 'わたしのなまえはりっくです。',
  romaji: 'watashinonamaewarikkudesu。',
  pt: 'Meu nome é Ric. Estrutura: の indica posse ou relação.',
  situations: ['🗣️ Conversas básicas']
},
{
  id: 'mj-g-0d806c9a7780',
  kind: 'grammar',
  category: 'grammar',
  japanese: '水を飲みます。',
  kana: 'みずをのみます。',
  romaji: 'mizuonomimasu。',
  pt: 'Bebo água. Estrutura: を marca o objeto direto.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-g-1d240b0fe796',
  kind: 'grammar',
  category: 'grammar',
  japanese: '家で勉強します。',
  kana: 'いえでべんきょうします。',
  romaji: 'iedebenkyoushimasu。',
  pt: 'Estudo em casa. Estrutura: で indica o lugar da ação.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-g-b35c1569bb99',
  kind: 'grammar',
  category: 'grammar',
  japanese: '駅に行きます。',
  kana: 'えきにいきます。',
  romaji: 'ekiniikimasu。',
  pt: 'Vou à estação. Estrutura: に indica destino.',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-g-b8808bb27eaa',
  kind: 'grammar',
  category: 'grammar',
  japanese: '東京へ行きます。',
  kana: 'とうきょうへいきます。',
  romaji: 'toukyoueikimasu。',
  pt: 'Vou para Tóquio. Estrutura: へ (lido え) indica direção.',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-g-522cd6dd5112',
  kind: 'grammar',
  category: 'grammar',
  japanese: '九時に起きます。',
  kana: 'くじにおきます。',
  romaji: 'kujiniokimasu。',
  pt: 'Acordo às nove. Estrutura: に marca um horário específico.',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-g-0e5d0991a929',
  kind: 'grammar',
  category: 'grammar',
  japanese: '音楽が好きです。',
  kana: 'おんがくがすきです。',
  romaji: 'ongakugasukidesu。',
  pt: 'Gosto de música. Estrutura: が indica o objeto do gosto com 好き.',
  situations: ['❤️ Gostos e preferências']
},
{
  id: 'mj-g-9940670544f5',
  kind: 'grammar',
  category: 'grammar',
  japanese: '誰が来ますか？',
  kana: 'だれがきますか？',
  romaji: 'daregakimasuka？',
  pt: 'Quem vem? Estrutura: が marca o sujeito interrogado.',
  situations: ['❓ Perguntas comuns']
},
{
  id: 'mj-g-244d272fd80c',
  kind: 'grammar',
  category: 'grammar',
  japanese: '駅はここです。',
  kana: 'えきはここです。',
  romaji: 'ekiwakokodesu。',
  pt: 'A estação é aqui. Estrutura: は indica o tópico da frase.',
  situations: ['🚆 Transporte']
},
{
  id: 'mj-g-fc9a0822c04b',
  kind: 'grammar',
  category: 'grammar',
  japanese: '日本語を勉強しています。',
  kana: 'にほんごをべんきょうしています。',
  romaji: 'nihongoobenkyoushiteimasu。',
  pt: 'Estou estudando japonês. Estrutura: ています indica ação em andamento.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-g-bc1085e252d5',
  kind: 'grammar',
  category: 'grammar',
  japanese: '毎日勉強します。',
  kana: 'まいにちべんきょうします。',
  romaji: 'mainichibenkyoushimasu。',
  pt: 'Estudo todos os dias. Estrutura: ます expressa ação habitual ou futura com polidez.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-g-317771abc717',
  kind: 'grammar',
  category: 'grammar',
  japanese: '昨日勉強しました。',
  kana: 'きのうべんきょうしました。',
  romaji: 'kinoubenkyoushimashita。',
  pt: 'Estudei ontem. Estrutura: ました é passado educado.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-g-5919b908a5bc',
  kind: 'grammar',
  category: 'grammar',
  japanese: '今日は働きません。',
  kana: 'きょうははたらきません。',
  romaji: 'kyouwahatarakimasen。',
  pt: 'Hoje não trabalho. Estrutura: ません é negação educada.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-g-5b4123f6e453',
  kind: 'grammar',
  category: 'grammar',
  japanese: '昨日は働きませんでした。',
  kana: 'きのうははたらきませんでした。',
  romaji: 'kinouwahatarakimasendeshita。',
  pt: 'Ontem não trabalhei. Estrutura: ませんでした é passado negativo educado.',
  situations: ['🏠 Cotidiano']
},
{
  id: 'mj-g-917fdd6206fb',
  kind: 'grammar',
  category: 'grammar',
  japanese: 'ラーメンを食べたいです。',
  kana: 'らーめんをたべたいです。',
  romaji: 'raamenotabetaidesu。',
  pt: 'Quero comer lámen. Estrutura: forma ます sem ます + たいです expressa desejo.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-g-d4140c9bb8ba',
  kind: 'grammar',
  category: 'grammar',
  japanese: '漢字を読んでください。',
  kana: 'かんじをよんでください。',
  romaji: 'kanjioyondekudasai。',
  pt: 'Leia o kanji, por favor. Estrutura: forma て + ください faz um pedido.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-g-c765795248f3',
  kind: 'grammar',
  category: 'grammar',
  japanese: '写真を撮ってもいいですか？',
  kana: 'しゃしんをとってもいいですか？',
  romaji: 'shashinotottemoiidesuka？',
  pt: 'Posso tirar uma foto? Estrutura: てもいいですか pede permissão.',
  situations: ['🛍️ Compras']
},
{
  id: 'mj-g-2a342aef75e4',
  kind: 'grammar',
  category: 'grammar',
  japanese: 'ここで写真を撮らないでください。',
  kana: 'ここでしゃしんをとらないでください。',
  romaji: 'kokodeshashinotoranaidekudasai。',
  pt: 'Não tire fotos aqui. Estrutura: forma ない + でください pede para não fazer algo.',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-g-a0e8a09df635',
  kind: 'grammar',
  category: 'grammar',
  japanese: '一緒に食べましょう。',
  kana: 'いっしょにたべましょう。',
  romaji: 'isshonitabemashou。',
  pt: 'Vamos comer juntos. Estrutura: ましょう sugere ação conjunta.',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-g-4962af4098ca',
  kind: 'grammar',
  category: 'grammar',
  japanese: '映画を見ませんか？',
  kana: 'えいがをみませんか？',
  romaji: 'eigaomimasenka？',
  pt: 'Quer assistir a um filme? Estrutura: ませんか convida educadamente.',
  situations: ['👥 Amigos e socialização']
},
{
  id: 'mj-g-f1682dcf23bd',
  kind: 'grammar',
  category: 'grammar',
  japanese: '面白いと思います。',
  kana: 'おもしろいとおもいます。',
  romaji: 'omoshiroitoomoimasu。',
  pt: 'Acho interessante. Estrutura: forma simples + と思います expressa opinião.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-g-e426a856da2d',
  kind: 'grammar',
  category: 'grammar',
  japanese: '日本語は難しいですが、面白いです。',
  kana: 'にほんごはむずかしいですが、おもしろいです。',
  romaji: 'nihongowamuzukashiidesuga、omoshiroidesu。',
  pt: 'Japonês é difícil, mas interessante. Estrutura: が pode indicar contraste.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-g-1cbd650d2516',
  kind: 'grammar',
  category: 'grammar',
  japanese: '音楽が好きだから、毎日聴きます。',
  kana: 'おんがくがすきだから、まいにちききます。',
  romaji: 'ongakugasukidakara、mainichikikimasu。',
  pt: 'Como gosto de música, escuto todos os dias. Estrutura: だから introduz motivo.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-g-87806755f9d0',
  kind: 'grammar',
  category: 'grammar',
  japanese: '明日、時間があったら行きます。',
  kana: 'あした、じかんがあったらいきます。',
  romaji: 'ashita、jikangaattaraikimasu。',
  pt: 'Se eu tiver tempo amanhã, vou. Estrutura: たら indica condição.',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-g-f276538ae7b2',
  kind: 'grammar',
  category: 'grammar',
  japanese: '日本に行くつもりです。',
  kana: 'にほんにいくつもりです。',
  romaji: 'nihonniikutsumoridesu。',
  pt: 'Pretendo ir ao Japão. Estrutura: verbo no dicionário + つもりです indica intenção.',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-g-aeb3dfcf408a',
  kind: 'grammar',
  category: 'grammar',
  japanese: 'もっと勉強しようと思います。',
  kana: 'もっとべんきょうしようとおもいます。',
  romaji: 'mottobenkyoushiyoutoomoimasu。',
  pt: 'Acho que vou estudar mais. Estrutura: volitivo + と思います indica intenção.',
  situations: ['🔮 Planos futuros']
},
{
  id: 'mj-g-3961c73e0ca1',
  kind: 'grammar',
  category: 'grammar',
  japanese: '日本に行ったことがあります。',
  kana: 'にほんにいったことがあります。',
  romaji: 'nihonniittakotogaarimasu。',
  pt: 'Já fui ao Japão. Estrutura: passado simples + ことがあります expressa experiência.',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-g-8048cf78912c',
  kind: 'grammar',
  category: 'grammar',
  japanese: '映画を見たあとで話しましょう。',
  kana: 'えいがをみたあとではなしましょう。',
  romaji: 'eigaomitaatodehanashimashou。',
  pt: 'Vamos conversar depois de ver o filme. Estrutura: passado simples + あとで indica depois.',
  situations: ['📖 Histórias pessoais']
},
{
  id: 'mj-g-c8bf4b539062',
  kind: 'grammar',
  category: 'grammar',
  japanese: '寝る前に本を読みます。',
  kana: 'ねるまえにほんをよみます。',
  romaji: 'nerumaenihonoyomimasu。',
  pt: 'Leio antes de dormir. Estrutura: verbo no dicionário + 前に indica antes.',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-g-69d995345c02',
  kind: 'grammar',
  category: 'grammar',
  japanese: '音楽を聴きながら歩きます。',
  kana: 'おんがくをききながらあるきます。',
  romaji: 'ongakuokikinagaraarukimasu。',
  pt: 'Caminho ouvindo música. Estrutura: radical ます + ながら indica ações simultâneas.',
  situations: ['🎵 Música']
},
{
  id: 'mj-g-b41eb0eee4ff',
  kind: 'grammar',
  category: 'grammar',
  japanese: 'この料理は辛すぎます。',
  kana: 'このりょうりはからすぎます。',
  romaji: 'konoryouriwakarasugimasu。',
  pt: 'Este prato está apimentado demais. Estrutura: radical de adjetivo + すぎます indica excesso.',
  situations: ['🍜 Restaurante']
},
{
  id: 'mj-g-a04ead5b54ff',
  kind: 'grammar',
  category: 'grammar',
  japanese: 'もっとゆっくり話してほしいです。',
  kana: 'もっとゆっくりはなしてほしいです。',
  romaji: 'mottoyukkurihanashitehoshiidesu。',
  pt: 'Quero que fale mais devagar. Estrutura: forma て + ほしい expressa desejo sobre ação alheia.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-g-73d91fdfa3e7',
  kind: 'grammar',
  category: 'grammar',
  japanese: 'スマホが壊れてしまいました。',
  kana: 'すまほがこわれてしまいました。',
  romaji: 'sumahogakowareteshimaimashita。',
  pt: 'Meu celular acabou quebrando. Estrutura: てしまう indica conclusão ou lamentação.',
  situations: ['💻 Tecnologia']
},
{
  id: 'mj-g-dbcc339dc82a',
  kind: 'grammar',
  category: 'grammar',
  japanese: '電車が遅れているようです。',
  kana: 'でんしゃがおくれているようです。',
  romaji: 'denshagaokureteiruyoudesu。',
  pt: 'Parece que o trem está atrasado. Estrutura: ようです exprime impressão fundamentada.',
  situations: ['🤝 Problemas cotidianos']
},
{
  id: 'mj-g-70f260a447e4',
  kind: 'grammar',
  category: 'grammar',
  japanese: '人によって考え方が違います。',
  kana: 'ひとによってかんがえかたがちがいます。',
  romaji: 'hitoniyottekangaekatagachigaimasu。',
  pt: 'A maneira de pensar varia de pessoa para pessoa. Estrutura: によって indica variação conforme algo.',
  situations: ['💬 Opiniões']
},
{
  id: 'mj-g-0d2d445e7c54',
  kind: 'grammar',
  category: 'grammar',
  japanese: '毎日練習すれば上手になります。',
  kana: 'まいにちれんしゅうすればじょうずになります。',
  romaji: 'mainichirenshuusurebajouzuninarimasu。',
  pt: 'Se praticar diariamente, vai melhorar. Estrutura: ば indica condição.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-g-ad17ccc57303',
  kind: 'grammar',
  category: 'grammar',
  japanese: 'このアニメは子供だけでなく大人にも人気です。',
  kana: 'このあにめはこどもだけでなくおとなにもにんきです。',
  romaji: 'konoanimewakodomodakedenakuotonanimoninkidesu。',
  pt: 'Este anime é popular não só entre crianças, mas também entre adultos. Estrutura: だけでなく〜も indica não apenas, mas também.',
  situations: ['🍥 Anime e mangá']
},
{
  id: 'mj-p-181c6388f644',
  kind: 'phrase',
  category: 'phrase',
  japanese: '一つください。',
  kana: 'ひとつください。',
  romaji: 'hitotsukudasai。',
  pt: '1 unidade(s), por favor.',
  situations: ['🍜 Restaurante', '🛍️ Compras']
},
{
  id: 'mj-p-ab493d4997e8',
  kind: 'phrase',
  category: 'phrase',
  japanese: '二つください。',
  kana: 'ふたつください。',
  romaji: 'futatsukudasai。',
  pt: '2 unidade(s), por favor.',
  situations: ['🍜 Restaurante', '🛍️ Compras']
},
{
  id: 'mj-p-c9dfb09f8015',
  kind: 'phrase',
  category: 'phrase',
  japanese: '三つください。',
  kana: 'みっつください。',
  romaji: 'mittsukudasai。',
  pt: '3 unidade(s), por favor.',
  situations: ['🍜 Restaurante', '🛍️ Compras']
},
{
  id: 'mj-p-691e69248e41',
  kind: 'phrase',
  category: 'phrase',
  japanese: '四つください。',
  kana: 'よっつください。',
  romaji: 'yottsukudasai。',
  pt: '4 unidade(s), por favor.',
  situations: ['🍜 Restaurante', '🛍️ Compras']
},
{
  id: 'mj-p-de2102a7888d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '五つください。',
  kana: 'いつつください。',
  romaji: 'itsutsukudasai。',
  pt: '5 unidade(s), por favor.',
  situations: ['🍜 Restaurante', '🛍️ Compras']
},
{
  id: 'mj-p-c96373299770',
  kind: 'phrase',
  category: 'phrase',
  japanese: '六つください。',
  kana: 'むっつください。',
  romaji: 'muttsukudasai。',
  pt: '6 unidade(s), por favor.',
  situations: ['🍜 Restaurante', '🛍️ Compras']
},
{
  id: 'mj-p-b690d6decad7',
  kind: 'phrase',
  category: 'phrase',
  japanese: '七つください。',
  kana: 'ななつください。',
  romaji: 'nanatsukudasai。',
  pt: '7 unidade(s), por favor.',
  situations: ['🍜 Restaurante', '🛍️ Compras']
},
{
  id: 'mj-p-5217278b6203',
  kind: 'phrase',
  category: 'phrase',
  japanese: '八つください。',
  kana: 'やっつください。',
  romaji: 'yattsukudasai。',
  pt: '8 unidade(s), por favor.',
  situations: ['🍜 Restaurante', '🛍️ Compras']
},
{
  id: 'mj-p-b51b6ae02ac4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '九つください。',
  kana: 'ここのつください。',
  romaji: 'kokonotsukudasai。',
  pt: '9 unidade(s), por favor.',
  situations: ['🍜 Restaurante', '🛍️ Compras']
},
{
  id: 'mj-p-b3bb051f5396',
  kind: 'phrase',
  category: 'phrase',
  japanese: '一時です。',
  kana: 'いちじです。',
  romaji: 'ichi ji desu.',
  pt: 'São 1 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-fb8ff238192f',
  kind: 'phrase',
  category: 'phrase',
  japanese: '一時に会いましょう。',
  kana: 'いちじにあいましょう。',
  romaji: 'ichi ji ni aimashou.',
  pt: 'Vamos nos encontrar às 1 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-0e1cc715008c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '二時です。',
  kana: 'にじです。',
  romaji: 'ni ji desu.',
  pt: 'São 2 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-544911eef4b1',
  kind: 'phrase',
  category: 'phrase',
  japanese: '二時に会いましょう。',
  kana: 'にじにあいましょう。',
  romaji: 'ni ji ni aimashou.',
  pt: 'Vamos nos encontrar às 2 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-b33b353c6a98',
  kind: 'phrase',
  category: 'phrase',
  japanese: '三時です。',
  kana: 'さんじです。',
  romaji: 'san ji desu.',
  pt: 'São 3 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-bf00c5785504',
  kind: 'phrase',
  category: 'phrase',
  japanese: '三時に会いましょう。',
  kana: 'さんじにあいましょう。',
  romaji: 'san ji ni aimashou.',
  pt: 'Vamos nos encontrar às 3 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-c2518fe755a2',
  kind: 'phrase',
  category: 'phrase',
  japanese: '四時です。',
  kana: 'よじです。',
  romaji: 'yo ji desu.',
  pt: 'São 4 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-811b26f17b0f',
  kind: 'phrase',
  category: 'phrase',
  japanese: '四時に会いましょう。',
  kana: 'よじにあいましょう。',
  romaji: 'yo ji ni aimashou.',
  pt: 'Vamos nos encontrar às 4 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-036fbc4fe3a3',
  kind: 'phrase',
  category: 'phrase',
  japanese: '五時です。',
  kana: 'ごじです。',
  romaji: 'go ji desu.',
  pt: 'São 5 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-fc1abbdb2b10',
  kind: 'phrase',
  category: 'phrase',
  japanese: '五時に会いましょう。',
  kana: 'ごじにあいましょう。',
  romaji: 'go ji ni aimashou.',
  pt: 'Vamos nos encontrar às 5 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-77ee0a5c998c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '六時です。',
  kana: 'ろくじです。',
  romaji: 'roku ji desu.',
  pt: 'São 6 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-528bd2353321',
  kind: 'phrase',
  category: 'phrase',
  japanese: '六時に会いましょう。',
  kana: 'ろくじにあいましょう。',
  romaji: 'roku ji ni aimashou.',
  pt: 'Vamos nos encontrar às 6 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-46fb171adaf3',
  kind: 'phrase',
  category: 'phrase',
  japanese: '七時です。',
  kana: 'しちじです。',
  romaji: 'shichi ji desu.',
  pt: 'São 7 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-006cc847a6cd',
  kind: 'phrase',
  category: 'phrase',
  japanese: '七時に会いましょう。',
  kana: 'しちじにあいましょう。',
  romaji: 'shichi ji ni aimashou.',
  pt: 'Vamos nos encontrar às 7 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-9834a97516c5',
  kind: 'phrase',
  category: 'phrase',
  japanese: '八時です。',
  kana: 'はちじです。',
  romaji: 'hachi ji desu.',
  pt: 'São 8 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-fb9ff2840632',
  kind: 'phrase',
  category: 'phrase',
  japanese: '八時に会いましょう。',
  kana: 'はちじにあいましょう。',
  romaji: 'hachi ji ni aimashou.',
  pt: 'Vamos nos encontrar às 8 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-3137102cd538',
  kind: 'phrase',
  category: 'phrase',
  japanese: '九時です。',
  kana: 'くじです。',
  romaji: 'ku ji desu.',
  pt: 'São 9 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-09240ecb5b69',
  kind: 'phrase',
  category: 'phrase',
  japanese: '九時に会いましょう。',
  kana: 'くじにあいましょう。',
  romaji: 'ku ji ni aimashou.',
  pt: 'Vamos nos encontrar às 9 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-840d636cdda7',
  kind: 'phrase',
  category: 'phrase',
  japanese: '十時です。',
  kana: 'じゅうじです。',
  romaji: 'juu ji desu.',
  pt: 'São 10 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-971654f87817',
  kind: 'phrase',
  category: 'phrase',
  japanese: '十時に会いましょう。',
  kana: 'じゅうじにあいましょう。',
  romaji: 'juu ji ni aimashou.',
  pt: 'Vamos nos encontrar às 10 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-373a4a9fa752',
  kind: 'phrase',
  category: 'phrase',
  japanese: '十一時です。',
  kana: 'じゅういちじです。',
  romaji: 'juuichi ji desu.',
  pt: 'São 11 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-ae24747d2d01',
  kind: 'phrase',
  category: 'phrase',
  japanese: '十一時に会いましょう。',
  kana: 'じゅういちじにあいましょう。',
  romaji: 'juuichi ji ni aimashou.',
  pt: 'Vamos nos encontrar às 11 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-4eaa98e0182a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '十二時です。',
  kana: 'じゅうにじです。',
  romaji: 'juuni ji desu.',
  pt: 'São 12 hora(s).',
  situations: ['📅 Planos e horários']
},
{
  id: 'mj-p-b4dbe19701c3',
  kind: 'phrase',
  category: 'phrase',
  japanese: '十二時に会いましょう。',
  kana: 'じゅうにじにあいましょう。',
  romaji: 'juuni ji ni aimashou.',
  pt: 'Vamos nos encontrar às 12 hora(s).',
  situations: ['📅 Planos e horários', '👥 Amigos e socialização']
},
{
  id: 'mj-p-c00900741243',
  kind: 'phrase',
  category: 'phrase',
  japanese: '曲について話しましょう。',
  kana: 'きょくについてはなしましょう。',
  romaji: 'kyoku ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre música; faixa.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-367700c95076',
  kind: 'phrase',
  category: 'phrase',
  japanese: '曲についてどう思いますか？',
  kana: 'きょくについてどうおもいますか？',
  romaji: 'kyoku ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de música; faixa?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-0dc74c29e1ec',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歌について話しましょう。',
  kana: 'うたについてはなしましょう。',
  romaji: 'uta ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre canção.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-325b5ea74a59',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歌についてどう思いますか？',
  kana: 'うたについてどうおもいますか？',
  romaji: 'uta ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de canção?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-0ea632506f6a',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歌詞について話しましょう。',
  kana: 'かしについてはなしましょう。',
  romaji: 'kashi ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre letra da música.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-156bec0e0653',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歌詞についてどう思いますか？',
  kana: 'かしについてどうおもいますか？',
  romaji: 'kashi ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de letra da música?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-9a76feafc794',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'バンドについて話しましょう。',
  kana: 'ばんどについてはなしましょう。',
  romaji: 'bando ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre banda.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-a8a109101b10',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'バンドについてどう思いますか？',
  kana: 'ばんどについてどうおもいますか？',
  romaji: 'bando ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de banda?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-d5952268b1f4',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'アルバムについて話しましょう。',
  kana: 'あるばむについてはなしましょう。',
  romaji: 'arubamu ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre álbum.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-87e914fd00ef',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'アルバムについてどう思いますか？',
  kana: 'あるばむについてどうおもいますか？',
  romaji: 'arubamu ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de álbum?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-8cde18e4e2cb',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ゲーム音楽について話しましょう。',
  kana: 'げーむおんがくについてはなしましょう。',
  romaji: 'geemuongaku ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre trilha sonora de videogame.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-f1a52629c1ec',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ゲーム音楽についてどう思いますか？',
  kana: 'げーむおんがくについてどうおもいますか？',
  romaji: 'geemuongaku ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de trilha sonora de videogame?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-e6fe31731cad',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'サウンドトラックについて話しましょう。',
  kana: 'さうんどとらっくについてはなしましょう。',
  romaji: 'saundotorakku ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre trilha sonora.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-378a3201427f',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'サウンドトラックについてどう思いますか？',
  kana: 'さうんどとらっくについてどうおもいますか？',
  romaji: 'saundotorakku ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de trilha sonora?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-69b2ec28bccd',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'リズムについて話しましょう。',
  kana: 'りずむについてはなしましょう。',
  romaji: 'rizumu ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre ritmo.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-5596004e7ff4',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'リズムについてどう思いますか？',
  kana: 'りずむについてどうおもいますか？',
  romaji: 'rizumu ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de ritmo?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-8f974f644545',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'メロディーについて話しましょう。',
  kana: 'めろでぃーについてはなしましょう。',
  romaji: 'merodii ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre melodia.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-3096e462beab',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'メロディーについてどう思いますか？',
  kana: 'めろでぃーについてどうおもいますか？',
  romaji: 'merodii ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de melodia?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-771c15ccc681',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ギターについて話しましょう。',
  kana: 'ぎたーについてはなしましょう。',
  romaji: 'gitaa ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre guitarra.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-3fed0d672d11',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ギターについてどう思いますか？',
  kana: 'ぎたーについてどうおもいますか？',
  romaji: 'gitaa ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de guitarra?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-f2f05e7e2a92',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ピアノについて話しましょう。',
  kana: 'ぴあのについてはなしましょう。',
  romaji: 'piano ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre piano.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-0ff32ac7b1ec',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ピアノについてどう思いますか？',
  kana: 'ぴあのについてどうおもいますか？',
  romaji: 'piano ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de piano?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-74dcbc07dbaf',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ロックについて話しましょう。',
  kana: 'ろっくについてはなしましょう。',
  romaji: 'rokku ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre rock.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-76f1f253fb22',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ロックについてどう思いますか？',
  kana: 'ろっくについてどうおもいますか？',
  romaji: 'rokku ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de rock?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-314e3544daf0',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'クラシックについて話しましょう。',
  kana: 'くらしっくについてはなしましょう。',
  romaji: 'kurashikku ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre música clássica.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-01d41b1859a5',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'クラシックについてどう思いますか？',
  kana: 'くらしっくについてどうおもいますか？',
  romaji: 'kurashikku ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de música clássica?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-607820a73998',
  kind: 'phrase',
  category: 'phrase',
  japanese: '電子音楽について話しましょう。',
  kana: 'でんしおんがくについてはなしましょう。',
  romaji: 'denshiongaku ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre música eletrônica.',
  situations: ['🎵 Música', '👥 Amigos e socialização']
},
{
  id: 'mj-p-62ffa22d37ff',
  kind: 'phrase',
  category: 'phrase',
  japanese: '電子音楽についてどう思いますか？',
  kana: 'でんしおんがくについてどうおもいますか？',
  romaji: 'denshiongaku ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de música eletrônica?',
  situations: ['🎵 Música', '💬 Opiniões']
},
{
  id: 'mj-p-5036f09e403d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '映画について話しましょう。',
  kana: 'えいがについてはなしましょう。',
  romaji: 'eiga ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre filme.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-1c386434f5a0',
  kind: 'phrase',
  category: 'phrase',
  japanese: '映画についてどう思いますか？',
  kana: 'えいがについてどうおもいますか？',
  romaji: 'eiga ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de filme?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-b1f4e7a5742e',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'アニメについて話しましょう。',
  kana: 'あにめについてはなしましょう。',
  romaji: 'anime ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre anime.',
  situations: ['🍥 Anime e mangá', '👥 Amigos e socialização']
},
{
  id: 'mj-p-5532b5b88bcb',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'アニメについてどう思いますか？',
  kana: 'あにめについてどうおもいますか？',
  romaji: 'anime ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de anime?',
  situations: ['🍥 Anime e mangá', '💬 Opiniões']
},
{
  id: 'mj-p-6a8ffef3eba3',
  kind: 'phrase',
  category: 'phrase',
  japanese: '漫画について話しましょう。',
  kana: 'まんがについてはなしましょう。',
  romaji: 'manga ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre mangá.',
  situations: ['🍥 Anime e mangá', '👥 Amigos e socialização']
},
{
  id: 'mj-p-3afc71cf7df7',
  kind: 'phrase',
  category: 'phrase',
  japanese: '漫画についてどう思いますか？',
  kana: 'まんがについてどうおもいますか？',
  romaji: 'manga ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de mangá?',
  situations: ['🍥 Anime e mangá', '💬 Opiniões']
},
{
  id: 'mj-p-0dee8adef47e',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ゲームについて話しましょう。',
  kana: 'げーむについてはなしましょう。',
  romaji: 'geemu ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre jogo.',
  situations: ['🎮 Videogames', '👥 Amigos e socialização']
},
{
  id: 'mj-p-aed1790b0215',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ゲームについてどう思いますか？',
  kana: 'げーむについてどうおもいますか？',
  romaji: 'geemu ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de jogo?',
  situations: ['🎮 Videogames', '💬 Opiniões']
},
{
  id: 'mj-p-d76071ad2c8e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '哲学について話しましょう。',
  kana: 'てつがくについてはなしましょう。',
  romaji: 'tetsugaku ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre filosofia.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-e5afa1a4842c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '哲学についてどう思いますか？',
  kana: 'てつがくについてどうおもいますか？',
  romaji: 'tetsugaku ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de filosofia?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-c0a2d25e7eb1',
  kind: 'phrase',
  category: 'phrase',
  japanese: '人生について話しましょう。',
  kana: 'じんせいについてはなしましょう。',
  romaji: 'jinsei ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre vida humana.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-a1ca6a3ef4b6',
  kind: 'phrase',
  category: 'phrase',
  japanese: '人生についてどう思いますか？',
  kana: 'じんせいについてどうおもいますか？',
  romaji: 'jinsei ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de vida humana?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-d85dcff4f312',
  kind: 'phrase',
  category: 'phrase',
  japanese: '幸福について話しましょう。',
  kana: 'こうふくについてはなしましょう。',
  romaji: 'koufuku ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre felicidade.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-c732ea72d92d',
  kind: 'phrase',
  category: 'phrase',
  japanese: '幸福についてどう思いますか？',
  kana: 'こうふくについてどうおもいますか？',
  romaji: 'koufuku ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de felicidade?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-518ef3c40f4c',
  kind: 'phrase',
  category: 'phrase',
  japanese: '自由について話しましょう。',
  kana: 'じゆうについてはなしましょう。',
  romaji: 'jiyuu ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre liberdade.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-ffd0c9465ac4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '自由についてどう思いますか？',
  kana: 'じゆうについてどうおもいますか？',
  romaji: 'jiyuu ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de liberdade?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-779bb0bd3f22',
  kind: 'phrase',
  category: 'phrase',
  japanese: '倫理について話しましょう。',
  kana: 'りんりについてはなしましょう。',
  romaji: 'rinri ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre ética.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-6eab03e14673',
  kind: 'phrase',
  category: 'phrase',
  japanese: '倫理についてどう思いますか？',
  kana: 'りんりについてどうおもいますか？',
  romaji: 'rinri ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de ética?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-c9449616c609',
  kind: 'phrase',
  category: 'phrase',
  japanese: '政治について話しましょう。',
  kana: 'せいじについてはなしましょう。',
  romaji: 'seiji ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre política.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-97cd6528af18',
  kind: 'phrase',
  category: 'phrase',
  japanese: '政治についてどう思いますか？',
  kana: 'せいじについてどうおもいますか？',
  romaji: 'seiji ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de política?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-7688bb3b2367',
  kind: 'phrase',
  category: 'phrase',
  japanese: '環境について話しましょう。',
  kana: 'かんきょうについてはなしましょう。',
  romaji: 'kankyou ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre meio ambiente.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-a2c651f1a7f0',
  kind: 'phrase',
  category: 'phrase',
  japanese: '環境についてどう思いますか？',
  kana: 'かんきょうについてどうおもいますか？',
  romaji: 'kankyou ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de meio ambiente?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-d73b527bb61f',
  kind: 'phrase',
  category: 'phrase',
  japanese: '科学について話しましょう。',
  kana: 'かがくについてはなしましょう。',
  romaji: 'kagaku ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre ciência.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-9f5f2696df64',
  kind: 'phrase',
  category: 'phrase',
  japanese: '科学についてどう思いますか？',
  kana: 'かがくについてどうおもいますか？',
  romaji: 'kagaku ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de ciência?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-24679fda3257',
  kind: 'phrase',
  category: 'phrase',
  japanese: '宇宙について話しましょう。',
  kana: 'うちゅうについてはなしましょう。',
  romaji: 'uchuu ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre universo; espaço sideral.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-494de4f3f0ba',
  kind: 'phrase',
  category: 'phrase',
  japanese: '宇宙についてどう思いますか？',
  kana: 'うちゅうについてどうおもいますか？',
  romaji: 'uchuu ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de universo; espaço sideral?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-81e96ebbbf44',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歴史について話しましょう。',
  kana: 'れきしについてはなしましょう。',
  romaji: 'rekishi ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre história.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-f499c2a1c711',
  kind: 'phrase',
  category: 'phrase',
  japanese: '歴史についてどう思いますか？',
  kana: 'れきしについてどうおもいますか？',
  romaji: 'rekishi ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de história?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-5b75f86d9a89',
  kind: 'phrase',
  category: 'phrase',
  japanese: '文化について話しましょう。',
  kana: 'ぶんかについてはなしましょう。',
  romaji: 'bunka ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre cultura.',
  situations: ['💬 Opiniões', '👥 Amigos e socialização']
},
{
  id: 'mj-p-ae3d6643cb29',
  kind: 'phrase',
  category: 'phrase',
  japanese: '文化についてどう思いますか？',
  kana: 'ぶんかについてどうおもいますか？',
  romaji: 'bunka ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de cultura?',
  situations: ['💬 Opiniões', '💬 Opiniões']
},
{
  id: 'mj-p-01d3268e70d9',
  kind: 'phrase',
  category: 'phrase',
  japanese: '技術について話しましょう。',
  kana: 'ぎじゅつについてはなしましょう。',
  romaji: 'gijutsu ni tsuite hanashimashou.',
  pt: 'Vamos conversar sobre tecnologia; técnica.',
  situations: ['💻 Tecnologia', '👥 Amigos e socialização']
},
{
  id: 'mj-p-d258fd548839',
  kind: 'phrase',
  category: 'phrase',
  japanese: '技術についてどう思いますか？',
  kana: 'ぎじゅつについてどうおもいますか？',
  romaji: 'gijutsu ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de tecnologia; técnica?',
  situations: ['💻 Tecnologia', '💬 Opiniões']
},
{
  id: 'mj-p-0c46873578d0',
  kind: 'phrase',
  category: 'phrase',
  japanese: '人工知能についてどう思いますか？',
  kana: 'じんこうちのうについてどうおもいますか？',
  romaji: 'jinkouchinou ni tsuite dou omoimasu ka?',
  pt: 'O que você acha de inteligência artificial?',
  situations: ['💻 Tecnologia', '💬 Opiniões']
},
{
  id: 'mj-p-afe8d38707cd',
  kind: 'phrase',
  category: 'phrase',
  japanese: '漢字を勉強しています。',
  kana: 'かんじをべんきょうしています。',
  romaji: 'kanji o benkyou shite imasu.',
  pt: 'Estou estudando kanji.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-b11c0671a493',
  kind: 'phrase',
  category: 'phrase',
  japanese: '漢字を教えてください。',
  kana: 'かんじをおしえてください。',
  romaji: 'kanji o oshiete kudasai.',
  pt: 'Por favor, me ensine kanji.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-cb4085c18734',
  kind: 'phrase',
  category: 'phrase',
  japanese: '単語を勉強しています。',
  kana: 'たんごをべんきょうしています。',
  romaji: 'tango o benkyou shite imasu.',
  pt: 'Estou estudando palavra; vocábulo.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-1d9ae524d62b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '単語は難しいです。',
  kana: 'たんごはむずかしいです。',
  romaji: 'tango wa muzukashii desu.',
  pt: 'Palavra; vocábulo é difícil.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-e52b305a2ca4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '単語を教えてください。',
  kana: 'たんごをおしえてください。',
  romaji: 'tango o oshiete kudasai.',
  pt: 'Por favor, me ensine palavra; vocábulo.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-6334c2c1d897',
  kind: 'phrase',
  category: 'phrase',
  japanese: '文法を勉強しています。',
  kana: 'ぶんぽうをべんきょうしています。',
  romaji: 'bunpou o benkyou shite imasu.',
  pt: 'Estou estudando gramática.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-fe1e66a02988',
  kind: 'phrase',
  category: 'phrase',
  japanese: '文法は難しいです。',
  kana: 'ぶんぽうはむずかしいです。',
  romaji: 'bunpou wa muzukashii desu.',
  pt: 'Gramática é difícil.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-0bb69b819605',
  kind: 'phrase',
  category: 'phrase',
  japanese: '文法を教えてください。',
  kana: 'ぶんぽうをおしえてください。',
  romaji: 'bunpou o oshiete kudasai.',
  pt: 'Por favor, me ensine gramática.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-f48572a145bd',
  kind: 'phrase',
  category: 'phrase',
  japanese: '発音を勉強しています。',
  kana: 'はつおんをべんきょうしています。',
  romaji: 'hatsuon o benkyou shite imasu.',
  pt: 'Estou estudando pronúncia.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-789a57e7c41f',
  kind: 'phrase',
  category: 'phrase',
  japanese: '発音は難しいです。',
  kana: 'はつおんはむずかしいです。',
  romaji: 'hatsuon wa muzukashii desu.',
  pt: 'Pronúncia é difícil.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-3d47ebf7ad5e',
  kind: 'phrase',
  category: 'phrase',
  japanese: '発音を教えてください。',
  kana: 'はつおんをおしえてください。',
  romaji: 'hatsuon o oshiete kudasai.',
  pt: 'Por favor, me ensine pronúncia.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-331e2b7eac3b',
  kind: 'phrase',
  category: 'phrase',
  japanese: '読み方を教えてください。',
  kana: 'よみかたをおしえてください。',
  romaji: 'yomikata o oshiete kudasai.',
  pt: 'Por favor, me ensine modo de ler.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-7e22fb8c22a4',
  kind: 'phrase',
  category: 'phrase',
  japanese: '書き方を教えてください。',
  kana: 'かきかたをおしえてください。',
  romaji: 'kakikata o oshiete kudasai.',
  pt: 'Por favor, me ensine modo de escrever.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-6ee78a4f0029',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本語を勉強しています。',
  kana: 'にほんごをべんきょうしています。',
  romaji: 'nihongo o benkyou shite imasu.',
  pt: 'Estou estudando língua japonesa.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-bcb604826d50',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本語は難しいです。',
  kana: 'にほんごはむずかしいです。',
  romaji: 'nihongo wa muzukashii desu.',
  pt: 'Língua japonesa é difícil.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-b956ce128167',
  kind: 'phrase',
  category: 'phrase',
  japanese: '日本語を教えてください。',
  kana: 'にほんごをおしえてください。',
  romaji: 'nihongo o oshiete kudasai.',
  pt: 'Por favor, me ensine língua japonesa.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-9780f19d5b33',
  kind: 'phrase',
  category: 'phrase',
  japanese: '英語を勉強しています。',
  kana: 'えいごをべんきょうしています。',
  romaji: 'eigo o benkyou shite imasu.',
  pt: 'Estou estudando língua inglesa.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-d35352e09f35',
  kind: 'phrase',
  category: 'phrase',
  japanese: '英語を教えてください。',
  kana: 'えいごをおしえてください。',
  romaji: 'eigo o oshiete kudasai.',
  pt: 'Por favor, me ensine língua inglesa.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-bc6edee999af',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ポルトガル語を勉強しています。',
  kana: 'ぽるとがるごをべんきょうしています。',
  romaji: 'porutogarugo o benkyou shite imasu.',
  pt: 'Estou estudando língua portuguesa.',
  situations: ['🎓 Aula de japonês']
},
{
  id: 'mj-p-7f27702a78e5',
  kind: 'phrase',
  category: 'phrase',
  japanese: 'ポルトガル語を教えてください。',
  kana: 'ぽるとがるごをおしえてください。',
  romaji: 'porutogarugo o oshiete kudasai.',
  pt: 'Por favor, me ensine língua portuguesa.',
  situations: ['🎓 Aula de japonês']
},
];
