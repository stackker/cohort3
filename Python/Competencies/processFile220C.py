import os
import csv
import collections as coll

def deleteFile(fileNamePath):

    if (os.path.exists(fileNamePath) == True):
        os.remove(fileNamePath)

def createReport(count1, count2, rowCount):
    import csv
    # print(count1, count2)
    deleteFile('/home/sj/code/cohort3/Python/Competencies/report.txt')
    # writeFields = ['Dimension', 'Counts']
    with open('./report.txt', "w", newline ='') as csvWriteFile:
        tabWriter = csv.writer(
            csvWriteFile,
            # fieldnames=writeFields,
            delimiter='\t'
            )
        # tabWriter.writeheader()
        tabWriter.writerow( ['-' * 20 ])
        tabWriter.writerow(['Dimension', 'Counts'])
        tabWriter.writerow( ['-' * 20 ])
        
        tabWriter.writerow(['CLASS:'])
       
        for key in count1:
            # print(key, count1[key])
            tabWriter.writerow([key, count1[key]])

        tabWriter.writerow(['-' * 20])
        
        tabWriter.writerow(['SECTOR: '])
        for key in count2:
            # print(key, count2[key])
            tabWriter.writerow([key, count2[key]])
        tabWriter.writerow(['-' * 20])
        tabWriter.writerow(['Row Count:', rowCount ])
           






def reportSummary(uploadedCSV):
    import os
    import csv
    from  collections import Counter
    if (os.path.exists(uploadedCSV) == False):
        raise ValueError("File not found: ")
    _, fileName = os.path.split(uploadedCSV)
    _, extn = os.path.splitext(fileName)
    if (extn != '.csv'):
        raise ValueError("File needs to be .CSV format ")
    else:


        with open(uploadedCSV, 'r') as csvFile:
            csvCursor = csv.DictReader(csvFile)
            # next(csvCursor) # skips first line as title incl.
            
            classAgg = []
            sectorAgg =[]
            for index, line in enumerate(csvCursor):
                # Create list of Entries in reapective columns
                classAgg.append(line["CLASS"])
                sectorAgg.append(line["SECTOR"])
            # Counts the Occurance of Each unique entry in the lists
            indexCount = index + 1  # last index would be the count of lines, add 1 to compensate for index begining at zero 
            classCounts = Counter(classAgg)
            sectorCounts = Counter(sectorAgg)
            
            createReport(classCounts, sectorCounts, indexCount)
            
           
    return (classCounts, sectorCounts, indexCount)

# ----------------------------------------
if __name__ == "__main__":
    try:
        # clears the terminal screen 
        print('\033c')

        fileName  = input("Enter File Name with Path: " )
        reportSummary(fileName)

        # reportSummary('/home/sj/code/cohort3/Python/Competencies/sample_census.csv')
        print ("Run Results in file Report.txt")
        
    except Exception:
        pass