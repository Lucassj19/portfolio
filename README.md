# Portfólio de Desenvolvedor

Um portfólio moderno e responsivo criado com React, apresentando design minimalista sofisticado com toques de brutalismo digital.

## 🚀 Características

- Design moderno e profissional
- Totalmente responsivo
- Animações suaves com Framer Motion
- Navegação fluida entre seções
- Formulário de contato interativo
- Filtro de projetos por categoria
- Barras de progresso de habilidades animadas

## 🛠️ Tecnologias

- **React** - Biblioteca JavaScript para construção de interfaces
- **Framer Motion** - Biblioteca de animações para React
- **CSS3** - Estilização avançada com CSS moderno
- **Google Fonts** - Tipografia personalizada (Syne & Space Mono)

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passo a Passo

1. **Navegue até a pasta do projeto:**
   ```bash
   cd portfolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
   ou
   ```bash
   yarn start
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## 🎨 Personalização

### Alterar Informações Pessoais

1. **Hero Section** (`src/components/Hero.js`):
   - Modifique o título e descrição
   
2. **About** (`src/components/About.js`):
   - Atualize sua biografia e estatísticas

3. **Projects** (`src/components/Projects.js`):
   - Adicione seus projetos no array `projects`
   - Cada projeto deve ter: título, descrição, tags, categoria, imagem e link

4. **Skills** (`src/components/Skills.js`):
   - Atualize suas habilidades e níveis de proficiência

5. **Contact** (`src/components/Contact.js`):
   - Altere informações de contato
   - Configure links de redes sociais

### Personalizar Cores

Edite as variáveis CSS em `src/App.css`:

```css
:root {
  --color-bg: #0a0a0a;          /* Cor de fundo principal */
  --color-surface: #1a1a1a;     /* Cor de fundo secundária */
  --color-text: #ffffff;         /* Cor do texto */
  --color-text-secondary: #888888; /* Cor do texto secundário */
  --color-accent: #00ff88;       /* Cor de destaque */
  --color-border: #2a2a2a;       /* Cor das bordas */
}
```

## 📱 Estrutura de Componentes

```
src/
├── App.js                 # Componente principal
├── App.css               # Estilos globais
├── components/
│   ├── Navigation.js     # Barra de navegação
│   ├── Navigation.css
│   ├── Hero.js          # Seção hero
│   ├── Hero.css
│   ├── About.js         # Seção sobre
│   ├── About.css
│   ├── Projects.js      # Seção de projetos
│   ├── Projects.css
│   ├── Skills.js        # Seção de habilidades
│   ├── Skills.css
│   ├── Contact.js       # Seção de contato
│   └── Contact.css
```

## 🚢 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```
ou
```bash
yarn build
```

Os arquivos otimizados estarão na pasta `build/`.

## 🐳 Containerização com Docker

### Criar Dockerfile

Crie um arquivo `Dockerfile` na raiz do projeto:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Construir e executar o container:

```bash
# Construir a imagem
docker build -t portfolio .

# Executar o container
docker run -p 80:80 portfolio
```

### Docker Compose (opcional)

Crie um arquivo `docker-compose.yml`:

```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

Execute com:
```bash
docker-compose up -d
```

## 📝 Notas

- O formulário de contato atualmente apenas simula o envio. Para funcionalidade real, integre com um backend ou serviço de email (EmailJS, Formspree, etc.)
- As animações foram otimizadas para performance, mas podem ser ajustadas conforme necessário
- O design é totalmente responsivo e funciona bem em dispositivos móveis

## 🤝 Contribuindo

Sinta-se à vontade para fazer fork do projeto e customizá-lo para suas necessidades!

## 📄 Licença

Este projeto está livre para uso pessoal e comercial.

---

Desenvolvido com ❤️ e React
