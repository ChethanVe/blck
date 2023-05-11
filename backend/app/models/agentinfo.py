# from datetime import datetime
# from flask_marshmallow import Marshmallow
from app import db, ma
from sqlalchemy.sql import func

class AgentInfo(db.Model):
    _tablename_ = 'agent_info'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    agent_name = db.Column(db.String(100), nullable = False)
    location= db.Column(db.String(100), nullable = False)
    email= db.Column(db.String(100), unique = True, nullable = False)
    alter_email= db.Column(db.String(100), unique = True, nullable = False)
    # alter_email2=db.Column(db.String(100), unique = True, nullable = False)
    phone = db.Column(db.BigInteger(), unique = True, nullable = False)
    alt_phone=db.Column(db.BigInteger(), unique = True, nullable = False)
    status=db.Column(db.Enum('Active','Inactive'), nullable = False)
    
   

   


   
  

   
        


class AgentInfoSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model=AgentInfo