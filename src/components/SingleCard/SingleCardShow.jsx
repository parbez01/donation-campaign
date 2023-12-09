import swal from "sweetalert";

const SingleCardShow = ({ card }) => {
    const { id, picture, title, category, description, price,text_color } = card || {}

    const handleAddToDonate = () => {

        const addedDonateCard = [];

        const donateCards = JSON.parse(localStorage.getItem('donates'))
        if (!donateCards) {
            addedDonateCard.push(card)
            localStorage.setItem("donates", JSON.stringify(addedDonateCard))
            swal("Good job!", "You Donate Successfully!", "success");
        }
        else {
            const isExits = donateCards.find(card => card.id === id)
            if (!isExits) {
                addedDonateCard.push(...donateCards, card)
                localStorage.setItem("donates", JSON.stringify(addedDonateCard))
                swal("Good job!", "You Donate Successfully!", "success");
            }
            else {
                swal("Error!", "Duplicate Donate Not Allow!", "error");
            }
        }

    }

    return (
        <div>

            <div className="relative">
                <img className="w-full lg:h-[700px]" src={picture} alt="" />
            </div>

       
            <div  className="bg-gray-500 mix-blend-multiply px-[170px] absolute -mt-20 py-10 lg:w-[1600px] w-[425px] md:w-[768px] lg:h-[130px] lg:-mt-[130px] ">

            </div>


          <div className="lg:-mt-20 -mt-16 lg:ml-10 ml-36 md:ml-80  absolute">
                <button onClick={handleAddToDonate} className=" py-4 px-6 rounded-lg text-white font-bold lg:-mt-[200px] " style={{backgroundColor:text_color}}>Donate ${price}</button>
            </div>


         


            <div className="mt-10">
                <p className="text-3xl font-bold mb-3 ml-14 md:ml-48 lg:ml-0"> {title}</p>
                <p className="text-base font-normal lg:py-1 p-4 lg:p-0 ">{description}</p>
            </div>

        </div>
    );
};

export default SingleCardShow;
