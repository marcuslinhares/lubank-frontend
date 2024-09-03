<h1 style="font-size:50px" align="center">Lubank - Front</h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/lvsouza/lubank-front/master/docs/logo-lubank.png" height="320" alt="Logo lubank" />
</p>


## Descrição

Sistema de controle de conta corrente bancária, processando solicitações de depósito, resgates e pagamentos. Esta aplicação é frontend desse projeto [aqui](https://github.com/lvsouza/lubank-backend).


## De onde veio a ideia
A ideia do projeto veio através de um desafio. Os requisitos inicias que deram origem a todo este conteúdo pode ser encontrado aqui neste [link](https://docs.google.com/document/d/109Des7J2tU1Gk_Tg8gwvgAsSm2hm1abN8XNAydOZVts/edit?usp=sharing). Os nomes e os logo tipos forande desenvolvidos apenas para dar uma identidade extra ao projeto.


## Sobre o desenvolvimento
Para ser possível a conslusão deste projeto foram utilizados algums outros recursos disponíveis aqui mesmo no github, e no figma.


1. [Link](https://github.com/lvsouza/lubank-backend/issues?q=is%3Aissue+is%3Aclosed) **Issues para consulta da documentação da API** - Para ser possível o desenvolvimento desse frontend é utilizado como backend uma API desenvolvida com nodejs. No link acima você poderá encontrar toda a documentação necessária para as conexões.

2. [Link](https://www.figma.com/file/bfGY4OUuswbhz7DMn1Y6Mr/Lubank?node-id=0%3A1) **Protótipo no figma** - Para facilitar o desenvolvimento, eu([Lucas Souza](https://github.com/lvsouza)) desenvolvi um protótipo que exemplifica os principais recursos que a aplicação terá.


## A aplicação

  - Backend da aplicação [aqui](https://github.com/lvsouza/lubank-backend).
- **Principais funcionalidades**
  - Autenticação - Permite que um usuário que já tenha uma conta cadastrada faça login e veja sua conta
  - Cadastro - Permite que um pessoa possa criar uma conta dentro da aplicação e tenha uma conta remunerada
  - Extrato / histórico da conta (entradas e saídas) - Permite que seja consultado o extrato completo da conta
  - Realizar um depósito - Possibilita que seja feito um depósito na conta do usuário logado
  - Realizar um resgate - Permite realizar uma transferência para outra conta qualquer
  - Fazer um pagamento - Permite pagar boletos que foram cadastrados previamente na base
  - Consulta de saldo - Consulta o saldo em conta, e o atualiza com o calculo de juros


## Executando a aplicação
```BASH
git clone https://github.com/lvsouza/lubank-front.git
cd ./lubank-front/
yarn
yarn start
```
Interaja com a aplicação em `http://localhost:3000/`


## License
MIT @ [Lucas Souza](https://github.com/lvsouza)
