from marshmallow import post_dump
from app import app, db
from flask import request, jsonify,request
from app import mysql
from app.models.carfeatures import CarFeatures,CarFeaturesSchema
# from app import UPLOAD_FOLDER
from app.util.helpers import upload_file_to_s3
from app import os

# Users controller dhfd

UPLOAD_FOLDER = "car_features"

def saveImg():
    if request.method == 'POST':
        file = request.files['Image']
        aws_file_name = upload_file_to_s3(file,UPLOAD_FOLDER)
        # filename  = os.path.join(UPLOAD_FOLDER, file.filename)
        # file.save(filename)
        # open(filename,'wb').write(file.read())
        print(aws_file_name)
        return f"uploaded"

def carfeatures():
    if request.method == 'GET':
        users = CarFeatures.query.all()
        userdata = CarFeaturesSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})

    if request.method == 'POST':
        res = request.get_json()
        user = CarFeatures(
        feature_name = res["featurename"],
        img = UPLOAD_FOLDER+'/'+res["uploading"],
        preview=res["preview"] or '-',
        status=res['status'],
        description=res["description"],
        files = res['uploading']
        )
        db.session.add(user)
        db.session.commit()
        return f"User Data Added!"

    if request.method == 'DELETE':
        userId = request.args.get('id')
        user = CarFeatures.query.filter_by(id = userId).first()
        db.session.delete(user)
        db.session.commit()
        return f"User Deleted!" 

    if request.method == 'PUT':
        res = request.get_json()
        uid = res["id"]
        print(uid)
        update = CarFeatures.query.filter_by(id=res["id"]).first()
        print (update)
        update.featurename = res["featurename"]
        update.img = res["img"]
        update.files = res["files"]
        update.description = res["description"] 
        update.status = res["status"] 
        db.session.add(update)
        db.session.commit()
        return f"Data Added !"

def deletecarFeature():
     if request.method == 'DELETE':
        id = request.args.get('id')
        user = CarFeatures.query.filter_by(id = id).first()
        db.session.delete(user)
        db.session.commit()
        return f"User Deleted!"


           