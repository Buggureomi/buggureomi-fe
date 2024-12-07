/** @example
 * task: "MAIN-1"
 * path: "/question-create"
 * component: QuestionCreate
 */

type MockRouteType = {
  task: string;
  path: string;
  component: string;
};

export function MockRouteList() {
  const MockRouteList: MockRouteType[] = [
    // 질문 생성
    {
      task: "QCRT-1",
      path: "/question-create",
      component: "QuestionCreate",
    },
    {
      task: "QCRT-2",
      path: "/question-create-detail",
      component: "QuestionCreateDetail",
    },
    {
      task: "QCRT-3",
      path: "/question-create-complete",
      component: "QuestionCreateComplete",
    },
    // 메인
    {
      task: "MAIN-1",
      path: "/main",
      component: "Main",
    },
    // 답변 생성
    {
      task: "MCRT-1",
      path: "/answer-create",
      component: "AnswerCreate",
    },
    // 나 돌아보기
    {
      task: "MAIN-5",
      path: "/self-reflection",
      component: "SelfReflection",
    },
    // 답변
    {
      task: "MYRLT-1",
      path: "/answer-result",
      component: "AnswerResult",
    },
  ];

  return (
    <div
      style={{
        borderCollapse: "collapse",
        padding: "20px",
      }}
    >
      <table border={1}>
        <thead>
          <tr>
            {Object.keys(MockRouteList[0]).map((key) => (
              <th
                key={key}
                style={{ border: "1px solid black", padding: "10px" }}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MockRouteList.map((route) => (
            <tr key={route.task}>
              {Object.entries(route).map(([key, value]) => (
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {key === "path" ? (
                    <a
                      href={value}
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
