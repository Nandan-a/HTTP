# Program to perform simple GET request to HTTP server
import requests
import json
import csv


HOST = "https://api.thingspeak.com"

PATH = "/channels/2374100/feeds.json?api_key=KXOE9RDG01BBTMBQ&results=2"


# Make HTTP GET Request to Server
response = requests.get(HOST+PATH)
                        



# Printing the JSON response with inbuilt encoder
print(response.json())
print(response.status_code)