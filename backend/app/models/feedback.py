# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class Feedback(db.Model):
    __tablename__ = 'feed_back'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    username = db.Column(db.String(50), unique = True, nullable = False)
    feedback_body =  db.Column(db.String(600), nullable = False)
    rating=  db.Column(db.String(300), nullable = False)
    suggestions = db.Column(db.String(300), nullable = False)
    
   

   


   
  

   
        
        

class FeedbackSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Feedback