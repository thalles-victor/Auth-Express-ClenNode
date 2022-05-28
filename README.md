# Autenticação usando Express e JWT

### Instalação
```console
  npm install
```
ou
```console
  yarn install
```

### Adicionando e configurando .env na pasta raiz
A porta é opcional caso não passe ele vai executar o servidor na porta 3333. Sobre o email e senha, eles são usados para o serviço de envio de email. A senha deve ser a mesma da sua conta no google, e não se esqueça de habilitar nas configurações da conta o acesso de apps terceiros na sua conta do google para poder usar o serviço.

.env
```ts
  PORT: number
  SECRET_KEY_JWT: string //must be very strong
  EMAIL: string
  PASSWORD: string
```

!Lembrese que esse serviço de email já "está" para produção, então certifique se que não vai enviar emais para desconhecidos.

### Rodando o projeto

```console
  npm run start:dev
```
ou
```console
  yarn start:dev
```
## Rotas

### /auth/singup

A rota singup é a rota de cadastro.

Requer um body com o formato json com os seguintes tipos

```json
  "name": string
  "email": string
  "password": string
```
Retorno espera um status http de 201

### /auth/singin

A rota singin é a rota de login

Requer um body com formato json com os seguintes tipos

```json
  "email": string
  "password": string
```
o response é um objeto contendo o token JWT.
exemplo
```
{
  token: "Bearer eyJhbGciO..."
}
```