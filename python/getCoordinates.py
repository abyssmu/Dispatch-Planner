import requests
import urllib.parse
import pandas as pd
import os

def buildAddress(address, city, state, zip):
    return address + ", " + city + ", " + state + ", " + zip

def getLatLng(addresses):
    lat = []
    lng = []

    for a in addresses:
        url = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(a) +'?format=json'

        response = requests.get(url).json()
        if len(response) == 0:
            lat.append(0)
            lng.append(0)
        else:
            lat.append(response[0]['lat'])
            lng.append(response[0]['lon'])

    return [lat, lng]

# print(os.getcwd())

locations = pd.read_csv("./python/addresses.csv")

# locations = locations.drop_duplicates()
# locations.to_csv("addresses.csv")

addresses = locations.apply(lambda row: buildAddress(row.Address, row.City, row.State, str(row.Zip)), axis = 1)
results = getLatLng(addresses)

locations['lat'] = results[0]
locations['lng'] = results[1]

print(locations)

locations.to_csv("./python/addresses.csv")