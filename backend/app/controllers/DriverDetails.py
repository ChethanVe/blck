from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.driver_deatils import Driverdetails, DriverdetailsSchema
from app import os
from app.util.helpers import upload_file_to_s3
# Users controller

UPLOAD_FOLDER = "driver"
def diver_img():

    if request.method == 'POST':
        icon = request.files['Image']

        # icon_name = icon.filename
        # icon_name = os.path.join(UPLOAD_FOLDER, icon.filename)
        # print(icon.filename)
        # open(icon_name, 'wb').write(icon.read())
        # print(icon)
        # icon.save(icon_name)
        aws_file_name = upload_file_to_s3(icon,UPLOAD_FOLDER)
        print(aws_file_name)
        # print(icon)
        return f"uploaded"
    
def driver_details():
    if request.method == 'GET':
        users = Driverdetails.query.all()
        userdata = DriverdetailsSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})

    if request.method == 'POST':
        res = request.get_json()
        user = Driverdetails(
        driver_name = res["driversname"],
        email = res["email"],
        driver_img = UPLOAD_FOLDER+'/'+res["img"],
        contact = res["contact_no"],
        alter_contact = res["altcontact_no"],
        driving_licence_no = res["driving_lic_num"],
        aadhar_no = res["aadar_num"],
        pancard_no = res["pan_card_no"],
        date_of_birth = res["dob"],
        driver_loc = res["loc"],
        driver_pin = res["pin"],
        status = res['status'])
        db.session.add(user)
        db.session.commit()
        return f"Driver details Added!"

    if request.method == 'DELETE':
        userId = request.args.get('id')
        user = Driverdetails.query.filter_by(id = userId).first()
        db.session.delete(user)
        db.session.commit()
        return f"User Deleted!"
    
    if request.method == 'PUT':
        res = request.get_json()
        uid = res["id"]
        print(uid)
        update = Driverdetails.query.filter_by(id=res["id"]).first()
        print (update)
        update.driver_name = res["driver_name"]
        update.email = res["email"]
        update.driver_img = res["driver_img"] 
        update.contact = res["contact"] 
        update.alter_contact = res["alter_contact"] 
        update.driving_licence_no = res["driving_licence_no"] 
        update.aadhar_no = res["aadhar_no"] 
        update.pancard_no = res ["pancard_no"]
        update.date_of_birth = res ["date_of_birth"]
        update.driver_loc = res ["driver_loc"]
        update.driver_pin = res ["driver_pin"]
        update.status = res["status"] 
        db.session.add(update)
        db.session.commit()
        return f"Data Added !"

