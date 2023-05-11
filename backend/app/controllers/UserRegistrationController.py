from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.user_registration import UserRegister, UserRegisterSchema
# Users controller

def UserInformation():
    if request.method == 'POST':
        res = request.get_json()
        user = UserRegister(
        firstname = res["firstname"],
        lastname = res["lastname"],
        email = res["email"],
        contact = res["contact"])
        db.session.add(user)
        db.session.commit()
        return f"User details Added!"
    
    if request.method == 'GET':
        users = UserRegister.query.all()
        userdata = UserRegisterSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})