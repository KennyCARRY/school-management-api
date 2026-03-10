import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './domain/dto/create-student.dto';

@Injectable()
export class StudentsService {
  private readonly students: CreateStudentDto[] = [];

  create(student: CreateStudentDto) {
    this.students.push(student);
    return student;
  }

  remove(id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) {
      throw new Error('404!Student not found');
    }
    this.students.splice(index, 1);
    return true;
  }

  findAll(): CreateStudentDto[] {
    return this.students;
  }

  findOne(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new Error('404!Student not found');
    }
    return student;
  }
}
