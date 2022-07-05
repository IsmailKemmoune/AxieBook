import ManagerPostAxieImage from "./ManagerPostAxieImage";
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

  //   console.log(profilePosts);

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

      <div className="bg-secondary w-[90%] p-3 rounded-md shadow-button">
        <h1 className="text-white text-2xl">Publications</h1>
        <div className="bg-shades-600 ">
          <h2>team nadya</h2>
          <div className="flex">
            <ManagerPostAxieImage
              setModalOn={setModalOn}
              setModalAxie={setModalAxie}
              image="https://assets.axieinfinity.com/axies/1621247/axie/axie-full-transparent.png"
              id="1621247"
              axieClass="Beast"
            />
            <ManagerPostAxieImage
              setModalOn={setModalOn}
              setModalAxie={setModalAxie}
              image="https://assets.axieinfinity.com/axies/556165/axie/axie-full-transparent.png"
              id="556165"
              axieClass="Aquatic"
            />
            <ManagerPostAxieImage
              setModalOn={setModalOn}
              setModalAxie={setModalAxie}
              image="https://assets.axieinfinity.com/axies/4964/axie/axie-full-transparent.png"
              id="4964"
              axieClass="Plant"
            />
          </div>
        </div>
        {/* {profilePostsEl} */}
      </div>
    </>
  );
}
