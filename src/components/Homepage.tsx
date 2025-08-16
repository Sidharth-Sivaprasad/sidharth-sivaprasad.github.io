import React, { useState } from "react";
import "./homepage.css";
import Coder from "./coder.tsx";
import Photographer from "./photographer.tsx";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation.tsx";
import CoderProfile from "./CoderProfile.tsx";
import Experience from "./Experience.tsx";
import Projects from "./Projects.tsx";
import { ContactCodeBlock } from "./contact.tsx";

const Homepage: React.FC = () => {
	const [profile, setProfile] = useState<"coder" | "photo">("coder");

	// Background based on selected profile
	const backgroundImage = profile === "coder" ? "/coder3.svg" : "/photo.svg";

	const frontImage = "/coder_pic.png";
	const backImage = "/photo_pic.png";

	return (
		<div className="relative ">
			<BackgroundGradientAnimation containerClassName="absolute top-0 left-0 w-screen min-h-screen z-10  " />
			<div
				className="relative w-screen min-h-screen flex flex-col bg-cover bg-center z-100"
				style={{ backgroundImage: `url(${backgroundImage})`, zIndex: 100 }}
			>
				{/* Row for icons */}
				<div className="flex space-x-8 pt-16 pl-8 md:pl-16 lg:pl-24 z-20">
					<img
						src="/dev_icon2.png"
						alt="Dev"
						className={`icon transition-transform duration-300 hover:scale-110 ${
							profile === "coder" ? "active-icon" : "inactive-icon"
						}`}
						onClick={() => setProfile("coder")}
					/>

					<img
						src="/cam_icon.png"
						alt="Cam"
						className={`icon transition-transform duration-300 hover:scale-110 ${
							profile === "photo" ? "active-icon" : "inactive-icon"
						}`}
						onClick={() => setProfile("photo")}
					/>
				</div>

				{/* Row for text with separate components */}
				<div className="flex justify-center items-center mt-20 relative">
					{/* Absolute positioning for text */}
					<div className="absolute" style={{ width: "100vw" }}>
						{profile === "coder" ? <Coder /> : <Photographer />}
					</div>

					{/* Flippable card */}
					<div className="flippableContainer">
						<div className={`flippable ${profile === "photo" ? "flip" : ""}`}>
							<div
								className="front"
								style={{ backgroundImage: `url(${frontImage})` }}
							></div>
							<div
								className="back"
								style={{ backgroundImage: `url(${backImage})` }}
							></div>
						</div>
					</div>
				</div>
			</div>
			{profile === "coder" && <CoderProfile />}
			{profile === "coder" && <Experience />}
			{profile === "coder" && <Projects />}
			{profile === "coder" && <ContactCodeBlock />}
		</div>
	);
};

export default Homepage;
