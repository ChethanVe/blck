from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.car_enquires import Cars_Enquiry, CarsEnquireSchema
# Yacht controller
from app.util.helpers import upload_file_to_s3
from app import os


def cars_enquires():
    if request.method == 'POST':
        res = request.get_json()
        user = Cars_Enquiry(
        user_name = res["user_name"],
        email = res["email"],
        phone_number = res["phone_number"],
        pickUp_address = res["pickUp_address"],
        drop_address = res["drop_address"],
        special_instructions = res["special_instructions"],
        car_name = res["car_name"],
        car_type = res["car_type"],
        booking_date=res["booking_date"],    
        booking_time = res["booking_time"],
        )
        db.session.add(user)
        db.session.commit()
        return f"User details Added!"
    
    if request.method == 'GET':
        users = Cars_Enquiry.query.all()
        userdata = CarsEnquireSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})