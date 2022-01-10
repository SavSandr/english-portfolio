
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
.App {
  text-align: center;
}

.header__menu {
  background-color: rgba(0, 35, 102, .9);
  position:fixed;
  height: 60px;
  top:0;
  left:0;
  right:0;
  z-index: 1000;
}
.menu__list {
  height: 60px;
  line-height: 60px;
   li {
      display: inline-block;
      & + li {
          margin-left: 30px;
      }
  }
  a {
      color: #fff;
      font-size: 14px;
  }
}

.main{
  background-color: $grayBg;
}

.header__btn-menu,
.menu__btn {
  display: none;
}
`
export default GlobalStyles;


