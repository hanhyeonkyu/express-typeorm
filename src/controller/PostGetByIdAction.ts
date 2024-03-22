import { Request, Response } from "express";
import { Post } from "../entity/Post";
import { dataSource } from "../utils/db";

/**
 * Loads post by a given id.
 */
export async function postGetByIdAction(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const postRepository = dataSource.getRepository(Post);

  // load a post by a given post id
  const post = await postRepository.findOne({
    where: { id: Number(request.params.id) },
  });

  // if post was not found return 404 to the client
  if (!post) {
    response.status(404);
    response.end();
    return;
  }

  // return loaded post
  response.send(post);
}
