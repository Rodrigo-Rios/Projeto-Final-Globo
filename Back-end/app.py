from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///food.db'
app.config['SECRET_KEY'] = 'secret'

db = SQLAlchemy(app)

class Restaurant(db.Model):
    restaurant_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    about = db.Column(db.String(200), nullable=False)
    url_logo = db.Column(db.String(200), nullable=False)
    person_in_charge = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    ## TODO: fk relation


if __name__ == '__main__':
    app.run(debug=True)