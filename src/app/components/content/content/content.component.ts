import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostResponseModel } from 'src/app/models/postResponseModel';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  text: string = "";
  posts:Post[]=[];
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
      let prnt = JSON.parse(this.text.substring(22,27765)) ;
      console.log(prnt);
      debugger;
    })
  }

  

}
