import { LazyLoadImage } from "react-lazy-load-image-component";

function Game({game, studioName}) {

    return(
        <div>
            <LazyLoadImage className="game-img" src={game.imageUrl} alt=""/>
            <h4>{game.name}</h4>
            <h4>{studioName.name}</h4>
        </div>
    )
}
export default Game;

/**
 * game.name
 * game.studio
 * game.imageUrl
 */