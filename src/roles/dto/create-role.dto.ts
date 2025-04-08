import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    example: 'ADMIN',
    description: 'Role value',
    required: true,
    uniqueItems: true,
  })
  readonly value: string;

  @ApiProperty({
    description: 'Role description',
    example: 'Administrator',
  })
  readonly description: string;
}
