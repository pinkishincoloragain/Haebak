import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  LogoRoot: ({ responsive }) => ({
    width: "auto !important",
    height: "auto !important",
    marginBottom: "300px !important",
    position: "relative",
    display: `${responsive && "content"}`,
    flexDirection: "column",
    alignItems: "center",
  }),
  LogoText: {
    display: "block",
    fontWeight: "bold",
    fontSize: "2.3em",
  },
});

const PageLogo = ({ logoName, responsive }) => {
  const classes = useStyles({ responsive });
  const logoContent = logoName.split("");

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

export default PageLogo;
