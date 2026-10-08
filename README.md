# ManJapa · v0.1.0

Protótipo funcional feito com Vite + JavaScript Vanilla. Dados de teste em `src/data.js`.

## Rodar

```bash
npm install
npm run dev
```

## Publicação

Execute `npm run deploy` para gerar o build e publicar a pasta `dist` na branch `gh-pages`. No GitHub → Settings → Pages, configure **Deploy from a branch**, selecione `gh-pages` e a pasta `/ (root)`. Se renomear o repositório, altere `base` em `vite.config.js`.

## Recursos

- Quatro habilidades independentes: Japonês → Português, Português → Japonês, Kana → Kanji e Kanji → Kana.
- Progresso independente para cada habilidade, com sequência de 10 acertos.
- Furigana opcional nos cartões Japonês → Português até cada cartão alcançar 10 acertos em Kanji → Kana.
- Listening com segunda oportunidade de leitura depois de errar: o erro em Listening é salvo e a leitura é avaliada separadamente.
- Conteúdo por Situação, Vocabulário, Frases e Gramática (partículas, conjugações e estruturas); revisão de erro em N cartões (padrão 20) e uma única reentrada agendada por erro.
- Botões de resposta no estilo suave do EN; versão visível no rodapé das Configurações; zerar progresso.
- Nas Configurações, combine por switches os quatro modos Japonês → Português, Português → Japonês, Kana → Kanji e Kanji → Kana; selecione Vocabulário, Frases e Gramática e personalize dicas, rodadas e áudio.
- Voz japonesa via Web Speech API sem custo de API, com seleção preferencial de vozes cuja identificação sugere serem femininas. NÃO garante voz feminina em todos os dispositivos. Se não houver voz japonesa, Listening não terá som. **Piper Plus ainda não está integrado**: requer empacotar runtime, dicionário/modelo japonês e verificar licença da voz.

## Limitações deste protótipo

O modelo de dados do antigo Japcket não é importado automaticamente: para testar use o `src/data.js` incluído. Não há Service Worker/PWA offline integrado nesta etapa. Vozes e qualidade dependem do navegador/SO. A implementação não inclui testes automatizados suficientes para publicação em produção sem validação adicional. A revisão fica na fila da sessão (não persiste entre recargas). A dica de leitura em Kanji impede pontuar aquele acerto como Kanji, mas não cria uma habilidade separada para escrita manual.
