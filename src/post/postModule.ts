import { Module } from '@nestjs/common';
import { PostController } from './postController';
import { PostService } from './postService';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
