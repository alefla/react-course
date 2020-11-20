import React from 'react';
import CourseContainer from "./CourseContainer";

function Color () {
   const [isOn, setLight] = React.useState(true);
   const luminosity = isOn ? "light" : "dark";

   return (
      <div className={`Color ${luminosity}`}>
         <div className="container">
            {isOn ? 'Light Theme':'Dark Theme'}
            <br />
            <button className="themeBtn" onClick={() => setLight(!isOn)}>Color Theme</button>
            <CourseContainer />
         </div>
      </div>
   );
}
export default Color;