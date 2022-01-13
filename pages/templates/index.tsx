import { useState,useEffect } from "react";
import { showCode } from '../../data/templates/data';
import { Componentbutton } from '../../components/ComponentButton';
import CodeDisplay from "../../components/CodeDisplay";


const routes = [
    {
      title: "Portfolio",
    },
  ];
  
  export default function Template({json}) {

    const [stores, setStore] = useState("");
  
    const filterdata = showCode.filter((e) => e.title === stores);
    const Filter = filterdata[0];

    
    
    return (
      <div className="min-h-screen container mx-auto sm:px-10">
        <section className="dark:text-white container w-full mx-auto mt-3 ">
          <h1 className="text-5xl font-bold px-2">Template</h1>
          <section className="dark:text-white text-dark flex justify-center items-center w-full my-4 ">
            {routes.map((n, index) => {
              return (
                <div key={n.title} onClick={() => setStore(n.title)}>
                  <Componentbutton title={n.title} />
                </div>
              );
            })}
          </section>
        </section>
  
        {stores === "" ? (
          <div className="container flex items-center justify-center p-6 mx-auto mt-8 lg:my-16 h-80 sm:h-96 md:h-112 xl:h-128">
            <img
              src="/pc_guy.png"
              alt="pc_guy"
              className="object-contain h-80 sm:h-96 md:h-112 xl:h-128"
            />
          </div>
        ) : (
          <div className="dark:text-white">
            <div className="container mx-auto flex w-full justify-center flex-col items-center">
              {Filter?.store.map((n) => {
                return (
                  <CodeDisplay
                    component={n.component}
                    key={n.component}
                 
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
  