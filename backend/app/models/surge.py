# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Surge(db.Model):
    __tablename__ = 'surge'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)

    luxury_cd = db.Column(db.Integer(), nullable = False)
    luxury_sd = db.Column(db.Integer(), nullable = False)
    luxury_at = db.Column(db.Integer(), nullable = False)
    
    standard_cd = db.Column(db.Integer(), nullable = False)
    standard_sd = db.Column(db.Integer(), nullable = False)
    standard_at = db.Column(db.Integer(), nullable = False)

    yatch = db.Column(db.Integer(), nullable = False)
    
   

   


   
  

   
        
        

class SurgeeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Surge