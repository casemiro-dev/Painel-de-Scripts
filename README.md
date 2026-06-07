<div align="center">
  <br/>
  <img src="https://img.shields.io/badge/status-ativo-brightgreen?style=flat-square" alt="Status"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript ES6"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase"/>
  <br/><br/>
</div>

<h1 align="center">Painel de Scripts</h1>

<p align="center">
  <b>Dashboard interativo de scripts e atalhos para call center</b><br/>
  Consulta rapida de scripts atualizados em tempo real com sugestao da equipe.
</p>

---

## Sobre o Projeto

O **Painel de Scripts** é uma aplicação web que centraliza todos os scripts de atendimento de uma operação de call center em um único lugar. Com atualização em **tempo real via Supabase Realtime**, os operadores consultam rapidamente o script correto para cada situação — sem precisar procurar em planilhas, papéis ou sistemas dispersos.

O painel também conta com um sistema de **avisos importantes** e um canal de **sugestões** onde os próprios operadores podem propor novos scripts.

---

## Funcionalidades

### Central de Scripts
- **Tabela Dinâmica**: Scripts organizados por setor e código
- **Ordenação Automática**: Scripts ordenados por setor e código ascendente
- **Atualização em Tempo Real**: Alterações refletem instantaneamente nos painéis de todos os operadores

### Sistema de Avisos
- **Notificações**: Sino com badge indicando quantidade de avisos não lidos
- **Modal de Leitura**: Clique no sino para abrir o modal com todos os avisos
- **Atualização em Tempo Real**: Novos avisos aparecem automaticamente

### Canal de Sugestões
- **Envio de Sugestões**: Operadores podem sugerir novos scripts diretamente pelo painel
- **Armazenamento no Banco**: Sugestões são salvas no Supabase para avaliação da supervisão

### Experiência do Usuário
- **Tailwind CSS**: Interface moderna e responsiva
- **Modal com backdrop-blur**: Design limpo e focado
- **Badge no sino**: Indicador visual de avisos pendentes

---

## Tecnologias

| Tecnologia | Aplicação |
|---|---|
| **HTML5** | Estrutura semântica |
| **CSS3 + Tailwind CSS** | Estilização utilitária e responsiva |
| **JavaScript ES6** | Lógica da aplicação |
| **Supabase** | Banco de dados PostgreSQL, Realtime e autenticação |
| **Supabase Realtime** | Atualização instantânea de scripts e avisos |

---

## Estrutura do Projeto

```
Painel-de-Scripts/
  index.html            Pagina principal com tabela e formulario de sugestao
  style.css             Estilos customizados complementares
  script.js             Lógica de carregamento, renderizacao e eventos
  supabase-config.js    Configuracao do cliente Supabase
  .gitignore            Arquivos ignorados
  README.md             Documentacao
```

---

## Como Executar

```bash
# Clone o repositorio
git clone https://github.com/casemiro-dev/Painel-de-Scripts.git

# Acesse o diretorio
cd Painel-de-Scripts

# Configure o Supabase
# Edite o arquivo supabase-config.js com as credenciais do seu projeto

# Abra o index.html no navegador
start index.html
```

---

## Estrutura do Banco (Supabase)

### Tabela: `scripts`
| Coluna | Tipo | Descricao |
|---|---|---|
| `id` | int8 (PK) | Identificador unico |
| `setor` | text | Setor do script (ex: Suporte, Vendas) |
| `codigo` | text | Codigo de identificacao |
| `mensagem` | text | Conteudo do script |

### Tabela: `avisos`
| Coluna | Tipo | Descricao |
|---|---|---|
| `id` | int8 (PK) | Identificador unico |
| `texto` | text | Conteudo do aviso |
| `created_at` | timestamptz | Data de criacao |

### Tabela: `sugestoes`
| Coluna | Tipo | Descricao |
|---|---|---|
| `id` | int8 (PK) | Identificador unico |
| `texto` | text | Conteudo da sugestao |
| `data` | text | Data de envio |

---

## Fluxo de Uso

1. **Consultar Scripts**: Acesse o painel e veja todos os scripts disponiveis
2. **Filtrar**: Use o campo de busca para encontrar rapidamente o script desejado (funcionalidade no DocBox Pro)
3. **Avisos**: Fique atento ao sino para novos comunicados
4. **Sugerir**: Envie sugestoes de novos scripts diretamente pelo formulario

---

## Projetos Relacionados

| Projeto | Descricao |
|---|---|
| [DocBox Pro](https://docbox-pro.vercel.app/) | Plataforma profissional com painel de scripts integrado |
| [DocBox](https://github.com/casemiro-dev/DocBox) | Versao original de registro de atendimentos |
| [SupPaciente](https://sup-paciente.vercel.app/) | Gestao de chamados em tempo real |

---

## Autor

**Casemiro Alves**

[GitHub](https://github.com/casemiro-dev)

---

<div align="center">
  <sub>2025-2026 Casemiro Alves. Todos os direitos reservados.</sub>
</div>
