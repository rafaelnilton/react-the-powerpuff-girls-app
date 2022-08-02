import { useContext, useEffect, useState } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import TVShowService from '../../services/TVShowService';
import './List.css';
import Context from '../../Context';
const { Title, Paragraph} = Typography;

function List() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [episode, setEpisode] = useContext<any>(Context);
  
    useEffect(() => {
        TVShowService.getEpisodeList(1).then(
        (data: any) => {
            setList(data.data);
            setLoading(false);
        },
        (error: any) => {
            console.log(error);
            setList([]);
            setLoading(false);
        }
        );
    }, []);
  
    return (
        <>
            <div className="movie-grid">
                {loading && <p>Loading...</p>}
                {!loading &&
                    list.map((episode : any, key) => {
                        return (
                            <Link to={"/season/"+episode.season+"/number/" + episode.number} key={key}>
                                <EpisodeCard
                                    name={episode.name}
                                    imgUrl={episode?.image?.medium ? episode?.image?.medium : ''}
                                    rating={episode.rating.average}
                                    summary={episode.summary}
                                />
                            </Link>
                        );
                    })}
            </div>
      </>
    );
}

export default List;
