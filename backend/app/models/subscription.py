# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Subscription(db.Model):
    __tablename__ = 'subscription'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)

    plan_name = db.Column(db.String(50), unique = True, nullable = False)
    plan_duration = db.Column(db.String(100), unique = True, nullable = False)
    allowed_users = db.Column(db.Enum('Prime','Users'), nullable = False)
    plan_type = db.Column(db.String(100), unique = True, nullable = False)
    Amount = db.Column(db.Integer(), nullable = False)
    status= db.Column(db.Enum('Active','Inactive'), nullable = False)
    
   

   


   
  

   
        
        

class SubscriptionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Subscription