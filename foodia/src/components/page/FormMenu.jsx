// src/components/page/FormMenu.jsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { StepOne, StepThree, StepTwo } from '../FormCampaing/StepMenu';


const FormMenu = () => {
    const router = useRouter();
    const { step } = router.query;
    const [stepNumber, setStepNumber] = useState(1);
    const [Menu, setMenu] = useState(null);

    useEffect(() => {
        setStepNumber(parseInt(step) || 1);
    }, [router.query.step]);

    useEffect(() => {
        console.log('Registrasi Detonator:', Menu);
    }, [Menu]);

    let stepComponent;
    let setTitle;


    return (
        <div className="container mx-auto mt-24 bg-white h-screen text-primary">
            {/* ... (your existing code) */}
            <div className="grid justify-items-center w-full">
                <StepOne setMenu={setMenu} Menu={Menu} />
            </div>
        </div>
    );
};

export default FormMenu;
