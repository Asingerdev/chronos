
from flask import Flask, jsonify, g

from flask_cors import CORS

from flask_login import LoginManager

from resources.timelines import timeline
from resources.events import event
from resources.users import user

import models


DEBUG = True
PORT = 8000

login_manager = LoginManager()

# Initialize an instance of the Flask class.
# This starts the website!
app = Flask(__name__)
CORS(app)

app.secret_key = "4tri"
login_manager.init_app(app)

@login_manager.user_loader
def load_user(userid):
    try:
        return models.User.get(models.User.id == userid)
    except models.DoesNotExist:
        return None

# CORS(app)


@app.before_request
def before_request():
    """Connect to the database before each request."""
    g.db = models.DATABASE
    g.db.connect()


@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response

CORS(timeline, origins=['http://localhost:3000'],supports_credentials=True)
CORS(event, origins=['http://localhost:3000'], supports_credentials=True)
CORS(user, origins=['http://localhost:3000'],supports_credentials=True)

app.register_blueprint(timeline, url_prefix='/api/v1/timelines')
app.register_blueprint(event, url_prefix='/api/v1/events')
app.register_blueprint(user, url_prefix='/api/v1/users')


if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)
