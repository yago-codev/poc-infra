# usaremos a imagem node na versão 14, derivada do linux alpine 3.13
FROM node:16-slim
# diretório de trabalho que será criado quando a imagem terminar de ser buildada
WORKDIR /usr/app
# vai copiar o package.json e o yarn.lock para dentro da pasta /home/node/app/
COPY package.json yarn.lock ./
# vai rodar o npm para instalar as dependências do projeto
RUN apt-get update && \
    apt-get upgrade && \
    yarn
# vai copiar todo o conteúdo do path raíz da nossa máquina para o path raiz do workdir
COPY . .
# vai rodar um comando de entrada quando o container for instanciado para executar o node no arquivo index
CMD [ "yarn", "start" ]