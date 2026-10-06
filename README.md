# Japonês Pocket v2

1. Extraia o ZIP e envie os arquivos de dentro da pasta japanese-study para a raiz do seu repositório, substituindo os anteriores.
2. Abra seu GitHub Pages com internet e recarregue novamente após o Service Worker atualizar. O cache tem versão nova, sem aviso na interface.
3. Chrome no Android → Instalar aplicativo / Adicionar à tela inicial. Depois teste em modo avião.

Para testar no computador: abra index.html, ou use um servidor localhost para testar cache/PWA. HTTPS ou localhost é necessário para Service Worker.

⚙️ configura conteúdo, sentido e tamanho da próxima rodada. Alterações na leitura são imediatas. Nova rodada não apaga a proficiência.
✅ aumenta a sequência; ❌ zera a sequência daquele item e repete o cartão. O máximo é 10 acertos seguidos em todos os itens.

Mesmo navegador e endereço mantêm e migram o progresso da versão 1. Mudar o domínio, limpar dados do navegador ou usar outro aparelho não transfere progresso. Não há login/sincronização.

Edite data.js para ampliar o conteúdo. IDs precisam ser únicos e estáveis. Use kind: "word", "phrase" ou "paragraph"; mantenha japanese, kana, romaji, meaning e segments. segments aceita texto e pares [kanji, leitura].

Ao modificar arquivos publicados, aumente CACHE em sw.js para invalidar o cache antigo. Leia PLANO.md para regras de pontuação e repetição.
