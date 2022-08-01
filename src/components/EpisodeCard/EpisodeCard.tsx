import './EpisodeCard.css';
import { Card, Skeleton, Rate } from 'antd';
import { useEffect, useState } from 'react';

const { Meta } = Card;

interface CardType {
    name: string,
    summary: string,
    imgUrl: string,
    rating: string
}
function EpisodeCard(props: CardType) {
    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }, [])

    return (
        <>
          <Card
            style={{ width: 300, marginTop: 16, margin: 5 }}
          >
            <Skeleton loading={loading} avatar active>
              <div className="episodeCard">
                <h1>{props.name}</h1>
                <img src={props.imgUrl} />
                <p dangerouslySetInnerHTML={{__html: props.summary}} ></p>
                <Rate disabled defaultValue={parseInt(props.rating) || Math.floor(Math.random() * 5) + 1} />
              </div>
            </Skeleton>
          </Card>
        </>
      );
}

export default EpisodeCard;
