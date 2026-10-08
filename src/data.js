// Modelo pequeno para testes. IDs são estáveis: não os reutilize com significados diferentes.
// kind: word | phrase | grammar; category: noun | verb | adjective | other | phrase
// situations: contextos selecionáveis; kana é a leitura completa da expressão.
// japanese pode conter kanji e kana. Para frases, inclua tradução natural.
export const cards = [
  {id:'taberu',kind:'word',category:'verb',japanese:'食べる',kana:'たべる',romaji:'taberu',pt:'comer',situations:['Cotidiano','Restaurante']},
  {id:'mizu',kind:'word',category:'noun',japanese:'水',kana:'みず',romaji:'mizu',pt:'água',situations:['Restaurante','Cotidiano']},
  {id:'eki',kind:'word',category:'noun',japanese:'駅',kana:'えき',romaji:'eki',pt:'estação',situations:['Transporte']},
  {id:'arigatou',kind:'phrase',category:'phrase',japanese:'ありがとうございます',kana:'ありがとうございます',romaji:'arigatou gozaimasu',pt:'muito obrigado(a)',situations:['Cotidiano','Restaurante']},
  {id:'eki-doko',kind:'phrase',category:'phrase',japanese:'すみません、駅はどこですか？',kana:'すみません、えきはどこですか？',romaji:'sumimasen, eki wa doko desu ka?',pt:'com licença, onde fica a estação?',situations:['Transporte']},
  {id:'menu',kind:'phrase',category:'phrase',japanese:'メニューをください',kana:'めにゅーをください',romaji:'menyuu o kudasai',pt:'o cardápio, por favor',situations:['Restaurante']},
  {id:'passport',kind:'word',category:'noun',japanese:'パスポート',kana:'ぱすぽーと',romaji:'pasupooto',pt:'passaporte',situations:['Aeroporto']},
  {id:'kankou',kind:'phrase',category:'phrase',japanese:'観光で来ました',kana:'かんこうできました',romaji:'kankou de kimashita',pt:'vim a turismo',situations:['Aeroporto']},
  {id:'hotel',kind:'phrase',category:'phrase',japanese:'予約しています',kana:'よやくしています',romaji:'yoyaku shite imasu',pt:'tenho uma reserva',situations:['Hotel']},
  {id:'tasukete',kind:'phrase',category:'phrase',japanese:'助けてください',kana:'たすけてください',romaji:'tasukete kudasai',pt:'por favor, me ajude',situations:['Emergências']},
  {id:'grammar-wa-topic',kind:'grammar',category:'grammar',japanese:'私は学生です',kana:'わたしはがくせいです',romaji:'watashi wa gakusei desu',pt:'Eu sou estudante. (は marca o tópico da frase.)',situations:['Cotidiano']},
  {id:'grammar-wo-object',kind:'grammar',category:'grammar',japanese:'水を飲みます',kana:'みずをのみます',romaji:'mizu o nomimasu',pt:'Eu bebo água. (を marca o objeto da ação.)',situations:['Cotidiano','Restaurante']},
  {id:'grammar-ni-destination',kind:'grammar',category:'grammar',japanese:'駅に行きます',kana:'えきにいきます',romaji:'eki ni ikimasu',pt:'Vou à estação. (に marca o destino.)',situations:['Transporte']},
  {id:'grammar-de-location',kind:'grammar',category:'grammar',japanese:'駅で食べます',kana:'えきでたべます',romaji:'eki de tabemasu',pt:'Como na estação. (で marca o local da ação.)',situations:['Transporte','Restaurante']},
  {id:'grammar-te-kudasai',kind:'grammar',category:'grammar',japanese:'水を飲んでください',kana:'みずをのんでください',romaji:'mizu o nonde kudasai',pt:'Por favor, beba água. (てください forma um pedido.)',situations:['Restaurante']},
  {id:'grammar-tai-desu',kind:'grammar',category:'grammar',japanese:'日本へ行きたいです',kana:'にほんへいきたいです',romaji:'nihon e ikitai desu',pt:'Quero ir ao Japão. (たい expressa desejo.)',situations:['Transporte','Cotidiano']}
];
