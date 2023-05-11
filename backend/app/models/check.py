# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Check(db.Model):
    __tablename__ = 'check'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)

    car_model = db.Column(db.String(50), unique = True, nullable = False)
    brand_id = db.Column(db.String(100), unique = True, nullable = False)
    
    status= db.Column(db.Enum('Active','Inactive'), nullable = False)
    
   

   


   
  

   
        
        

class CheckSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Check