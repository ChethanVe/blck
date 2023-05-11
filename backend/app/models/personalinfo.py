# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class PersonalInfo(db.Model):
    __tablename__ = 'personalinfo'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    car_model = db.Column(db.String(50), unique = True, nullable = False)
    car_type= db.Column(db.Enum('chauffeur_Driven','Airport_Pickup/Drop','Self_Drive'), nullable = False)
    full_name= db.Column(db.String(100), nullable = False)
    phn_num=db.Column(db.Integer(), unique = True, nullable = False)
    email = db.Column(db.String(100), unique = True, nullable = False)  
    pickup_address= db.Column(db.String(100),  nullable = False) 
    drop_address =  db.Column(db.String(100),  nullable = False) 
    location = db.Column(db.String(100),  nullable = False) 
    instructions = db.Column(db.String(100),  nullable = False)  
    
   

   


   
  

   
        
        

class PersonalInfoSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = PersonalInfo