# clears the terminal screen 
print('\033c')

student_attendance = {"StopAsyncIteration": 50, "map": 67, "SyntaxWarning": 92}
for student in student_attendance:
    print("firstLoop: ",student)

for student in student_attendance.items():
    print("secondloop: ", student)
    
# for student, attend in student_attendance:
#     print("firstLoop: ", student)

for student, attendance in student_attendance.items():
    print("thirdloop: ", student,attendance)
    
