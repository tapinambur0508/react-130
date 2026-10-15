import { useState } from "react";

interface CatInfoProps {
  name: string;
  email: string;
  age: number;
  isAvailable: boolean;
  dislikes: number;
  onDislikeClick: () => void;
}

function CatInfo({
  name,
  email,
  age,
  isAvailable,
  dislikes,
  onDislikeClick,
}: CatInfoProps) {
  const [likes, setLikes] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>, action: "like" | "dislike") => {
  //   console.log("Click");
  // }

  const handleClick = (action: "like" | "dislike") => {
    console.log(`You made ${action} action`);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLikeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log({ event });
    console.log("You liked me");

    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1);

    setLikes((prevLikes) => prevLikes + 1);
    // setLikes((prevLikes) => prevLikes + 1);
    // setLikes((prevLikes) => prevLikes + 1);
    // setLikes((prevLikes) => prevLikes + 1);
    // setLikes((prevLikes) => prevLikes + 1);

    console.log(likes);
  };

  // const handleDislikeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setDislikes((prevDislikes) => prevDislikes + 1);
  //   console.log(dislikes);
  // }

  return (
    <div>
      <img src="https://placekitten.com/400/400" width="400px" alt="Cat" />
      <h2>{name}</h2>
      <p>This is a cat</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Available for adoption: {isAvailable ? "Yes" : "No"}</p>
      {/* <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleClick(event, "like")}>Like</button> */}
      {/* <button onClick={() => handleClick("like")}>Like</button>
      <button onClick={() => handleClick("dislike")}>Dislike</button> */}
      <button onClick={handleLikeClick}>({likes}) Like</button>
      <button onClick={onDislikeClick}>({dislikes}) Dislike</button>
    </div>
  );
}

export default CatInfo;
