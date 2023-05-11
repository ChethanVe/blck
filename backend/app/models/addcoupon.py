# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class AddCoupon(db.Model):
    __tablename__ = 'add_coupon'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    car_type = db.Column(db.String(50), nullable = False)
    code = db.Column(db.String(100), unique = True, nullable = False)
    start_date= db.Column(db.String(100), nullable = False)
    end_date= db.Column(db.String(100), nullable = False)
    description= db.Column(db.String(100), nullable = False)
    discounts_type = db.Column(db.Enum('Amount', 'Percentage'), nullable = False)
    max_discount_amount = db.Column(db.String(100), nullable = True)
    discounts_in_amount = db.Column(db.String(100), nullable = True)
    deduct_deposit= db.Column(db.Enum('Allow', 'Not Allow'), nullable = False)
    status = db.Column(db.Enum('Active','Inactive'), nullable = False)
    
   

   


   
  

   
        
        

class AddCouponSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = AddCoupon