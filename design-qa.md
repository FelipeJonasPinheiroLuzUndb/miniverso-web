# QA — Abertura imersiva Miniverso

Data: 12/09/2026.

## Alvo e evidências

- Source visual truth: `docs/intro-evidence/astra-reference.png`, capturado de https://openai.com/pt-BR/index/gpt-6-astra/.
- Direção: composição estrelada com palavras laterais e assunto central, adaptada conforme solicitação do usuário para headset, nome e paleta Miniverso.
- Implementation screenshot: `docs/intro-evidence/desktop-opening.png`.
- Full-view comparison evidence: `docs/intro-evidence/reference-comparison.png`, referência à esquerda e implementação à direita no mesmo arquivo, aberto e inspecionado.
- Viewport CSS desktop: 1280×720. Ambas as capturas: 1265×712 pixels, com a mesma normalização do navegador. Não houve redimensionamento de uma captura para simular correspondência; composição apenas lado a lado.
- Estado: primeira dobra, rolagem inicial. A referência anima autonomamente o campo; a implementação usa a narrativa de rolagem solicitada, não um clone quadro a quadro.
- Estados adicionais: `desktop-reveal.png`, `mobile-opening.png` (390×844 CSS), `mobile-reduced.png`, `mobile-small.png` (320×740 CSS).
- Tablet visualmente conferido em 760×900 CSS.
- Comparação focada separada não necessária: os elementos importantes da composição (palavras, assunto central, margens e marca) são grandes e legíveis nas capturas completas. Controles pequenos, menu e estados móveis foram conferidos diretamente no navegador.

## Superfícies de fidelidade

- Tipografia: fonte sans-serif local, palavras minúsculas coerentes com a assinatura da Miniverso, maior escala que a referência como adaptação intencional. Texto principal, serviços e portfólio sem truncamento.
- Layout: assunto central e palavras laterais, bastante espaço negativo, cabeçalho e controles fora do foco principal. Imagens laterais parcialmente cortadas de propósito como fragmentos decorativos; seleção completa vem no portfólio.
- Cores: fundo quase preto/azul para mistério; roxo `#211747` e ciano na revelação, derivados da apresentação pública da Miniverso, não tratados como manual oficial de marca validado.
- Imagens: headset raster real com alpha, fundo raster gerado e imagens originais da Miniverso salvas localmente. Nenhum headset, logo ou thumbnail simulado por desenho CSS/SVG. Imagens dos projetos preservam a proporção 16:9.
- Conteúdo: títulos, descrições e links dos projetos conferidos na página pública; sem indicadores de resultados inventados. Texto-base comercial anterior preservado e sujeito à revisão da empresa antes da publicação.

## Histórico de correções

1. [P2] Headset muito próximo das palavras na primeira composição desktop. Gap ampliado de 32vw para 39vw e headset reduzido de 48vw para 43vw; `desktop-opening.png` e comparação conjunta mostram melhor separação. Pequena sobreposição decorativa com a alça permanece intencional; letras não são ocultadas.
2. [P2] Link de pular conteúdo duplicado no shell e HTML original. Removida a cópia adicionada ao shell; snapshot final contém um único link.
3. [P2] Em viewport CSS de 320px, `body` mínimo 320px excedia os 305px disponíveis com barra vertical. Removida largura mínima; pós-correção `scrollWidth=clientWidth=305`, evidência `mobile-small.png`.
4. [P2] Mudar para movimento reduzido no meio da abertura encurtava a seção e deixava o visitante abaixo da cena. Ajustado o controle para preservar a âncora da introdução; teste mostrou `scrollY=0`, altura estática de 844px e botão pressionado.
5. [P2] Imagens PNG ausentes do padrão original de precache. Acrescentado PNG/WebP ao padrão; build final inclui as seis imagens locais, 13 entradas no precache.

## Interações testadas

- Rolagem inicial → aproximação → revelação, com capturas de estado intermediário e final.
- Menu móvel abre e fecha; Projetos navega para `/#portfolio`, seção a 24px do topo, sem menu aberto.
- Controle Reduzir movimento/Ativar movimento alterna os estados e a altura do trecho.
- Blog navega para `/blog` com conteúdo anterior; logo retorna à Home e rolagem inicial.
- Links dos projetos têm URLs públicas verificadas e aviso de nova aba; contato utiliza mailto, sem envio de mensagem automatizado.
- Console do navegador consultado após navegação e animação: sem erros ou avisos capturados.
- 4 testes automáticos da timeline passaram; compilação passou.

## Limites e refinamentos

- P3: compressão dos PNGs e medição de desempenho em aparelhos físicos antes de produção.
- P3: ampliar a etapa de fragmentos para modelos 3D reais quando a equipe fornecer os modelos e aprovar a biblioteca de renderização.
- Preferência do sistema para movimento reduzido está implementada; alternância manual verificada. Sem auditoria automatizada WCAG completa.
- Offline: precache validado estruturalmente; perda real de rede na PWA instalada não foi simulada nesta verificação.
- Blog, login e dashboard continuam na etapa anterior, fora do escopo desta abertura.

## Checklist final

- [x] Captura da referência e da implementação abertas e comparadas conjuntamente.
- [x] Composição, paleta, imagens e texto conferidos.
- [x] Corrigidas as ocorrências P2 identificadas.
- [x] Menu, navegação, opção estática e seleção de projetos conferidos.
- [x] PNGs incluídos no precache; build e testes aprovados.
- [x] Durante a implementação e o QA, nenhuma publicação, integração na branch principal ou alteração nas fontes sincronizadas.

final result: passed
