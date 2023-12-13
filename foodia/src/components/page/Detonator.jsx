import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { IconCirclePlus } from "@tabler/icons-react";
import SlideCard from "../SlideCard";
import styles from "@/styles/Home.module.css";
import CardCampaign from "../CardCampaign";

const Detonator = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [dataApi, setDataApi] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();

    useEffect(() => {
        const role = sessionStorage.getItem('role');
        const token = sessionStorage.getItem('token');
        const status = sessionStorage.getItem('status');
        const id = sessionStorage.getItem('id');

        if (!role || !token || role !== 'detonator' || status !== 'approved' || !id) {
            // Redirect to login if either role or token is missing or role is not 'detonator' or status is not 'approved'
            sessionStorage.clear();
            router.push('/login/detonator');
        } else {
            // Role is 'detonator' and token is present
            setLoading(false); // Set loading to false once the check is complete
        }
    }, [router]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = sessionStorage.getItem('id');
                const token = sessionStorage.getItem('token');

                if (!id || !token) {
                    throw new Error('Missing required session data');
                }

                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}campaign/filter?detonator_id=${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setDataApi(response.data.body);
                setFilteredData(response.data.body);
                setLoading(false);

                if (response.data.body.length === 0) {
                    setHasMore(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);

                if (error.response && error.response.status === 401) {
                    // Unauthorized error (e.g., token expired)
                    sessionStorage.clear();
                    router.push('/login/detonator');
                }
            }
        };

        fetchData();
    }, [page]);

    const handleFilterChange = (status) => {
        setSelectedStatus(status);
        const filtered = dataApi.filter((data) => data.status === status);
        setFilteredData(filtered);
    };

    useEffect(() => {
        console.log('Data', filteredData);
    }, [filteredData]);

    return (
        <>

            <div className="container mx-auto mt-24 bg-white h-screen">
                <div className="place-content-center">
                    <div className={`bg-green-50 rounded-lg ${styles.listMenu}`}>
                        <div className="flex flex-nowrap p-4">

                            <Link href="/creatcampaign?step=1" className="grid justify-items-center">
                                <div className={`${styles.iconMenu}`}><IconCirclePlus /></div>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Campaign</p>
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

                        <div
                            className={`mr-2 grid justify-items-center ${selectedStatus === 'approved' ? 'text-blue-500 ' : ''}`}
                            onClick={() => handleFilterChange('approved')}
                        >
                            <span>Approved</span>
                            <div className={`w-24 h-0.5 ${selectedStatus === 'approved' ? 'bg-blue-500 ' : 'bg-black'}`}></div>
                        </div>
                        <div
                            className={`mr-2 grid justify-items-center ${selectedStatus === 'waiting' ? 'text-blue-500' : ''}`}
                            onClick={() => handleFilterChange('waiting')}
                        >
                            <span>Waiting</span>
                            <div className={`w-24 h-0.5 ${selectedStatus === 'waiting' ? 'bg-blue-500 ' : 'bg-black'}`}></div>
                        </div>
                        <div
                            className={`grid justify-items-center ${selectedStatus === 'rejected' ? 'text-blue-500 ' : ''}`}
                            onClick={() => handleFilterChange('rejected')}
                        >
                            <span>Rejected</span>
                            <div className={`w-24 h-0.5 ${selectedStatus === 'rejected' ? 'bg-blue-500 ' : 'bg-black'}`}></div>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className={`${styles.card}`}>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className={`${styles.loadingCard}`}>
                                <div className={`${styles.shimmer}`}></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={`${styles.card}`}>
                        {filteredData.map((dataFilter) => {
                            // console.log(`Key: ${dataFilter.id}`);
                            return (
                                <CardCampaign
                                    key={dataFilter.id}
                                    to={`detonator/campaign/${dataFilter.id}`}
                                    img={dataFilter.image_url}
                                    title={dataFilter.event_name}
                                    description={dataFilter.description}
                                    date={dataFilter.event_date}
                                    status={dataFilter.status}
                                    address={dataFilter.address}
                                />
                            );
                        })}
                    </div>
                )}



            </div >

        </>

    );
}

export default Detonator;