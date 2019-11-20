import models


@timeline.route('/', methods=["GET"])
def get_all_timelines():
    try:
        timelines = [model_to_dict(timeline) for timeline in models.Timeline.select()]
        print(timelines)
    except models.DoesNotExist:
        console.log('hello')