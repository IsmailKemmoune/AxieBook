import Layout from "../../components/Layout";
import AvatarCard from "../../components/AvatarCard";
import ProfilePostsCard from "../../components/ProfilePostsCard";
import ProfileReviewSection from "../../components/ProfileReviewSection";

import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const { profile } = router.query;
  return (
    <div className="scroll-div max-h-screen overflow-y-auto pt-10">
      <div className="flex flex-col items-center max-w-[1322px]">
        {/* <h1>{profile}</h1> */}
        <AvatarCard />
        <ProfilePostsCard />
        <ProfileReviewSection />
      </div>
    </div>
  );
}

Profile.getLayout = function getLayout() {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};
