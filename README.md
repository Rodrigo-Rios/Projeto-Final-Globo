
Desafio Final Globo - Aplicativo de pedidos
--------------------------------------------

O aplicativo tem o objetivo de conectar os clientes com os restaurantes. Esse aplicativo foi desenvolvido como parte da avaliação final da Globotech Academy.


Configuração
---------------------------------------------



Funcionalidades
---------------------------------------------

O aplicativo possui as funcionalidades abaixo:

Cadastrar Restaurante
---------------------------------------------

É possível cadastrar restaurantes que vaão oferecer os serviços no aplicativo

  •	Nome: Nome do restaurante (obrigatório)
  
  •	Endereço: Endereço do restaurante (obrigatório)
  
  •	Descrição: Descrição do restaurante (obrigatório)
  
  •	Logo: Imagem que será utilizada pelo restaurante (obrigatório)
  
  •	Nome do Responsável: Nome do responsável pelo restaurante (obrigatório)

   Cadastrar Produto
---------------------------------------------

É possível cadastrar produtos e obrigatóriamente tem que informar para qual restaurante será cadastrado o produto.

•	Nome: Nome do produto (obrigatório)

•	Imagem: Imagem do produto (obrigatório)

•	Descrição: Descrição do pedido (obrigatório)

•	Preço: Preço do produto em decimal (obrigatório)

•	Extras: Adicionais do produto (obrigatório)



Endpoints disponíveis:
---------------------------------------------

Products

•	Post: http://127.0.0.1:5000/api/v1/restaurants/<restaurant_id>/menu
  
•	Get:  http://127.0.0.1:5000/api/v1/restaurants/<restaurant_id>/menu

Restaurants
  
•	Post: http://127.0.0.1:5000/api/v1/restaurants
  
•	Get:  http://127.0.0.1:5000/api/v1/restaurants



 O endpoint /api/v1/restaurants(Post)
---------------------------------------------
  
  Cadastra o restaurante.
  
  Requisição
  
  Post /api/v1/restaurants
  
  Manda os dados especificados via json para cadastrar o restaurante
  
  ![image](https://user-images.githubusercontent.com/66098058/163278134-7ff45c19-1790-464f-bf3e-5af153be6514.png)

  Resposta

  ![image](https://user-images.githubusercontent.com/66098058/163278219-d8d6bfb3-b243-416f-b90d-e50584e3fd97.png)

  O endpoint /api/v1/restaurants(Get)
---------------------------------------------
  
  Lista todos o restaurantes cadastrados por ordem alfabética verificando o campo name
  
  Requisição
  
  Get api/v1/restaurants
  
  ![image](https://user-images.githubusercontent.com/66098058/163278576-cf26a579-30a4-4925-978f-49768d80060e.png)

  
   O endpoint /api/v1/restaurants/<restaurant_id>/menu(Post)
---------------------------------------------

  Cadastra os produtos correspondentes ao ID do restaurante que é passado na rota.
  
  Requisição
  
  Post /api/v1/restaurants/1/menu
  
  Manda os dados especificados via json para cadastrar o produto ao restaurante correspondente
  
  ![image](https://user-images.githubusercontent.com/66098058/163279147-b0863522-609c-4016-b088-4b9fbf3c8018.png)
  
  Resposta
  
  ![image](https://user-images.githubusercontent.com/66098058/163279200-1a0ee5c0-b97f-491b-84e3-1527d3f02945.png)
  
   O endpoint /api/v1/restaurants/<restaurant_id>/menu(Get)
---------------------------------------------

  Retorna todos os produtos cadastrados no restaurante informado na rota.
  
  Requisição
  
  Get /api/v1/restaurants/1/menu
  
  ![image](https://user-images.githubusercontent.com/66098058/163279438-18be73ca-3aed-4fe6-a1ed-921f3c51df8b.png)
  


