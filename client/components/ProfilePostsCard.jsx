import ManagerPost from "./ManagerPost";
import BodyPartModal from "../components/BodyPartModal";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePostsCard() {
  const [profilePosts, setProfilePosts] = useState([]);
  const [modalAxie, setModalAxie] = useState([]);
  const [modalOn, setModalOn] = useState(false);

  useEffect(() => {
    const managerPostURL = "http://localhost:3080/api/manager-post";
    async function getUserPosts() {
      try {
        const response = await axios.get(managerPostURL);
        setProfilePosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUserPosts();
  }, []);

  const profilePostsEl = profilePosts.map((post) => (
    <ManagerPost
      key={post._id}
      setModalOn={setModalOn}
      postData={post}
      setModalAxie={setModalAxie}
    />
  ));

  return (
    <>
      {modalOn && (
        <BodyPartModal
          image={modalAxie.axie.image}
          parts={modalAxie.axie.parts}
          stats={modalAxie.axie.stats}
          setModalOn={setModalOn}
        />
      )}

      <div className="bg-primary w-full mb-10">
        <h1 className="text-white text-2xl pl-8">Publications</h1>
        <div className="flex flex-wrap">{profilePostsEl}</div>
      </div>
    </>
  );
}
