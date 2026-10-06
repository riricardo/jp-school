# Versão 2 — plano aplicado

- Visual mobile first inspirado na sobriedade da Apple: fundo claro, tipografia do sistema, cantos arredondados, controles discretos e ícones SVG. Sem animação e sem aviso de cache.
- Topo: pontos globais e percentual de proficiência. Cada item vale até 10 pontos, correspondentes à sequência atual de acertos. Errar zera apenas aquela sequência. Máximo atual: 200 pontos com os 20 itens; com 2.000 itens será 20.000. Não arredondamos para 100% antes de atingir o máximo.
- Rodadas: quantidade configurável entre 100 e 2.000 em passos de 100. Cada rodada seleciona no máximo o número disponível de itens distintos. As repetições podem aumentar o número de apresentações.
- Seleção ponderada: itens com mais erros históricos e menor sequência têm mais chance de entrar numa rodada parcial. Com o lote de 20 e mínimo de 100, todos entram.
- Um erro faz o item reaparecer após até dois outros cartões. Ele então precisa de dois acertos separados por até três outros cartões para sair. Se não houver outros cartões, reaparece antes. Acertos normais retiram o item da rodada. Não existe botão de apagar progresso.
- Modo inverso: mostra português; botão 日本語 revela o japonês. As configurações globais não entregam a resposta antes desse botão. A sequência de pontos é compartilhada pelos dois sentidos.
- Fim da rodada: botão Jogar de novo na própria tela. Proficiência persiste entre rodadas.
- Parágrafos: modo e layout já preparados para itens kind: "paragraph", com os mesmos campos. Nenhum parágrafo adicionado: os mesmos 10 vocábulos + 10 frases foram preservados.
- Migração: no mesmo domínio e navegador, cada item antigo marcado Sei recebe sequência 1. A fila antiga em andamento é mantida. O protótipo antigo não registrava históricos suficientes para reconstruir sequências exatas.
- Configurações de conteúdo, sentido e quantidade valem para a próxima rodada; leitura, romaji e tradução mudam imediatamente.

A pontuação representa autoavaliação de lembrança, não certificação linguística. A revisão é por cartões na sessão, ainda sem calendário de repetição espaçada.
