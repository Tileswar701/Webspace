import './styles.css'
const Card = (card) => {
  function clicked() {
    window.open(card.url);
  }
  return (
    <>
      <div className="container max-w-[260px] my-1 sm:max-w-full">
        <div className="card hover:cursor-pointer flex-col items-center sm:flex-row" onClick={clicked} >
          <div className="card-Image">
            <img className='card-img' src={card.thumbnailPath} alt="Card" />
            <img className='logo antialiased' src={card.logoPath} alt="logo" />
          </div>
          <div className="card-Content">
            <div className="meta-data">
              <div className="meta-title">
                <a href={card.url} className='title'>{card.title}</a>
              </div>
              <div className="meta-user">
                <a href={card.userLink} className='channel'>{card.channel}</a>
              </div>
            </div>
            <div className='info'>
              <p className='views'>{card.views} views</p>
              <div className="dot" ></div>
              <p className='date'>{card.uploadTime} ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card