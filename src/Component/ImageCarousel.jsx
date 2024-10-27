import React, {useState, useEffect, useRef} from 'react';
import './ImageCarousel.scss';

function ImageCarousel() {
    const listImages = [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2024/Jupiter24/HI_Rec_UnReC_P3_A_A_3000X1200._CB543431881_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jupiter/P3B/D168822977_3A_PC_Hero_3000x1200._CB543543692_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/Jupiter/2024/Phase3/D168227194_IN_WLD_Jupiter_Redmi13C_5G_P3_PC_Hero_3000x1200_Lifestyle._CB545117337_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter24/J24_P3B_GW_PC_EventHero_NTA_2x_V2._CB543524088_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/Alphonsa/GW/Hero/Phase3B/Urec_2x_bs._CB543453867_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Madhav/jupiter24/Iphone/P3/41749/3B/3A_3B_PC_Hero_3000x1200_3._CB543505534_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Deeksha/Jup24/PC_Hero_3000x1200_Lifestyle_13b._CB543666086_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PCA/GW/Jupiter/D171960208_3B_PC_Hero_3000x1200._CB544116408_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/riya/iQOOZ9sGWPEA/D161464075_WLD_iQOO-Z9-Lite_Jupiter_phase_PC_Hero_3000x1200_2._CB562509811_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2024/Jupiter/GW/Hero/Phase3b/PC/78356._CB543529869_.jpg"
    ]
    const [currentIdx, setCurrentIdx] = useState(0);
    const carouselIntervalRef = useRef(null);
    useEffect(() => 
    {
        const intervalRef = setInterval(handleNextClick, 1000);
        carouselIntervalRef.current = intervalRef;
        return () => clearInterval(carouselIntervalRef.current);
    }, [])
    const handleNextClick = () => 
    {
        setCurrentIdx(prev => (prev + 1) % listImages.length);
    }
    const handlePrevClick = () => 
    {
        if (currentIdx === 0)
        {
            setCurrentIdx(listImages.length - 1);
        }
        else setCurrentIdx(prev => (prev - 1));
    }
    const handleCarouselHover = () => 
    {
        clearInterval(carouselIntervalRef.current);
        carouselIntervalRef.current = null;
    }
    const handleCarouselLeave = () => 
    {
        const intervalRef = setInterval(handleNextClick,1000);
        carouselIntervalRef.current = intervalRef;
    }

    return (
        <div className='container'>

            <img 
            src={listImages[currentIdx]} 
            onMouseEnter={() => handleCarouselHover()}
            onMouseLeave={() => handleCarouselLeave()}
            alt="" />
            <div 
            className="left-nav-icon"
            onClick={() => handlePrevClick()}
            >
                <svg className='left-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            </div>
            <div 
            className="right-nav-icon"
            onClick={() => handleNextClick()}
            >
                <svg className='right-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </div>
        </div>
    )
}

export default ImageCarousel;

