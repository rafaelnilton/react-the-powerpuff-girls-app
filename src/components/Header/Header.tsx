import './Header.css';
import { Typography } from 'antd';
import { useContext } from 'react';
import Context from '../../Context';
const { Title, Paragraph, Text} = Typography;

function Header() {
  const [episode, setEpisode] = useContext<any>(Context);
  return (
    <div >
        <img src={'https://cn.i.cdn.ti-platform.com/cnemea/content/388/showpage/the-powerpuff-girls/uk/showsquare.png?imwidth=210'} alt="logo Powerpuff Girls" />
        <Title>The Powerpuff Girls</Title>

        <Paragraph>
            The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as The Powerpuff Girls. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to "fight like a girl."
        </Paragraph>
        { episode.name && <Text type="success">Previous Episode: {episode.name}</Text>}
    </div>
  );
}

export default Header;
