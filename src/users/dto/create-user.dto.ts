import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@gmail.com',
    description: 'Email address',
    required: true,
    format: 'email',
    uniqueItems: true,
  })
  readonly email: string;

  @ApiProperty({
    example: 'password123',
    description: 'Password',
    required: true,
    format: 'password',
  })
  readonly password: string;
}
