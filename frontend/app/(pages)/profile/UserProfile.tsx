import { IUserDetails } from '@/redux/Features/user/user';
import React from 'react';

const UserProfile = ({ user }:{user: IUserDetails}) => {
    return (
        <>
            <div className="personally_input">
                <b>Имя</b>
                <div className="personally_input-input">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_316_3176)">
                            <path
                                d="M11.5167 10.5262L9.282 9.96742L9.09183 9.20675C9.68975 8.61467 10.0992 7.8015 10.2206 6.96733C10.5519 6.874 10.8086 6.58992 10.8529 6.2335L10.9987 5.06683C11.0297 4.82067 10.9538 4.57158 10.7905 4.38492C10.6948 4.27525 10.5741 4.19242 10.4405 4.14167L10.4942 3.04325L10.7123 2.8245C11.0407 2.47508 11.3132 1.876 10.7438 1.00683C10.3063 0.338917 9.56317 0 8.53417 0C8.12817 0 7.19367 -6.95387e-08 6.32333 0.5845C3.83833 0.636417 3.5 1.79083 3.5 2.91667C3.5 3.17858 3.56358 3.76833 3.60558 4.12417C3.45567 4.17142 3.31975 4.25892 3.21358 4.37967C3.04733 4.56808 2.97033 4.81833 3.00125 5.06742L3.14708 6.23408C3.19492 6.61442 3.48367 6.91367 3.84883 6.98483C3.96958 7.78692 4.35808 8.57383 4.92158 9.156L4.71858 9.96858L2.48383 10.5274C1.02083 10.892 0 12.1998 0 13.7083C0 13.8693 0.130667 14 0.291667 14H13.7083C13.8693 14 14 13.8682 14 13.7072C14 12.1998 12.9792 10.892 11.5167 10.5262Z"
                                fill="#666666"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_316_3176">
                                <rect width="14" height="14" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <input type="text" disabled={true}
                           placeholder={user.username}/>
                </div>
            </div>
            <div className="ratings">
                <b>Рейтинг</b>
                <div className="ratings_wrapper">
                    <div className="user-rating">
                        <p>У вас отличный рейтинг!</p>
                        <div>{user.raiting}<span>/10</span></div>
                    </div>
                    <div className="user-rating eco-balance">
                        <p>Eco-баллы</p>
                        <div>{user.eco_scores}
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.72917 6.25C2.96979 6.25 0 5.59792 0 4.16667C0 2.73542 2.96979 2.08333 5.72917 2.08333C8.48854 2.08333 11.4583 2.73542 11.4583 4.16667C11.4583 5.59792 8.48854 6.25 5.72917 6.25ZM5.72917 3.125C2.68125 3.125 1.11979 3.88542 1.04062 4.17396C1.11979 4.44792 2.68125 5.20833 5.72917 5.20833C8.77708 5.20833 10.3385 4.44792 10.4177 4.15937C10.3385 3.88542 8.77708 3.125 5.72917 3.125Z"
                                    fill="#3FA353"/>
                                <path
                                    d="M5.72917 8.33333C2.96979 8.33333 0 7.68125 0 6.25V4.16667C0 3.87917 0.233333 3.64583 0.520833 3.64583C0.808333 3.64583 1.04167 3.87917 1.04167 4.16667V6.25C1.11979 6.53125 2.68125 7.29167 5.72917 7.29167C8.77708 7.29167 10.3385 6.53125 10.4177 6.24271L10.4167 4.16667C10.4167 3.87917 10.65 3.64583 10.9375 3.64583C11.225 3.64583 11.4583 3.87917 11.4583 4.16667V6.25C11.4583 7.68125 8.48854 8.33333 5.72917 8.33333Z"
                                    fill="#3FA353"/>
                                <path
                                    d="M5.72917 10.4167C2.96979 10.4167 0 9.76458 0 8.33333V6.25C0 5.9625 0.233333 5.72916 0.520833 5.72916C0.808333 5.72916 1.04167 5.9625 1.04167 6.25V8.33333C1.11979 8.61458 2.68125 9.375 5.72917 9.375C8.77708 9.375 10.3385 8.61458 10.4177 8.32604L10.4167 6.25C10.4167 5.9625 10.65 5.72916 10.9375 5.72916C11.225 5.72916 11.4583 5.9625 11.4583 6.25V8.33333C11.4583 9.76458 8.48854 10.4167 5.72917 10.4167Z"
                                    fill="#3FA353"/>
                                <path
                                    d="M19.2707 16.6667C16.5113 16.6667 13.5415 16.0146 13.5415 14.5833C13.5415 13.1521 16.5113 12.5 19.2707 12.5C22.03 12.5 24.9998 13.1521 24.9998 14.5833C24.9998 16.0146 22.03 16.6667 19.2707 16.6667ZM19.2707 13.5417C16.2228 13.5417 14.6613 14.3021 14.5821 14.5906C14.6613 14.8646 16.2228 15.625 19.2707 15.625C22.3186 15.625 23.88 14.8646 23.9592 14.576C23.88 14.3021 22.3186 13.5417 19.2707 13.5417Z"
                                    fill="#3FA353"/>
                                <path
                                    d="M19.2707 18.75C16.5113 18.75 13.5415 18.0979 13.5415 16.6667V14.5833C13.5415 14.2958 13.7748 14.0625 14.0623 14.0625C14.3498 14.0625 14.5832 14.2958 14.5832 14.5833V16.6667C14.6613 16.9479 16.2228 17.7083 19.2707 17.7083C22.3186 17.7083 23.88 16.9479 23.9592 16.6594L23.9582 14.5833C23.9582 14.2958 24.1915 14.0625 24.479 14.0625C24.7665 14.0625 24.9998 14.2958 24.9998 14.5833V16.6667C24.9998 18.0979 22.03 18.75 19.2707 18.75Z"
                                    fill="#3FA353"/>
                                <path
                                    d="M19.2707 20.8333C16.5113 20.8333 13.5415 20.1812 13.5415 18.75V16.6667C13.5415 16.3792 13.7748 16.1458 14.0623 16.1458C14.3498 16.1458 14.5832 16.3792 14.5832 16.6667V18.75C14.6613 19.0312 16.2228 19.7917 19.2707 19.7917C22.3186 19.7917 23.88 19.0312 23.9592 18.7427L23.9582 16.6667C23.9582 16.3792 24.1915 16.1458 24.479 16.1458C24.7665 16.1458 24.9998 16.3792 24.9998 16.6667V18.75C24.9998 20.1812 22.03 20.8333 19.2707 20.8333Z"
                                    fill="#3FA353"/>
                                <path
                                    d="M19.2707 22.9167C16.5113 22.9167 13.5415 22.2646 13.5415 20.8333V18.75C13.5415 18.4625 13.7748 18.2292 14.0623 18.2292C14.3498 18.2292 14.5832 18.4625 14.5832 18.75V20.8333C14.6613 21.1146 16.2228 21.875 19.2707 21.875C22.3186 21.875 23.88 21.1146 23.9592 20.826L23.9582 18.75C23.9582 18.4625 24.1915 18.2292 24.479 18.2292C24.7665 18.2292 24.9998 18.4625 24.9998 18.75V20.8333C24.9998 22.2646 22.03 22.9167 19.2707 22.9167Z"
                                    fill="#3FA353"/>
                                <path
                                    d="M5.72917 12.5C2.96979 12.5 0 11.8479 0 10.4167V8.33333C0 8.04583 0.233333 7.8125 0.520833 7.8125C0.808333 7.8125 1.04167 8.04583 1.04167 8.33333V10.4167C1.11979 10.6979 2.68125 11.4583 5.72917 11.4583C8.77708 11.4583 10.3385 10.6979 10.4177 10.4094L10.4167 8.33333C10.4167 8.04583 10.65 7.8125 10.9375 7.8125C11.225 7.8125 11.4583 8.04583 11.4583 8.33333V10.4167C11.4583 11.8479 8.48854 12.5 5.72917 12.5Z"
                                    fill="#3FA353"/>
                                <path
                                    d="M5.72917 14.5833C2.96979 14.5833 0 13.9312 0 12.5V10.4167C0 10.1292 0.233333 9.89583 0.520833 9.89583C0.808333 9.89583 1.04167 10.1292 1.04167 10.4167V12.5C1.11979 12.7812 2.68125 13.5417 5.72917 13.5417C8.77708 13.5417 10.3385 12.7812 10.4177 12.4927L10.4167 10.4167C10.4167 10.1292 10.65 9.89583 10.9375 9.89583C11.225 9.89583 11.4583 10.1292 11.4583 10.4167V12.5C11.4583 13.9312 8.48854 14.5833 5.72917 14.5833Z"
                                    fill="#3FA353"/>
                                <path
                                    d="M5.72917 16.6667C2.96979 16.6667 0 16.0146 0 14.5833V12.5C0 12.2125 0.233333 11.9792 0.520833 11.9792C0.808333 11.9792 1.04167 12.2125 1.04167 12.5V14.5833C1.11979 14.8646 2.68125 15.625 5.72917 15.625C8.77708 15.625 10.3385 14.8646 10.4177 14.576L10.4167 12.5C10.4167 12.2125 10.65 11.9792 10.9375 11.9792C11.225 11.9792 11.4583 12.2125 11.4583 12.5V14.5833C11.4583 16.0146 8.48854 16.6667 5.72917 16.6667Z"
                                    fill="#3FA353"/>
                                <path
                                    d="M5.72917 18.75C2.96979 18.75 0 18.0979 0 16.6667V14.5833C0 14.2958 0.233333 14.0625 0.520833 14.0625C0.808333 14.0625 1.04167 14.2958 1.04167 14.5833V16.6667C1.11979 16.9479 2.68125 17.7083 5.72917 17.7083C8.77708 17.7083 10.3385 16.9479 10.4177 16.6594L10.4167 14.5833C10.4167 14.2958 10.65 14.0625 10.9375 14.0625C11.225 14.0625 11.4583 14.2958 11.4583 14.5833V16.6667C11.4583 18.0979 8.48854 18.75 5.72917 18.75Z"
                                    fill="#3FA353"/>
                                <path
                                    d="M5.72917 20.8333C2.96979 20.8333 0 20.1812 0 18.75V16.6667C0 16.3792 0.233333 16.1458 0.520833 16.1458C0.808333 16.1458 1.04167 16.3792 1.04167 16.6667V18.75C1.11979 19.0312 2.68125 19.7917 5.72917 19.7917C8.77708 19.7917 10.3385 19.0312 10.4177 18.7427L10.4167 16.6667C10.4167 16.3792 10.65 16.1458 10.9375 16.1458C11.225 16.1458 11.4583 16.3792 11.4583 16.6667V18.75C11.4583 20.1812 8.48854 20.8333 5.72917 20.8333Z"
                                    fill="#3FA353"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;