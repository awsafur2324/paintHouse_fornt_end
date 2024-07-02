import { FaQuoteLeft} from "react-icons/fa6"; 
import PropTypes from 'prop-types';
const CommentCard = ({comment , setLoad}) => {
    setLoad(false);
    return (
        <div className="min-h-96 flex flex-col gap-2 w-full justify-between items-center p-5 border hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FaQuoteLeft  className="text-4xl text-gray-600"/>
            <p className=" text-lg mt-5 font-display flex flex-wrap  gap-1 text-center"> {comment.comment} </p>
            <div className="">
            <div className="h-20 w-20 rounded-full">
                <img src={comment.img} alt=""  className="object-cover w-full h-full rounded-full"/>
            </div>
            <p className="my-5 text-base font-display4 font-medium text-center">{comment.name}</p>
            </div>
        </div>
    );
};
CommentCard.propTypes = {
    comment: PropTypes.object,
    setLoad : PropTypes.bool
    }
export default CommentCard;