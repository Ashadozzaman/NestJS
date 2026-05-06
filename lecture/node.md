## NestJS Tutorial #12: Validate DTOs Using class-validator & class-transformer

## NestJS Tutorial #13: Create and Use custom Pipe

```
nest g pipe pipes/uppercase
```

```
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  }
}


//use In Controller
transformName(@Body('name', new UppercasePipe()) name: string) {
    return { message: `Your name in uppercase is ${name}` };
}
```

## NestJS Tutorial #14: How to protect route by Guard

```
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) return false;

    return authHeader === 'Bearer mysecrettoken';
  }
}
```

```
  @Get()
  @UseGuards(AuthGuard)
```
