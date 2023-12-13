import styles from "@/styles/Campaign.module.css"
import { IconCirclePlus } from '@tabler/icons-react';
import { useState } from 'react';
import CardFood from "../CardFood";
const FoodCampaign = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleReadMore = () => {
        setShowFullText((prevShowFullText) => !prevShowFullText);
    };
    return (
        <>
            <div className="container mx-auto mt-24 bg-white h-screen">
                <div className="flex justify-center w-full">
                    <h1>Food Campaign</h1>
                </div>

                <hr className="w-full h-1 mx-auto mt-2 bg-gray-300 border-0 rounded" />

                <div className="items-center justify-center mt-1 w-full">
                    <div className="w-full bg-white  text-black rounded-lg inline-flex items-center px-4 py-2.5 ">
                        <div className="flex justify-between w-full">
                            <div className="flex">
                                <div className="text-left place-items-start">
                                    <div className="mb-1 text-primary">food required :16</div>
                                    <div className="-mt-1 font-sans text-xs text-gray-500">lack of food :10</div>
                                </div>
                            </div>
                            <div className="grid place-items-center">
                                <button className="flex rounded-lg w-20 h-10 grid grid-cols-3 gap-4 content-center text-white bg-primary p-2 hover:shadow-lg"><IconCirclePlus />add </button>

                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full h-1 mx-auto mt-2 bg-gray-300 border-0 rounded" />


                <div className="items-center justify-center mt-2 w-full">
                    <CardFood
                        to="2"
                        img="/img/card/rectangle_70.png"
                        title="Nasi Kuning"
                        name="Warung Makan Amar"
                        qty="10"
                        status_makanan="Makanan Di Kirim"
                        status="Approved"
                    />
                    <CardFood
                        to="1"
                        img="/img/card/rectangle_70.png"
                        title="Nasi Padang"
                        name="Warung Makan Omar"
                        qty="20"
                        status_makanan="Makanan Diterima"
                        status="Waiting approval"
                    />
                </div >


            </div >

        </>

    );
}

export default FoodCampaign;