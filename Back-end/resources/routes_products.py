from model import app, database
from model.product import ProductsModel
from resources.database_product import Products
from resources.database_restaurant import Restaurants
from flask import abort, jsonify, request
import gladiator as gl
from resources.validations_products import validate_name, validate_description, validate_extra, validate_image, validate_price


@app.route('/api/v1/restaurants/<int:id>/menu', methods=['POST'])
def create_product(id):

    restaurant_id = Restaurants.query.get(id)

    if restaurant_id:

        body = request.get_json()
        new_product = ProductsModel(body["name"], body["image_product"],
                                    body["description"], body["price"], body["extras"])

        new_product.extras = [item.casefold()
                              for item in new_product.extras if type(item) == str]

        product = Products(name=new_product.name, image_product=new_product.image_product, description=new_product.description,
                           price=new_product.price, extras=new_product.extras, reference_restaurant_id=id)

        field_validations = (
            ('name', gl.required, gl.type_(str)),
            ('image_product', gl.required, gl.type_(str)),
            ('description', gl.required, gl.type_(str)),
            ('price', gl.required, gl.type_(float)),
            ('extras', gl.required, gl.type_(list)),

        )

        validate_name(field_validations, product)
        product.name = product.name.casefold()

        already_exists = Products.query.filter_by(
            name=new_product.name.casefold(), reference_restaurant_id=id).first()

        if already_exists:
            abort(400, description="Product already exists in this restaurant")

        validate_image(field_validations, product)

        validate_description(field_validations, product)
        product.description = product.description.casefold()

        validate_price(field_validations, product)

        validate_extra(field_validations, product, new_product)

        database.session.add(product)
        database.session.commit()
        return jsonify(new_product.to_dict())

    else:
       abort(400, description="Restaurants not found")


@app.route('/api/v1/restaurants/<int:id>/menu', methods=['GET'])
def get_all_products_by_restaurants(id):

    restaurant = Restaurants.query.filter_by(restaurant_id=id).first()

    if restaurant:

        products = Products.query.filter_by(
            reference_restaurant_id=restaurant.restaurant_id).order_by('name').all()
        return jsonify({"restaurant": restaurant.name, "menu": products})
    else:
        abort(400, description="Restaurant not found")
