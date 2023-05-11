# upload-self-drive-data
from app import app, db
from flask import request, jsonify
from app.models.chauffeurDrivenOutStation import ChauffeurDrivenOutStation, ChauffeurDrivenOutStationSchema
# Users controller
def outStationDrive():
    if request.method == 'GET':
        data = ChauffeurDrivenOutStation.query.all()
        allData = ChauffeurDrivenOutStation(many = True)
        return jsonify({'data' : allData.dump(data)})

    if request.method == 'POST':
        res = request.get_json()
        locationRepeat = ChauffeurDrivenOutStation.query.filter_by(car_id = res["carModel"], location = res["location"]).all()
        if(locationRepeat):
            return f'false'
        else:
            data = ChauffeurDrivenOutStation(
            car_id = res["carModel"],
            car_type = "Chauffeur_Driven_OutStation",
            car_style = res["carStyle"],
            location = res["location"],
            # availability_count = res["availabilityCount"],
            forPrime = res["forPrime"],
            agent = res["agent"] or 0,
            color = res["color"] or '' ,
            launch = res["launch"] or '' ,
            # driver_allowance=res["driverAllowance"],
            price = res["outStationPrice"],
            package_hours=res["outStationPackageHrs"] or '24',
            extra_kms= res["outStationKmsLimit"] or '300',
            # gst_price= res["outStationGstPrice"],
            deposit=res["deposit"] or '0',
            status =res["status"]
            )
            db.session.add(data)
            db.session.commit()
            return f'true'

    if request.method == 'DELETE':
        dataId = request.args.get('id')
        data = ChauffeurDrivenOutStation.query.filter_by(id = dataId).first()
        db.session.delete(data)
        db.session.commit()
        return f"Data Deleted!"
    
    if request.method == 'PUT':
        res = request.get_json()
        dataId = res["id"]
        update = ChauffeurDrivenOutStation.query.filter_by(id=res["id"]).first()
        update.car_id = res["carModel"],
        update.car_type = res["carType"],
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

