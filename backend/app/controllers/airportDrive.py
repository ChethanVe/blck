# upload-self-drive-data
from app import app, db
from flask import request, jsonify
from app.models.chauffeurDrivenAirport import ChauffeurDrivenAirport, ChauffeurDrivenAirportSchema
# Users controller
def airportDrive():
    if request.method == 'GET':
        data = ChauffeurDrivenAirport.query.all()
        allData = ChauffeurDrivenAirportSchema(many = True)
        return jsonify({'data' : allData.dump(data)})

    if request.method == 'POST':
        res = request.get_json()
        locationRepeat = ChauffeurDrivenAirport.query.filter_by(car_id = res["carModel"], location = res["location"]).all()
        if(locationRepeat):
            return f'false'
        else:
            data = ChauffeurDrivenAirport(
            car_id = res["carModel"],
            car_type = "Chauffeur_Driven_Airport",
            car_style = res["carStyle"],
            location = res["location"],
            # availability_count = res["availabilityCount"],
            forPrime = res["forPrime"],
            agent = res["agent"] or 0,
            color = res["color"] or '',
            launch = res["launch"] or '' ,
            # driver_allowance=res["driverAllowance"],
            price = res["airprice"],
            deposit=res["deposit"] or '0',
            toll_fee=res["tollFee"],
            parking_fee= res["parkingFee"],
            # gst_price= res["gstPrice"],
            status =res["status"]
            )
            db.session.add(data)
            db.session.commit()
            return f'true'

    if request.method == 'DELETE':
        dataId = request.args.get('id')
        data = ChauffeurDrivenAirport.query.filter_by(id = dataId).first()
        db.session.delete(data)
        db.session.commit()
        return f"Data Deleted!"

    if request.method == 'PUT':
        res = request.get_json()
        dataId = res["id"]
        update = ChauffeurDrivenAirport.query.filter_by(id=res["id"]).first()
        update.car_id = res["carModel"],
        update.car_type = "Chauffeur_Driven_Airport",
        update.car_style = res["carStyle"],
        update.location = res["location"],
        # update.availability_count = res["availabilityCount"],
        update.for_prime = res["forPrime"],
        update.agent = res["agent"],
        update.color = res["color"],
        update.launch = res["launch"] ,
        # update.driver_allowance=res["driverAllowance"],
        update.price=res["selfDrivePrice"],
        update.deposit=res["deposit"],
        update.status =res["status"]
        db.session.add(update)
        db.session.commit()
        return f"Data Updated!"

