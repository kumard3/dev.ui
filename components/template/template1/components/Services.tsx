import Card from "./Card";

export default function Services() {
    return (
        <div className="container mx-auto my-3 w-full text-center flex flex-col justify-center items-center" > 
           <div className="">

            <h1 className="text-5xl text-[#7C76BB] "> Our main services</h1>
            <p className="max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam nibh elit pellentesque velit netus suspendisse. Sed enim, pretium, montes, in ut dolor urna.</p>
           </div>
       <div className="container mx-auto w-full flex flex-wrap p-2 items-center justify-center">

       <Card/>
       <Card/>
       <Card/>
       </div>
       
        </div>
    )
}
