import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import { PostModel } from './post-model';

@Injectable({
	providedIn: 'root'
})
export class PostService {

	constructor(private http: HttpClient) { }

	getAllPosts(): Observable<Array<PostModel>> {
		return this.http.get<Array<PostModel>>("http://localhost:8080/api/posts/");
	}

	getPost(id: number) {
		return this.http.get<PostModel>("http://localhost:8080/api/posts/" + id);
	}

	createPost(postPayload: CreatePostPayload): Observable<any> {
		return this.http.post("http://localhost:8080/api/posts/", postPayload, { withCredentials: true })
	}

	getAllPostsByUser(username: string): Observable<Array<PostModel>> {
		return this.http.get<Array<PostModel>>("http://localhost:8080/api/posts/by-user/" + username);
	}
}