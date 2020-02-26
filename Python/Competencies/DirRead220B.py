# clears the terminal screen 
print('\033c')

def dirStats(baseDir):
    import os
    try:
        if os.path.exists(baseDir) == False:
            raise ValueError (baseDir,":Unreachabe or Does not exist")
        basePath, baseName  = os.path.split(baseDir)

        currentDir = baseDir
        baseLevel = baseDir.count(os.path.sep)
        #  Print the Heading
        print(basePath)
        print('-' * 88)
        print('{:^50}'.format('Directory'), '|',
                '{:^15}'.format('File Counts'), '|',
                '{:^15}'.format('File Size') )
        print('-' *88)

        for dirpath, _, files in os.walk(baseDir):
            currPath, currDir = os.path.split(dirpath)
            currLevel = currPath.count(os.path.sep)+ 1
            # print (currLevel)

            fileCount = 0
            fileSize = 0
            indent = '--' * (currLevel - baseLevel)
            dirRep = ''
            for eachfile in files:
                fileCount += 1
                # fileSizeInfo = os.stat(dirpath + os.sep + eachfile).st_size
                # print(eachfile,fileInfo)
                fileSize +=os.stat(dirpath + os.sep + eachfile).st_size
                
            dirRep =  indent  + currDir    
            print('{:<50.50}'.format(dirRep), '|',
                    '{:^15}'.format(fileCount), '|',
                    '{:>15}'.format(fileSize))
        print('-' *88)
        # return ("No Return Needed")
            
    except Exception as error:
        print(repr(error))
       


# ----------------------------------------------------
# if this check is not there it will run the below portion inspite of Calling only the Func above in Test

if __name__ == '__main__':
    # dirNamePath= input('Enter Dir name + Path: ')
    # searchStr = input("Search String : ")
    baseDir = input ("Enter Directory :")
    dirStats(baseDir) 
            
           
                    
                

    
   
 
    
