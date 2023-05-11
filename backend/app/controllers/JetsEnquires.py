from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.jets_enquires import Jet_Enquiry, JetEnquireSchema
# Yacht controller
from app.util.helpers import upload_file_to_s3
from app import os


def jet_enquires():
    if request.method == 'POST':
        res = request.get_json()
        user = Jet_Enquiry(
        user_name = res["user_name"],
        email = res["email"],
        phone_number = res["phone_number"],
        source = res["source"],
        destination = res["destination"],
        trip_type = res["trip_type"],
        persons_count = res["persons_count"],
        booking_date=res["booking_date"],    
        booking_time = res["booking_time"],
        aircraft_preference = res["aircraft_preference"]
        )
        db.session.add(user)
        db.session.commit()
        return f"User details Added!"
    
    if request.method == 'GET':
        users = Jet_Enquiry.query.all()
        userdata = JetEnquireSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})