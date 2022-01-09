import { useState } from "react";
import CodeDisplay from "../../../components/CodeDisplay";
import Portfolio1 from "../../../components/template/Portfolio1";
// import CodeDisplay from "../../components/CodeDisplay";

export default function Portfolio() {
  const [code, setCode] = useState();
  const [showCode, setShowCode] = useState([
    {
      title: "Portfolio",
      code: [
        {
          title: "Portfolio",
          component: <Portfolio1 />,
        },
      ],
    },
  ]);

  const filter = showCode[0].code
  return (
    <div>
      {filter.map((n: any) => {
        return (
          <>
            <CodeDisplay component={n.component} key={n.title} />
          </>
        );
      })}
    </div>
  );
}
