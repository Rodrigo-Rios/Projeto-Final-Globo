from model import database
from dataclasses import dataclass


@dataclass
class Restaurants(database.Model):

    restaurant_id: int
    name: str
    address: str
    description: str
    image_restaurant: str
    responsible_name: str
    

    restaurant_id = database.Column(database.Integer, nullable=False, primary_key=True)
    name = database.Column(database.String, nullable=False)
    address = database.Column(database.String, nullable=False)
    description = database.Column(database.String, nullable=False)
    image_restaurant = database.Column(database.String, nullable=False)
    responsible_name = database.Column(database.String, nullable=False)
    products = database.relationship('Products', backref='products')
    