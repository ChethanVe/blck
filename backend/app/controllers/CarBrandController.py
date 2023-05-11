from app import app, db
from flask import request, jsonify, Flask,url_for,json
from sqlalchemy.exc import SQLAlchemyError
from app import mysql
from app.models.carbrand import Carbrand, CarbrandSchema
from app.util.helpers import upload_file_to_s3
# Users controller

from app import os



UPLOAD_FOLDER = "car_brand"


def uploadLogo():
    if request.method == 'POST':
        icon = request.files['Image']
        aws_file_name = upload_file_to_s3(icon,UPLOAD_FOLDER)
        print(aws_file_name)
        return f"uploaded"


def carusers():
    if request.method == 'GET':
        users = Carbrand.query.all()
       # print(users)
        new_users2=[]
        userdata = CarbrandSchema(many=True)
        for item in users:
            new_users2.append(dict({'car_brand':item.car_brand,'car_logo':item.car_logo,'id':item.id,'status':item.status}))
        return jsonify({'users': new_users2})

    if request.method == 'POST':
        res = request.get_json()
        # carbrand = request.form['carbrand']
        # carlogo = request.files['carlogo']
        # cartype = request.form['cartype']
        # status = request.form['status']
        # image_data = carlogo.read()
        user = Carbrand(
            car_brand=res["carbrand"],
            car_logo=UPLOAD_FOLDER+'/'+res["uploadinglogo"],
            status=res['status']
        )
        db.session.add(user)
        db.session.commit()
        return f"User Data Added!"

    if request.method == 'DELETE':
        userId = request.args.get('id')
        user = Carbrand.query.filter_by(id=userId).first()
        db.session.delete(user)
        db.session.commit()
        return f"User Deleted!"

    if request.method == 'PUT':
        res = request.get_json()
        uid = res["id"]
        print(uid)
        update = Carbrand.query.filter_by(id=res["id"]).first()
        print(update)
        # update.cartype = res["cartype"]
        update.car_brand = res["car_brand"]
        update.car_logo = res["car_logo"]
        update.status = res["status"]
        db.session.add(update)
        db.session.commit()
        return f"Data Added !"


# from app import app, db
# from flask import request, jsonify
# from app.models.carbrand import BrandDetails, BrandSchema
# from app.models.dbConfig import mysql

# # CarBrandController
# def brand():
#     if request.method == 'POST':
#         res = request.get_json()
#         carbrand = BrandDetails(
#         brand_name = res["carname"],
#         car_type = res["cartype"],
#         car_logo = res["logo"],
#         status = res["status"])
#         db.session.add(carbrand)
#         db.session.commit()
#         return f"Car brand Data Added!"

