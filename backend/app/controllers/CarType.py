from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.cartype import Cartype, CartypeSchema
from app.models.carbrand import Carbrand,CarbrandSchema
from app.models.carfleet import Carfleet,CarfleetSchema
from app.models.agentinfo import AgentInfo,AgentInfoSchema
from app.models.addlocation import Location,LocationSchema
# from werkzeug.utils import secure_filename
# Users controller
def cartype():
    if request.method == 'GET':
        users = Cartype.query.all()
        userdata = CartypeSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})
    if request.method == 'POST':
        res = request.get_json()
        users = Cartype(
        car_type = res["cartype"],
        brand = res["brand"],
        Carclass = res["Carclass"],
        location = res["location"],
        agent = res["agent"],
        color = res["color"] ,
        launch = res["launch"] ,
        deposit=res["deposit"],
        
        driverbata=res["driverbatta"],
        #standard
        stndprice=res["stndprice"],
        stndpackagehr=res["stndpackagehr"],
        stndextrakms=res["stndextrakms"],
        stndgstprice=res["stndgstprice"],
        #outstattion
        outprice=res["outprice"],
        outpackagehr=res["outpackagehr"],
        outextrakms=res["outextrakms"],
        outgstprice=res["outgstprice"],
        #Airport
        airprice=res["airprice"],
        airtollfee=res["airtollfee"],
        airparkingfee=res["airparkingfee"],
        airgstprice=res["airgstprice"],
        carprice=res["carprice"],

        status =res["status"]
        )
        db.session.add(users)
        db.session.commit()
        return f"User Data Added!"
    if request.method == 'DELETE':
        userId = request.args.get('id')
        user =Cartype.query.filter_by(id = userId).first()
        db.session.delete(user)
        db.session.commit()
        return f"User Deleted!"
        
def brandlist():
    if request.method == 'GET':
        users = db.session.query(Carbrand.car_brand,Carbrand.id).all()
        userdata = CarbrandSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})
def Classlist():
    if request.method == 'GET':
        users = db.session.query(Carfleet.car_brand,Carfleet.car_model,Carfleet.id).all()
        userdata = CarfleetSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})
def agentlist():
    if request.method == 'GET':
        users = db.session.query(AgentInfo.agent_name,AgentInfo.id).all()
        userdata = AgentInfoSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})
def locationlist():
    if request.method == 'GET':
        users = db.session.query(Location.location,Location.id).all()
        userdata = LocationSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})            