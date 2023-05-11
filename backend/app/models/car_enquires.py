from app import db, ma
from sqlalchemy.sql import func

class Cars_Enquiry(db.Model):
    __tablename__ = 'car_enquires'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    user_name = db.Column(db.String(400), nullable = False)
    email= db.Column(db.String(400), nullable = False)
    phone_number = db.Column(db.BigInteger(), nullable = False)
    pickUp_address = db.Column(db.String(400), nullable = False)
    drop_address = db.Column(db.String(400), nullable = True)
    special_instructions = db.Column(db.String(400), nullable = True)
    car_name = db.Column(db.String(400), nullable = False)
    car_type = db.Column(db.String(400), nullable = False)
    booking_date = db.Column(db.Date, nullable = False)
    booking_time = db.Column(db.Time, nullable = False)
    enquiry_date = db.Column(db.Date, default =func.now())
    enquiry_time = db.Column(db.Time, default =func.now())

class CarsEnquireSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Cars_Enquiry