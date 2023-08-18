import React from 'react';

const Review = ({stars, setStars, features, selectedGoodFeatures, setGoodFeatures, selectedBadFeatures, setBadFeatures}
    :{
        stars: any,
        setStars: any,
        features: any,
        selectedGoodFeatures: any,
        setGoodFeatures: any,
        selectedBadFeatures: any,
        setBadFeatures: any
    }
    ) => {
    return (
        <>
            <h1 className="title">Дайте оценку этого места </h1>
            <div className="stars">
                {
                    Array.from({length: 5}, (_, key) => (
                        <svg
                            onClick={() => setStars(key)}
                            key={key} width="54" height="54" viewBox="0 0 54 54"
                            fill={stars >= key ? '#13902C' : '#c7c7c7'}
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23.1914 16.2448C24.636 12.6433 25.3584 10.8425 26.5319 10.5929C26.8405 10.5273 27.1594 10.5273 27.468 10.5929C28.6415 10.8425 29.3639 12.6433 30.8085 16.2448C31.6301 18.2929 32.0409 19.317 32.8095 20.0135C33.0251 20.2089 33.2591 20.3829 33.5083 20.5331C34.3967 21.0685 35.5057 21.1679 37.7237 21.3665C41.4784 21.7028 43.3558 21.8709 43.9291 22.9413C44.0478 23.163 44.1286 23.403 44.1679 23.6514C44.358 24.8507 42.9778 26.1064 40.2176 28.6176L39.4511 29.315C38.1606 30.4891 37.5153 31.0761 37.1421 31.8087C36.9182 32.2482 36.7681 32.7215 36.6978 33.2096C36.5805 34.0234 36.7695 34.875 37.1474 36.5782L37.2824 37.1868C37.9601 40.2412 38.2989 41.7685 37.876 42.5191C37.496 43.1934 36.7962 43.6251 36.0231 43.662C35.1624 43.7032 33.9497 42.715 31.5242 40.7386C29.9262 39.4365 29.1273 38.7854 28.2403 38.5311C27.4297 38.2987 26.5702 38.2987 25.7596 38.5311C24.8726 38.7854 24.0737 39.4365 22.4757 40.7386C20.0502 42.715 18.8375 43.7032 17.9769 43.662C17.2038 43.6251 16.5039 43.1934 16.124 42.5191C15.701 41.7685 16.0398 40.2412 16.7175 37.1868L16.8525 36.5782C17.2304 34.875 17.4194 34.0234 17.3021 33.2096C17.2318 32.7215 17.0817 32.2482 16.8578 31.8087C16.4846 31.0761 15.8393 30.4891 14.5489 29.315L13.7823 28.6176C11.0221 26.1064 9.64193 24.8507 9.83199 23.6514C9.87136 23.403 9.95209 23.163 10.0708 22.9413C10.6441 21.8709 12.5215 21.7028 16.2762 21.3665C18.4942 21.1679 19.6032 21.0685 20.4916 20.5331C20.7408 20.3829 20.9748 20.2089 21.1904 20.0135C21.959 19.317 22.3698 18.2929 23.1914 16.2448Z"
                                stroke="none" strokeWidth="2"/>
                        </svg>
                    ))
                }
            </div>
            {/*{*/}
            {/*    stars > -1 ? : null*/}
            {/*}*/}
            <div className={`review-wrapper questions  ${stars > -1 ? 'open-wrapper' : ''} `}>
                <p className='main-title'>Выберите пункты, которые вам понравились</p>
                <ul>
                    {
                        features.map(({svg, text}: any, key:number) => (
                            <li className={`${selectedGoodFeatures.includes(text) ? 'selected' : ''}`}
                                key={key}
                                onClick={() => {
                                    selectedGoodFeatures.includes(text) ? setGoodFeatures(selectedGoodFeatures.filter((img: string) => img != text)) : setGoodFeatures([...selectedGoodFeatures, text])
                                }}>
                                {svg}
                                <p style={{color: selectedGoodFeatures.includes(text) ? '#13902C' : "#0D0D0D"}}>{text}</p>
                            </li>

                        ))
                    }
                </ul>
                <ul className={`not  ${stars !== 4 && stars !== -1 ? 'show' : ''}`}>
                    <p className='main-title'>Выберите пункты,
                        которые испортили вам впечатление</p>
                    {
                        features.map(({svg, text}: any, key:number) => (
                            <li className={`${selectedBadFeatures.includes(text) ? 'selected' : ''}`}
                                key={key}
                                onClick={() => setBadFeatures([...selectedBadFeatures, text])}>
                                {svg}
                                <p style={{color: selectedBadFeatures.includes(text) ? '#E82100' : "#0D0D0D"}}>{text}</p>
                            </li>

                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default Review;