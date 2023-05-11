# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Yacht(db.Model):
    
    __tablename__ = 'yatch'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    yacht_name = db.Column(db.String(100), nullable = False)
    description = db.Column(db.String(800), nullable = False)
    capacity = db.Column(db.String(100),  nullable = False)
    price = db.Column(db.String(100),  nullable = False)
    yacht_image= db.Column(db.String(600), nullable = False)
    sailing= db.Column(db.Integer, nullable = False)
    anchorage= db.Column(db.Integer, nullable = False)
    
    time=db.Column(db.String(100), nullable = False)
    
    

  

   
        
        

class YachtSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Yacht