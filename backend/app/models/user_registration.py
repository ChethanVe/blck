# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class UserRegister(db.Model):
    __tablename__ = 'user_registration'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    firstname = db.Column(db.String(100), nullable = False)
    lastname = db.Column(db.String(100), nullable = False)
    email= db.Column(db.String(100), unique = True, nullable = False)
    contact = db.Column(db.BigInteger(), unique = True, nullable = False) 
    timestamp = db.Column(db.DateTime, default =func.now())

class UserRegisterSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = UserRegister