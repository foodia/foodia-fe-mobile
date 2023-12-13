import styles from "@/styles/Home.module.css"
import Image from "next/image";
import { IconBuildingStore, IconCirclePlus } from '@tabler/icons-react';
import CardCampaign from "../CardCampaign";
import SlideCard from "../SlideCard";
import Link from "next/link";

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto mt-24 bg-white h-screen">
                <div className="place-content-center">
                    <div className={`bg-green-50 rounded-lg ${styles.listMenu}`}>
                        <div className="flex flex-nowrap p-2">
                            <Link href={"/login/detonator"} className="grid justify-items-center mr-2">
                                <div className={`${styles.iconMenu}`}><Image src={'/icon/campaint.png'} alt="Girl in a jacket" width={30} height={30} /></div>
                                <p className="text-base text-sm text-gray-500 dark:text-gray-400">Galang Donasi</p>
                            </Link>
                            <Link href={"/login/merchant"} className="grid justify-items-center">
                                <div className={`${styles.iconMenu}`}><IconBuildingStore /></div>
                                <p className="text-base text-sm text-gray-500 dark:text-gray-400">UMKM</p>
                            </Link>
                        </div>
                    </div >
                </div>

                <div className={` flex ${styles.slide_card}`}>
                    <SlideCard to={"/campaign/1"}
                        img="/img/card/rectangle_70.png"
                        title="Makanan Untuk Semua"
                        address="Bersama-sama Kita Bisa Mengakhiri Kelaparan."
                        date="30/10/2022"
                        status="Pending"
                    />
                    <SlideCard to={"/campaign/1"}
                        img="/img/card/rectangle_70.png"
                        title="TEBAR 1000 PAKET NASI JUMAT BERKAH"
                        address="Kav Barokah, Gg. Ceria I, Bahagia, Kec. Babelan, Kabupaten Bekasi, Jawa Barat 17121"
                        date="30/10/2022"
                        status="Approved"
                    />
                    <SlideCard to={"/campaign/1"}
                        img="/img/card/rectangle_70.png"
                        title="TEBAR 1000 PAKET NASI JUMAT BERKAH"
                        address="Kav Barokah, Gg. Ceria I, Bahagia, Kec. Babelan, Kabupaten Bekasi, Jawa Barat 17121 ppppppppppppppppppppppppppppppppppppppp"
                        date="30/10/2022"
                        status="Rejected"
                    />

                    <SlideCard to={"/campaign/1"}
                        img="/img/card/rectangle_70.png"
                        title="TEBAR 1000 PAKET NASI JUMAT BERKAH"
                        address="Kav Barokah, Gg. Ceria I, Bahagia, Kec. Babelan, Kabupaten Bekasi, Jawa Barat 17121"
                        date="30/10/2022"
                        status="Approved"
                    />
                </div>
                <div className="place-content-center">
                    <div className="flex my-5">
                        <div className="mr-2 grid justify-items-center"><span className="text-blue-500">Donasi Terdekat</span>
                            <div className="bg-blue-500 w-32 h-0.5"></div>
                        </div>
                        <div className="grid justify-items-center"><span className="e25_212">Event Donasi </span>
                            <div className="bg-black w-32 h-0.5"></div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.card}`}>
                    <CardCampaign to={"/campaign/1"}
                        img="/img/card/rectangle_70.png"
                        title="TEBAR 1000 PAKET NASI JUMAT BERKAH"
                        address="Kav Barokah, Gg. Ceria I, Bahagia, Kec. Babelan, Kabupaten Bekasi, Jawa Barat 17121"
                        date="30/10/2022"
                        status="Pending"
                    />
                    <CardCampaign to={"/campaign/1"}
                        img="/img/card/rectangle_70.png"
                        title="TEBAR 1000 PAKET NASI JUMAT BERKAH"
                        address="Kav Barokah, Gg. Ceria I, Bahagia, Kec. Babelan, Kabupaten Bekasi, Jawa Barat 17121"
                        date="30/10/2022"
                        status="Approved"
                    />
                    <CardCampaign to={"/campaign/1"}
                        img="/img/card/rectangle_70.png"
                        title="TEBAR 1000 PAKET NASI JUMAT BERKAH"
                        address="Kav Barokah, Gg. Ceria I, Bahagia, Kec. Babelan, Kabupaten Bekasi, Jawa Barat 17121"
                        date="30/10/2022"
                        status="Rejected"
                    />

                    <CardCampaign to={"/campaign/1"}
                        img="/img/card/rectangle_70.png"
                        title="TEBAR 1000 PAKET NASI JUMAT BERKAH"
                        address="Kav Barokah, Gg. Ceria I, Bahagia, Kec. Babelan, Kabupaten Bekasi, Jawa Barat 17121"
                        date="30/10/2022"
                        status="Approved"
                    />
                    <CardCampaign to={"/campaign/1"}
                        img="/img/card/rectangle_70.png"
                        title="TEBAR 1000 PAKET NASI JUMAT BERKAH"
                        address="Kav Barokah, Gg. Ceria I, Bahagia, Kec. Babelan, Kabupaten Bekasi, Jawa Barat 17121"
                        date="30/10/2022"
                        status="Approved"
                    />
                    <CardCampaign to={"/campaign/1"}
                        img="/img/card/rectangle_70.png"
                        title="TEBAR 1000 PAKET NASI JUMAT BERKAH"
                        address="Kav Barokah, Gg. Ceria I, Bahagia, Kec. Babelan, Kabupaten Bekasi, Jawa Barat 17121"
                        date="30/10/2022"
                        status="Approved"
                    />
                    S
                </div>
            </div>

        </>

    );
}

export default HomePage;