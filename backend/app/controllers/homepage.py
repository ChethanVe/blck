from app import app, db
from flask import request, jsonify
from app.models.cardetails import CarDetails, CarDetailsSchema
from app.models.carfleet import Carfleet, CarfleetSchema
from app.models.chauffeurDrivenStandard import ChauffeurDrivenStandard, ChauffeurDrivenStandardSchema
from app.models.chauffeurDrivenOutStation import ChauffeurDrivenOutStation, ChauffeurDrivenOutStationSchema
from app.models.chauffeurDrivenAirport import ChauffeurDrivenAirport, ChauffeurDrivenAirportSchema
from app.models.selfDrive import SelfDrive, SelfDriveSchema

from app import mysql
import os


def homepage():
    if request.method == 'GET':
        if request.args.get('id'):
            id = request.args.get('id')

            cars = Carfleet.query.filter_by(id=id).all()
            fleetData = CarDetailsSchema(many=True)

            standard = ChauffeurDrivenStandard.query.filter_by(car_id=id).all()
            standardData = ChauffeurDrivenStandardSchema(many=True)

            outstation = ChauffeurDrivenOutStation.query.filter_by(car_id=id).all()
            outstationData = ChauffeurDrivenOutStationSchema(many=True)

            airport = ChauffeurDrivenAirport.query.filter_by(car_id=id).all()
            airportData = ChauffeurDrivenAirportSchema(many=True)

            return jsonify({
                'car': fleetData.dump(cars),
                'standard': standardData.dump(standard),
                'outstation':outstationData.dump(outstation),
                'airport':airportData.dump(airport)
                })
        else:
            cars = CarDetails.query.all()
            cardata = CarDetailsSchema(many=True)
            return jsonify({'cars': cardata.dump(cars)})

# UPLOAD_FOLDER = 'C:\\Users\\hrush\\Documents\\GitHub\\blck_luxury\\frontend_blck_luxury\\src\\CarImages\\CarFeatureIcons' 
# Users controller dhfd


# def saveImg():
#     if request.method == 'POST':
#         file = request.files['Image']
#         filename = file.filename
#         filename = os.path.join(UPLOAD_FOLDER, file.filename)
#         file.save(filename)
#         # open(filename,'wb').write(file.read())
#         print(file)
#         return f"uploaded"

    # For Slider Images


# def saveSliderImg():
#     if request.method == 'POST':
#         file = request.files['Images']
#         filename = file.filename
#         filename = os.path.join(UPLOAD_FOLDER, file.filename)
#         file.save(filename)
#         # open(filename,'wb').write(file.read())
#         # print(file)
#         return f"uploaded"
    # if request.method == 'POST':
    #     files = request.files.getlist('Images[]')
    #     for file in files:
    #         # filename = file.filename
    #         print('Saved: ', file.fielname)
    #         filename  = os.path.join(UPLOAD_FOLDER, file.filename)
    #         # open(filename,'wb').write(file.read())
    #         file.save(filename)
    #     # print(files)
    #     return f"uploaded"


    
# def getCarFeature():

#     if request.method == 'GET':
#         users = db.session.query(CarFeatures.featurename,CarFeatures.id).all()
#         userdata = CarFeaturesSchema(many=True)
#         return jsonify({'users': userdata.dump(users)})


# def getCarBrand():

#     if request.method == 'GET':
#         users = db.session.query(Carbrand.carbrand).all()
#         userdata = CarbrandSchema(many=True)
#         return jsonify({'users': userdata.dump(users)})
