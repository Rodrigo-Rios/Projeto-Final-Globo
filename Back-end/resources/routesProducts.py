from model import app, database
from model.product import ProductsModel
from resources.database_product import Products
from resources.database_restaurant import Restaurants
from flask import abort, jsonify, request
# from resources.validate import *


@app.route('/api/v1/restaurants/<int:id>', methods=['POST'])

def create_product(id):

    restaurant_id = Restaurants.query.get(id)

    if restaurant_id:

        body = request.get_json()
        new_product = ProductsModel(body["name"], body["image_product"],
                                body["description"], body["price"], body["extras"])

    
        product = Products(name = new_product.name, image_product = new_product.image_product, description = new_product.description, 
        price = new_product.price, extras = new_product.extras, reference_restaurant_id = id)
        database.session.add(product)
        database.session.commit()

        return jsonify(new_product.to_dict())
    
    else:
       abort(400, description="Restaurants not found")


@app.route('/api/v1/restaurants/<int:id>', methods=['GET'])
def get_all_products_by_restaurants(id):
    
    restaurant = Restaurants.query.filter_by(restaurant_id=id).first()

    if restaurant:
        
        products = Products.query.filter_by(reference_restaurant_id=restaurant.restaurant_id).all()
        return jsonify({"Restaurante":restaurant.name,"Cardápio":products})
    else:
        abort(400, description="Restaurant not found")