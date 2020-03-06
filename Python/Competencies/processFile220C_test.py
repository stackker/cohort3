import pytest
import os
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

   
    assert pf.reportSummary("/home/sj/code/cohort3/Python/Competencies/sample_census.csv")

def test_deleteReportFile():
    # import os
    assert os.path.exists('/home/sj/code/cohort3/Python/Competencies/report.txt') == True

    # run function to delete the file then check if it exists
    pf.deleteFile('/home/sj/code/cohort3/Python/Competencies/report.txt') 

    assert os.path.exists('/home/sj/code/cohort3/Python/Competencies/report.txt') == False
    
