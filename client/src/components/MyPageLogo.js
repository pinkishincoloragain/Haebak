import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  LogoRoot: {
    width: "auto !important",
    height: "auto !important",
    marginTop: "60px !important",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  LogoText: {
    display: "block",
    fontWeight: "bold",
    fontSize: "2.3em",
  },
}));

const MyPageLogo = () => {
  const classes = useStyles();
  const logoContent = ["M", "Y", "P", "A", "G", "E"];

  return (
    <div className={classes.LogoRoot}>
      {logoContent.map((word, index) => (
        <span key={index} className={classes.LogoText}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default MyPageLogo;
