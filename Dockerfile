# Use a imagem base do Node.js
FROM node:20

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos necessários
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Compile o projeto (se necessário)
RUN npm run build

# Exponha a porta padrão da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start"]
