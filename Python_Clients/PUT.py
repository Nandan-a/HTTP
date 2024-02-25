# Program to perform simple GET request to HTTP server
import requests
import json

HOST = "http://localhost:"
PORT = "3000"
PATH = "/sensor/value"
REQUEST_BODY = {
    "index":2,
    "value":1214
}

response = requests.put(HOST + PORT + PATH, json=REQUEST_BODY)

print(response.json())