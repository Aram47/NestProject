import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private readonly postRepository: typeof Post,
    private readonly filesService: FilesService,
  ) {}
  async createPost(dto: CreatePostDto, image: any) {
    const fileName: string = await this.filesService.createFile(image);
    const post = await this.postRepository.create({
      ...dto,
      image: fileName,
    });
    return post;
  }
}
