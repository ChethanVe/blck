from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.surge import Surge, SurgeeSchema
# Users controller
def surge():
    if request.method == 'GET':
        users = Surge.query.all()
        userdata = SurgeeSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})

    if request.method == 'POST':
        res = request.get_json()
        user = Surge(
            luxury_cd = res['luxurycd'],
            luxury_sd = res['luxurysd'],
            luxury_at = res['luxuryat'],
            standard_cd = res['standardcd'],
            standard_sd = res['standardsd'],
            standard_at = res['standardat'],
            yatch = res['yatch']
        )
        db.session.add(user)
        db.session.commit()
        return f"Surge Data Added!"

    if request.method == 'DELETE':
        userId = request.args.get('id')
        user = Surge.query.filter_by(id = userId).first()
        db.session.delete(user)
        db.session.commit()
        return f"User Deleted!"
    
    if request.method == 'PUT':
        res = request.get_json()
        uid = res["id"]
        print(uid)
        update = Surge.query.filter_by(id=res["id"]).first()
        print (update)
        update.luxury_cd = res["luxury_cd"]
        update.luxury_sd = res["luxury_sd"]
        update.luxury_at = res["luxury_at"] 
        update.standard_cd = res["standard_cd"] 
        update.standard_sd = res["standard_sd"] 
        update.standard_at = res["standard_at"] 
        update.yatch = res["yatch"] 
        db.session.add(update)
        db.session.commit()
        return f"Data Added !"
