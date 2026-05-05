import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/pipes/uppercase/uppercase.pipe';

@Controller('user-name')
export class UserNameController {
  @Post('/custom')
  transformName(@Body('name', new UppercasePipe()) name: string) {
    return { message: `Your name in uppercase is ${name}` };
  }
}
