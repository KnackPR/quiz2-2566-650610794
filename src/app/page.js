"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner
          fname="Peerawich"
          lname="Rattanahiran"
          code="650610794"
          status="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          reaction="100 คน"
        ></PostOwner>

        {/* Comment Example */}
        {comments.map((comm) => (
          <Comment
            key={comm.username}
            userImagePath={comm.userImagePath}
            username={comm.username}
            commentText={comm.commentText}
            likeNum={comm.likeNum}
            replies={comm.replies}
          />
        ))}
        {/* Reply Example */}
        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
