from model import app, database
from model.restaurant import RestaurantsModel
from resources.database_restaurant import Restaurants
from flask import abort, jsonify, request
import gladiator as gl
from resources.validations_restaurants import validate_name, validate_description, validate_address, validate_image, validate_responsible


@app.route('/api/v1/restaurants', methods=['POST'])
def create_restaurants():

    body = request.get_json()
    new_restaurant = RestaurantsModel(body["name"], body["address"], body["description"],
                                      body["image_restaurant"], body["responsible_name"])

    restaurant = Restaurants(name=new_restaurant.name, address=new_restaurant.address, description=new_restaurant.description,
                             image_restaurant=new_restaurant.image_restaurant, responsible_name=new_restaurant.responsible_name)

    field_validations = (
        ('name', gl.required, gl.type_(str)),
        ('address', gl.required, gl.type_(str)),
        ('description', gl.required, gl.type_(str)),
        ('image_restaurant', gl.type_(str)),
        ('responsible_name', gl.required, gl.type_(str))
    )

    

    validate_name(field_validations, restaurant)
    restaurant.name = restaurant.name.casefold()
    
    already_exists = Restaurants.query.filter_by(
        name=new_restaurant.name.casefold()).first()

    if already_exists:
        abort(400, description="Restaurant already exists")
    
    validate_address(field_validations, restaurant)
    restaurant.address = restaurant.address.casefold()
    
    validate_description(field_validations, restaurant)
    restaurant.description = restaurant.description.casefold()
    
    validate_image(field_validations, restaurant)
    
    validate_responsible(field_validations, restaurant)
    restaurant.responsible_name = restaurant.responsible_name.casefold()

    database.session.add(restaurant)
    database.session.commit()
    return jsonify(new_restaurant.to_dict())


@app.route('/api/v1/restaurants', methods=['GET'])
def get():
    restaurants = Restaurants.query.order_by('name').all()
    if restaurants:
        return jsonify(restaurants)
    else:
        abort(400, description="Restaurants not found")
