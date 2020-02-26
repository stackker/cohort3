# clears the terminal screen 
print('\033c')

import pytest
from DirRead220B import dirStats as dS

def test_helloWorld():
    assert "Hello World from readFile220.test.py" == "Hello World from readFile220.test.py"

def test_listing():
    assert dS('/home/sj/code/cohort3/Python')  == True 