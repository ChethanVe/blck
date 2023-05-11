# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Enquiry(db.Model):
    __tablename__ = 'enquiry'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)

   
    enquiry_title = db.Column(db.String(400), unique = True, nullable = False)
    enquiry_body= db.Column(db.String(100), unique = True, nullable = False)
    status= db.Column(db.Enum('Active','Inactive'), nullable = False)
    
   

   


   
  

   
        
        

class EnquirySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Enquiry