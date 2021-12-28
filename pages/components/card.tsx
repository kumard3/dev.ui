import Card1 from "../../components/card/Card1";
import Card2 from "../../components/card/Card2";
import CodeDisplay from "../../components/CodeDisplay";

export default function Card() {
  const codeData = [
    {
      component: <Card1 />,
      jsx: `<div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img src="https://source.unsplash.com/300x300/?random" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"/>
      <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-indigo-400">Quisque</span>
          <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
      </div>
      <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
  </div>`,
      html: `<div class="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
  <img src="https://source.unsplash.com/300x300/?random" alt="" class="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500">
  <div class="mt-6 mb-2">
      <span class="block text-xs font-medium tracking-widest uppercase dark:text-indigo-400">Quisque</span>
      <h2 class="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
  </div>
  <p class="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
</div>`,
    },
    {
      component: <Card2 />,
      jsx: `<div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img src="https://source.unsplash.com/301x301/?random" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"/>
      <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
              <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
          </div>
          <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-gray-900">Read more</button>
      </div>
  </div>`,
      html: `<div class="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
  <img src="https://source.unsplash.com/301x301/?random" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500">
  <div class="flex flex-col justify-between p-6 space-y-8">
      <div class="space-y-2">
          <h2 class="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
          <p class="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
      </div>
      <button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-gray-900">Read more</button>
  </div>
</div>`,
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
