# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Cartype(db.Model):
    __tablename__ = 'car_type'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)

    car_type = db.Column(db.Enum('Chauffeur_Driven','Self_Drive') , nullable = False)
    brand = db.Column(db.String(100), nullable = False)
    carmodel= db.Column(db.String(100), nullable = False)
    carstyle= db.Column(db.String(100), nullable = False)
    location= db.Column(db.String(100), nullable = False)
    agent= db.Column(db.String(100), nullable = False)
    color= db.Column(db.String(100), nullable = False)
    launch= db.Column(db.String(100), nullable = False)
    deposit=db.Column(db.String(100), nullable = False) 
    driverbata=db.Column(db.String(100), nullable = False) 
    stndprice=db.Column(db.String(100), nullable = False) 
    stndpackagehr=db.Column(db.String(100), nullable = False) 
    stndextrakms=db.Column(db.String(100), nullable = False) 
    stndgstprice=db.Column(db.String(100), nullable = False) 
    outprice=db.Column(db.String(100), nullable = False) 
    outpackagehr=db.Column(db.String(100), nullable = False) 
    outextrakms=db.Column(db.String(100), nullable = False) 
    outgstprice=db.Column(db.String(100), nullable = False) 
    airprice=db.Column(db.String(100), nullable = False) 
    airtollfee=db.Column(db.String(100), nullable = False) 
    airparkingfee=db.Column(db.String(100), nullable = False) 
    airgstprice=db.Column(db.String(100), nullable = False) 
    carprice=db.Column(db.String(100), nullable = False) 
    
    status=  db.Column(db.Enum('Active','Inactive'))       
      
class CartypeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Cartype