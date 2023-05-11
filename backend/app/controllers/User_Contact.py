from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.users_contact import Users_Contact, Users_ContactSchema
from werkzeug.utils import secure_filename
# Users controller
def users_contact():
     if request.method == 'GET':
        users = Users_Contact.query.all()
        userdata = Users_ContactSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})

     if request.method == 'POST':
        res = request.get_json()
        user = Users_Contact(
        firstname = res["firstname"],
        phnno = res["phnno"],
        email = res["email"],
        city = res["city"],
        message= res["message"]
      
        )
        db.session.add(user)
        db.session.commit()
        return f"User Data Added!"






    

