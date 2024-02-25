# Program to perform simple GET request to HTTP server
import requests
import json

HOST = "http://localhost:"
PORT = "3000"
HTML_RES_PATH = "/"
JSON_RES_PATH = "/json"
DB_PATH = "/sensor/value"
header = {"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiY2RhYyIsImlhdCI6MTcwMjAxMDA5Mn0.NdUEUfkiOlhyZGPE0V5izlygT21Ryo8ez1x1NDUfc2U"}

# Make HTTP GET Request to Server
response = requests.get(HOST + PORT +DB_PATH,headers=header)
                        



# Printing the JSON response with inbuilt encoder
print(response.json())
print(response.status_code)