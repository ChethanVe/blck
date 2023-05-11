from app import app, db
from flask import request, jsonify
# from app.models.dbConfig import mysql
from app.models.carfleet import Carfleet, CarfleetSchema
from app.models.selfDrive import SelfDrive, SelfDriveSchema
from app.models.chauffeurDrivenAirport import ChauffeurDrivenAirport, ChauffeurDrivenAirportSchema
from app.models.chauffeurDrivenStandard import ChauffeurDrivenStandard, ChauffeurDrivenStandardSchema
from app.models.chauffeurDrivenOutStation import ChauffeurDrivenOutStation, ChauffeurDrivenOutStationSchema
from app.models.carfeatures import CarFeatures, CarFeaturesSchema
from app.models.carbrand import Carbrand, CarbrandSchema
import os
from app import mysql
from sqlalchemy.sql import func
from app.util.helpers import upload_file_to_s3


UPLOAD_FOLDER = "car_fleet" 
UPLOAD_FOLDER_SLIDER = "" 
# Users controller dhfd


def saveImgcar_fleet():
    if request.method == 'POST':
        print(request.files)
        file = request.files['LandingImage']
        aws_file_name = upload_file_to_s3(file, UPLOAD_FOLDER)
        print(aws_file_name)
        # filename = file.filename
        # filename = os.path.join(UPLOAD_FOLDER, file.filename)
        # print(file)
        # file.save(filename)
        # open(filename,'wb').write(file.read())
        return f"uploaded"


    # For Slider Images


def saveSliderImg():
    if request.method == 'POST':
        file = request.files['Images']
        aws_file_name = upload_file_to_s3(file,UPLOAD_FOLDER_SLIDER)
        print(aws_file_name)
        # filename = file.filename
        # filename = os.path.join(UPLOAD_FOLDER, file.filename)
        # print(file)
        # file.save(filename)
        # open(filename,'wb').write(file.read())
        return f"uploaded"


def carfleet():
    if request.method == 'GET':
        if(request.args.get('id')):
                carid = request.args.get('id')
                data = Carfleet.query.filter_by(id= carid).all()
                cardata = CarfleetSchema(many=True)
                return jsonify({'car': cardata.dump(data)})
        else:
                users = Carfleet.query.all()
                userdata = CarfleetSchema(many=True)
                return jsonify({'users': userdata.dump(users)})

    if request.method == 'POST':
        res = request.get_json()
        print(res['feature'])
        car = Carfleet(
            car_brand=res["carbrand"],
            car_model=res["carmodel"],
            car_features=res["feature"],
            fuel=res["fuel"],
            gear=res["gear"],
            luggage=res["luggage"],
            seats=res["seats"],
            car_image=UPLOAD_FOLDER+'/'+res["applanding"],
            slider_images=res["slider"],
            status=res["status"]
        )
        db.session.add(car)
        db.session.commit()
        return  ('done' )

    if request.method == 'PUT':
        res = request.get_json()
        carId = request.args.get('id')
        update = Carfleet.query.filter_by(id=carId).first()
        update.car_brand=res["carbrand"],
        update.car_model=res["carmodel"],
        update.car_features=res["feature"],
        update.fuel=res["fuel"] or 'Petrol',
        update.gear=res["gear"],
        update.luggage=res["luggage"],
        update.seats=res["seats"],
        update.car_image=UPLOAD_FOLDER+'/'+res["applanding"],
        update.slider_images=res["slider"],
        update.status=res["status"]
        db.session.add(update)
        db.session.commit()
        return  ('done')


def DeleteCarfleet():
    if request.method == 'DELETE':
        userId = request.args.get('id')
        user = Carfleet.query.filter_by(id=userId).first()
        db.session.delete(user)
        db.session.commit()
        return f"User Deleted!"
        
def getCarFeature():
    if request.method == 'GET':
        users = db.session.query(CarFeatures.feature_name,CarFeatures.id).all()
        userdata = CarFeaturesSchema(many=True)
        return jsonify({'users': userdata.dump(users)})

def getCarBrand():
    if request.method == 'GET':
        users = db.session.query(Carbrand.car_brand).all()
        userdata = CarbrandSchema(many=True)
        return jsonify({'users': userdata.dump(users)})

