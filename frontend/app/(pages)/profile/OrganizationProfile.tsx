import React from 'react';
import {useRouter} from "next/navigation";
import { IUserDetails } from '@/redux/Features/user/user';

const OrganizationProfile = ({user}: {user: IUserDetails}) => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/profile/reports',  )
    }
    return (
        <>
            <div className="personally_input">
                <div className="personally_input-input">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_324_2296)">
                            <path d="M11.5167 10.5262L9.282 9.96742L9.09183 9.20675C9.68975 8.61467 10.0992 7.8015 10.2206 6.96733C10.5519 6.874 10.8086 6.58992 10.8529 6.2335L10.9987 5.06683C11.0297 4.82067 10.9538 4.57158 10.7905 4.38492C10.6948 4.27525 10.5741 4.19242 10.4405 4.14167L10.4942 3.04325L10.7123 2.8245C11.0407 2.47508 11.3132 1.876 10.7438 1.00683C10.3063 0.338917 9.56317 0 8.53417 0C8.12817 0 7.19367 -6.95387e-08 6.32333 0.5845C3.83833 0.636417 3.5 1.79083 3.5 2.91667C3.5 3.17858 3.56358 3.76833 3.60558 4.12417C3.45567 4.17142 3.31975 4.25892 3.21358 4.37967C3.04733 4.56808 2.97033 4.81833 3.00125 5.06742L3.14708 6.23408C3.19492 6.61442 3.48367 6.91367 3.84883 6.98483C3.96958 7.78692 4.35808 8.57383 4.92158 9.156L4.71858 9.96858L2.48383 10.5274C1.02083 10.892 0 12.1998 0 13.7083C0 13.8693 0.130667 14 0.291667 14H13.7083C13.8693 14 14 13.8682 14 13.7072C14 12.1998 12.9792 10.892 11.5167 10.5262Z" fill="#666666"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_324_2296">
                                <rect width="14" height="14" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <input type="text" disabled={true}
                           placeholder={user.username}/>
                </div>
                <div className="personally_input-input">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5417 2.33337H1.45833C0.6545 2.33337 0 2.98787 0 3.79171V10.2084C0 11.0122 0.6545 11.6667 1.45833 11.6667H12.5417C13.3455 11.6667 14 11.0122 14 10.2084V3.79171C14 2.98787 13.3455 2.33337 12.5417 2.33337ZM5.145 7.51571L1.645 10.4324C1.59075 10.4779 1.52425 10.5 1.45833 10.5C1.37433 10.5 1.2915 10.4645 1.23375 10.395C1.1305 10.2714 1.14742 10.087 1.27108 9.98379L4.77108 7.06712C4.89475 6.96446 5.07908 6.98137 5.18233 7.10446C5.28558 7.22871 5.26867 7.41304 5.145 7.51571ZM7 7.59329C6.67917 7.59329 6.35775 7.49762 6.07775 7.30571L1.29383 4.03262C1.16083 3.94162 1.127 3.76021 1.21742 3.62721C1.30783 3.49421 1.48925 3.45979 1.62283 3.55137L6.40675 6.82446C6.76667 7.07062 7.23217 7.07062 7.59267 6.82446L12.3766 3.55137C12.5102 3.46096 12.6916 3.49421 12.782 3.62721C12.873 3.76021 12.8392 3.94162 12.7062 4.03262L7.92225 7.30571C7.64225 7.49762 7.32083 7.59329 7 7.59329ZM12.7657 10.395C12.7079 10.4645 12.6251 10.5 12.5417 10.5C12.4757 10.5 12.4098 10.4779 12.355 10.4324L8.855 7.51571C8.73133 7.41246 8.71442 7.22871 8.81767 7.10446C8.92092 6.98137 9.10467 6.96446 9.22892 7.06712L12.7289 9.98379C12.852 10.087 12.8689 10.2714 12.7657 10.395Z" fill="#666666"/>
                    </svg>

                    <input type="text" disabled={true}
                           placeholder={'leaveyt@mail.ru'}/>
                </div>
                <div className="personally_input-input">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8947 14.2179C17.0312 14.2179 16.1853 14.0831 15.3836 13.8185C14.9989 13.6844 14.5266 13.806 14.2908 14.0499L12.7015 15.2502C10.8778 14.2768 9.71063 13.1104 8.75053 11.3L9.91842 9.74821C10.2124 9.45421 10.3178 9.02389 10.1918 8.62084C9.92505 7.814 9.78947 6.96737 9.78947 6.10526C9.78947 5.49589 9.29358 5 8.68421 5H6.10526C5.49589 5 5 5.49589 5 6.10526C5 13.2151 10.7849 19 17.8947 19C18.5041 19 19 18.5041 19 17.8947V15.3232C19 14.7138 18.5041 14.2179 17.8947 14.2179Z" fill="#666666"/>
                    </svg>

                    <input type="text" disabled={true}
                           placeholder={"+79530063082"}/>
                </div>
                <div className="personally_input-input">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8595 6.44406L7.6972 0.281729C7.32244 -0.0936181 6.66675 -0.0942009 6.29082 0.281729L0.0853536 6.48719C0.00200798 6.57054 -0.023054 6.69585 0.0224073 6.80484C0.0672857 6.91383 0.173945 6.98493 0.291678 6.98493H1.16593V13.6876C1.16593 13.8484 1.29649 13.979 1.45735 13.979H4.95437C5.11523 13.979 5.24579 13.8484 5.24579 13.6876V8.73344H8.74281V13.6876C8.74281 13.8484 8.87337 13.979 9.03423 13.979H12.5312C12.6921 13.979 12.8227 13.8484 12.8227 13.6876V6.98435H13.7028C13.8747 6.9826 14.0006 6.85613 14 6.69293C13.9994 6.58744 13.9435 6.49535 13.8595 6.44406Z" fill="#666666"/>
                    </svg>

                    <input type="text" disabled={true}
                           placeholder={"ЖБИ"}/>
                </div>
                <div className="personally_input-input">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5167 10.5262L9.282 9.96742L9.09183 9.20675C9.68975 8.61467 10.0992 7.8015 10.2206 6.96733C10.5519 6.874 10.8086 6.58992 10.8529 6.2335L10.9987 5.06683C11.0297 4.82067 10.9538 4.57158 10.7905 4.38492C10.6948 4.27525 10.5741 4.19242 10.4405 4.14167L10.4942 3.04325L10.7123 2.8245C11.0407 2.47508 11.3132 1.876 10.7438 1.00683C10.3063 0.338917 9.56317 0 8.53417 0C8.12817 0 7.19367 -6.95387e-08 6.32333 0.5845C3.83833 0.636417 3.5 1.79083 3.5 2.91667C3.5 3.17858 3.56358 3.76833 3.60558 4.12417C3.45567 4.17142 3.31975 4.25892 3.21358 4.37967C3.04733 4.56808 2.97033 4.81833 3.00125 5.06742L3.14708 6.23408C3.19492 6.61442 3.48367 6.91367 3.84883 6.98483C3.96958 7.78692 4.35808 8.57383 4.92158 9.156L4.71858 9.96858L2.48383 10.5274C1.02083 10.892 0 12.1998 0 13.7083C0 13.8693 0.130667 14 0.291667 14H13.7083C13.8693 14 14 13.8682 14 13.7072C14 12.1998 12.9792 10.892 11.5167 10.5262Z" fill="#666666"/>
                    </svg>

                    <input type="text" disabled={true}
                           placeholder={"Квартальный"}/>
                </div>

            </div>
            <div className="issues_buttons">
                <button onClick={ handleClick }>Жалобы <span className='button-notify'>3</span></button>
                <button>Открытые заявки</button>
                <button>Закрытые заявки</button>
            </div>
        </>
    );
};

export default OrganizationProfile;