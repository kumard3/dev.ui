
import { showCode } from '../../data/templates/data';
import { Componentbutton } from '../../components/ComponentButton';
import Link from 'next/link'

  export default function Template() {
    return (
      <div className="min-h-screen container mx-auto sm:px-10">
        <section className="dark:text-white container w-full mx-auto mt-3 ">
          <h1 className="text-5xl font-bold px-2"><Link href='/templates'> Template</Link> </h1>
          <section className="dark:text-white text-dark flex flex-wrap justify-center items-center w-full my-4 ">
            {showCode.map((n) => {
              return (
                <div key={n.title} >
                  <Componentbutton title={n.title} data={n} url={n.url}/>
                </div>
              );
            })}
          </section>
        </section>
      </div>
    );
  }
  