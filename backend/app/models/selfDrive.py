# from flask_marshmallow import Marshmallow
from app import db, ma
# from sqlalchemy.sql import func

class SelfDrive(db.Model):
    __tablename__ = 'self_drive'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    car_id = db.Column(db.Integer, nullable = False )
    car_type = db.Column(db.Enum('Self_Drive') , nullable = False)
    car_style = db.Column(db.String(100), nullable = False)
    # Car_class= db.Column(db.String(100), nullable = False)
    location= db.Column(db.String(100), nullable = False)
    for_prime = db.Column(db.Enum('yes', 'no'), nullable = False)
    # availability_count = db.Column(db.Integer, nullable=False)
    agent= db.Column(db.Integer, nullable = True)
    color= db.Column(db.String(100), nullable = True)
    launch= db.Column(db.String(100), nullable = True)
    deposit=db.Column(db.Integer, nullable = False) 
    # driver_allowance=db.Column(db.Integer, nullable = False) 
    price=db.Column(db.Integer, nullable = False) 
    status= db.Column(db.Enum('Active','Inactive'))       
      
class SelfDriveSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = SelfDrive