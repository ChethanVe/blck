from flask import Blueprint
from app.controllers.UserController import users
from app.controllers.CarBrandController import carusers, uploadLogo
from app.controllers.CarType import cartype,brandlist,Classlist,agentlist,locationlist
from app.controllers.CarFleet import carfleet,DeleteCarfleet,getCarFeature,getCarBrand,saveSliderImg,saveImgcar_fleet, getSelfDrive, getChauffeur,getAirport, getOutStation, getStandard,displayAllCars
from app.controllers.CarRentals import carRentals
from app.controllers.Check import check
from app.controllers.PersonalInfo import personalinfo
from app.controllers.DriverDetails import driver_details, diver_img
from app.controllers.FeedbackController import Feedback
from app.controllers.Subscription import subscription
from app.controllers.Enquiry import enquiry
from app.controllers.AddCoupon import AddCouponData, home
from app.controllers.Surge import surge
from app.controllers.CarFeatures import carfeatures, saveImg                                                                
from app.controllers.AgentInfo import agentinfoforupdate,agentinfo,Locationlistforagents
from app.controllers.CarLocation import carloc, delete_row, UpdateLoc, loc_popular, loc_unpopular
from app.controllers.CarFeatures import deletecarFeature
from app.controllers.UserController import users
from app.controllers.UserRegistrationController import UserInformation
from app.controllers.homepage import homepage
from app.controllers.selfDrive import selfDrive
from app.controllers.standardDrive import standardDrive 
from app.controllers.outStationDrive import outStationDrive 
from app.controllers.Yacht import addyacht,uploadyatchimage
from app.controllers.airportDrive import airportDrive 
from app.controllers.YachtEnquires import yacht_enquires
from app.controllers.JetsEnquires import jet_enquires
from app.controllers.CarsEnquires import cars_enquires

# Creating routes Blueprint
routes = Blueprint('routes', __name__)
#-----
#for login
routes.route('/getusers', methods = ['GET'])(users)
# routes.route('/fetchalldetails',methods=["GET"])(users)
routes.route("/deleteDetails", methods=['DELETE'])(users)
#for registering
routes.route("/userdetails", methods=['POST'])(users)
routes.route("/getbrandlist" , methods=['GET'])(brandlist)
routes.route("/getCarClaslist" , methods=['GET'])(Classlist)
routes.route("/getagentlist" , methods=['GET'])(agentlist)
routes.route("/getlocationlist" , methods=['GET'])(locationlist)

routes.route("/cartypeDetails",methods=['POST'])(cartype)
routes.route("/GetLocations",methods=['GET'])(cartype)
routes.route("/CarFleetDetials",methods=['POST', 'GET', 'PUT'])(carfleet)
routes.route("/deleteCarfleet",methods=['DELETE'])(DeleteCarfleet)
routes.route("/carrents",methods=['POST'])(carRentals)
routes.route("/check",methods=['POST'])(check)


routes.route("/getAgentInfo",methods=['GET'])(agentinfo)
routes.route("/POSTAgent",methods=['POST'])(agentinfo)
#edit 
routes.route("/updateAgentslist",methods=['PUT'])(agentinfo)
routes.route("/deleteAgent",methods=['DELETE'])(agentinfo)
routes.route("/updateAgentsStatus",methods=['POST'])(agentinfoforupdate)
routes.route("/personalinfo",methods=['POST'])(personalinfo)
# fro car features
routes.route("/uploadfeatureimg",methods=['POST'])(saveImg)
routes.route("/carfeatures",methods=['POST'])(carfeatures)
routes.route("/featureIcons",methods=["GET"])(carfeatures)
routes.route("/deleteCarFeatures",methods=["DELETE"])(carfeatures)

#edit
routes.route("/updateCarFeatureslist",methods=['PUT'])(carfeatures)
routes.route("/Feedback",methods=['POST'])(Feedback)
routes.route("/subscription",methods=['POST'])(subscription)
routes.route("/enquiry",methods=['POST'])(enquiry)
routes.route("/AddCoupondata",methods=['POST','GET','DELETE','PUT'])(AddCouponData)
routes.route("/surge",methods=['POST', 'GET', 'DELETE','PUT'])(surge)

