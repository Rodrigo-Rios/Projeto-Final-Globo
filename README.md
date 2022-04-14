
# Desafio Final Globo - Aplicativo de pedidos
--------------------------------------------

O JASON's Food é uma aplicação para cadastro e listagem de restaurantes e cardápios inspirado no iFood para o filhinho do nosso professor Zé cloud. Esse 
desafio foi o desafio final do GloboTech Academy.


## Configuração
---------------------------------------------



## Funcionalidades
---------------------------------------------

O aplicativo possui as funcionalidades abaixo:

### Cadastrar Restaurante
---------------------------------------------

É possível cadastrar restaurantes que vão oferecer os serviços no aplicativo

- Nome: Nome do restaurante (obrigatório)
  
- Endereço: Endereço do restaurante (obrigatório)
  
- Descrição: Descrição do restaurante (obrigatório)
  
- Logo: Imagem que será utilizada pelo restaurante (obrigatório)
  
- Nome do Responsável: Nome do responsável pelo restaurante (obrigatório)

### Cadastrar Produto
---------------------------------------------

É possível cadastrar produtos e obrigatóriamente tem que informar para qual restaurante será cadastrado o produto.

- Nome: Nome do produto (obrigatório)

- Imagem: Imagem do produto (obrigatório)

- Descrição: Descrição do pedido (obrigatório)

- Preço: Preço do produto em decimal (obrigatório)

- Extras: Adicionais do produto (obrigatório)



### Endpoints disponíveis:
---------------------------------------------

#### Products

- Post: http://127.0.0.1:5000/api/v1/restaurants/<restaurant_id>/menu
  
- Get:  http://127.0.0.1:5000/api/v1/restaurants/<restaurant_id>/menu

#### Restaurants
  
- Post: http://127.0.0.1:5000/api/v1/restaurants
  
- Get:  http://127.0.0.1:5000/api/v1/restaurants


### O endpoint /api/v1/restaurants (Post)
---------------------------------------------
  
Cadastra o restaurante.

#### Requisição

Manda os dados especificados via json para cadastrar o restaurante

```
POST /api/v1/restaurants
{
  "name": "Adega C#",
  "adress": "3",
  "description": "Programando e bebendo",
  "image_restaurant"
}
```

#### Resposta
```
204 CREATE
{
  "name": "Adega C#",
  "adress": "3",
  "description": "Programando e bebendo",
  "image_restaurant"
}
```  

### O endpoint /api/v1/restaurants (Get)
---------------------------------------------
  
#### Requisição
Lista todos o restaurantes cadastrados por ordem alfabética verificando o campo name


```  
GET api/v1/restaurants
```
#### Resposta

```
200 OK 
[
  {
    "address": "rua dos alfeneiros",
    "description": "café",
    "image_restaurant": "www.static.com/img.png",
    "name": "Adega Java",
    "responsible_name": "Rodrigo rios",
    "restaurant_id": 2
  },
  {
    ...
  }

]
```
  
### O endpoint /api/v1/restaurants/<restaurant_id>/menu(Post)
---------------------------------------------

Cadastra os produtos correspondentes ao ID do restaurante que é passado na rota.
  
#### Requisição

Manda os dados especificados via json para cadastrar o produto ao restaurante correspondente

```  
Post /api/v1/restaurants/1/menu
{
  "name": "Hamburguer",
  "image_product": "www.static.com/img.png",
  "description": "O melhor hamburgue da sua vida",
  "price": 4.5,
  "extras": ["Alface","pepino"]
}
```  
#### Resposta
```  
204 CREATED
{
  "name": "Hamburguer",
  "image_product": "www.static.com/img.png",
  "description": "O melhor hamburgue da sua vida",
  "price": 4.5,
  "extras": ["Alface","pepino"]
}
```  

  
### O endpoint /api/v1/restaurants/<restaurant_id>/menu(Get)
---------------------------------------------

Retorna todos os produtos cadastrados no restaurante informado na rota.
  
#### Requisição
```
Get /api/v1/restaurants/1/menu
```

#### Resposta

```
200 OK

{
  "menu": [
    {
      "name": "Hamburguer",
      "image_product": "www.static.com/img.png",
      "description": "O melhor hamburgue da sua vida",
      "price": 4.5,
      "extras": ["Alface","pepino"],
      "reference_restaurant_id": 1
    }
  ],
  "restaurant": "coco bambu"
}

```

  


