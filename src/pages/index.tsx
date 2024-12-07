import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import QuestionCreateDetail from "./question-create-detail";
import Main from "./main";
import { MockRouteList } from "./_mock";
import QuestionCreateComplete from "./question-create-complete";
import QuestionCreate from "./question-create";
import AnswerCreate from "./answer-create";
import SelfReflection from "@/pages/self-reflection";
import AnswerResult from "./answer-result";

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* Route 확인용 (작업 시 꼭 추가 부탁드립니다!!) */}
          <Route exact path="/" render={() => <MockRouteList />} />
          <Route exact path="/main" render={() => <Main />} />
          <Route
            exact
            path="/question-create"
            render={() => <QuestionCreate />}
          />
          <Route
            exact
            path="/question-create-detail"
            render={() => <QuestionCreateDetail />}
          />
          <Route
            exact
            path="/question-create-complete"
            render={() => <QuestionCreateComplete />}
          />
          <Route exact path="/answer-create" render={() => <AnswerCreate />} />
          <Route
            exact
            path="/self-reflection"
            render={() => <SelfReflection />}
          />
          <Route exact path="/answer-result" render={() => <AnswerResult />} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
