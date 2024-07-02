import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

const BannerItem = ({ states, img, header, details }) => {
  return (
    <div
      className={`w-[100%] h-[550px] text-center md:text-left sm:rounded-2xl p-14 md:p-36 flex flex-col ${
        states ? "md:flex-row-reverse" : "md:flex-row"
      } justify-evenly items-center`}
    >
      <div className="w-1/2 md:w-[40%]">
        <img
          src={img}
          alt=""
          width={"100%"}
          height={"50%"}
          className="animate-scale"
        />
      </div>

      <div className="w-full md:w-[60%]">
        <Fade duration="5000">
          <h1 className="text-2xl md:text-4xl font-display2 font-bold">
            {header}
          </h1>
          <p className="font-display1 mt-5">{details}</p>
        </Fade>
      </div>
    </div>
  );
};
BannerItem.propTypes = {
  states: PropTypes.bool,
  img: PropTypes.any,
  header: PropTypes.string,
  details: PropTypes.string,
};
export default BannerItem;
