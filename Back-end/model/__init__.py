from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///restaurants.db"

database = SQLAlchemy(app)


from resources import routes_products
from resources import routes_restaurants


if database:
    database.create_all()