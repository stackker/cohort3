# clears the terminal screen 
print('\033c')

import pytest
from readFiles220  import countSearchString as regx

file = 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

def test_helloWorld():
    assert "Hello World from readFile220.test.py" == "Hello World from readFile220.test.py"

def test_occurance():
    assert regx("dog", './readFile220_test.py')== {'totalCharacters': 1043, 'totalLines': 14, 'totalWords': 138, 'wordOccurs': 3}
    assert regx("Lorem", './readFile220_test.py')=={'totalCharacters': 1043, 'totalLines': 14, 'totalWords': 138, 'wordOccurs': 2}