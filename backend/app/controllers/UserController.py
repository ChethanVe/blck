from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.users import Users, UserSchema
from werkzeug.utils import secure_filename
# Users controller
def users():
     if request.method == 'GET':
         print(request.args.get('phone'))
         if request.args.get('phone'):
            phoneNo = request.args.get('phone')
            # users = db.session.query(Users.id).filter(Users.phone == phoneNo).all()
            users = Users.query.filter_by(phone = phoneNo).all()
            userdata = UserSchema(many = True)
            return jsonify({'user' : userdata.dump(users)})
         elif(request.args.get('id')):
            userId = request.args.get('id')
            users = Users.query.filter_by(id = userId).all()
            userdata = UserSchema(many = True)
            return jsonify({'user' : userdata.dump(users)})
         else:
            users = Users.query.all()
            userdata = UserSchema(many = True)
            return jsonify({'users' : userdata.dump(users)})
         
     if request.method == 'POST':
        res = request.get_json()
        user = Users(
        username = res["username"],
        email = res["email"],
        password = res["password"],
        con_paswword = res["conpassword"],
        user_type= res["usertype"]
      
        )
        db.session.add(user)
        db.session.commit()
        return f"User Data Added!"
     






    

# #to reset password
# def reset():
#     email = request.args.get('email')
#     cursor = mysql.connection.cursor()
#     cursor.execute(
#             ''' SELECT email, username, id FROM users where email like (%s) ''', [email])
#     res = cursor.fetchall()
#     cursor.close()
#     return jsonify(res)

# # update password
# def updatepass():
#     if request.method == 'PUT':
#         res = request.get_json()
#         id = res["id"]
#         password = res["password"]
#         cursor = mysql.connection.cursor()
#         cursor.execute(
#                 ''' UPDATE users set password = (%s) WHERE id = (%s) ''', [password, id])
#         mysql.connection.commit()
#         res = cursor.fetchall()
#         cursor.close()
#         return f"done!"

# #for login
# def login():
#     if request.args.get('username'):
#         username = request.args.get('username')
#         cursor = mysql.connection.cursor()
#         cursor.execute(
#             ''' SELECT password,user_type,email,username,id FROM users where username like (%s) ''', [username])
#         res = cursor.fetchall()
#         cursor.close()
#     else:
#         email = request.args.get('email')
#         cursor = mysql.connection.cursor()
#         cursor.execute(
#             ''' SELECT password,user_type,email,username,id FROM users where email like (%s) ''', [email])
#         res = cursor.fetchall()
#         cursor.close()
#     return jsonify(res)