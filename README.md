<h1 align="center">
    Harry Potter App
</h1>

Aplicativo que mostra os detalhes dos personagens de Harry Potter, baseando-se na casa escolhida.

Desenvolvi esse projeto para praticar Clean Architecture e TDD.

<h2>Estrutura</h2>

```bash
--- src/core/
	-- domain: Definição de lógicas e models reaproveitáveis em qualquer aplicação(Web, Mobile) e frameworks.
	-- application: Implementação dos casos de usos especifícos para a aplicação.
	-- infrastructure: Camada externa da aplicação. Faz uso de ferramentas de terceiros.
	-- presentation: Toda a parte visual como Telas, Componentes etc..
	-- main: Nesse caso, é para instânciar as classes das demais camadas. Utilizando o pattern Factory Method.
	
--- src/shared: Tudo que é reaproveitável/compartilhado por toda aplicação.
```

<h2>Ferramentas</h2>

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Query](https://react-query-v3.tanstack.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Expo Jest](https://docs.expo.dev/guides/testing-with-jest/)
- [RNTL](https://testing-library.com/docs/react-native-testing-library/intro/)

# Rodando o projeto

Você precisa ter o [Node](https://nodejs.org/en/), o [Git](https://git-scm.com/) e algum gerenciador de pacotes([NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) || [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)) instalados em sua máquina.

Use o [ExpoGo](https://expo.dev/client) para rodar o app no seu dispositivo fisico ou no emulador.

```bash
1. Clone o repositório:
$ git clone https://github.com/gabriellima2/hp-app.git

2. Acesse a pasta e instale as dependências via terminal:
$ yarn || npm i

3. Inicie a aplicação em modo de desenvolvimento:
$ yarn start || npm run start

4. Escaneie o QRCode ou digite a URL informada
```

<p align="center">Projeto feito com 💙 por <a href="https://www.linkedin.com/in/gabriel-lima-860612236">Gabriel Lima</a></p>
