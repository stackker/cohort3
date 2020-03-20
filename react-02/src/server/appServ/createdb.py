import sqlite3
def createDBCities():
    connection = sqlite3.connect('cities.db')
    cursor = connection.cursor()
    # cityName, cityLat, cityLong, cityPop 
    create_table = """CREATE TABLE IF NOT EXISTS cities (key INTEGER PRIMARY KEY AUTOINCREMENT,
    city VARCHAR(50), population INT, lat REAL, long REAL)"""
    cursor.execute(create_table)

    connection.commit()

    connection.close()

