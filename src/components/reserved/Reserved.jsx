import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState ,useContext} from "react";
import "./Reserved.css";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../components/Hooks/useFetch";
import {SearchContext} from "../../context/SearchContext"


const Reserved = ({ setOpen, hotelId }) => {
    const {dates} = useContext(SearchContext)

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
    
        const date = new Date(start.getTime());
    
        const dates = [];
    
        while (date <= end) {
          dates.push(new Date(date).getTime());
          date.setDate(date.getDate() + 1);
        }
    
        return dates;
      };
    
      const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
    
      const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
          alldates.includes(new Date(date).getTime())
        );
    
        return !isFound;
      };


  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  //   console.log(data);
  const [selectedRooms, setSelectedRooms] = useState([]);

  const handelSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

//   console.log(selectedRooms)
const handleClick =()=>{

}

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your Rooms:</span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rIteminfo">
              <div className="rTitle">{item.title}</div>
              <div className="Desc">{item.desc}</div>
              <div className="rMax">
                Max People : <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            {item.roomNumbers.map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handelSelect}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="rButton" onClick={handleClick}>Reserved Now</button>
    </div>
  );
};

export default Reserved;
