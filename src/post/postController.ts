import { Controller, Get, Param, Put, Body, Delete, Post } from "@nestjs/common";
import { PostService } from './postService';
import { updatePostDTO, CreatePostDTO } from "./dto/postdto";


@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService){

    }
   @Get()
   async getAllPosts(){
       return this.postService.getAllPost();
   } 
   @Get(':id')
   async getPostById(@Param('id') id: string){
     return this.postService.getPostById(id);
   } 
   @Post()
   async createPost(@Body() post: CreatePostDTO){
     return this.postService.createPost(post);
   }   
   @Put(':id')
   async updatePostById(@Param('id') id: string, @Body() post: updatePostDTO){
       return this.postService.updatePostById(id, post);
   }
   @Delete('id')
   async deletePost(@Param('id') id: string){
       return this.postService.deletePost(id);
   }
}