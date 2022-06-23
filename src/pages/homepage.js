import React from 'react';
import Emailer from '../configration/email_sender';
import Navbar from '../components/navbar';
import Comp from '../components/c1';
import Footer from '../components/Footer';

import LabCard from '../components/LabCard';
import Team from '../components/Team';
export default function homepage() {
    return (
        <>
        {/* <Comp/> */}
        {/* <Navbar/> */}
        <LabCard />
        <Footer />
        {/* <Team /> */}
        </>
    );
}