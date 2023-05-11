from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.yacht import Yacht, YachtSchema
# Yacht controller
from app.util.helpers import upload_file_to_s3
from app import os



UPLOAD_FOLDER = "yacht" 

def uploadyatchimage():
    if request.method == 'POST':
        # isExist = os.path.exists(UPLOAD_FOLDER)
        # if not isExist:
        # # Create a new directory because it does not exist
        #     os.makedirs(UPLOAD_FOLDER)
        #     print("The new directory is created!")
        icon = request.files['Image']
        aws_file_name = upload_file_to_s3(icon,UPLOAD_FOLDER)
        print(aws_file_name)
   


        # icon_name = icon.filename
        # icon_name = os.path.join(UPLOAD_FOLDER, icon.filename)
        # print(UPLOAD_FOLDER)
        # print(icon.filename)
        # open(icon_name, 'wb').write(icon.read())
        # # print(icon)
        # # icon.save(icon_name)
        # print(icon)
        return f"uploaded"

def addyacht():
    if request.method == 'POST':
        res = request.get_json()
        user = Yacht(
        yacht_name = res["yachtname"],
        description = res["description"],
        capacity = res["capacity"],
        price = res["price"],
        anchorage=res["anchorage"],
        sailing=res["sailing"],
        time=res["time"],
        # yacht_image = UPLOAD_FOLDER+'/'+res["yachtimage"],
        yacht_image =res["yachtimage"],
        
        )
        db.session.add(user)
        db.session.commit()
        return f"User details Added!"
    
    if request.method == 'GET':
        users = Yacht.query.all()
        userdata = YachtSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})
    
    if request.method == 'PUT':
        res = request.get_json()
        uid = res["id"]
        print(uid)
        update = Yacht.query.filter_by(id=res["id"]).first()
        print (update)
        update.yacht_name = res["yachtname"]
        update.description = res["description"]
        update.capacity = res["capacity"] 
        # update.yacht_image = UPLOAD_FOLDER+'/'+res["yachtimage"] 
        update.yacht_image = res["yachtimage"] 
        update.sailing = res["sailing"] 
        update.anchorage = res["anchorage"] 
        update.time = res["time"] 
        db.session.add(update)
        db.session.commit()
        return f"Data Added !"