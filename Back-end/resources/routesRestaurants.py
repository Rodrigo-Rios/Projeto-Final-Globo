from model import app, database
from model.restaurant import RestaurantsModel
from resources.database_restaurant import Restaurants
from flask import abort, jsonify, request
# from resources.validate import *


@app.route('/api/v1/restaurants', methods=['POST'])

def create_restaurants():

    body = request.get_json()
    new_restaurant = RestaurantsModel(body["name"], body["address"], body["description"], 
    body["image_restaurant"], body["responsible_name"])

    
    restaurant = Restaurants(name = new_restaurant.name, address = new_restaurant.address, description = new_restaurant.description,
    image_restaurant = new_restaurant.image_restaurant, responsible_name = new_restaurant.responsible_name)
    database.session.add(restaurant)
    database.session.commit()

    return jsonify(new_restaurant.to_dict())
    


@app.route('/api/v1/restaurants', methods=['GET'])
def get():
    restaurants = Restaurants.query.all()
    if restaurants:
        return jsonify(restaurants)
    else:
        abort(400, description="Restaurants not found")