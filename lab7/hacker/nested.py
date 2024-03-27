if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    students_sorted_by_grade = sorted(students, key=lambda x: (x[1], x[0]))

    grades = [grade for name, grade in students_sorted_by_grade]

    second_lowest_grade = sorted(list(set(grades)))[1]

    students_with_second_lowest_grade = [name for name, grade in students_sorted_by_grade if grade == second_lowest_grade]

    for name in sorted(students_with_second_lowest_grade):
        print(name)
        