<!-- BADGES -->
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555)](https://www.linkedin.com/in/renan-r-s-paiva/)

<br />
<div align="center">
  <a href="https://comfy-moonbeam-f91370.netlify.app/">
    <img src="https://user-images.githubusercontent.com/101148797/182475941-facfe762-91bf-405b-ba78-20bdd5db4be4.svg" alt="Logo Make" />
  </a>

  <h3 align="center">Make + (web)</h3>

  <p align="center">
    Site e aplicativo para Maquiadora profissional e suas clientes. No site é realizado o acesso da cliente e no app o acesso da maquiadora.
    <br />
    <a href="https://comfy-moonbeam-f91370.netlify.app/"><strong>Acessar demonstração »</strong></a>
    <br />
    (<a href="#usuários-pré-cadastrados">ver usuários pré-cadastrados</a>)
  </p>
</div>

<details>
  <summary>Sumário</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o projeto</a></li>
    <li><a href="#processo-de-trabalho">Processo de trabalho</a></li>
    <li>
      <a href="#como-executar-o-projeto">Como executar o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#executando-o-site">Executando o site</a></li>
        <li><a href="#executando-o-aplicativo">Executando o aplicativo</a></li>
        <li><a href="#usuários-pré-cadastrados">Usuários pré-cadastrados</a></li>
      </ul>
    </li>
    <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
    <li><a href="#autor">Autor</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>   
  </ol>
</details>

# Sobre o projeto

A dificuldade na marcação e contato com uma maquiadora, ter acesso a seus trabalhos, pode fazer um pedido, ter um evento onde vai precisar de uma maquiadora para vários tipos de serviço.

Conseguir ter acesso a todas essas informações em unico lugar é difícil, a Make+ vem com uma solução simples.

No site do Make+ é muito fácil criar a sua conta e fazer um pedido informando os serviços, o local onde irá se arrumar, horário e outros detalhes do que precisa ser feito. Com um sistema único de preços, o valor do serviço mais do atendimento aparece na tela e o cliente pode confirmar se quer registrar o pedido ou não.

Optando por confirmar o pedido, o pagamento é feito de forma descomplicada usando o PayPal e o pedido já vai automaticamente para os aplicativo da maquiadora.

A maquiadora é responsável por receber os pedidos, aceitá-los ou não e finalizá-los após a conclusão do serviço. Para este a maquiadora foi desenvolvido um aplicativo nativo.

Neste aplicativo da maquiadora pode se autenticar e visualizar os pedidos em 3 status:

- Disponíveis: Aqueles que ele pode escolher para realizar o serviço ou não;
- Em andamento: Os que ele já escolheu mas ainda não finalizou;
- Finalizados: Os pedidos já concluídos ou negado.

Além disso, quando o pedido está em andamento é possível traçar rota para o endereço aonde será feito o serviço.

A demonstração do acesso do cliente funcionando está disponível no link https://comfy-moonbeam-f91370.netlify.app/. [Clique aqui para ver usuários pré-cadastrados](#usuários-pré-cadastrados).

Para acessar o aplicativo da maquiadora é preciso executá-lo no computador [clicando aqui](#executando-o-aplicativo) e executando os passos.

Os recursos implementados no portal do cliente foram:

- Layout responsivo que se adequa a diferentes tamanhos de tela;
- Cadastro de usuários;
- Autenticação de usuários;
- Solicitação de novos pedidos;
- Integração com Google Maps para completar endereços;
- Integração com Google Maps para exibir mapa com ponto;
- Integração com PayPal para aceitar pagamentos.

Os recursos implementados no aplicativo da maquiadora foram:

- Autenticação de usuários;
- Listagem de pedidos disponíveis:
  - Ver detalhes do pedido;
  - Aceitar ou negar pedido;
- Listagem de pedidos em andamento:
  - Ver detalhes do pedido;
  - Cancelar pedido;
  - Finalizar pedido;
  - Traçar rota para endereço da execução do serviço;  
- Listagem de pedidos finalizados:
  - Ver detalhes do pedido;
  
  # Processo de trabalho

O primeiro passo foi escolher um problema: Pessoas que tem dificuldade para contratar uma maquiadora, ter acesso ao valores e tipos de serviços e maquiadora que possui todo um processo manual para passar as informações dos seus serviços.

Seguindo a proposta do Bootcamp, a solução do problema foi implementada em duas etapas. Uma primeira onde o foco foi o cliente final que realiza os pedidos através da Web e uma segunda que complementou a solução focando na maquiadora que faz o acesso através de um aplicativo nativo.

Desta forma, foi elaborado um protótipo de ambos os acessos utilizando a ferramenta Figma e que está disponível nos link: https://www.figma.com/file/2op6puBAGwKedr3BsvrPzR/Projeto-4-e-5---Make-%2B?node-id=2%3A1489

Como o foco deste projeto era o desenvolvimento do front-end, utilizei o Firebase para lidar com toda a parte de back-end. Utilizando os serviços Firestore e Authentication foi possível salvar dados em um banco de dados direto do front-end, permitindo uma rápida prototipação.

Para melhorar a segurança, em um projeto real, o ideal é que algumas operações ocorressem no servidor utilizando o Cloud Functions, por exemplo. Porém, como o objetivo deste projeto foi o aprendizado de front-end, isto não foi implementado.

Ao contrário dos projetos anteriores, este projeto foi feito utilizando TypeScript. Aprendi que o TypeScript é um forte aliado em projetos com tempo de duração de médio a longo prazo, pois ajuda a deixar o código com manutenção mais fácil.

Também pensando em aumentar a qualidade do software, implementei meus primeiros testes automatizados no React para Web e no React Native, utilizando o JEST em conjunto com o React Testing Library.

A gestão do projeto foi feita com base no ciclo PDCA (Planejar, Executar, Checar, Agir) e as tarefas foram quebradas em cards do Trello com base no quadro Kanban. O Trello está disponível pelo link: https://trello.com/b/HTjTvbNq/projeto-4-e-5-make

# Como executar o projeto

## Pré-requisitos

Antes de seguir o passo a passo para executar o projeto é preciso ter instalado no computador o [Git](https://git-scm.com/), o [Node.js](https://nodejs.org) e o gerenciador de pacotes `npm` (instalado junto com o Node.js).

## Executando o site

- Faça o download do código fonte no computador:
```sh
git clone https://github.com/RenanRPaiva/make-web.git
```

- Com o terminal na pasta `make-web` execute os comandos abaixo para instalar as dependências e iniciar o site:
```sh
yarn
yarn start
```
## Executando o aplicativo

- Faça o download do código fonte no computador:
```sh
git clone https://github.com/RenanRPaiva/MakeMobile.git
```

- Siga o passo-a-passo do React Native para configurar o React Native CLI de acordo com o seu sistema operacional: https://reactnative.dev/docs/environment-setup

- Com o terminal na pasta `MakeMobile` execute os comandos abaixo para instalar as dependências e iniciar o Metro:
```sh
yarn
yarn start
```

- Utilize um dos comandos abaixo para executar o aplicativo na plaforma desejada:
```sh
yarn android
yarn ios
```

Link do Github do aplicativo: [Github](https://github.com/RenanRPaiva/MakeMobile)

**IMPORTANTE:** A versão iOS só irá funcionar se você estiver utilizando um computador com MacOS.

## Usuários pré-cadastrados

O banco de dados já conta com os seguintes usuários de demonstração:

### Cliente

**E-mail:** cliente@cliente.com

**Senha:** 12345678

### Parceiro

**E-mail:** maquiadora@maquiadora.com

**Senha:** 12345678

# Tecnologias utilizadas
- HTML 5
- CSS
- Javascript
- TypeScript
- React
- React Native
- Bootstrap com a bilioteca `react-bootstrap`
- Redux com toolkit
- Styled-components
- Testes automatizados com JEST e React Testing Library

# Autor
Renan Rodrigues S. Paiva - renan_13rj@yahoo.com.br

https://www.linkedin.com/in/renan-r-s-paiva/

# Agradecimentos

Obrigado [Infnet](https://www.infnet.edu.br/). Este projeto foi uma grande oportunidade de aprofundar no desenvolvimento com o framework React utilizando tecnologias avançadas como Typescript, Jest e Redux.

Pude perceber neste primeiro contato com o React Native que a maior parte do conhecimento adquirido trabalhando na Web pode ser aproveitado no desenvolvimento de aplicativos e me interessei bastante por esse mercado.


Também não esquecer do professor [Victor](https://www.linkedin.com/in/victorassis/) pelo apoio e excelente profissional.
