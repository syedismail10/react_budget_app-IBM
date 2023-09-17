import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const {currency} = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Currency {currency}{
      <select className="Location" onChange={event=>changeCurrency(event.target.value)}>Currency {currency}
        <option disabled selected> {currency} </option>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
        </select>	
      }	
    </div>
    );
};

export default Currency;