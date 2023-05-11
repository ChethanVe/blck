# from datetime import datetime
# from flask_marshmallow import Marshmallow
# from sqlalchemy.sql import func
from app import db, ma

class Carbrand(db.Model):
    __tablename__ = 'car_brand'
    id = db.Column(db.Integer(), primary_key = True, autoincrement = True)
    car_brand=db.Column(db.String(100), unique = True, nullable = False)
    car_logo=db.Column(db.String(1000), nullable = False)
    status =db.Column(db.Enum('Active','Inactive'), nullable = False)
        
class CarbrandSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Carbrand