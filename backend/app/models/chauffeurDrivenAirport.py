# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
# from sqlalchemy.sql import func

class ChauffeurDrivenAirport(db.Model):
    __tablename__ = 'chauffeur_driven_airport'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    car_id = db.Column(db.Integer,nullable = False)
    car_type = db.Column(db.Enum('Chauffeur_Driven_Airport') , nullable = False)
    car_style= db.Column(db.String(100), nullable = False)
    location= db.Column(db.String(100), nullable = False)
    # availability_count = db.Column(db.Integer, nullable=False)
    forPrime = db.Column(db.Enum('yes', 'no'), nullable = False)
    agent= db.Column(db.Integer, nullable = True)
    color= db.Column(db.String(100), nullable = True)
    launch= db.Column(db.String(100), nullable = True)
    deposit=db.Column(db.Integer, nullable = True) 
    # driver_allowance=db.Column(db.Integer, nullable = False) 
    price=db.Column(db.Integer, nullable = False) 
    toll_fee=db.Column(db.Integer, nullable = False) 
    parking_fee=db.Column(db.Integer, nullable = False) 
    # gst_price=db.Column(db.Integer, nullable = False) 
    status=  db.Column(db.Enum('Active','Inactive'))       
      
class ChauffeurDrivenAirportSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = ChauffeurDrivenAirport