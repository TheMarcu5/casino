import { motion } from "framer-motion";
import { useRef, useState , useEffect} from "react";
import Game from "./Game";
import { Slideshow } from "./Slideshow";

function Studios({filteredStudios, games, setFilteredGames, activeStudio, setActiveStudio}) {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        if(activeStudio === 86) {
            setFilteredGames(games);
            console.log("hej balle");
            return;
        }
        if(games.length > 0){

            const filtered = games.filter((game) =>
                game.studioId === activeStudio
            );
            setFilteredGames(filtered);
        }

        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    },[activeStudio, games])
       
    return (
        <motion.div ref={carousel} className="studios-carousel" whileTap={{cursor: "grabbing"}}>
            <motion.div 
                drag="x" 
                dragConstraints={{right: 0, left: -width }}
                className="studios-carousel-inner">
                {filteredStudios.map((studio) => {
                    return (
                        <motion.div className="item" key={studio.id}>
                            <a  href="#" onClick={(e) => setActiveStudio(studio.id)}>
                                <img className="studio-img" src={studio.imageUrl} alt=""/>
                            </a>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}
export default Studios;