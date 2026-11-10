# Tech Budget Buddy | Recomendador de Periféricos

## 🤖 Projeto Desenvolvido com Inteligência Artificial (IA)

Este protótipo funcional foi desenvolvido com auxílio de Inteligência Artificial na plataforma Lovable, utilizando Engenharia de Prompts e desenvolvimento assistido para construir a interface de escolha de periféricos e implementar o motor de recomendação por orçamento.

O **Tech Budget Buddy** ajuda a pessoa a descobrir quais periféricos comprar dentro do valor que ela tem disponível. O usuário informa quais itens precisa (mouse, teclado, fone com fio, fone sem fio, microfone de lapela ou dedicado, monitor, mousepad e webcam), define o orçamento total e recebe uma sugestão de produto para cada categoria, com preço, avaliação e especificações. O objetivo é apresentar as opções de forma clara, com atualização instantânea e caráter exclusivamente orientativo.

## 🌟 Principais Destaques do Projeto

### 1. Seleção de Periféricos
- Lista de categorias com ícones e caixas de seleção: Mouse, Teclado, Fone com Fio, Fone Sem Fio, Microfone de Lapela, Microfone Dedicado, Monitor, Mousepad e Webcam.
- Seleção livre e múltipla: o usuário escolhe apenas os itens que realmente precisa.
- O botão de avanço fica desabilitado enquanto nenhum periférico for marcado.

### 2. Definição de Orçamento
- Campo numérico de orçamento total em reais (R$).
- Validação de entrada: orçamento vazio, zero ou negativo exibe aviso e impede o avanço.
- Aviso também quando nenhum produto foi selecionado.
- Opção de voltar e revisar a seleção de categorias antes de calcular.

### 3. Motor de Recomendação
- Distribuição do orçamento entre as categorias escolhidas com base em porcentagens de referência (monitor 40%, fone sem fio 25%, microfone dedicado 20%, teclado e fone com fio 15%, webcam 15%, microfone de lapela 10%, mouse 10%, mousepad 5%).
- As porcentagens são normalizadas conforme os itens selecionados, de modo que a soma sempre respeite o orçamento informado.
- Flexibilidade de 20% acima do valor da categoria para não descartar produtos próximos do limite.
- Escolha do melhor custo-benefício por categoria: os produtos viáveis são ordenados pela relação entre avaliação e preço, e o de melhor pontuação é recomendado.
- Base local com 23 produtos cadastrados em 9 categorias, com marca, nome, preço, especificações e avaliação.

### 4. Resultado e Cards de Recomendação
- Um card por categoria recomendada, com selo da categoria, ícone, marca e nome do produto.
- Preço em destaque no formato brasileiro, avaliação em estrelas (0 a 5) e lista de especificações.
- Orçamento total informado no topo dos resultados.
- Total estimado da seleção, somando os preços dos produtos recomendados.
- Mensagem orientativa quando o orçamento não comporta os itens escolhidos, sugerindo aumentar o valor ou reduzir a quantidade de produtos.
- Botão "Nova Consulta" para reiniciar a simulação do zero.

### 5. Interface & Experiência de Uso
- Fluxo em três etapas: seleção de periféricos, orçamento e recomendações.
- Organização em grade responsiva de cards, adaptável a diferentes tamanhos de tela.
- Feedbacks visuais por notificações (toasts) a cada ação relevante.
- Cálculos realizados localmente, sem consultas a APIs de lojas ou de preços externas.
- Sem cadastro de usuário ou armazenamento das consultas nesta versão.

## 🤖 Desenvolvimento com Inteligência Artificial

O projeto demonstra a aplicação de IA no desenvolvimento de um protótipo de recomendação de compras:

- **Prototipação de MVP**: construção do fluxo em etapas, da seleção de categorias até a tela de resultados.
- **Interface & UX**: organização visual das informações para facilitar a leitura das recomendações.
- **Lógica de recomendação**: implementação de funções locais para distribuir o orçamento e ranquear produtos por custo-benefício.
- **Base de dados de exemplo**: catálogo de produtos montado e ajustado por instrução direta.
- **Evolução assistida**: continuidade do desenvolvimento no Lovable, com possibilidade de sincronização do código com o GitHub.

## 🛠️ Tecnologias Utilizadas

- **React 18 e TypeScript**: interface e tipagem do projeto.
- **Vite 5**: servidor de desenvolvimento e geração da versão de produção.
- **Tailwind CSS 3**: estilização.
- **shadcn/ui e Radix UI**: componentes de interface (cards, botões, campos, caixas de seleção, notificações).
- **React Router DOM**: navegação entre páginas.
- **TanStack Query**: gerenciamento de chamadas e estado de dados.
- **Lucide React**: ícones das categorias.
- **Hooks do React**: estado das etapas, da seleção e das recomendações.

## ⚠️ Premissas & Limitações

- Recomendação educacional e orientativa. Os resultados são estimativas baseadas em premissas do modelo e não constituem aconselhamento de compra, análise de mercado ou garantia de melhor preço.

- Os preços, marcas e avaliações do catálogo são valores de referência cadastrados manualmente e podem estar desatualizados em relação ao mercado.
- Não há integração com lojas, marketplaces ou APIs de preços; nenhuma consulta é feita a catálogos externos.
- O orçamento é dividido por porcentagens fixas de referência, que não consideram prioridade pessoal, uso pretendido nem preferências de marca.
- O ranqueamento usa apenas avaliação e preço; fatores como durabilidade, garantia, ergonomia e ruído não entram no cálculo.
- A flexibilidade de 20% pode fazer o total estimado ultrapassar o orçamento informado.
- O catálogo tem poucos produtos por categoria (2 a 3 itens), o que limita a variedade das sugestões.
- Não há histórico, comparação lado a lado, favoritos nem persistência das consultas.

## 🚀 Como Executar o Projeto Localmente

Tenha o Node.js instalado e abra um terminal na pasta do projeto.

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev

# Gerar a versão de produção
npm run build

# Visualizar a versão de produção
npm run preview

# Executar a análise de código
npm run lint
```

Acesse o endereço exibido no terminal após iniciar o servidor. A porta pode variar conforme o ambiente.

## 🔗 Desenvolvimento no Lovable

Continue desenvolvendo no editor do projeto.

Quando a sincronização Git estiver conectada, alterações feitas no Lovable são enviadas ao repositório vinculado, e alterações enviadas à branch sincronizada no GitHub retornam ao projeto.

---

Desenvolvido com auxílio de IA na plataforma Lovable · Protótipo orientativo de recomendação de periféricos.
