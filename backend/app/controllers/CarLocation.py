from app import app, db
from flask import request, jsonify, Flask
from sqlalchemy.exc import SQLAlchemyError
from app import mysql
from app.models.addlocation import Location, LocationSchema
# Users controller

def carloc():
    if request.method == 'GET':
        alldata = Location.query.all()
        locationData = LocationSchema(many = True)
        return jsonify({'location' : locationData.dump(alldata)})

    if request.method == 'POST':
        res = request.get_json()
        alldata = Location(
        location = res["location"],
        location_status = res["locationstatus"],
        status = res['status']
        )
        db.session.add(alldata)
        db.session.commit()
        return f"Location Added!"

    if request.method == 'DELETE':
        userId = request.args.get('id')
        user = Location.query.filter_by(id = userId).first()
        db.session.delete(user)
        db.session.commit()
        return f"User Deleted!"
    
    if request.method == 'PUT':
        res = request.get_json()
        uid = res["id"]
        print(uid)
        update = Location.query.filter_by(id=res["id"]).first()
        print (update)
        update.location = res["location"]
        update.location_status = res["location_status"]
        update.status = res["status"] 
        db.session.add(update)
        db.session.commit()
        return f"Data Added !"
    

def UpdateLoc():
    if request.method == 'PUT':
        # try:
            res = request.get_json()
            # id = res["updateId"]
            id = request.args.get('id')
            update = Location.query.filter_by(id=res['updateId']).first()
            update.location = res["updateLocation"]
            update.location_status = res["updateLocationStatus"]
            update.status = res["updateStatus"]
            db.session.add(update)
            db.session.commit()
            return f"Data Added"
    

        # except:
        #     return f"Unable to Add Data !🙁"
    

def delete_row(id):
    row = Location.query.get(id)
    db.session.delete(row)
    db.session.commit()
    return 'Done', 201


def loc_popular():
     if request.method == 'GET':
        # select only the rows where the location_status column is 'Popular'
        result = Location.query.filter_by(location_status='Popular', status = 'Active').all()
        # convert the result to a list of dictionaries
        result_dict = [row.__dict__ for row in result]
        for row in result_dict:
            row.pop('_sa_instance_state', None)
        # return the result as JSON
        return jsonify(result_dict)
     
def loc_unpopular():
     if request.method == 'GET':
        # select only the rows where the location_status column is 'Popular'
        result = Location.query.filter_by(location_status='Unpopular', status = 'Active').all()
        # convert the result to a list of dictionaries
        result_dict = [row.__dict__ for row in result]
        for row in result_dict:
            row.pop('_sa_instance_state', None)
        # return the result as JSON
        return jsonify(result_dict)
