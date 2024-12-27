import React from 'react'
import Card from '../../../components/Cards/card2/Card'
import { useState } from 'react'

const Body = () => {
    // const [cards, setCard] = useState({
    //     title: "How to make a website using HTML CSS Bootstrap | Website Design Tutorial",
    //     views: "1.5M",
    //     channel: "Easy Tutorials",
    //     uploadTime: "1 year",
    //     url: "#",
    //     userLink: "#",
    //     thumbnailPath: "./src/assets/Posters/Card-images/card1/card-3.jpg",
    //     logoPath: "./src/assets/Posters/card-images/card1/logo.png"
    //   })
  return (
    <>
        {/* <div className='cards'>
            <Card title={cards.title}
            views={cards.views} channel={cards.channel}
            uploadTime= {cards.uploadTime}
            url= {cards.url}
            userLink= {cards.userLink}
            thumbnailPath= {cards.thumbnailPath}
            logoPath= {cards.logoPath}
            />
        </div> */}
        <div className="test">
            <Card/>
        </div>
    </>
  )
}

export default Body