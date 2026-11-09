import json

from flask import Flask, request

app = Flask(__name__)
@app.route("/add", methods=["GET"])
def add():
    en = request.args.get("en")
    fi = request.args.get("fi")

    try:
        with open("/Users/lauri/Documents/metropolia/ohjelmisto2/ohjelmisto2-harjoitukset/javascript_tehtävät/python_flask/tehtava3/dictionary.json", "r", encoding="UTF-8") as file:
            data = json.load(file)
            
        data[en] = (fi)

        with open("/Users/lauri/Documents/metropolia/ohjelmisto2/ohjelmisto2-harjoitukset/javascript_tehtävät/python_flask/tehtava3/dictionary.json", "w", encoding="UTF-8") as file:
            json.dump(data, file)

        response = {"Status": "Ok"}
        return response
    except Exception as e:
        return {"Error": str(e)}, 500

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)