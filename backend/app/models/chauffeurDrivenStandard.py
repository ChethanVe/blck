# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
# from sqlalchemy.sql import func

class ChauffeurDrivenStandard(db.Model):
    __tablename__ = 'chauffeur_driven_standard'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    car_id = db.Column(db.Integer, nullable = False )
    car_type = db.Column(db.Enum('Chauffeur_Driven_Standard') , nullable = False)
    car_style= db.Column(db.String(100), nullable = False)
    location= db.Column(db.String(100), nullable = False)
    forPrime = db.Column(db.Enum('yes', 'no'), nullable = False)
    # availability_count = db.Column(db.Integer, nullable=False)
    agent= db.Column(db.Integer, nullable = False)
    color= db.Column(db.String(100), nullable = False)
    launch= db.Column(db.String(100), nullable = False)
    deposit=db.Column(db.Integer, nullable = True) 
    # driver_allowance=db.Column(db.Integer, nullable = False) 
    price=db.Column(db.Integer, nullable = False) 
    package_hours=db.Column(db.Integer, nullable = False) 
    extra_kms=db.Column(db.Integer, nullable = False) 
    # gst_price=db.Column(db.Integer, nullable = False) 
    status=  db.Column(db.Enum('Active','Inactive'))       
      
class ChauffeurDrivenStandardSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = ChauffeurDrivenStandard