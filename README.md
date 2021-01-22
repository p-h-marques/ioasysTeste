<h1 align="center">Teste técnico ioasys</h1>

<div align="center">
  <strong>Olá! Aqui é o Pedro, e cá estou entregando o testezinho!</strong>
</div>
<div align="center">
  Vou descrever um pouco das organizações e observações que tive durante o desenvolvimento do trampo.
</div>

## Rodando o projeto

Pra poder clonar e rodar o projeto direitinho, é só mandar aqueles comandos padrão de sempre:

```bash
npm i && npm start
```

## Estrutura de Pastas

Pra organizar essa bagunça que pode se tornar o React, eu usei uma estrutura de pastas que segue o seguinte:

- **assets**: onde coloquei as imagens e ícones das telas
- **components**: todos os componentes são organizados por aqui, exceto aqueles que representam páginas. As subpastas são `admin` e `login`, para separar as áreas do sistema.
- **pages**: todos os componentes que são referenciados pelo arquivo de rotas, representando as páginas do sistema. As subpastas são as mesmas dos componentes.
- **store**: pra organizar toda a mágica que rola dentro do React:
  - actions: scripts que modificam o estado global da aplicação
  - context & providers: instanciando e disponibilizando o estado pra aplicação
  - reducers: organizador dos dados que são inseridos no estado da aplicação
- **themes**: cores, estilos de fonte e outras coisas relacionadas ao design system da aplicação.

## Possíveis melhorias

Os requisitos principais do app foram atendidos, mas devido ao tempo, algumas coisas que eu acharia bacana inserir ficaram de fora. Mas, não pode esquecer:

- A validação que o JS faz dos inputs é bem simples, coloquei apenas para validar um mínimo de caracteres. Porém, tem uma lib bem massa em [js-brasil](http://https://github.com/mariohmol/js-brasil "js-brasil"), que otimiza pra gente essa validação (e muitas outras que precisarmos)

- Pra verificar se as credenciais do usuário, salvas previamente no Local Storage, são válidas, eu faço uma requisição no endpoint `enterprises`. Porém, o ideal era ter uma rota só pra esse tipo de validação, até pra ser mais rápido.

- Alguns estilos e espaçamentos no Zeplin precisaram ser ajustados oticamente (o famoso ajuste no olho), porque ficaram diferentes da proporção que o layout tinha. E, quando os espaçamentos eram muito quebrados, eu dava uma leve arredondada.

- Algumas cores e fontes estavam fora do Styleguide, então fui criando na pastinha `themes` conforme iam surgindo.

## Observações

Algumas considerações que acho importante deixar por aqui:

- Usei styled components;

- A organização dos `providers` e `reducers` pode melhorar, mas para o tamanho atual do app, não está prejudicial;

- Seguindo o protótipo, os elementos ficaram bem grandões;

- Na responsividade, cuidei para que tudo não quebrasse, mas apenas a tela da lista de empresas é que precisou de um cuidado maior.