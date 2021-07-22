import React from "react";
import {
  Button,
  TextField,
  Typography,
  InputLabel,
  Select,
  ListSubheader,
  FormControl,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  study: {
    marginTop: theme.spacing(2),
  },
  cate: {
      fontSize: "1rem",
      fontWeight: "800",
      color: "black",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  up: {
    textAlign: "center",
  },
  title: {
    margin: theme.spacing(0, 0, 0, 6),
    display: "flex",
    alignItems: "center",
    color: "#e53935",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  function isKNU(input) {
    var email = input;
    var exptext = /^[A-Za-z0-9_\.\-]+@knu+\.ac+\.kr+/;
    return exptext.test(email);
  }
  function isValid() {
      if (isKNU(props.userinput.email) & props.userinput.password.length > 6 & props.userinput.name !== "" & props.userinput.department !== "")
        return true;
  }

  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h5">
        계정 생성
      </Typography>
      <form className={classes.form} onSubmit={props.submit} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="이메일"
          type="email"
          id="email"
          name="email"
          value={props.userinput.email}
          autoFocus
          onChange={props.onch}
          error={
            props.userinput.email === "" ? false : !isKNU(props.userinput.email)
          }
          helperText="예) name@knu.ac.kr"
        /> 
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="비밀번호"
          type="password"
          id="password"
          name="password"
          value={props.userinput.password}
          onChange={props.onch}
          error={props.userinput.password.length < 7 & props.userinput.password.length > 0}
          helperText="7문자 이상 입력해주세요"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="이름"
          type="text"
          id="name"
          name="name"
          value={props.userinput.name}
          onChange={props.onch}
        />
        <FormControl variant="outlined" fullWidth className={classes.study} required>
          <InputLabel>학과</InputLabel>
          <Select defaultValue="" id="department" label="학과" value={props.userinput.department} name="department" onChange={props.onch}>
            <MenuItem value="">
              <em>학과 선택</em>
            </MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>인문대학</ListSubheader>
            <MenuItem value="국어국문학과">국어국문학과</MenuItem>
            <MenuItem value="영어영문학과">영어영문학과</MenuItem>
            <MenuItem value="사학과">사학과</MenuItem>
            <MenuItem value="철학과">철학과</MenuItem>
            <MenuItem value="불어불문학과">불어불문학과</MenuItem>
            <MenuItem value="독어독문학과">독어독문학과</MenuItem>
            <MenuItem value="중어중문학과">중어중문학과</MenuItem>
            <MenuItem value="고고인류학과">고고인류학과</MenuItem>
            <MenuItem value="일어일문학과">일어일문학과</MenuItem>
            <MenuItem value="한문학과">한문학과</MenuItem>
            <MenuItem value="노어노문학과">노어노문학과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>사회과학대학</ListSubheader>
            <MenuItem value="정치외교학과">정치외교학과</MenuItem>
            <MenuItem value="사회학과">사회학과</MenuItem>
            <MenuItem value="지리학과">지리학과</MenuItem>
            <MenuItem value="문헌정보학과">문헌정보학과</MenuItem>
            <MenuItem value="심리학과">심리학과</MenuItem>
            <MenuItem value="사회복지학부">사회복지학부</MenuItem>
            <MenuItem value="신문방송학과">신문방송학과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>자연과학대학</ListSubheader>
            <MenuItem value="수학과">수학과</MenuItem>
            <MenuItem value="물리학과">물리학과</MenuItem>
            <MenuItem value="지리학과">지리학과</MenuItem>
            <MenuItem value="화학과">화학과</MenuItem>
            <MenuItem value="통계학과">통계학과</MenuItem>
            <MenuItem value="생명과학부">생명과학부</MenuItem>
            <MenuItem value="지구시스템과학부">지구시스템과학부</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>경상대학</ListSubheader>
            <MenuItem value="경제통상학부">경제통상학부</MenuItem>
            <MenuItem value="경영학부">경영학부</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>공과대학</ListSubheader>
            <MenuItem value="신소재공학부">신소재공학부</MenuItem>
            <MenuItem value="기계공학부">기계공학부</MenuItem>
            <MenuItem value="건축학부">건축학부</MenuItem>
            <MenuItem value="토목공학과">토목공학과</MenuItem>
            <MenuItem value="에너지공학부">에너지공학부</MenuItem>
            <MenuItem value="고분자공학과">고분자공학과</MenuItem>
            <MenuItem value="응용화학공학부">응용화학공학부</MenuItem>
            <MenuItem value="섬유시스템공학과">섬유시스템공학과</MenuItem>
            <MenuItem value="환경공학과">환경공학과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>IT대학</ListSubheader><MenuItem value="신소재공학부">신소재공학부</MenuItem>
            <MenuItem value="전자공학부">전자공학부</MenuItem>
            <MenuItem value="컴퓨터학부">컴퓨터학부</MenuItem>
            <MenuItem value="전기공학과">전기공학과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>농업생명과학대학</ListSubheader>
            <MenuItem value="응용생명과학부">응용생명과학부</MenuItem>
            <MenuItem value="식품공학부">식품공학부</MenuItem>
            <MenuItem value="산림과학·조경학부">산림과학·조경학부</MenuItem>
            <MenuItem value="농업토목·생물산업공학부">농업토목·생물산업공학부</MenuItem>
            <MenuItem value="원예과학과">원예과학과</MenuItem>
            <MenuItem value="바이오섬유소재학과">바이오섬유소재학과</MenuItem>
            <MenuItem value="농업경제학과">농업경제학과</MenuItem>
            <MenuItem value="농산업학과">농산업학과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>예술대학</ListSubheader>
            <MenuItem value="음악학과">음악학과</MenuItem>
            <MenuItem value="국악학과">국악학과</MenuItem>
            <MenuItem value="미술학과">미술학과</MenuItem>
            <MenuItem value="디자인학과">디자인학과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>사범대학</ListSubheader>
            <MenuItem value="교육학과">교육학과</MenuItem>
            <MenuItem value="국어교육과">국어교육과</MenuItem>
            <MenuItem value="영어교육과">영어교육과</MenuItem>
            <MenuItem value="디자인학과">디자인학과</MenuItem>
            <MenuItem value="유럽어교육학부">유럽어교육학부</MenuItem>
            <MenuItem value="역사교육과">역사교육과</MenuItem>
            <MenuItem value="지리교육과">지리교육과</MenuItem>
            <MenuItem value="일반사회교육과">일반사회교육과</MenuItem>
            <MenuItem value="물리교육과">물리교육과</MenuItem>
            <MenuItem value="윤리교육과">윤리교육과</MenuItem>
            <MenuItem value="수학교육과">수학교육과</MenuItem>
            <MenuItem value="화학교육과">화학교육과</MenuItem>
            <MenuItem value="생물교육과">생물교육과</MenuItem>
            <MenuItem value="지구과학교육과">지구과학교육과</MenuItem>
            <MenuItem value="가정교육과">가정교육과</MenuItem>
            <MenuItem value="체육교육과">체육교육과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>의과대학</ListSubheader>
            <MenuItem value="의학과">의학과</MenuItem>
            <MenuItem value="의예과">의예과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>치과대학</ListSubheader>
            <MenuItem value="치의학과">치의학과</MenuItem>
            <MenuItem value="치의예과">치의예과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>수의과대학</ListSubheader>
            <MenuItem value="수의학과">수의학과</MenuItem>
            <MenuItem value="수의예과">수의예과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>생활과학대학</ListSubheader>
            <MenuItem value="아동학부">아동학부</MenuItem>
            <MenuItem value="의류학과">의류학과</MenuItem>
            <MenuItem value="식품영양학과">식품영양학과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>간호대학</ListSubheader>
            <MenuItem value="간호학과">간호학과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>약학대학</ListSubheader>
            <MenuItem value="약학과">약학과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>생태환경대학</ListSubheader>
            <MenuItem value="생태환경시스템학부">생태환경시스템학부</MenuItem>
            <MenuItem value="생태환경관광학부">생태환경관광학부</MenuItem>
            <MenuItem value="레저스포츠학과">레저스포츠학과</MenuItem>
            <MenuItem value="축산학과">축산학과</MenuItem>
            <MenuItem value="축산생명공학과">축산생명공학과</MenuItem>
            <MenuItem value="말/특수동물학과">말/특수동물학과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>과학기술대학</ListSubheader>
            <MenuItem value="건설방재공학부">건설방재공학부</MenuItem>
            <MenuItem value="정밀기계공학과">정밀기계공학과</MenuItem>
            <MenuItem value="자동차공학부">자동차공학부</MenuItem>
            <MenuItem value="소프트웨어학과">소프트웨어학과</MenuItem>
            <MenuItem value="나노소재공학부">나노소재공학부</MenuItem>
            <MenuItem value="식품외식산업학과">식품외식산업학과</MenuItem>
            <MenuItem value="섬유패션디자인학부">섬유패션디자인학부</MenuItem>
            <MenuItem value="융복합시스템공학부">융복합시스템공학부</MenuItem>
            <MenuItem value="치위생학과">치위생학과</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>행정학부</ListSubheader>
            <MenuItem value="행정학부">행정학부</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>자율전공부</ListSubheader>
            <MenuItem value="자율전공부">자율전공부</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>융합학부</ListSubheader>
            <MenuItem value="인공지능전공">인공지능전공</MenuItem>
            <MenuItem value="의생명융합공학전공">의생명융합공학전공</MenuItem>
            <MenuItem value="로봇및스마트시스템공학전공">로봇및스마트시스템공학전공</MenuItem>
            <MenuItem value="수소및신재생에너지전공">수소및신재생에너지전공</MenuItem>
            <ListSubheader disableSticky={true} className={classes.cate}>글로벌인재학부</ListSubheader>
            <MenuItem value="글로벌인재학부(구)">글로벌인재학부(구)</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={!isValid()}
          className={classes.submit}
        >
          생성
        </Button>
      </form>
    </div>
  );
};

export default Login;
