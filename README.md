# Japonês Pocket — teste com 10 palavras e 10 frases

## Testar agora
Abra index.html no computador. A interface funciona sem instalar nada; o cache PWA exige HTTPS ou localhost.

## GitHub Pages
1. Extraia o ZIP e envie o conteúdo da pasta japanese-study para a raiz do repositório.
2. GitHub → Settings → Pages → Deploy from a branch → main → / (root) → Save.
3. Abra a URL publicada no Chrome do celular, com internet, e espere aparecer “Arquivos salvos para uso offline”.
4. Menu do Chrome → Adicionar à tela inicial / Instalar aplicativo.
5. Feche, ative modo avião e abra novamente para testar offline.

## Como estudar
⚙️ configura leitura, romaji e tradução sempre visíveis, ou modo Palavras/Frases/Misturado.
あ, ABC e PT revelam apenas o cartão atual. Katakana já aparece na própria palavra quando é a escrita natural, como テレビ.
✅ retira o cartão da rodada. ❌ coloca de volta após até três outros cartões; com poucos restantes ele reaparece antes.
A rodada, configurações e progresso ficam salvos neste navegador/dispositivo. Trocar o modo inicia uma rodada nova daquele conjunto. Recomeçar rodada permite revisar tudo novamente.
Este protótipo faz repetição dentro da rodada, sem agendamento de revisão por dias. “Sei” indica sua resposta, não domínio comprovado.

## Adicionar conteúdo
Edite data.js, mantendo IDs únicos e estáveis. segments mistura texto simples e pares [kanji, leitura] para furigana alinhado. Os campos kana e type ficam disponíveis para expansão.
Para atualizar arquivos publicados, altere a versão CACHE em sw.js (por exemplo, japanese-pocket-v2). Reabra com internet e recarregue após a atualização.
Limpar os dados do navegador apaga o progresso e o cache. Não há conta nem sincronização.
