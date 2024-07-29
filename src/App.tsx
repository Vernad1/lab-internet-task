import { About } from "./components/about/About";
import { AppForm } from "./components/app-form/AppForm";
import { Header } from "./components/header/Header";
import { Intro } from "./components/intro/Intro";
import { Questions } from "./components/questions/Questions";
import { Respondents } from "./components/respondents/Respondents";
import { Reviews } from "./components/reviews/Reviews";
import { ThirdBlock } from "./components/third-block/ThirdBlock";

function App() {
  return (
    <div>
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <ThirdBlock></ThirdBlock>
      <Reviews></Reviews>
      <Questions></Questions>
      <Respondents></Respondents>
      <AppForm></AppForm>
    </div>
  );
}

export default App;
