# Poke Idle - Combat Log

🌍 Languages: [English](README.md) | [Português](README_BR.md) | [Español](README_ES.md)

Um userscript avançado de qualidade de vida que adiciona um registro de combate (combat log), cronômetro de sessão e funcionalidades de exportação ao Poke Idle World.

---

## ⚡ Funcionalidades

- **HUD de Registro de Combate:** Uma janela flutuante arrastável que rastreia suas estatísticas de combate.
- **Rastreamento de Dano:** Registra o dano total causado e recebido por cada Pokémon, incluindo o dano médio por acerto.
- **Histórico Detalhado:** Expanda qualquer Pokémon no registro para ver seu nível, qualidade, atributos e um histórico detalhado dos últimos 100 acertos e eventos de aumento de nível.
- **Cronômetro de Sessão:** Mostra quanto tempo sua sessão de combate atual durou.
- **Exportação de Dados:** Copie seus dados de combate para a área de transferência ou baixe-os como um arquivo `.json` para análise posterior.
- **Atualizações em Tempo Real:** Ouve automaticamente o tráfego do jogo para atualizar as estatísticas instantaneamente assim que as ações de combate ocorrem.

---
## 📸 Pré-visualização e Capturas de Tela
*(Capturas de tela a serem adicionadas)*

---

## 📖 Como Usar

1. **Entre em Combate:**
   - Simplesmente jogue normalmente. O script ouve automaticamente o tráfego de rede do jogo e começará a registrar as estatísticas assim que o seu Pokémon causar ou receber dano.

2. **Interaja com o Registro de Combate:**
   - Um HUD flutuante aparecerá no canto inferior direito da sua tela.
   - Você pode arrastar o HUD pela tela clicando e segurando o cabeçalho.
   - Clique em qualquer Pokémon na lista para expandir e ver seu histórico detalhado de acertos.

3. **Gerenciar Dados:**
   - **Copiar:** Clique em "📋 Copiar" para copiar os dados da sessão como JSON para sua área de transferência.
   - **Salvar:** Clique em "💾 Guardar" para baixar os dados da sessão como um arquivo `.json`.
   - **Resetar:** Clique em "[Reset Stats]" para limpar os dados da sessão atual e reiniciar o cronômetro.

---
## 🌐 Compatibilidade de Navegador

Este userscript é compatível com qualquer navegador de desktop moderno que execute uma extensão de gerenciador de scripts:

| Navegador | Extensão de Gerenciador Recomendada |
| :--- | :--- |
| **Google Chrome / Brave / Edge** | [Tampermonkey](https://www.tampermonkey.net/) ou [Violentmonkey](https://violentmonkey.github.io/) |
| **Mozilla Firefox** | [Tampermonkey](https://www.tampermonkey.net/) ou [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) |
| **Opera / Opera GX** | [Tampermonkey](https://www.tampermonkey.net/) |
| **Safari** | [Tampermonkey](https://www.tampermonkey.net/) |

---

## 📦 Instalação

### Opção 1: Instalação Automática (Recomendado)

1. Certifique-se de ter uma extensão de gerenciador de scripts (como **[Tampermonkey](https://www.tampermonkey.net/)**) instalada no seu navegador.
2. Clique no link abaixo para instalar o script automaticamente:

👉 **[INSTALAR USERSCRIPT DIRETAMENTE](https://raw.githubusercontent.com/Phoslead/pokeidle_combatlog/main/pokeidle_combatlog.user.js)** 👈

3. Tampermonkey exibirá uma aba de instalação. Clique em **"Install"** (Instalar).
4. Abra ou recarregue a aba do jogo!

---

### Opção 2: Instalação Manual

Se o link automático não acionar seu gerenciador de scripts, siga estes passos:

1. Abra o painel de extensões do seu navegador para **Tampermonkey** e clique em **"Create a new script..."** (Criar um novo script).
2. Abra o arquivo de script deste repositório: [`pokeidle_combatlog.user.js`](https://github.com/Phoslead/pokeidle_combatlog/blob/main/pokeidle_combatlog.user.js).
3. Copie todo o código JavaScript.
4. Cole o código dentro do editor de scripts do Tampermonkey, substituindo qualquer texto de modelo padrão.
5. Salve o script (**Ctrl + S** ou `Arquivo -> Salvar`).
6. Recarregue a aba do jogo.

---

### Opção 3: Launchers de Desktop (ex., [PokeGrid](https://github.com/soufoka/PokeGrid-source))

Se você estiver jogando através de um launcher de desktop dedicado como **PokeGrid** que inclui um gerenciador de scripts personalizado, você deve fazer um pequeno ajuste no código do script para garantir a compatibilidade e a proteção de dados.

1. Cole o script no gerenciador de scripts do launcher.
2. No topo do script, encontre estas duas linhas no cabeçalho (se houver):
   ```javascript
   // @grant        GM_getValue
   // @grant        GM_setValue
   ```
3. Mude para:
   ```javascript
   // @grant        none
   ```
4. **Salve e recarregue.**

---
