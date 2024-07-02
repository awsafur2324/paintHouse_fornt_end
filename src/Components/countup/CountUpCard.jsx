import CountUp from "react-countup";
import PropTypes from "prop-types";
import { VscAdd } from "react-icons/vsc";
const CountUpCard = ({ name, value }) => {
    return (
        <div
          className="p-5 px-10 bg-light rounded shadow-xl text-center hover:mb-5 duration-500"
        >
          <p className="text-3xl font-header font-semibold text-blue-950">{name}</p>
          <p className="mt-4 mb-2 font-basic2 font-medium text-green-700 flex flex-row justify-center items-center
          ">
            <CountUp
              end={value}
              useIndianSeparators={true}
              duration={8}
              scrollSpyDelay={400}
              enableScrollSpy={true}
              className="text-xl"
            />
            <VscAdd className="font-extrabold font-display"/>
            {name == "Experience" ? (
              <span className="font-header ml-1">Years</span>
            ) : (
              ""
            )}
          </p>
        </div>
      );
    };
    CountUpCard.propTypes = {
      name: PropTypes.string,
      value: PropTypes.number,
      time: PropTypes.number,
    };
    export default CountUpCard;