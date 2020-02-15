# clears the terminal screen 
print('\033c')


infinity =  float('inf')

data = {'2019':[
                   {'from':0, 'to':48535, 'rate':12},
                   {'from': 48535, 'to': 97069, 'rate': 20},
                   {'from': 97069, 'to': 150473, 'rate': 26},
                   {'from': 150473, 'to': 214368, 'rate': 29},
                   {'from': 214368, 'to': infinity, 'rate': 33}
],
         '2020':[
                   {'from':0, 'to':48535, 'rate':15},
                   {'from': 48535, 'to': 97069, 'rate': 20.5},
                   {'from': 97069, 'to': 150473, 'rate': 26},
                   {'from': 150473, 'to': 214368, 'rate': 29},
                   {'from': 214368, 'to':infinity, 'rate': 33}
]
}

# year_tax = input('Enter Tax Year : ')
# income = input('Input Income : ')      
    
def calc_slab_tax(rate: float, base_amt:float):
    return (rate/100 * base_amt)

def calculateTax(year1, income, data):
    total_tax = 0.0
    slabs = []
    # tax_yr, slabs = data # destructuring
    try:
        slabs = data[year1]  
        # print("SLABS", slabs)
        slab_amt = 0.0
        income_rem  = float(income)
        for index, slab in enumerate(slabs):
            if index < len(slabs) - 1: # last row to process without infinity
                slab_amt = float(slab['to']) - float(slab['from'])
                if income_rem >= slab_amt:
                    slab_tax = calc_slab_tax(float(slab['rate']), slab_amt)
                else:
                    slab_tax = calc_slab_tax (float(slab['rate']), income_rem)
                income_rem = float(income) - float(slab['to'])
                if income_rem <= 0:
                    income_rem  = 0
                print(f"{index}  , {slab_amt}  , {income_rem  }, {slab_tax}" )
            else: # is last record
                print("Rem Inc:", income_rem)
                slab_amt =  income_rem 
                print(f"LAST:{index}  , {slab_amt}  , {income_rem  }, {slab_tax}" )
            total_tax += slab_tax
        print("TOTAL: ",total_tax)
        return total_tax

    except:
         print(f"Calculation Data for year {year1} is not loaded")
      
   
                
        # print(len(slabs))
        # print(index, slab)
        # if tax_yr == year1:
        #     print(tax_yr)
        #     print("slabs:",slabs)
        # else:
        #     print("else: ", tax_yr)
        #     print(data[year1])
            
        
            


   
        
 
        
        
# return total_tax

# print(data)
try:
    print("Total Tax Due: ", calculateTax('2020', '100000', data))
except:
    print("Drat! Something went wrong!!")
