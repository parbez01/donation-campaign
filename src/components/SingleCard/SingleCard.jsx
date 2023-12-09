
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleCardShow from './SingleCardShow';


const SingleCard = () => {

    const [card, setCard] = useState({});
    const { id } = useParams();
    const cards = useLoaderData();

    useEffect(() => {
        const findCard = cards?.find((card) => card.id == id);

        setCard(findCard)

    }, [id, cards])
    console.log(card);
    return (
        <div>

           <SingleCardShow card={card}></SingleCardShow>

        </div>
    );
};
export default SingleCard;