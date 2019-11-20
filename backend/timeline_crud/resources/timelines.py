import models

from flask import Blueprint, jsonify, request

from playhouse.shortcuts import model_to_dict

timeline = Blueprint('timelines', 'timeline', url_prefix='/timeline')

# INDEX ROUTE
@timeline.route('/', methods=["GET"])
def get_all_timelines():
    try:
        timelines = [model_to_dict(timeline) for timeline in models.Timeline.select()]
        print(timelines)
        return jsonify(data=timelines, status={"code": 200, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 401, "message": "Error getting the resources"})

# NEW ROUTE
@timeline.route('/', methods=["POST"])
def create_timelines():
    payload = request.get_json()

    timeline = models.Timeline.create(**payload)

    print(dir(timeline))

    timeline_dict = model_to_dict(dog)
    return jsonify(data=dog_dict, status={"code": 201, "message": "Success"})

# SHOW ROUTE
@timeline.route('/<id>', method=["GET"])
def get_one_timeline(id):
    print(id)

    timeline = models.Timeline.get_by_id(id)

    return jsonify(data=model_to_dict(timeline), status={"code": 200, "message": "Success"})

# # UPDATE ROUTE
# @timeline.route('/<id>', methods=['PUT'])
# def update_timeline(id):
#     payload = request.get_json()
#     print(payload)

#     query = models.Timeline.update(**payload).where(models.Timeline.id == id)
#     query.executed()

#     timeline = models.Timeline.get_by_id(id)

#     timeline_dict = model