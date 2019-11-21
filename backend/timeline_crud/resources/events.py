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
@event.route('/<id>', methods=["POST"])
def create_events():
    payload = re