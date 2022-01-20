import Image from "../../../assets/pictures/landingBackground.jpg";

const LandingStyle = {
    backgroundImage: {
        height: window.innerHeight,
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "auto",
    },
    typography: {
        fontFamily: ["Maven Pro", "Roboto", "Arial", "sans-serif"].join(","),
    },
    button: {
        color: "black",
        backgroundColor: "#ffffff",

        maxWidth: "300px",
        maxHeight: "300px",
        minWidth: "200px",
        minHeight: "75px",
        fontSize: "20px",
    },
};

export default LandingStyle;
