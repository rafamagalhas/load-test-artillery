
# 📌 Testes de Carga: Importância e Insights

  

## 🚀 Introdução

Testes de carga são uma prática essencial na engenharia de software para avaliar o desempenho de uma aplicação sob diferentes níveis de demanda. Eles ajudam a identificar gargalos, avaliar a escalabilidade e garantir que o sistema consiga lidar com um grande número de usuários simultaneamente.  

## 🔍 O que é um Teste de Carga?

Um teste de carga simula múltiplos usuários acessando um sistema ao mesmo tempo para verificar seu comportamento sob pressão. O objetivo principal é medir o tempo de resposta, a taxa de erros e a capacidade do servidor de manter um desempenho estável sob diferentes condições.

## ✅ Benefícios do Teste de Carga:

Identificação de Gargalos → Detecta pontos críticos que causam lentidão ou falhas.
Melhoria da Experiência do Usuário → Garante tempos de resposta rápidos e estáveis.
Planejamento para Escalabilidade → Ajuda a prever a necessidade de aumentar recursos.
Prevenção de Falhas em Produção → Reduz riscos de downtime em situações reais de alta demanda.

## 📊 Como Interpretar um Relatório de Teste de Carga?

### Principais Métricas:
- Tempo de Resposta (Response Time): Tempo médio que o sistema leva para responder a uma requisição.
- Taxa de Requisições por Segundo (Request Rate): Quantidade de requisições que o sistema pode processar por segundo.
- Códigos de Status HTTP: Indica o sucesso ou falha das requisições.
- 2xx → Sucesso
- 4xx → Erros do cliente
- 5xx → Erros do servidor
- Percentis (p95, p99): Mede o tempo de resposta para 95% ou 99% das requisições, ajudando a entender os piores cenários.

## 📌 Experimento de Teste de Carga

No teste que realizamos utilizando Artillery, submetemos uma API a um grande volume de requisições simultâneas para observar seu comportamento sob estresse. Os resultados revelaram uma quantidade significativa de respostas 5xx, indicando falhas no servidor devido à alta carga. Além disso, analisamos os percentis p95 e p99, que mostraram tempos de resposta elevados, sugerindo a necessidade de otimizações como o uso de pool de conexões, cache (Redis) e balanceamento de carga.
Após a aplicação de otimizações, repetimos o teste e observamos uma redução nos tempos de resposta e na taxa de erros, validando a importância desse tipo de análise para garantir a estabilidade do sistema.

## 💡 Dicas de uso
No teste de carga `load-test-processor.yml` foi utilizado um recurso muito interessante, observe a linha 6, na qual tem uma instrução chamada `processor`. Essa propriedade referencia um arquivo .js, na qual pode conter uma ou mais funções que auxiliem a excução dos testes de carga. Como exemplo, eu criei uma função que gera um valor de texto aleatório. 

## 🚀 Conclusão

Realizar testes de carga regularmente permite otimizar a performance e evitar surpresas desagradáveis em produção. Ferramentas como Artillery, JMeter e k6 são ótimas opções para realizar esses testes e garantir a estabilidade do sistema sob diferentes condições de uso.
Manter um monitoramento contínuo e ajustar configurações de infraestrutura conforme necessário é essencial para um ambiente escalável e confiável! 🔥