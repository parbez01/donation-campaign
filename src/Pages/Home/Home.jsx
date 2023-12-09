import { useLoaderData } from "react-router-dom";
import Card from "../../components/Cards/Card";
import { useEffect, useState } from "react";

const Home = () => {

    const [search,setSearch] = useState([])

    const cards = useLoaderData()

    const handleSearch = (e) =>{
        e.preventDefault()
        const value = e.target.text.value
        const data = search.filter(sData => sData.category === value)
        setSearch(data)
    }

    useEffect(()=>{
        setSearch(cards)
    },[])

    console.log(cards)
    return (
        <div>
            <div className="h-[50vh] mb-14">
           
           <div className="hero h-[50vh]" style={{ backgroundImage: 'url(https://i.ibb.co/7g4CXtc/383314042-993914288548846-1091373714914908118-n.png)' }}>
               <div className="hero-overlay bg-white bg-opacity-90"></div>
               <div className=" text-center ">
                   <div className="text-black">
                       <h1 className="mb-5 text-5xl font-bold ">I Grow By Helping People In Need</h1>
                      <form onSubmit={handleSearch} action="">
                      <input type="text" placeholder="Search Here..." name="text" className="input input-bordered input-primary w-full max-w-xs" />
                      <input className="bg-[#FF444A]  p-[13px] rounded-lg text-base font-semibold text-white" type="submit" value="Search" />
                      </form>
                   </div>
               </div>
           </div>
       </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-5 lg:ml-3 gap-6 md:mr-6">
            {
              search?.map(card => <Card key={card.id} card={card}></Card>)  
            }
           </div>
           
        </div>

    );
};

export default Home;