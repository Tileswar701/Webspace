import React from "react";
import Card from "../../Cards/card1/Card";
import { useState } from "react";
const Recommend = () => {
  const [cards, setCard] = useState({
    title:
      "How to make a website using HTML CSS Bootstrap | Website Design Tutorial",
    views: "1.5M",
    channel: "Easy Tutorials",
    uploadTime: "1 year",
    url: "#",
    userLink: "#",
    thumbnailPath: "./src/assets/Posters/Card-images/card1/card-5.jpg",
    logoPath: "./src/assets/Posters/card-images/card1/logo.png",
  });
  return (
    <>
      <div className="recommend-container w-full">
        <div className="recommended-content-header text-white text-2xl">
          <h1>Recommended videos</h1>
        </div>
        <div className="recommended-content-body mt-3 bg-gray-100 ">
          <div className="video-container flex bg-black   ">
            <div className="cards-container flex flex-wrap md:flex-col rounded-md gap-1 content-center">
              <div className="cards flex justify-center">
                <Card
                  title={cards.title}
                  views={cards.views}
                  channel={cards.channel}
                  uploadTime={cards.uploadTime}
                  url={cards.url}
                  userLink={cards.userLink}
                  thumbnailPath={cards.thumbnailPath}
                  logoPath={cards.logoPath}
                />
              </div>
              <div className="cards flex justify-center">
                <Card
                  title={cards.title}
                  views={cards.views}
                  channel={cards.channel}
                  uploadTime={cards.uploadTime}
                  url={cards.url}
                  userLink={cards.userLink}
                  thumbnailPath={cards.thumbnailPath}
                  logoPath={cards.logoPath}
                />
              </div>
              <div className="cards w-full flex justify-center">
                <Card
                  title={cards.title}
                  views={cards.views}
                  channel={cards.channel}
                  uploadTime={cards.uploadTime}
                  url={cards.url}
                  userLink={cards.userLink}
                  thumbnailPath={cards.thumbnailPath}
                  logoPath={cards.logoPath}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommend;
