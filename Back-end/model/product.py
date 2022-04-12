from json import loads, dumps
from resources.database_restaurant import Restaurants
from resources.database_product import Products


class ProductsModel:

    def __init__(self, name, image_product, description,price,extras):

       
       self.name = name
       self.image_product = image_product
       self.description = description
       self.price = price
       self.extras = extras
       

    
    @classmethod
    def list_to_dict():
        return loads(dumps(default=ProductsModel.to_dict))

    def to_dict(self):
        # restaurant = Restaurants.query.filter_by(restaurant_id=Products.reference_restaurant_id).first()
        return {
            "name": self.name,
            "imageProduct": self.image_product,
            "description": self.description,
            "price": self.price,
            "extras": self.extras,
            }