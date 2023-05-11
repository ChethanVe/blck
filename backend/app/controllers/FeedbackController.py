from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.feedback import Feedback, FeedbackSchema
# Users controller
def Feedback():
    if request.method == 'GET':
        users = Feedback.query.all()
        userdata = FeedbackSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})

    if request.method == 'POST':
        res = request.get_json()
        user = Feedback(
        username = res["username"],
        email = res["email"],
        firstname = res["firstname"],
        lastname = res["lastname"],
        password = res["password"],
        user_type = res["usertype"] or 'User',
        designation = res["designation"] or 'none',
        role = res["role"] or 'none',
        status = 'Active')
        db.session.add(user)
        db.session.commit()
        return f"User Data Added!"

    if request.method == 'DELETE':
        userId = request.args.get('id')
        user = Feedback.query.filter_by(id = userId).first()
        db.session.delete(user)
        db.session.commit()
        return f"User Deleted!"

