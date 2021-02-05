import React from 'react';
import Card from '../../componets/card/Card'
import Css from './main.module.css'
const MainPage = () =>{
    const arr = [
        {
            pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4wbr567CQqwnkmbVTuUqVaPtIXbcGvaGGA&usqp=CAU',
            price: '1500',
            name: 'T-shirt'
        }
    ]
    return (
        <div className={`${Css.wrapper}`}>
        {
            arr.map( (item) => <Card name={item.name} pic={item.pic} price={888}/>)
        }
        </div>
    );
}


export default MainPage;