from model import app, database
from model.restaurant import RestaurantsModel
from resources.database_restaurant import Restaurants
from flask import abort, jsonify, request
import gladiator as gl
# from resources.validate import *


@app.route('/api/v1/restaurants', methods=['POST'])

def create_restaurants():

    body = request.get_json()
    new_restaurant = RestaurantsModel(body["name"], body["address"], body["description"], 
    body["image_restaurant"], body["responsible_name"])

    already_exists = Restaurants.query.filter_by(name=new_restaurant.name).first()

    if already_exists:
        abort(400, description="Restaurant already exists")

    restaurant = Restaurants(name = new_restaurant.name, address = new_restaurant.address, description = new_restaurant.description,
    image_restaurant = new_restaurant.image_restaurant, responsible_name = new_restaurant.responsible_name)

    field_validations = (
    ('name', gl.required, gl.type_(str)),
    ('address', gl.required, gl.type_(str)),
    ('description', gl.required, gl.type_(str)),
    ('image_restaurant', gl.required, gl.type_(str)),
    ('responsible_name', gl.required, gl.type_(str))
    )
    result = gl.validate(field_validations, restaurant)
    if result:
        database.session.add(restaurant)
        database.session.commit()
    else:
        abort(400, description="Type incorrect")

    return jsonify(new_restaurant.to_dict())
    


@app.route('/api/v1/restaurants', methods=['GET'])
def get():
    restaurants = Restaurants.query.all()
    if restaurants:
        return jsonify(restaurants)
    else:
        abort(400, description="Restaurants not found")