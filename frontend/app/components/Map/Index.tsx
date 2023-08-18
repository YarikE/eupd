'use client'
import React, {useRef, useEffect, useState} from 'react';
import './map.stylesheet.scss';
import {load} from '@2gis/mapgl';
import {useDispatch} from "react-redux";
import axios from "axios";
import {setMapOptions, setUserAddress} from "@/redux/Features/user/userSlice";
import {usePathname} from "next/navigation";
import GetComponentByPath from "@/app/components/Map/GetComponentByPath";
import Navigation from "@/app/components/Navigation";

const MapComponent = () => {

    const path = usePathname()
    const dispatch = useDispatch();

    const mapContainer = useRef(null);
    const [mapMove, setmapMove] = useState(false);
    const [userAddress, setUserAddressComponent] = useState(null)
    const [cordsCenter, setCordsCenter] = useState<number[]>([]);
    const mapRender = async () => {
        const mapglAPI = await load();
        const newMap = new mapglAPI.Map('container', {
            center: [60.597465, 56.838011],
            zoom: 14,
            key: 'cea7b39a-8ddd-45ed-8522-f7d935c43dc1',
            style: '5e419346-aa90-4557-befa-f00af57d1549',
            styleZoom: 14,
        });

        const handleGeolocation = (position:any) => {
            const userCoords = [position.coords.longitude, position.coords.latitude];
            newMap.setCenter(userCoords);
            newMap.setZoom(17)


            // в след раз :/
            // const userMarker = new mapglAPI.Marker({
            //     coordinates: userCoords,
            //     color: '#FF0000', // Цвет маркера
            //     size: [32, 32], // Размер маркера
            // });
            // newMap.markers.add(userMarker);
        };


        const handleGeolocationError = (error:any) => {
            if (error.code === 1) {
                console.log("Пользователь отозвал разрешение на геолокацию.");
                // Здесь вы можете выполнить какие-либо дополнительные действия или показать уведомление пользователю.
            } else {
                console.log("Ошибка геолокации:", error);
            }
        };

        // Проверяем поддержку геолокации в браузере
        if ("geolocation" in navigator) {
            // Запрашиваем геопозицию пользователя
            navigator.geolocation.getCurrentPosition(handleGeolocation, handleGeolocationError);
        } else {
            console.log("Геолокация не поддерживается в этом браузере.");
        }

        newMap.on('movestart', () => {
            setmapMove(true);
            dispatch(setMapOptions({mapMove: true}))
            setUserAddressComponent(null);
            dispatch(setUserAddress(null));
        });
        newMap.on('moveend', () => {
            setmapMove(false);
            setCordsCenter(newMap.getCenter())
            dispatch(setMapOptions({move: false, center: newMap.getCenter()}))
            axios.get(`https://catalog.api.2gis.com/3.0/items?point=${newMap.getCenter()[0]}%2C${newMap.getCenter()[1]}&radius=1000&key=cea7b39a-8ddd-45ed-8522-f7d935c43dc1`).then(response => {
                const userAddressByRadius = response.data.result.items.find((item: any) => item.hasOwnProperty('address_name'));
                dispatch(setUserAddress(userAddressByRadius));
                setUserAddressComponent(userAddressByRadius?.address_name);
            });
        });
    };

    useEffect(() => {
        console.log('call func: [mapRender]');
        mapRender();
    }, []);

    return (
        <div>
            <div id='container' className='map-container' ref={mapContainer}></div>
            <GetComponentByPath path={path} props={{mapMove, userAddress, cordsCenter}}/>
            {
                !path.includes("/auth") ? <Navigation/> : null
            }
        </div>
    );
};

export default MapComponent;