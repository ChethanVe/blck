# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Carfleet(db.Model):
    __tablename__ = 'car_fleet'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    car_brand= db.Column(db.String(100), nullable = True)
    car_model= db.Column(db.String(100), nullable = True)
    car_features= db.Column(db.String(100), nullable = True)
    fuel= db.Column(db.String(100), nullable = True)
    gear= db.Column(db.String(100), nullable = True)
    luggage= db.Column(db.String(600), nullable = True)
    seats= db.Column(db.String(600),  nullable = True)
    car_image= db.Column(db.String(600),nullable = True)
    slider_images=db.Column(db.String(600) ,nullable = True)
    status= db.Column(db.Enum('Active','Inactive'),nullable = True)
   
class CarfleetSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Carfleet        