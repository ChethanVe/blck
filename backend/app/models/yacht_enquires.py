from app import db, ma
from sqlalchemy.sql import func

class Yacht_Enquiry(db.Model):
    __tablename__ = 'yacht_enquires'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    user_name = db.Column(db.String(400), nullable = False)
    email= db.Column(db.String(400), nullable = False)
    phone_number = db.Column(db.BigInteger(), nullable = False)
    yacht_name = db.Column(db.String(400), nullable = False)
    booking_date = db.Column(db.Date, nullable = False)
    enquiry_date = db.Column(db.Date, default =func.now())
    enquiry_time = db.Column(db.Time, default =func.now())
    
class YachtEnquireSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Yacht_Enquiry