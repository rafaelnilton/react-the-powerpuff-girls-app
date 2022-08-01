import './Episode.css';
import { Card, Skeleton, Rate } from 'antd';
import { useEffect, useState } from 'react';
import TVShowService from '../../services/TVShowService';
import { useParams } from 'react-router-dom';

const { Meta } = Card;

function Episode() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(null)
    let { season, number} = useParams();

    useEffect(() => {
        TVShowService.getEpisode(season, number).then(
            (data: any) => {
                setData(data.data);
                setLoading(false);
            },
            (error: any) => {
                console.log(error);
                setLoading(false);
            }
          );
    }, [])

  return (
    <div >
      <Card
            style={{ marginTop: 16, margin: 5 }}
          >
            <Skeleton loading={loading} avatar active>
            {data && <div className="episodeCard">
              <h1>{data.name}</h1>
              <img src={data.image.medium} />
              <p dangerouslySetInnerHTML={{__html: data.summary}} ></p>
              <Rate disabled defaultValue={parseInt(data.rating) || Math.floor(Math.random() * 5) + 1} />
            </div> }
            </Skeleton>
          </Card>
    </div>
  );
}

export default Episode;
