import models

from flask import Blueprint, jsonify, request

from playhouse.shortcuts import model_to_dict

timeline = Blueprint('timelines', 'timeline')

# INDEX ROUTE
@timeline.route('/', methods=["GET"])
def get_all_timelines():
    print('hit')
    try:
        timelines = [model_to_dict(timeline)
                     for timeline in models.Timeline.select()]
        print(timelines)
        return jsonify(data=timelines, status={"code": 200, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 401, "message": "Error getting the resources"})

# NEW ROUTE
@timeline.route('/', methods=["POST"])
def create_timelines():
    payload = request.get_json()
    print(payload, 'this is payload-------')

    timeline = models.Timeline.create(**payload)

    print(dir(timeline))

    timeline_dict = model_to_dict(timeline)
    return jsonify(data=timeline_dict, status={"code": 201, "message": "Success"})

# SHOW ROUTE
@timeline.route('/<id>', methods=["GET"])
def get_one_timeline(id):
    print(id)

    timeline = models.Timeline.get_by_id(id)
    events = [model_to_dict(event) for event in models.Event.select().join(
        models.Timeline).where(models.Timeline.id == id)]
    
    print(events, "THIS IS EVENTS!!!!!!")

    return jsonify(data={"timeline": model_to_dict(timeline), "events": events}, status={"code": 200, "message": "Success"})

# # UPDATE ROUTE
@timeline.route('/<id>', methods=['PUT'])
def update_timeline(id):
    payload = request.get_json()
    print(payload)

    query = models.Timeline.update(**payload).where(models.Timeline.id == id)
    query.execute()

    timeline = models.Timeline.get_by_id(id)

    timeline_dict = model_to_dict(timeline)

    return jsonify(data=timeline_dict, status={"code": 200, "message": "resource uodated successfully"})

# DELETE ROUTE
@timeline.route('/<id>', methods=["DELETE"])
def delete_timeline(id):

    query = models.Timeline.delete().where(models.Timeline.id == id)
    query.execute()

    return jsonify(data='resource successfully deleted', status={"code": 200, "message": "resource deleted successfully"})
