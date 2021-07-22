import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  LogoRoot: {
    width: "auto !important",
    height: "auto !important",
    marginBottom: "300px !important",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
  },
  LogoText: {
    display: "block",
    fontWeight: "bold",
    fontSize: "2.3em",
    fontFamily: "FingerPaint",
  },
});

const PageLogo = ({ logoName, windowWidth }) => {
  const classes = useStyles();
  const logoContent = logoName.split("");

  return (
    <div
      className={classes.LogoRoot}
      style={{ display: `${windowWidth >= 410 ? "flex" : "none"}` }}
    >
      {logoContent.map((word, index) => (
        <span key={index} className={classes.LogoText}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default PageLogo;
