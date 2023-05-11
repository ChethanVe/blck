# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Users(db.Model):
    
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    username = db.Column(db.String(100), unique = True, nullable = False)
    first_name = db.Column(db.String(100), unique = True, nullable = False)
    last_name = db.Column(db.String(100), unique = True, nullable = False)
    phone = db.Column(db.Numeric, unique = True, nullable = False)
    password= db.Column(db.String(100), nullable = False)
    email=db.Column(db.String(100), nullable = False)
    user_type = db.Column(db.Enum('admin','driver','user')) 
    timestamp = db.Column(db.DateTime, default=func.now())

  

   
        
        

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Users