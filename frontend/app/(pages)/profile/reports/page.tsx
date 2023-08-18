'use client'
import React, { useState } from 'react';
import { PageModule } from '@/app/(pages)/PageModule';
import './issues.scss';

interface IIssue {
    id?: number;
    comment?: string;
    images?: Array<any>;
}

const Page = () => {
    const issues = [
        {
            id: '12345678',
            issue_address: 'Ленина 164',
            rating: '2.47',
            types: ['воздуx', 'зелень', 'чистота'],
            images: ['http://static.tildacdn.com/tild3939-6535-4438-a433-316237616134/sdvsd.jpg', 'http://static.tildacdn.com/tild3939-6535-4438-a433-316237616134/sdvsd.jpg', 'http://static.tildacdn.com/tild3939-6535-4438-a433-316237616134/sdvsd.jpg'],
            comment: 'Очень давно переполнены мусорки на Ленина 164, невозможно подойти и выкинуть мусор, потому что жутко воняет, пожалуй…'
        },
        {
            id: '32321',
            issue_address: 'Какенина 231',
            rating: '2.47',
            types: ['зелень', 'чистота'],
            images: ['http://static.tildacdn.com/tild3939-6535-4438-a433-316237616134/sdvsd.jpg', 'http://static.tildacdn.com/tild3939-6535-4438-a433-316237616134/sdvsd.jpg', 'http://static.tildacdn.com/tild3939-6535-4438-a433-316237616134/sdvsd.jpg'],
            comment: 'Очень давно переполнены мусорки на Ленина 164, невозможно подойти и выкинуть мусор, потому что жутко воняет, пожалуй…'
        }
    ]

    const [activeIssue, setActiveIssue] = useState<any>(null);
    const [sendPopup, setSendPopup] = useState(false);
    const [selectedTag, setTag] = useState(0);

    const cancelTicket = () => {
        console.log('удаляем заявку');
    };

    return (
        <PageModule>
            <div className="panel">
                <div className="mobile-wrapper">
                    <h1 className="title">Жалобы</h1>
                    <div className="issues-container">
                        {issues.map((issue, key) => (
                            <div
                                key={key}
                                className={`issue ${activeIssue?.id === issue.id ? 'active' : ''}`}
                            >
                                <b className="issue-title">№ {issue.id}</b>
                                <span className="issue-address">{issue.issue_address}</span>
                                <div className="issue-types">
                                    {issue.types.map((type, typeKey) => (
                                        <span key={typeKey} className="issue_type">
                      {type}
                    </span>
                                    ))}
                                </div>
                                <p className="issue-comment">
                                    {activeIssue?.id === issue.id
                                        ? issue.comment
                                        : issue.comment.substring(0, 100)}
                                    <span
                                        onClick={() => {
                                            activeIssue?.id === issue.id
                                                ? setActiveIssue(null)
                                                : setActiveIssue(issue);
                                        }}
                                    >
                    {activeIssue?.id === issue.id ? 'скрыть' : '..ещё'}
                  </span>
                                </p>
                                <div className="issue-images">
                                    {issue.images.map((image, imageKey) => (
                                        <img key={imageKey} src={image} alt="" />
                                    ))}
                                </div>
                                <div className="issue-buttons">
                                    <button onClick={() => setSendPopup(true)}>Отправить</button>
                                    <button>Отклонить</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`popup ${sendPopup ? 'active' : ''}`}>
                <div className="popup-panel">
                    <span>Выберите степень сложности заявки</span>
                    <div className="cleaners">
                        <b className={`${selectedTag <= 3 ? 'selected' : ''}`}>Экостражи</b>
                        <div className="tags">
                            <p
                                className={`${selectedTag === 1 ? 'selected' : ''}`}
                                onClick={() => setTag(1)}
                            >
                                легкая
                            </p>
                            <p
                                className={`${selectedTag === 2 ? 'selected' : ''}`}
                                onClick={() => setTag(2)}
                            >
                                средняя
                            </p>
                            <p
                                className={`${selectedTag === 3 ? 'selected' : ''}`}
                                onClick={() => setTag(3)}
                            >
                                тяжелая
                            </p>
                        </div>
                    </div>
                    <div className="organizations">
                        <b className={`${selectedTag === 4 ? 'selected' : ''}`} onClick={() => setTag(4)}>
                            Ответственные организации
                        </b>
                    </div>
                    <button onClick={() => setSendPopup(false)}>Отправить</button>
                </div>
            </div>
        </PageModule>
    );
};

export default Page;
