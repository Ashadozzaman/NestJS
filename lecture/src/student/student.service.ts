import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Alice Johnson', age: 19 },
  ];

  //GET
  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student)
      throw new NotFoundException(`Student with id ${id} not found`);
    return student;
  }

  //POST
  createStudent(student: { name: string; age: number }) {
    const newStudent = {
      id: this.students.length + 1,
      ...student,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  //PUT
  updateStudent(id: number, student: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1)
      throw new NotFoundException(`Student with id ${id} not found`);
    this.students[index] = { id, ...student };
    return this.students[index];
  }

  // PATCH
  patchStudent(id: number, student: Partial<{ name: string; age: number }>) {
    const updateStudent = this.getStudentById(id);
    Object.assign(updateStudent, student);
    return updateStudent;
  }

  // DELETE
  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1)
      throw new NotFoundException(`Student with id ${id} not found`);
    const deletedStudent = this.students.splice(index, 1);
    return {
      message: `Student with id ${id} has been deleted`,
      student: deletedStudent,
    };
  }
}
