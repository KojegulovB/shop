import React from 'react';
import classes from './card.module.css'

const Card = () => {
    return (
      <div className={`${classes.wrapper}`}>
          <div className={`${classes.img_wrapper}`}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4wbr567CQqwnkmbVTuUqVaPtIXbcGvaGGA&usqp=CAU' width='200px'height='200px'/>
                  <span>3750 сом</span>
          </div>
          <div className={`${classes.name_wrapper}`}>
              <div>Dress</div>
              <div>stars</div>
          </div>
      </div>
    );
}

export default Card;