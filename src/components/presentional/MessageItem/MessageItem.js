import React from 'react';
import {timeStampToDate} from '../../../utilites/timeStampToDate';

export default function MessageItem(props) {
    const item = props.message;
    const time = timeStampToDate(item.sendAt);
    let classList = "message";
    classList += props.ownmessage ? " goright" : "";
    return (
        
    <div className={classList} key={item.id}>
            <p className="content">
                {item.message}
            </p>
            {
                item.image && 
                <img src={item.image} alt="message content"/>
            }
            <p className="info">
                by {item.uid}<br />
                at {time.month} / {time.day} / {time.year} {time.hour} : {time.minute}
            </p>
        </div>
    )
}