export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id) || defaultGrade;
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeObj.grade,
      };
    });
}
