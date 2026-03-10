import { Module } from '@nestjs/common';

import { StudentsModule } from './modules/students/students.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { ClassesModule } from './modules/classes/classes.module';

@Module({
  imports: [StudentsModule, TeachersModule, ClassesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
