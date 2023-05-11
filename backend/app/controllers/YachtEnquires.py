from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.yacht_enquires import Yacht_Enquiry, YachtEnquireSchema
# Yacht controller
from app.util.helpers import upload_file_to_s3
from app import os


def yacht_enquires():
    if request.method == 'POST':
        res = request.get_json()
        user = Yacht_Enquiry(
        user_name = res["user_name"],
        email = res["email"],
        phone_number = res["phone_number"],
        yacht_name = res["yacht_name"],
        booking_date=res["booking_date"],    
        )
        db.session.add(user)
        db.session.commit()
        return f"User details Added!"
    
    if request.method == 'GET':
        users = Yacht_Enquiry.query.all()
        userdata = YachtEnquireSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})