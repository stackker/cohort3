# clears the terminal screen 
print('\033c')

import pytest

import simpleFunctions as sf

def test_pipeline():
    assert True

def test_email():
    assert sf.email('First', 'Last') == 'first.last@evolveu.com'
    firstName = 'Heiko'
    lastName = 'Peters'
    assert sf.email(firstName, lastName) == 'heiko.peters@evolveu.com'

   