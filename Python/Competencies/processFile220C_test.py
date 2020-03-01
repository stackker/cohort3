import pytest
import processFile220C as pf

def test_helloWorld():
    assert "Hello World from processFile220C_test.py" == "Hello World from processFile220C_test.py"

def test_fileFound():
    with pytest.raises(ValueError, match='File not found:'):
        assert pf.reportSummary("./Census_by_Community_20181.csv")

    # with pytest.raises(ValueError, match='Failed'):
    #     assert pf.reportSummary("./Census_by_Community_2018.csv")
    
def test_fileXtn():
    with pytest.raises(ValueError, match='File needs to be .CSV'):
        assert pf.reportSummary("./nonCSVtestFile.xls")

   
    assert pf.reportSummary("/home/sj/code/cohort3/Python/Competencies/Census_by_Community_2018.csv")