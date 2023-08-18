'use client'
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setUserAddress} from "@/redux/Features/user/userSlice";
import {useRouter} from "next/navigation";
import {PageModule} from "@/app/(auth)/geo-settings/page.module";
import {AppDispatch, RootState} from "@/redux/store";


interface Address {
    building_name?: string;
    address_name?: string;
    // другие поля, если есть
}


const Page = () => {
    const dispatch: AppDispatch = useDispatch()
    const userAddress = useSelector((state: RootState) => state.user.userAddress) as unknown as Address;
    const [inputAddress, setInputAddress] = useState('');
    const [showWrite, setShowWrite] = useState(false)
    const [searchResults, setSearchResults] = useState<Address[]>([]);
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
    const offersByAddress = useRef<HTMLDivElement | null>(null)
    let offersScroll = false;

    function setOffersScroll(value:boolean) {
        offersScroll = value
    }

    const panel = useRef<HTMLDivElement | null>(null);
    const addressContent = useRef<HTMLDivElement | null>(null);
    let startY = 0;
    let startTranslateY = 0;
    let lastTouchMoveTimestamp = 0;
    const minTouchMoveInterval = 16; // Приблизительно 60 FPS (1000ms / 60)

    function handleOffersScroll(value:boolean) {
        setOffersScroll(value)
    }

    const handleTouchStartOnOffers = () => {
        handleOffersScroll(true);
    };
    const handleTouchEndOnOffers = () => {
        handleOffersScroll(false);
    };

    useEffect(() => {
        if (offersByAddress.current) {
            offersByAddress.current.addEventListener('touchstart', handleTouchStartOnOffers);
            offersByAddress.current.addEventListener('touchmove', handleTouchStartOnOffers);
            offersByAddress.current.addEventListener('touchend', handleTouchEndOnOffers);
        }


        if (panel.current) {
            panel.current.addEventListener('touchstart', handleTouchStart);
            panel.current.addEventListener('touchmove', handleTouchMove);
            panel.current.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            if (offersByAddress.current) {
                offersByAddress.current.removeEventListener('touchmove', handleTouchStartOnOffers);
                offersByAddress.current.removeEventListener('touchstart', handleTouchStartOnOffers);
                offersByAddress.current.removeEventListener('touchend', handleTouchEndOnOffers);
            }
            if (panel.current) {
                panel.current.removeEventListener('touchstart', handleTouchStart);
                panel.current.removeEventListener('touchmove', handleTouchMove);
                panel.current.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, []);
    const handleTouchStart = (event: any) => {
        startY = event.touches[0].clientY;
        startTranslateY = getTranslateY();
    };
    const handleTouchMove = (event: any) => {
        if (offersScroll) {
            return console.log('STOPPING ADDRESS TRANSFORM')
        }

        const currentY = event.touches[0].clientY;
        const deltaY = currentY - startY;
        const translateValue = startTranslateY + deltaY;

        // Проверяем, прошло ли достаточно времени с последнего вызова функции
        const now = Date.now();
        if (now - lastTouchMoveTimestamp > minTouchMoveInterval) {
            // Ограничиваем перемещение, чтобы не ушло выше или ниже определенной границы
            const minTranslateY = 0;
            const maxTranslateY = addressContent.current?.clientHeight || 0;
            if (translateValue >= minTranslateY && translateValue <= maxTranslateY) {
                setTranslateY(translateValue);
            }
            lastTouchMoveTimestamp = now;
        }
    };
    const handleTouchEnd = () => {
        if (offersScroll) {
            return false
        }
        const translateY = getTranslateY();
        const threshold = 100;
        if (translateY >= threshold) {
            setShowWrite(false);
        } else {
            setShowWrite(true);
        }
        clearTranslateY();
    };
    const getTranslateY = () => {
        if (addressContent.current) {
            const transformString = window.getComputedStyle(addressContent.current).transform;
            const matrix = new DOMMatrix(transformString);
            return matrix.m42;
        }
        return 0;
    };
    const setTranslateY = (value:number | string) => {
        if (offersScroll) {
            return false
        }
        if (addressContent.current) {
            addressContent.current.style.transform = `translateY(${value}px)`;
        }
    };
    const clearTranslateY = () => {
        if (addressContent.current) {
            addressContent.current?.classList.add('animate-transition');
            addressContent.current.style.transform = '';

            setTimeout(() => {
                addressContent.current?.classList.remove('animate-transition');
            }, 300);
        }
    };
    const inputAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setInputAddress(value);
    };
    useEffect(() => {
        // Создаем таймер для выполнения запроса через 500 миллисекунд после окончания ввода
        const delay = 500;
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        if (inputAddress.trim() !== '') {
            setTypingTimeout(setTimeout(() => {
                fetchSearchResults(inputAddress);
            }, delay));
        } else {
            setSearchResults([]);
        }
        // return () => clearTimeout(typingTimeout);
    }, [inputAddress]);
    const fetchSearchResults = (value:string) => {
        axios
            .get(`https://catalog.api.2gis.com/3.0/items?q=Екатеринбург ${value}&key=cea7b39a-8ddd-45ed-8522-f7d935c43dc1`)
            .then((response) => {
                const AddressesArray = response.data.result.items.filter((item:object) => item.hasOwnProperty('address_name'));
                setSearchResults(AddressesArray);
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
            });
    };
    const [selectedFromSearch, setSelected] = useState(null)
    const handleNewAddress = (address: any) => {
        setSelected(address)
        setInputAddress(address.address_name)
    }
    const router = useRouter()
    const handleStateUserAddress = () => {
        dispatch(setUserAddress(selectedFromSearch))
        router.push('/auth-forms')
    }

    return (

        <PageModule>
            <div className="hud-top">
                <p>Давайте найдем ваш дом</p>
                <b> {userAddress && userAddress.address_name ? userAddress.address_name : 'Определяем..'}</b>
            </div>
            <div className="hud-bottom">
                <button disabled={!userAddress?.address_name} onClick={() => router.push('/auth-forms')}>Далее</button>
                <p>или <span onClick={() => setShowWrite(true)}>уточните адрес вручную</span></p>
            </div>
            <div ref={panel}
                 className={`write-panel ${showWrite ? 'show' : 'hidden'}`}>
                <div className="backdrop" onClick={() => setShowWrite(false)}></div>
                <div className="address-content" ref={addressContent}>
                    <div className="mobile-wrapper">
                        <b>Укажите ваш адрес проживания</b>
                        <div className="address-input input">
                            <div className="input-inner">
                                <input type="text" placeholder='Ваш адрес' value={inputAddress}
                                       onChange={inputAddressHandler}/>
                            </div>
                            <div ref={offersByAddress}
                                 className={`input-offers ${!searchResults.length && !selectedFromSearch ? 'hidden' : 'show'}`}>
                                {
                                    searchResults.map((address: Address, key: number) => (
                                        <div onClick={() => handleNewAddress(address)} key={key} className='offer'>
                                            <span> {address.address_name} </span>
                                            <p> {address.building_name} </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="panel-buttons">
                            <button disabled={selectedFromSearch === null} onClick={handleStateUserAddress}>Это мой
                                адрес
                            </button>
                            <p onClick={() => setShowWrite(false)}>Уточнить адрес на карте</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageModule>
    );
};

export default Page;