# For Location
routes.route("/location",methods=['POST','GET','DELETE', 'PUT'])(carloc)
# routes.route("/loc<int:id>", methods=['DELETE'])(delete_row)
routes.route("/loc/<id>", methods=['DELETE'])(delete_row)
routes.route("/updatedloc", methods = ['PUT'])(UpdateLoc)

routes.route("/getCarFeature",methods=['POST','GET'])(getCarFeature)
routes.route("/getCarBrand",methods=['POST','GET'])(getCarBrand)
routes.route("/deleteCarFeatureIcon",methods=['DELETE'])(deletecarFeature)

# for Add car brand
routes.route("/carsbrand" , methods=['POST','GET','DELETE','PUT'])(carusers)
routes.route("/uploadlogo" , methods=['POST'])(uploadLogo)
routes.route("/location",methods=['POST','GET'])(carloc)
routes.route("/getCarFeature",methods=['POST','GET'])(getCarFeature)
routes.route("/getCarBrand",methods=['POST','GET'])(getCarBrand)
routes.route("/deleteCarFeatureIcon",methods=['DELETE'])(deletecarFeature)
routes.route("/LocationInformation",methods=['GET'])(Locationlistforagents)

routes.route("/uploadLandingimg",methods=['POST'])(saveImgcar_fleet)

routes.route("/uploadSliderimg",methods=['POST'])(saveSliderImg)
# for Driver
routes.route("/driver_details",methods=['POST','GET','DELETE','PUT'])(driver_details)
routes.route("/driverimg",methods=['POST'])(diver_img)
# routes.route("/driver_details",methods=['POST'])(driver_details)
# routes.route("/driverimg",methods=['POST'])(diver_img)

#for user Registarion /postRegistrationData
routes.route("/postRegistrationData",methods=['POST'])(users)
routes.route("/user_information",methods=['POST'])(UserInformation)
routes.route("/homepage_data",methods=['get'])(homepage)

routes.route("/self-drive-data",methods=['POST','GET','DELETE','PUT'])(selfDrive)
routes.route("/standard-data",methods=['POST','GET','DELETE','PUT'])(standardDrive)
routes.route("/outstation-data",methods=['POST','GET','DELETE','PUT'])(outStationDrive)
routes.route("/airport-data",methods=['POST','GET','DELETE','PUT'])(airportDrive)
routes.route("/get-selfdrive-cars", methods=['GET'])(getSelfDrive)
routes.route("/get-standard-cars", methods=['GET'])(getStandard)
routes.route("/get-airport-cars", methods=['GET'])(getAirport)
routes.route("/get-outstation-cars", methods=['GET'])(getOutStation)
routes.route("/get-chauffeur-cars", methods=['GET'])(getChauffeur)
routes.route("/display-all-cars", methods=['GET'])(displayAllCars)
routes.route("/", methods=['GET'])(home)

#for Adding Yacht Details 
routes.route("/addyatchdetails",methods=['POST'])(addyacht)
routes.route("/getyachtdeatils",methods=['GET'])(addyacht)
routes.route("/updateyatch",methods=['PUT'])(addyacht)
#for frontend
# routes.route("/fetchyachtdeatils",methods=['GET'])(addyacht)
routes.route("/uploadyatchimage",methods=['POST'])(uploadyatchimage)

routes.route("/loc_popular",methods=['GET'])(loc_popular)
routes.route("/loc_unpopular",methods=['GET'])(loc_unpopular)
routes.route("/yacht_enquires",methods=['POST', 'GET'])(yacht_enquires)
routes.route("/jets_enquires",methods=['POST', 'GET'])(jet_enquires)
routes.route("/cars_enquires",methods=['POST', 'GET'])(cars_enquires)
