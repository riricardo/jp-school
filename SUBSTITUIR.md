# Japcket — nova versão

## Instalar

1. Extraia este ZIP.
2. Substitua `app.js`, `engine.js`, `index.html`, `style.css` e `sw.js` na raiz do site.
3. Mantenha seu `data.js`, manifesto e ícones. O banco não está neste pacote.
4. Publique e atualize a página com internet.

## Proficiência

Quatro sequências independentes por item: japonês → português, português → japonês, kana → kanji e kanji → kana. Dez acertos consecutivos levam ao domínio. Um erro zera apenas aquela sequência.

Revelar a resposta zera imediatamente a sequência atual e bloqueia “Sei”. Toque em “Não sei” para continuar e agendar a repetição. Revelar romaji no treino kanji → kana ou português → japonês também invalida. A tradução sempre visível invalida japonês → português. Romaji no japonês → português é apenas uma leitura alternativa, permitida nesse treino.

A ajuda usada fica registrada após atualizar a página ou abrir as configurações; esconder a ajuda depois não restaura o acerto.

## Furigana automático

A opção “Furigana até dominar o kanji” mostra a leitura nos modos de tradução até o item atingir dez acertos consecutivos em kanji → kana. Depois, esconde. Se essa sequência zerar, volta a mostrar. No treino kanji → kana, a leitura começa escondida para você responder sem ajuda. Palavras sem kanji não têm furigana.

## Repetição

Ao errar, o desafio volta uma única vez, após 20 outros desafios por padrão. Configure “Repetir erro após” no menu (1 a 2000). Se errar essa revisão, a sequência continua zerada, mas não há outra repetição naquela rodada. Se acertar, segue normalmente sem outra repetição. Em novas rodadas, ele pode ser sorteado novamente.

Se restarem menos desafios, volta no fim da fila. O intervalo conta desafios apresentados, incluindo outras habilidades e revisões. Alterações valem imediatamente para os próximos erros; revisões já agendadas mantêm sua posição. São intervalos dentro da rodada, não entre dias.

## Histórico

Os dados anteriores permanecem salvos. O histórico que não distinguia direções continua nos campos antigos e em `legacy`; ele não é convertido em acertos para as quatro habilidades.

## Ler o código

- `engine.js`: contagem, elegibilidade, sorteio e repetição.
- `app.js`: tela, configurações, ajudas e armazenamento local.
- `index.html`: estrutura dos controles e da lição.
- `style.css`: aparência e adaptação ao celular.
- `sw.js`: atualização e funcionamento offline.

O código está formatado, com recuos e comentários.

## Zerar progresso

Em Configurações, toque em “Zerar progresso” e confirme. Apaga as quatro proficiências, o histórico antigo e a rodada atual, mantendo as configurações e o banco de conteúdo. Não é possível desfazer. Uma nova rodada começa se houver conteúdo e habilidades selecionados.

## Interface

Indicadores compactos com percentual e barra, opções agrupadas por seção e botões de tamanhos consistentes. Ajudas separadas: Furigana, Romaji e PT; 日本語 ou Kanji nos modos inversos. Cada botão revela somente aquela informação. Revelar furigana ou romaji em kanji → kana invalida a tentativa; revelar PT em japonês → português também. O progresso e suas configurações são mantidos.
