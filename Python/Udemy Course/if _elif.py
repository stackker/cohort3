# clears the terminal screen 
print('\033c')


weekday = input('Enter WeekDay: ').lower()
if(weekday) == 'monday':
    print(f"{weekday}: Pull yourself up and get to work"
    )
elif (weekday) != 'tonday':
        print("{weekday}: You have overcome!! Smile!!")
else: print("Thank God!")
print ("This code gets executed regardless")

