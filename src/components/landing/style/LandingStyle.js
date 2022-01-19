import Image from "../../../assets/pictures/landingTrees.jpg";

const backgroundPaper = {
    backgroundImage: {
        height: window.innerHeight,
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: `calc(100vw + 48px)`,
        margin: -24,
        padding: 24,
    },
};

export default backgroundPaper;
