import sqlite3
import shutil

def createDBCities():
    connection = sqlite3.connect('cities.db')
    Cursor = connection.cursor()
    query=Cursor.execute("""SELECT name FROM sqlite_master 
										WHERE type='table' AND name='cities';""")
    if ((len(query.fetchall())) == 0 ): # is a list
		
        print(len(query.fetchall()))
        print("Table cities not found. Attempting to Copy table 'cities'...")
        try:
            # shutil.copy('./cities_Init.db', './cities.db')
            shutil.copy('./cities_MOCK.db', './cities.db')
        except:
            print("MOCK data not found. Creating Empty table 'cities'...")
            # Table cities : cityName, cityLat, cityLong, cityPop 
            create_table = """CREATE TABLE IF NOT EXISTS cities (key INTEGER PRIMARY KEY AUTOINCREMENT,
            city VARCHAR(50), population INT, lat REAL, long REAL)"""
            Cursor.execute(create_table)
            
           

    connection.commit()
    connection.close()

# if __name__ == '__main__':
#     createDBCities()

