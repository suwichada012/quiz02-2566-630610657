"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function HomePage() {
  const COMMENTS = {
    comment1: {
      userImagePath: "/profileImages/lisa.jpg",
      username: "Lisa",
      commentText: "จริงค่า",
      likeNum: "0",
      replies: [
        {
          person1: {
            userImagePath: "/profileImages/puppy.jpg",
            username: "หมาน้อย",
            replyText: "จริงค้าบบบบบบบบ",
            likeNum: "0",
          },
          person2: {
            userImagePath: "/profileImages/popcat.png",
            username: "Cat Meme",
            replyText: "ลิซ่าาาาาาา",
            likeNum: "2",
          },
        },
      ],
    },

    comment2: {
      userImagePath: "/profileImages/charliebrown.jpg",
      username: "charlie brown",
      commentText: "บ้าไปแล้ว",
      likeNum: "0",
      replies: [{}],
    },
  };

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner
          img={"/profileImages/S__14704643.jpg"}
          namepostowner={"suwichada pongkanmoon 630610657"}
          caption={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"}
          like={"100"}
        />
        {/* Comment Example */}
        {/* Reply Example */}

        {
          /* map-loop render Comment component here */
          comments.map((comments) => (
            <Comment
              key={comments.username}
              userImagePath={comments.userImagePath}
              username={comments.username}
              replyText={comments.replyText}
              likeNum={comments.likeNum}
              replies={comments.replies}
            />
          ))
        }
      </div>
    </div>
  );
}
