import React, { useState } from "react";
import "./homepage.css";
import Coder from "./coder.tsx";
import Photographer from "./photographer.tsx";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation.tsx";
import CoderProfile from "./CoderProfile.tsx";
import Experience from "./Experience.tsx";
import Projects from "./Projects.tsx";
import { ContactCodeBlock } from "./contact.tsx";
import { ThreeDMarquee } from "./ui/3d-marquee.tsx";

const Homepage: React.FC = () => {
	const images = [
		"./photo_webp/1.webp",
		"./photo_webp/2.webp",
		"./photo_webp/3.webp",
		"./photo_webp/4.webp",
		"./photo_webp/6.webp",
		"./photo_webp/7.webp",
		"./photo_webp/8.webp",
		"./photo_webp/9.webp",
		"./photo_webp/10.webp",
		"./photo_webp/11.webp",
		"./photo_webp/12.webp",
		"./photo_webp/13.webp",
		"./photo_webp/14.webp",
		"./photo_webp/15.webp",
		"./photo_webp/16.webp",
		"./photo_webp/17.webp",
		"./photo_webp/18.webp",
		"./photo_webp/19.webp",
		"./photo_webp/20.webp",
		"./photo_webp/21.webp",
		"./photo_webp/22.webp",
		"./photo_webp/23.webp",
		"./photo_webp/24.webp",
		"./photo_webp/25.webp",
		"./photo_webp/26.webp",
		"./photo_webp/27.webp",
		"./photo_webp/28.webp",
		"./photo_webp/29.webp",
		"./photo_webp/30.webp",
		"./photo_webp/31.webp",
		"./photo_webp/32.webp",
	];
	const [profile, setProfile] = useState<"coder" | "photo">("coder");

	// Background based on selected profile
	const backgroundImage = profile === "coder" ? "./coder3.svg" : "./photo.svg";

	const frontImage = "./coder_pic.png";
	const backImage = "./photo_pic.png";

	return (
		<div className="relative ">
			{profile == "coder" ? (
				<BackgroundGradientAnimation containerClassName="absolute top-0 left-0 w-screen min-h-screen z-10  " />
			) : (
				<div className=" absolute top-0 left-0 w-full bg-black p-2 ring-1 ring-neutral-700/10 dark:bg-black">
					<ThreeDMarquee images={images} />
				</div>
			)}{" "}
			<div
				className="relative w-screen min-h-screen flex flex-col bg-cover bg-center z-100"
				style={{ backgroundImage: `url(${backgroundImage})`, zIndex: 100 }}
			>
				{/* Row for icons */}
				<div className="flex space-x-8 pt-16 pl-8 md:pl-16 lg:pl-24 z-20">
					<img
						src="./dev_icon2.png"
						alt="Dev"
						className={`icon transition-transform duration-300 hover:scale-110 ${
							profile === "coder" ? "active-icon" : "inactive-icon"
						}`}
						onClick={() => setProfile("coder")}
					/>

					<img
						src="./cam_icon.png"
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
			{profile === "coder" ? (
				<ContactCodeBlock />
			) : (
				<div className=" mt-100">
					<ContactCodeBlock />
				</div>
			)}
		</div>
	);
};

export default Homepage;
