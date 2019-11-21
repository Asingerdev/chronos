import models

from flask import request, jsonify, Blueprint

from playhouse.shortcuts import model_to_dict

event = Blueprint('events', 'event')

# # INDEX ROUTE
# @event.route('/', methods=["GET"])
# def get_all_events():
#     try:
#         events = [model_to_dict(event) for event in models.Event.select()]
#         print(events)
#         return jsonify(data=events, status={"code": 200, "message": "Success"})
#     except models.DoesNotExist:
#         return jsonify(data={}, status={"code": 401, "message": "Error getting the resources"})

# @event.route('/<timeline_id>', methods=["GET"])
# def get_timeline_events():
#     try:
#         events =

# CREATE ROUTE
@event.route('/', methods=["POST"])
def create_events():
    payload = request.get_json()
    event = models.Event.create(**payload)
    event_dict = model_to_dict(event)
    return jsonify(data=event_dict, status={"code": 201, "message": "success bag acquired"})

# SHOW ROUTE
@event.route('/<id>', methods=["GET"])
def get_event(id):
    try:
        print('hit', id)
        event = models.Event.get(models.Event.id == id)
        event_dict = model_to_dict(event)
        return jsonify(data=event_dict, status={"code": 200, "message": "event accepted"})
    except:
        return jsonify(data={}, status={"code": 401, "message": "error bag not found"})

# UPDATE ROUTE
@event.route('/<id>', methods=["PUT"])
def update_event(id):
    try:
        payload = request.get_json()
        query = models.Event.update(**payload).where(models.Event.id==id)
        query.execute()
        return jsonify(data=model_to_dict(models.Event.get_by_id(id)), status={"code": 201, "message": "event updated"})
    except:
        return jsonify(data={}, status={"code": 401, "message": "no event there"})