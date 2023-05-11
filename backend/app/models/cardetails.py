from app import db, ma
from sqlalchemy.sql import func

class CarDetails(db.Model):
    __tablename__ = 'car_details'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    car_brand = db.Column(db.String(100), nullable=False)
    car_model = db.Column(db.String(100), nullable=False)
    car_type = db.Column(db.String(100), nullable=False)
    use_type = db.Column(db.Enum('Self Drive', 'Chauffeur Driven',
                        'Airport Pickup Drop'), nullable=False)
    features = db.Column(db.String(100), nullable=False)
    specs = db.Column(db.String(100), nullable=False)
    rent = db.Column(db.Numeric, nullable=False)
    availablity_count = db.Column(db.Numeric, nullable=False)
    car_features = db.Column(db.String(100), nullable=False)
    fuel = db.Column(
        db.Enum('Petrol', 'Disel', 'Electric', 'Hybrid'), nullable=False)
    gear = db.Column(db.Enum('Manual', 'Automatic'), nullable=False)
    luggage = db.Column(db.String(600), nullable=False)
    seats = db.Column(db.String(600),  nullable=False)
    locations_available = db.Column(db.String(600))
    car_image = db.Column(db.String(600))
    slider_images = db.Column(db.String(600))
    status = db.Column(db.Enum('Active', 'Inactive'))

class CarDetailsSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = CarDetails
