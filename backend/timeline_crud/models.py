# import * means import everything from peewee
import datetime
from peewee import *
from playhouse.db_url import connect

DATABASE = SqliteDatabase('timelines.sqlite')


class Timeline(Model):
    title = CharField()
    date_from = DateField()
    date_to = DateField()
    thumbnail = CharField()
    events = [
        CharField()
        ]
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE

class Event(Model):
    event_name = CharField()
    event_date = DateField()
    event_desc = CharField()
    event_wiki = CharField()
    event_option = CharField()
    event_thumbnail = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Timeline, Event], safe=True)
    print("TABLES Created")
    DATABASE.close()