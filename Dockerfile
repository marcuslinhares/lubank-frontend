# Etapa de build
FROM node:14 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código para o container
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Copia os arquivos compilados para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta usada pelo Nginx
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
