# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class CarRentals(db.Model):
    __tablename__ = 'car_rentals'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)

    car_type= db.Column(db.Enum('chauffeur_Driven','Airport_Pickup/Drop','Self_Drive'), nullable = False)
    extra_kms=db.Column(db.Integer(), nullable = False)
    rental_price= db.Column(db.Integer(), unique = True, nullable = False)
    deposit=db.Column(db.Integer(), nullable = False)
    model_name = db.Column(db.Integer(), nullable = False)
    location= db.Column(db.Enum('yes','no'), nullable = False)
    agent=db.Column(db.String(500), unique = True, nullable = False)
    color=db.Column(db.Enum('yes','no'), nullable = False)
    launching_year = db.Column(db.Integer(), nullable = False)
    package_hours=db.Column(db.Integer(), nullable = False)
    Kms_limits=db.Column(db.Integer(), nullable = False)
    extraKm_charges=db.Column(db.Integer(), nullable = False)
    Toll_fee=db.Column(db.Integer(), nullable = False)
    Parking_fee=db.Column(db.Integer(), nullable = False)
    Driver_batta=db.Column(db.Integer(), nullable = False)
    status=db.Column(db.Enum('yes','no'), nullable = False)
    filters=db.Column(db.Enum('yes','no'), nullable = False)
  
   

   


   
  

   
        
        

class CarRentalsSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = CarRentals