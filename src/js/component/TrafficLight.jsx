//Import React
import React, { useState } from "react";

//Components
const TrafficLight = () => {
	//Hooks
	const [color, setColor] = useState("");
	//Whenever a light is clicked, the setColor function is called and adds the class "light on"
	return (
		<>
			<div className="back">
				<div
					onClick={() => setColor("red")}
					className={
						"light red" + (color === "red" ? " light-on" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light yellow" + (color === "yellow" ? " light-on" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green" + (color === "green" ? " light-on" : "")
					}></div>
			</div>
			<div className="stick"></div>
		</>
	);
};

export default TrafficLight;
