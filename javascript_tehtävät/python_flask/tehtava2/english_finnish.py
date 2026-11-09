import json

from flask import Flask

app = Flask(__name__)
@app.route('/translate/<sana1>')
def translate(sana1):
    sana1 = str(sana1)

    with open("/Users/lauri/Documents/metropolia/ohjelmisto2/ohjelmisto2-harjoitukset/javascript_tehtävät/python_flask/tehtava2/dictionary.json", "r", encoding="UTF-8") as file:
        data = json.load(file)

    try:
        response = {"English": sana1, "Finnish": data[sana1]}
        return response
    except KeyError:
        response = {"Status": 404, "error": "Word not found"}
        return response

@app.route('/translate/words')
def all_words():

    with open("/Users/lauri/Documents/metropolia/ohjelmisto2/ohjelmisto2-harjoitukset/javascript_tehtävät/python_flask/tehtava2/dictionary.json", "r", encoding="UTF-8") as file:
        response = json.load(file)
    return response
        


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)