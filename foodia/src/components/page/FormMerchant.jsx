// src/components/page/FormDetonator.jsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { StepOne, StepThree, StepTwo, Stepfour } from '../FormCampaing/StepMerchant';


const FormMerchant = () => {
    const router = useRouter();
    const { step } = router.query;
    const [stepNumber, setStepNumber] = useState(1);
    const [registrasiMerchant, setRegistrasiMerchant] = useState(null);

    useEffect(() => {
        setStepNumber(parseInt(step) || 1);
    }, [router.query.step]);

    useEffect(() => {
        console.log('Registrasi Merchant:', registrasiMerchant);
    }, [registrasiMerchant]);

    let stepComponent;
    let setTitle;

    switch (stepNumber) {
        case 1:
            stepComponent = <StepOne setRegistrasiMerchant={setRegistrasiMerchant} registrasiMerchant={registrasiMerchant} />;
            setTitle = 'Register Detonator';
            break;
        case 2:
            stepComponent = <StepTwo setRegistrasiMerchant={setRegistrasiMerchant} registrasiMerchant={registrasiMerchant} />;
            setTitle = 'Identifikasi Pribadi';
            break;
        case 3:
            stepComponent = <StepThree setRegistrasiMerchant={setRegistrasiMerchant} registrasiMerchant={registrasiMerchant} />;
            setTitle = 'Konfirmasi OTP';
            break;
        case 4:
            stepComponent = <Stepfour setRegistrasiMerchant={setRegistrasiMerchant} registrasiMerchant={registrasiMerchant} />;
            setTitle = 'Konfirmasi OTP';
            break;
        // Add cases for other steps if needed
        default:
            stepComponent = <div>Invalid step value</div>;
            setTitle = 'Default Title';
            break;
    }
    // console.log('Combined Data:', registrasiMerchant);

    return (
        <div className="container mx-auto mt-24 bg-white h-screen text-primary">
            {/* ... (your existing code) */}
            <div className="grid justify-items-center w-full">
                {stepComponent}
            </div>
        </div>
    );
};

export default FormMerchant;
