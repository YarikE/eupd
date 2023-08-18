"use client"

import React, {useEffect, useState} from 'react';
import Slides from "@/app/components/Home/Slides";
import './page.scss'
import axios from "axios";
const Page = () => {

    const [selectedFilter, setFilter] = useState('')
    const [news, setNews] = useState([])
    const Questions = [
        {
            question: "Какой мусор мы принимаем",
            answer: "На карте отображаются все виды мусора. Смотрите на карте и сдавайте использованные материал."
        },
        {
            question: "Какой мусор мы принимаем",
            answer: "На карте отображаются все виды мусора. Смотрите на карте и сдавайте использованные материал."
        },
        {
            question: "Какой мусор мы принимаем",
            answer: "На карте отображаются все виды мусора. Смотрите на карте и сдавайте использованные материал."
        }
    ]

    const filters = [
        {
            view: 1,
            name: "Мероприятия"
        },
        {
            view: 2,
            name: 'Статьи'
        },
        {
            view: 3,
            name: 'Лайфхаки'
        }
    ]

    useEffect(()=> {
        const token = localStorage.getItem('token')

        axios.get('http://127.0.0.1:8000/api/news-list/', {headers: {'Authorization': `Bearer ${token}`}}).then((response) => {
            setNews(response.data)
            console.log(response)
        })
            .catch(() => {
                console.log('СВОРАЧИВАЙ ШАРМАНКУ, ЭТО ПРОД ОШИБКА')
            })
    },[])

    return (
            <div className="panel">
                <Slides/>
                    <section className="news">
                        <div className="mobile-wrapper">
                        <h2 className="subtitle">Новости</h2>
                        </div>
                        <div className="filters">
                            {
                                filters.map(({name, view}, key) => (
                                    <span onClick={()=> setFilter(name)} className={`${selectedFilter == name ? 'selected' : '' }`} key={key}>{name}</span>
                                ))
                            }
                        </div>
                    <div className="mobile-wrapper">
                        <div className="search-bar">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9147 14.5018L10.6552 10.2423C11.5396 9.26 12.0832 7.965 12.0832 6.54167C12.0832 3.48617 9.59708 1 6.54161 1C3.48614 1 1 3.48617 1 6.54167C1 9.59717 3.48614 12.0833 6.54161 12.0833C7.96493 12.0833 9.25991 11.5397 10.2422 10.6547L14.5017 14.9143C14.5589 14.9714 14.6335 15 14.7082 15C14.7829 15 14.8575 14.9714 14.9147 14.9148C15.0284 14.8005 15.0284 14.6162 14.9147 14.5018ZM6.54161 11.5C3.80755 11.5 1.58333 9.27575 1.58333 6.54167C1.58333 3.80758 3.80755 1.58333 6.54161 1.58333C9.27566 1.58333 11.4999 3.80758 11.4999 6.54167C11.4999 9.27575 9.27566 11.5 6.54161 11.5Z" fill="#999999" fillOpacity="0.9"/>
                                <path d="M15.0919 14.3255L15.0915 14.3251L10.9964 10.2299C11.8278 9.22816 12.3332 7.94473 12.3332 6.54167C12.3332 3.3481 9.73515 0.75 6.54161 0.75C3.34807 0.75 0.75 3.3481 0.75 6.54167C0.75 9.73524 3.34807 12.3333 6.54161 12.3333C7.94466 12.3333 9.2281 11.8279 10.2299 10.9959L14.3249 15.091C14.4306 15.1967 14.5696 15.25 14.7082 15.25C14.8466 15.25 14.9851 15.1969 15.0906 15.0925L15.0919 15.0912C15.3027 14.8793 15.3027 14.5374 15.0919 14.3255ZM6.54161 11.25C3.94563 11.25 1.83333 9.13768 1.83333 6.54167C1.83333 3.94565 3.94563 1.83333 6.54161 1.83333C9.13759 1.83333 11.2499 3.94565 11.2499 6.54167C11.2499 9.13768 9.13759 11.25 6.54161 11.25Z" stroke="#999999" strokeOpacity="0.9" strokeWidth="0.5"/>
                            </svg>
                        </div>
                        <div className="news-container">
                            <div className="news-card card">
                                <img src="https://екатеринбург.рф/media/rootnews/b/b/bbde3217935ecedd3382d6978bd7fc25_900x_.jpg" alt=""/>
                               <div className="card-info">
                                   <p>Анонс мероприятия • 12.08.2023</p>
                                   <b>«Чисто сработано» — субботник 12 августа</b>
                               </div>
                            </div>
                        </div>
                    </div>
                    </section>
            </div>
);
};

export default Page;