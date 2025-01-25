import { FaStar } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa6';
import './start-rating.component.scss';

interface StartRatingProps {
    rating: number;
}

export const StartRating = (props: StartRatingProps) => {
    const numberOfStars = Math.round(props.rating / 2);
    const fullStars = [];
    const emptyStars = [];
    for (let i = 0; i < 5; i++) {
        if (i < numberOfStars) {
            fullStars.push(i);
        } else {
            emptyStars.push(i);
        }
    }

    return (
        <div className="movie-rate">
            {fullStars.map(index => (
                <FaStar key={index} />
            ))}
            {emptyStars.map(index => (
                <FaRegStar key={index} />
            ))}
        </div>
    );
};