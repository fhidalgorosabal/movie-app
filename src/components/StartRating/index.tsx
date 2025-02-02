import { FaStar, FaRegStar } from 'react-icons/fa6';
import './styles.scss';

interface StartRatingProps {
    rating: number;
}

export const StartRating = ({ rating }: StartRatingProps) => {
    const numberOfStars = Math.round(rating / 2);

    return (
        <div className="movie-rate">
            {[...Array(5)].map((_, index) =>
                index < numberOfStars ? <FaStar key={index} /> : <FaRegStar key={index} />
            )}
        </div>
    );
};
