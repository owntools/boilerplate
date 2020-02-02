import os
from flask import Flask
app = Flask(__name__)


@app.route('/')
def base_route():
    return 'nothing yet'


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.getenv('PORT', '5000')), debug=True)
