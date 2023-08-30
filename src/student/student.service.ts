import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schema/student.schema';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Student.name) private studentModel: Model<Student>) {}

  async create(createStudentDto: CreateStudentDto) {
    let createdStudent = new this.studentModel(createStudentDto);
    console.log(createStudentDto);
    return  createdStudent.save();
  }

  async findAll() {
    return this.studentModel.find();
  }

  async findOne(id: string) {
    return this.studentModel.findById(id);
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.findByIdAndUpdate(id, updateStudentDto);
  }

  remove(id: string) {
    return this.studentModel.findByIdAndDelete(id);
  }
}
