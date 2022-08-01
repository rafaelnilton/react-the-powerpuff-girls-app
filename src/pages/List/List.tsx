import { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import TVShowService from '../../services/TVShowService';
import './List.css';
const { Title, Paragraph} = Typography;

function List() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
  
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
            <Title>The Powerpuff Girls</Title>

            <Paragraph>
                The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as The Powerpuff Girls. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to "fight like a girl."
            </Paragraph>

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
