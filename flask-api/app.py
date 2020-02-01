from flask import Flask
app = Flask(__name__)


@app.route('/')
def base_route():
    # To use pdb:
    # 1. add `import pdb; pdb.set_trace()` breakpoint
    # 2. in one terminal, run `make pdb`
    # 3. in another terminal, run `make test`, or hit http://localhost:5000 in your browser
    # 4. the first terminal should pause at the breakpoint
    return 'nothing yet'


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
