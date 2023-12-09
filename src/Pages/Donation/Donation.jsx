import { useEffect, useState } from "react";
import Donations from "./Donations";


const Donation = () => {
    const [donations,setDonations] = useState([])
    const [noData,setNoData] = useState(false)
    const [isShow,setIsShow]= useState(false)

    useEffect(()=>{
        const donateCards = JSON.parse(localStorage.getItem('donates'))
       if(donateCards){
        setDonations(donateCards)
       }
       else{
        
        setNoData('There Is No Data ');
       }
    },[])
    console.log(donations);

    return (
        <div>
           {
            noData ? <p className="h-[80vh] flex justify-center items-center">{noData}</p> : <div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-6">
                {
                  isShow ?  donations.map(card =><Donations key={card.id} card={card}></Donations> ) :
                 
                  donations.slice(0,4).map(card =><Donations key={card.id} card={card}></Donations> ) 

                }
            </div>

                {!isShow && donations.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="block mx-auto bg-[#009444] py-4 px-6 rounded-xl text-white text-base font-semibold">
                   {/* {isShow ? 'See Less' : 'See All'} */}See All
                    </button>}

            </div>
           }
        </div>
    );
};

export default Donation;