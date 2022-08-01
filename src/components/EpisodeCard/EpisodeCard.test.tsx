import EpisodeCard from './EpisodeCard'
import { render } from '@testing-library/react'

it("If EpisodeCard is rendered!", () => {
    render(<EpisodeCard name={'Name'} summary={'Summary'} imgUrl={'url'} rating={'5'} />);
});