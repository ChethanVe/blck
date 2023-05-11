from app import app, db
from flask import request, jsonify,flash 
from app import mysql
from app.models.addcoupon import AddCoupon,AddCouponSchema

# Users controller

def AddCouponData():
    if request.method == 'GET':
        users = AddCoupons.query.all()
        userdata = AddCouponSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})

    if request.method == 'POST':
        res = request.get_json()
        user = AddCoupon(
        car_type = res["cartype"],
        code = res["code"],
        start_date = res["startdate"],
        end_date = res["enddate"],
        description = res["desc"],
        discounts_type = res["discounttype"],
        discounts_in_amount = res["discountamount"],
        max_discount_amount = res["maxdiscount"],
        deduct_deposit = res["deductdiposite"],
        status = res['status'])
        db.session.add(user)
        db.session.commit()
        return f"Coupon Added!"

    if request.method == 'DELETE':
        userId = request.args.get('id')
        user = AddCoupon.query.filter_by(id = userId).first()
        db.session.delete(user)
        db.session.commit()
        return f"User Deleted!"
    
    if request.method == 'PUT':
        res = request.get_json()
        uid = res["id"]
        print(uid)
        update = AddCoupon.query.filter_by(id=res["id"]).first()
        print (update)
        update.car_type = res["car_type"]
        update.code = res["code"]
        update.start_date = res["start_date"] 
        update.end_date = res["end_date"] 
        update.description = res["description"] 
        update.deduct_deposit = res["deduct_deposit"] 
        update.discounts_in_amount = res["discounts_in_amount"] 
        update.discounts_type = res["discounts_type"] 
        update.maxdiscount_amount = res["maxdiscount_amount"] 
        update.status = res["status"] 
        db.session.add(update)
        db.session.commit()
        return f"Data Added !"

def home():
    try:
        users = AddCoupon.query.all()
        userdata = AddCouponSchema(many = True)
        return jsonify({'users' : userdata.dump(users)})
    except Exception as e:
        flash(str(e))

    return jsonify({'desired': 'dberror Error unable to fetch items'})