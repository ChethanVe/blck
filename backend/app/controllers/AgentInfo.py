from app import app, db
from flask import request, jsonify
from app import mysql
from app.models.agentinfo import AgentInfo,AgentInfoSchema
from app.models.addlocation import Location,LocationSchema

# Users controller dhfd
def agentinfo():
    if request.method == 'GET':
        users = AgentInfo.query.all()
        userdata = AgentInfoSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})

    if request.method == 'POST':
        res = request.get_json()
        user = AgentInfo(
        agent_name = res["agentname"],
        location = res["location"],
        email = res["email"],
        alter_email = res["alter_email1"],
        phone = res["phone"] ,
        alt_phone= res["altPhone"],
        status=res['status'])
        db.session.add(user)
        db.session.commit()
        return f"User Data Added!"

    if request.method == 'DELETE':
        userId = request.args.get('id')
        user = AgentInfo.query.filter_by(id = userId).first()
        db.session.delete(user)
        db.session.commit()
        return f"User Deleted!" 


    if request.method == 'PUT':
      
            res = request.get_json()
            uid = res["id"]
            print(uid)
            update = AgentInfo.query.filter_by(id=res["id"]).first()
            print (update)
            update.agent_name = res["agentname"]
            update.location = res["location"]
            update.email = res["email"] 
            update.alter_email = res["alter_email"] 
            # update.alter_email2 = res["alter_email2"] 
            update.phone = res["phone"] 
            update.alt_phone = res["alt_phone"] 
            update.status = res["status"] 
            db.session.add(update)
            db.session.commit()
            return f"Data Added !"
        


def agentinfoforupdate():         
    if request.method == 'POST':
        res = request.get_json()
        
        id = res["id"],
        status = res["newstatus"]
        cur=mysql.connection.cursor()
        cur.execute(
        '''update agent_info set status = (%s) where id = (%s) ''',[status,id]
            )
        mysql.connection.commit()
        cur.close()
        db.session.add(user)
        db.session.commit()
        return f"User Data Added!"
    
def Locationlistforagents():
    
    if request.method == 'GET':
        users = db.session.query(Location.location, Location.id).all()
        userdata = LocationSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})               




  
#