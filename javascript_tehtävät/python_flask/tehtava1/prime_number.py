import json

from flask import Flask, Response

app = Flask(__name__)
@app.route('/prime_number/<number1>')
def prime_number(number1):
    number1 = int(number1)

    if number1 <= 1:
        response = {"Number": number1, "isPrime": "false"}
        return response
    else:
        is_prime = True

        for i in range(2, number1):
            if number1 % i == 0:
                is_prime = False
                break

        if is_prime:
            response = {"Number": number1, "isPrime": "true"}
            return response
        else:
            response = {"Number": number1, "isPrime": "false"}
            return response


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)