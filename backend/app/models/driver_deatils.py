# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Driverdetails(db.Model):
    __tablename__ = 'driver_detials'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    driver_name = db.Column(db.String(50), nullable = False)
    email= db.Column(db.String(100), unique = True, nullable = False) 
    driver_img = db.Column(db.String(1000), nullable = False)
    contact = db.Column(db.BigInteger(), unique = True, nullable = False) 
    alter_contact = db.Column(db.BigInteger(), unique = True, nullable = False) 
    driving_licence_no = db.Column(db.String(100), unique = True, nullable = False)
    aadhar_no = db.Column(db.BigInteger(), unique = True, nullable = False)
    pancard_no = db.Column(db.String(100), unique = True, nullable = False)
    date_of_birth = db.Column(db.String(100), nullable = False)
    driver_loc = db.Column(db.String(100), nullable = False)
    driver_pin = db.Column(db.Integer(), nullable = False)
    status=db.Column(db.Enum('Active','Inactive'), nullable = False)
    timestamp = db.Column(db.DateTime, default =func.now())

        

class DriverdetailsSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Driverdetails