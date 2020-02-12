class Store:
    def __init__(self, name):
        self.name = name
        self.items = []

    def add_item(self, name, price):
        self.items.append({
            'name': name,
            'price': price
        })

    def stock_price(self):
        total = 0
        for item in self.items:
            total += item['price']
        return total

    @classmethod
    def franchise(cls, store):
        # Return another store, with the same name as the argument's name, plus " - franchise"
        cls.name = store.name + ' - franchise'
        return cls

    @staticmethod
    def store_details(store):
        # Return a string representing the argument
        # It should be in the format 'NAME, total stock price: TOTAL'
       return store.name + ', total stock price: '+ str(int(store.stock_price()))