def getSelfDrive():
        if request.args.get('id'):
                id = request.args.get('id')
                cursor = mysql.connection.cursor()
                cursor.execute(
                        ''' SELECT car_fleet.*, self_drive.* 
                        from car_fleet 
                        inner join self_drive on car_fleet.id = self_drive.car_id
                        where car_fleet.id = (%s) ''',[id])
                res = cursor.fetchall()
                cursor.close()

        elif request.args.get('location'):
                id = request.args.get('location')
                cursor = mysql.connection.cursor()
                cursor.execute(
                        ''' SELECT car_fleet.*, self_drive.* 
                        from car_fleet 
                        inner join self_drive on car_fleet.id = self_drive.car_id
                        where location = (%s)  ''',[id])
                res = cursor.fetchall()
                cursor.close()

        else:
                cursor = mysql.connection.cursor()
                cursor.execute(
                        ''' SELECT car_fleet.*, self_drive.* 
                        from car_fleet 
                        inner join self_drive on car_fleet.id = self_drive.car_id ''')
                res = cursor.fetchall()
                cursor.close()
        return jsonify(res)

def getAirport():
        fleet = db.session.query(Carfleet).join(ChauffeurDrivenAirport).filter(ChauffeurDrivenAirport.car_id == Carfleet.id).all()
        selfdrive = SelfDrive.query.all()
        fleetdata = CarfleetSchema(many=True)
        airportdata = ChauffeurDrivenAirportSchema(many=True)
        return jsonify({'fleet': fleetdata.dump(fleet), 'airport':airportdata.dump(selfdrive)})

def getStandard():
        fleet = db.session.query(Carfleet).join(ChauffeurDrivenStandard).filter(ChauffeurDrivenStandard.car_id == Carfleet.id).all()
        selfdrive = SelfDrive.query.all()
        fleetdata = CarfleetSchema(many=True)
        airportdata = ChauffeurDrivenStandardSchema(many=True)
        return jsonify({'fleet': fleetdata.dump(fleet), 'standard':airportdata.dump(selfdrive)})

def getOutStation():
        fleet = db.session.query(Carfleet).join(ChauffeurDrivenOutStation).filter(ChauffeurDrivenOutStation.car_id == Carfleet.id).all()
        selfdrive = SelfDrive.query.all()
        fleetdata = CarfleetSchema(many=True)
        airportdata = ChauffeurDrivenOutStationSchema(many=True)
        return jsonify({'fleet': fleetdata.dump(fleet), 'outstation':airportdata.dump(selfdrive)})

def getChauffeur():
        if request.args.get('location'):
                id = request.args.get('location')
                cursor = mysql.connection.cursor()
                cursor.execute(
                        ''' 
                        SELECT car_fleet.*, chauffeur_driven_outstation.* 
                        from car_fleet 
                        inner join chauffeur_driven_outstation on car_fleet.id = chauffeur_driven_outstation.car_id
                        where chauffeur_driven_outstation.location = (%s)
                        order by car_fleet.id ASC
                        ''',[id])
                outstation = cursor.fetchall()
                cursor.execute(
                        ''' 
                        SELECT car_fleet.*, chauffeur_driven_standard.* 
                        from car_fleet 
                        inner join chauffeur_driven_standard on car_fleet.id = chauffeur_driven_standard.car_id
                        where chauffeur_driven_standard.location = (%s)
                        order by car_fleet.id ASC
                        ''',[id])
                standard = cursor.fetchall()
                cursor.execute(
                        ''' 
                        SELECT car_fleet.*, chauffeur_driven_airport.* 
                        from car_fleet 
                        inner join chauffeur_driven_airport on car_fleet.id = chauffeur_driven_airport.car_id
                        where chauffeur_driven_airport.location = (%s)
                        order by car_fleet.id ASC
                        ''',[id])
                airport = cursor.fetchall()
                cursor.close()
                return jsonify({'standard':standard, 'outstation':outstation, 'airport' :airport} )
        else:
                standard = ChauffeurDrivenStandard.query.all()
                stan = ChauffeurDrivenStandardSchema(many=True)
                outstation = ChauffeurDrivenOutStation.query.all()
                out = ChauffeurDrivenOutStationSchema(many=True)
                airport = ChauffeurDrivenAirport.query.all()
                air = ChauffeurDrivenAirportSchema(many=True)
                return jsonify({'standard':stan.dump(standard), 'outstation':out.dump(outstation), 'airport' :air.dump(airport)} )

def displayAllCars():
        selfdrive = SelfDrive.query.all()
        fleetdata = SelfDriveSchema(many=True)
        return jsonify({'SelfDrive': fleetdata.dump(selfdrive)})