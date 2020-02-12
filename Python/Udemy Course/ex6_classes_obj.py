# clears the terminal screen 
print('\033c')

class Store:
    def __init__(self,name ):
        # You'll need 'name' as an argument to this method.
        # Then, initialise 'self.name' to be the argument, and 'self.items' to be an empty list.
        self.name = name
        self.items= []
    
    def add_item(self, name, price):
        # Create a dictionary with keys name and price, and append that to self.items.
        return self.items.append({"name": name, "price": price})
        #  no noeed of a return here unless U wan to operate on the new list

    def stock_price(self):
        # Add together all item prices in self.items and return the total.
        # total = 0
        # for item in self.items:
        #     total += item["price"]
        # return total

        # better way to code
        return sum(item["price"] for item in self.items)
