from flask import Flask
from flask_cors import CORS
import pymysql
pymysql.install_as_MySQLdb()
from flask_mysqldb import MySQL
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
import os
from os.path import join, dirname, realpath

UPLOAD_FOLDER = 'D:\\Black_luxury\\blck_luxury\\frontend_blck_luxury\\src\\CarImages'

app = Flask(__name__)
CORS(app)

username = 'root'
password = 'root'
host = '0.0.0.0:3306'
db='blck_luxury'

app.config['MYSQL_HOST'] = '0.0.0.0'
app.config['MYSQL_USER'] = username
app.config['MYSQL_PASSWORD'] =  password
app.config['MYSQL_DB'] = db
app.config["SQLALCHEMY_DATABASE_URI"] = f'mysql://{username}:{password}@{host}/{db}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

mysql = MySQL(app)
db = SQLAlchemy(app)
ma = Marshmallow(app)
migrate = Migrate(app, db)
#-----
# Importing models after creating Migrate configs
from app.models.cardetails import *
# from app.models.addlocation import *
#-----
# Registering routes
from app.routes.routes import routes
app.register_blueprint(routes)