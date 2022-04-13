from model import database
from dataclasses import dataclass


@dataclass
class Products(database.Model):

    product_id: int
    name : str
    image_product: str
    description:   str
    price: float
    extras: list
    reference_restaurant_id: int

    product_id = database.Column(database.Integer, nullable=False, primary_key=True)
    name = database.Column(database.String, nullable=False)
    image_product = database.Column(database.String, nullable=False)
    description = database.Column(database.Text, nullable=False)
    price = database.Column(database.Float, nullable=False)
    extras = database.Column(database.PickleType, nullable=False)
    reference_restaurant_id = database.Column(database.String, database.ForeignKey('restaurants.restaurant_id'))