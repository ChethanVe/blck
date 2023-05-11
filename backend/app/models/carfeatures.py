# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func


class CarFeatures(db.Model):
    __tablename__ = 'car_features'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    feature_name = db.Column(db.String(100), nullable = False)
    img= db.Column(db.String(100))
    preview=db.Column(db.String(600), nullable = False)
    status=db.Column(db.Enum('Active','Inactive'), nullable = False)
    description=db.Column(db.String(600), nullable = False)
    files=db.Column(db.String(600), nullable = False)
    # db.LargeBinary
    
       

class CarFeaturesSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = CarFeatures