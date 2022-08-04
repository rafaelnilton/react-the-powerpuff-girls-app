import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import TVShowService from '../../services/TVShowService';
import './List.css';

function List() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false)
  
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
            setHasError(true)
        }
        );
    }, []);
  
    return (
        <>
            <div className="movie-grid">
                {hasError && <p>Sorry, An error has occured.</p>}
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
