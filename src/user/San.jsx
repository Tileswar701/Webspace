import React from 'react'
import Card from '../components/Cards/card1/Card'
import { useState } from 'react'
const San = () => {
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
      <div className="workspace-page">
          <div className="workspace-header">
              <div className="head-text w-full text-center bg-teal-200 p-3">
                  <h1>This is San's Workspace</h1>
                  <p>San's Workspace is the place where San can work on his projects</p>
              </div>
          </div>
          <div className="user-space">
            <img src="../assets/Posters/Card-images/card1/card.jpg" alt="hehe" />
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
    </>
  )
}

export default San