import { Request, Response } from "express";
import { Post } from "../entity/Post";
import { dataSource } from "../utils/db";

/**
 * Loads all posts from the database.
 */
export async function postGetAllAction(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const postRepository = dataSource.getRepository(Post);

  // load a post by a given post id
  const posts = await postRepository.find();
  // return loaded posts
  response.send(posts);
}
