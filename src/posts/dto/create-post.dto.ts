import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'Sample Post Title',
  })
  readonly title: string;

  @ApiProperty({
    description: 'The content of the post',
    example: 'This is a sample post content.',
  })
  readonly content: string;

  @ApiProperty({
    description: 'The ID of the user creating the post',
    example: 1,
  })
  readonly userId: number;
}
