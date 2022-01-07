# rduz.me
App gratuito para reduzir/encurtar links.

##### Como o Firebase foi usado?
 - Firebase Functions: gera o código aleatório com NanoID usado no link reduzido/encurtado
 - Firebase Firestore: armazena o link reduzido/encurtado
 - Firebase Hosting: hospeda o app feito em React App e o conecta ao domínio

### Instalação
Instale o Firebase Tools: https://firebase.google.com/docs/cli

## React App
 - Entre na pasta: ```$ cd site```
 - Instale as dependências: ```$ yarn install``` ou ```$ npm install```
 - Para executar o projeto: ```$ yarn start``` ou ```$ npm start```

## Firebase
 - Entre no nas pasta raíz: ```$ cd .. && cd functions```
 - Instale as dependências: ```$ yarn install``` ou ```$ npm install```

### Execução
O Firebase Hosting executa apenas arquivos estáticos, por isso, para ele executar o React App é necessário compilá-lo:

- ```$ yarn build``` ou ```npm build```

Feita a compilação o React App agora ficará integrado ao Firebase Hosting e também já poderá ser executado localmente ou implantado em produção.

 - Local: ```$ firebase emulators:start```
 - Produção: ```# firebase deploy```


>> Criar **.env** com as a seguintes variáveis:
>> ```REACT_APP_DOMAIN=https://...```
>> ```REACT_APP_URL_API=$REACT_APP_DOMAIN/do```
