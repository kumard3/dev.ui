import Button1 from "../../components/button/Button1";
import Button2 from "../../components/button/Button2";
import Button3 from "../../components/button/Button3";
import CodeDisplay from "../../components/CodeDisplay";

export default function Button() {
  const codeData = [
    {
      component: <Button1 />,
      jsx: `<button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Basic</button>`,
      html: `<button type="button" class="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Basic</button>`,
    },
    {
      component: <Button2 />,
      jsx: `<button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Border</button>`,
      html: `<button type="button" class="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Border</button>`,
    },
    {
      component: <Button3 />,
      jsx: `<button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">Rounded</button>`,
      html: `<button type="button" class="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">Rounded</button>`,
    },
  ];
  return (
    <div className="text-white">
      <div className="container mx-auto flex w-full justify-center flex-col items-center">
        {codeData.map((n) => {
          return (
            <CodeDisplay
              component={n.component}
              key={n.component}
              jsx={n.jsx}
              html={n.html}
            />
          );
        })}
      </div>
    </div>
  );
}
