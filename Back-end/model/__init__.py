from flask import Flask
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///restaurants.db"

database = SQLAlchemy(app)


from resources import routesProducts
from resources import routesRestaurants


if database:
    database.create_all()