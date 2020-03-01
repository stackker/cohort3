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
            # writeFields = ['class', 'countClass', ]

            # with open('./report.txt', "w")  as csvWriteFile:
            #     tabWriter = csv.DictWriter(csvWriteFile, fieldnames = writeFields,delimiter = '\t')
            # # print(csvCursor)
            # classCount = Counter()
            classAgg = []
            sectorAgg =[]
            for line in (csvCursor):
                # Create list of Entries in reapective columns
                classAgg.append(line["CLASS"])
                sectorAgg.append(line["SECTOR"])
            # Counts the Occurance of Each unique entry in the lists
            classCounts = Counter(classAgg)
            sectorCounts = Counter(sectorAgg)
            # classList = (classCount["CLASS"])  
            # print (classCounts)
            # print('-' * 90)
            # print(sectorCounts)
            print("CLASS")
            print('-' * 50)
            for className in classCounts:
                print(className, classCounts[className])
            print('=' * 90)
            print("SECTOR")
            print('-' * 50)
            for sectorName in sectorCounts:
                print(sectorName, sectorCounts[sectorName])
    return (classCounts, sectorCounts)

# ----------------------------------------
if __name__ == "__main__":
    try:
        # clears the terminal screen 
        print('\033c')
        reportSummary('/home/sj/code/cohort3/Python/Competencies/Census_by_Community_2018.csv')
        
        # reportSummary('/home/sj/code/cohort3/Python/Competencies/sample_census.csv')
    except Exception:
        pass