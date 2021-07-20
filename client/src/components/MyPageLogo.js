import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  MypageLogo: {
    width: "auto !important",
    position: "relative",
  },
}));

const MyPageLogo = () => {
  const classes = useStyles();
  const logoContent = ["M", "Y", "P", "A", "G", "E"];

  return (
    <div className={classes.MypageLogo}>
      {logoContent.map((word, index) => (
        <h1 key={index}>{word}</h1>
      ))}
    </div>
  );
};

export default MyPageLogo;
