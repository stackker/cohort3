# clears the terminal screen 
print('\033c')


def countSearchString(searchString, fileNamePath):
    """ Takes Regex search Inputs """
    import re 
    # fileName = open(fileNamePath, 'r')
    # file_contents = fileName.read()
    with open(fileNamePath, 'r') as fileName:
       
        regex = re.compile(str(searchString))
        file_contents = fileName.read().split('\n')
        # print("FileContents: ",file_contents)
        lineCount = 0
        wordCount = 0
        charCount = 0
        for lines in file_contents:
            # print("lines: ", lines)
            lineCount += 1
            wordList = lines.strip().split() # splits line on spaces
            # print("WordList: ", wordList)
            wordCount += len(wordList)
            # charCount += sum(len(word) for word in wordCount)
            charCount += sum(len(line) for line in lines)  # using lines includes the spaces in char count, matches Wordprocessor counts
            

        count_occurances = 0  #
        matches = regex.finditer(str(file_contents))
        for  index, match in enumerate(matches):
            print(index, match.group(0)) # group references the () in Regex expression . Not the output of the match
            count_occurances += 1
        
        return {'wordOccurs': count_occurances,
                'totalLines': lineCount,
                'totalWords': wordCount,
                'totalCharacters': charCount}

    



# ----------------------------------------------------
# if this check is not there it will run the below portion  inspite of Calling only the Func above in Test

if __name__ == '__main__':
    fileNamePath= input('Enter File name + Path: ')
    searchStr = input("Search String : ")

    print('Count: ',countSearchString(searchStr, fileNamePath))

