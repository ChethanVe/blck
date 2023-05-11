# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Location(db.Model):
    __tablename__ = 'car_location'
    id = db.Column(db.Integer(), primary_key = True, autoincrement = True)
    location = db.Column(db.String(100), unique = True, nullable = False)
    location_status =db.Column(db.Enum('Popular','Unpopular'), nullable = False)
    status =db.Column(db.Enum('Active','Inactive'), nullable = False)


class LocationSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Location