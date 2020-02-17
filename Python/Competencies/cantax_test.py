# clears the terminal screen 
print('\033c')

import pytest
import cantax as ct

infinity = float('inf')
data = {'2000':[
                   {'from':0, 'to':1000, 'rate':10},
                   {'from': 1000, 'to': 10000, 'rate': 20},
                   {'from': 10000, 'to': 50000, 'rate': 25},
                   {'from': 50000, 'to':100000, 'rate': 40},
                   {'from': 100000, 'to': infinity, 'rate': 50}
                ]
        }

def test_basic():
    assert True

def test_calc_slab_tax():
    """check that the Tax Amount @ rate  is correct"""
    assert ct.calc_slab_tax(0,10.2) == 0.0
    assert ct.calc_slab_tax(10,0) == 0.0
    assert ct.calc_slab_tax(10, 1000) == 100.0
    assert ct.calc_slab_tax(15,1000) == 150.0

def test_cantax():
    assert ct.calculateTax('2000', 1000, data) == 100
    assert ct.calculateTax('2000', '1000', data) == 100
    assert ct.calculateTax('2000', '10000', data) == 1900
    assert ct.calculateTax('2000', '50000', data) == 11900
    assert ct.calculateTax('2000', '100000', data) == 31900
    assert ct.calculateTax('2000', '200000', data) == 81900

def test_nonLoaded_year():
    with pytest.raises(Exception) : # as e:
        assert ct.calculateTax('200', 1000, data)
    # assert("EValue: ",str(e.value)) 
    #    
    with pytest.raises(Exception, match = "200"):
        assert ct.calculateTax('200', 1000, data)


