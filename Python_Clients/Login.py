# Program to perform simple GET request to HTTP server
import requests
import json

HOST = "http://localhost:"
PORT = "3000"
PATH = "/login"
REQUEST_BODY = {
    "user":"cdac",
    "password":"diot"
}
header = {
    "Content-Type": "application/json"
}
response = requests.post(HOST + PORT + PATH, json=REQUEST_BODY)

print(response.json())