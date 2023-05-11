from app import db, ma
from sqlalchemy.sql import func

class Jet_Enquiry(db.Model):
    __tablename__ = 'jets_enquires'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    user_name = db.Column(db.String(400), nullable = False)
    email= db.Column(db.String(400), nullable = False)
    phone_number = db.Column(db.BigInteger(), nullable = False)
    source = db.Column(db.String(400), nullable = False)
    destination = db.Column(db.String(400), nullable = False)
    trip_type = db.Column(db.Enum('One Way','Round Trip'), nullable = False)
    persons_count = db.Column(db.Integer, nullable = False)
    booking_date = db.Column(db.Date, nullable = False)
    booking_time = db.Column(db.Time, nullable = False)
    aircraft_preference = db.Column(db.String(800), nullable = True)
    enquiry_date = db.Column(db.Date, default =func.now())
    enquiry_time = db.Column(db.Time, default =func.now())
    
class JetEnquireSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Jet_Enquiry