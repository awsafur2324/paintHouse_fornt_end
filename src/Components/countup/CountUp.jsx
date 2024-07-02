import { Slide } from "react-awesome-reveal";
import coutupbg from "../../assets/Img/count up/2151104574.jpg"
import CountUpCard from "./CountUpCard";

const CountUp = () => {
    return (
        <div 
        style={{'--image-url': `url(${coutupbg})`}} 
        className={`p-5 bg-[image:var(--image-url)]  bg-fixed bg-bottom min-h-96 m-5 flex flex-wrap justify-evenly items-center my-10 gap-5`}>
            <Slide duration={"3000"}>
            <CountUpCard name={"Total Sells"} value={5000} />
            </Slide>
            <Slide duration={"1500"}>
                <CountUpCard name={"Satisfied Clients"} value={9820} />
            </Slide>
            <Slide duration={"500"}>
            <CountUpCard name={"Experience"} value={20} />
            </Slide>
        </div>
    );
};

export default CountUp;