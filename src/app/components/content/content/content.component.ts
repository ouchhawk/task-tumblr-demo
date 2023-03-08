import { Component, OnInit } from '@angular/core';
import { PostTypeEnum } from 'src/app/enums/post-type-enum';
import { Post } from 'src/app/models/post';
import { PostResponseModel } from 'src/app/models/postResponseModel';
import { Root } from 'src/app/models/root';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  text: string = "";
  posts:Post[]=[];
  root:Root | undefined;
  postTypeEnum:PostTypeEnum=0;
  
  postResponseModel: PostResponseModel={
    data: this.posts,
    message:"",
    success:true
  }


  constructor(private postService: PostService){
  }

  ngOnInit(): void{
    this.getPosts();
  }

  getPosts(){
    this.postService.getRawData().subscribe(response => {
      this.text = response ; 
      let root = JSON.parse(this.text.substring(22,27765)) ;
      this.posts=root.posts;
      for(let post of this.posts){
        console.log(post);
      }
      });
    }
  
}
