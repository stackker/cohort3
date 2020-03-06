# clears the terminal screen 
print('\033c')

cities = ["Crete", "Canada", "Calcutta", "Colombo", "Mauritius"]
cities_C = [city.startswith("C") for city in cities]
print(cities_C)

cities_C = [city for city in cities if (city.startswith("C"))]
print(cities_C)

# id() returns the register ID of the memory location 
print(cities, id(cities))
print(cities_C, id(cities_C))

