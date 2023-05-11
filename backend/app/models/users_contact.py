# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Contact_Us(db.Model):
    
    __tablename__ = 'contact_us'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    firstname = db.Column(db.String(50),  nullable = False)
    phnno = db.Column(db.String(50), nullable = False)
    email= db.Column(db.String(100), nullable = False)
    city=db.Column(db.String(1000), nullable = False)
    message = db.Column(db.String(50), nullable = False)
  

   
        
        

class Users_ContactSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Users_Contact