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
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Timeline], safe=True)
    print("TABLES Created")
    DATABASE.close()