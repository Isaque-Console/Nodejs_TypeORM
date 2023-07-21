# Nodejs_TypeORM
## Resumo do projeto
Esse projeto é uma api que simula um sistema para gerenciar usuários, expondo endpoints que permitem fazer login com o username e a senha do usuário, além de permitir criar, buscar, atualizar e deletar os dados do usuário. Esse projeto foi feito atentando para utilizar alguns conceitos importantes no desenvolvimento do backend, como exemplo, autenticação, autorização, Clean arch, POO, dockerização, além disso, utilizei o design pattern Strategy, para que seja possível escalar essa aplicação facilmente com algum novo banco de dados ou regra de negócios, sem que seja preciso reestruturar o código base, tornando, assim, o código bastante independente de frameworks e ferramentas utlizadas. Apliquei ainda o conceito do design pattern Factory Method, criando uma classe abstrata que serve de modelo para as entidades do projeto, as quais possuem diferentes implementações de atributos e de métodos, permitindo assim a criação de novas entidades de acordo com o crescimento do projeto, sem depender de uma classe concreta, mas sim de uma abstração.

### Tecnologias utilizadas:
- Docker
- Node.js
- Typescript
- TypeORM
- Amazon Aurora MySQL 8
- Express

### Conceitos utilizados:
- Containerização
- Design pattern (Strategy e Factory Method)
- Autenticação
- Autorização
- OOP
- Clean Arch
- Clean Code
- SOLID
- Senha criptografada

### Design patterns

`Strategy` : <https://refactoring.guru/pt-br/design-patterns/strategy>

`Factory Method` : <https://refactoring.guru/pt-br/design-patterns/factory-method>

### Pré-requisitos

- Ter instalado em sua máquina o docker

### Como rodar o projeto
- Abra o terminal dentro da pasta do projeto.
- Digite o seguinte comando no terminal: `$ docker run -p 3000:3000 converte_me_test `

### Postman collection (é possível importar essa collection no seu postman)

   {
	"info": {
		"_postman_id": "d05aad5d-b4f6-4c38-b9c7-71c7d199ba6a",
		"name": "Converte_me_test",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "11884482"
	},
	"item": [
		{
			"name": "Create User",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\": \"oioi3\",\n    \"password\": \"Senha123\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get User",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4NjkxMDMsImlhdCI6MTY4OTk0NDcwOCwiZXhwIjoxNjkwMDMxMTA4LCJzdWIiOiI4ODY5MTAzIn0.ffa1vRpm3_tllZVsWgcRKfGseAF3_F7HwYxUFnKqvpk",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://localhost:3000/user/8869103",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"user",
						"8869103"
					]
				}
			},
			"response": []
		},
		{
			"name": "Login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\": \"oioi30\",\n    \"password\": \"Senha123\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete User",
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyLCJpYXQiOjE2ODk5NDQ0OTEsImV4cCI6MTY5MDAzMDg5MSwic3ViIjoiMzIifQ.tI1Az5y7KmRiq5Bmxz28Q27TCw7o2N1ozVoDFplwOio",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://localhost:3000/user/32",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"user",
						"32"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update User",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4NjkxMDMsImlhdCI6MTY4OTk0NDcwOCwiZXhwIjoxNjkwMDMxMTA4LCJzdWIiOiI4ODY5MTAzIn0.ffa1vRpm3_tllZVsWgcRKfGseAF3_F7HwYxUFnKqvpk",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\": \"oioi30\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/user/8869103",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"user",
						"8869103"
					]
				}
			},
			"response": []
		}
	]
}

### Diagrama de fluxo (Exemplo de fluxo)

```mermaid
flowchart LR

A[Create User] --> B(Login)
B --> C(Get User)
```

**OBS:** 
- Lembre-se de, quando fazer a requisição de Get User, colocar o header 'authorization' com o token recebido na resposta do endpoint de login.
- O formato é o seguinte: Bearer {token}.
- Ex: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmOTg3Nzk3ZS1kZDNkLTRiODYtOThjNy1jYjNiMzQ4NGQ1NjQiLCJpYXQiOjE2NzQ1MDExNjcsImV4cCI6MTY3NDU4NzU2Nywic3ViIjoiZjk4Nzc5N2UtZGQzZC00Yjg2LTk4YzctY2IzYjM0ODRkNTY0In0.Aaz621cN6ORThZpcynmfYgahezk69CccEoVAZK9XZiY
