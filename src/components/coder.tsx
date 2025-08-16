import React from "react";
import "./coder.css";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { GlowingEffect } from "./ui/glowing-effect";

interface GridItemProps {
	area: string;
	title: string;
}

const Coder: React.FC = () => {
	return (
		<>
			<div
				className="flex flex-col md:flex-row md:justify-between 
                pl-8 md:pl-16 lg:pl-26 
                pr-8 md:pr-16 lg:pr-26 
                pt-26 md:pt-0 "
			>
				{" "}
				<div className="leftSide">
					<span className="frame2_text">
						<TextGenerateEffect
							words={"Hi. I’m Sid."}
							className="text-2xl md:text-4xl font-bold font-mono"
						/>

						<br />
						<div
							className="bg-[#020104ab] rounded-md md:w-80  w-60 md:h-[15rem] h-[10rem] font-mono text-sm md:text-base leading-relaxed select-text tilt-animation"
							style={{
								overflowY: "auto",
							}}
						>
							{[
								{ words: "#Explore my profile", color: "#258501ff" },
								{ words: "", color: "#cccccc" },
								{ words: "", color: "#cccccc" },
								{ words: "( ) => {", color: "#ffbf00ff" },
								{
									words: "\u00A0\u00A0\u00A0\u00A0<Engineer />",
									color: "#0686e8ff",
								},
								{
									words: "\u00A0\u00A0\u00A0\u00A0<Developer />",
									color: "#695effff",
								},
								{
									words: "\u00A0\u00A0\u00A0\u00A0<Innovator />",
									color: "#ef7810ff",
								},
								{ words: "}", color: "#ffbf00ff" },
								{ words: "", color: "#cccccc" },
							].map((line, index) => (
								<div
									key={index}
									className={`flex space-x-3 items-center ${
										index % 2 === 0 ? "bg-[#85858514]" : "bg-[#0e6fe649]"
									} px-2 py-0 rounded`}
								>
									<span className="text-gray-400 select-none w-6 text-center pr-10 ">
										{index + 1}
									</span>
									<TextGenerateEffect
										words={line.words}
										duration={1}
										color={line.color}
										className="block font-light font-mono"
									/>
								</div>
							))}
						</div>

						<br />
					</span>
				</div>
				<div className="rightSide">
					<div className="buttonsContainer">
						<div className="relative rounded-2xl p-8 mb-6  ">
							{/* Glow effect behind the box */}
							<GlowingEffect
								blur={0}
								borderWidth={4}
								spread={100}
								glow={true}
								disabled={false}
								proximity={64}
								inactiveZone={0.01}
							/>

							<ul className="grid grid-cols-2 gap-4 md:flex md:flex-col">
								<a href="#profile">
									<GridItem area="" title="Profile" />
								</a>
								<a href="#projects">
									<GridItem area="" title="Projects" />
								</a>
								<a
									href="./Resume-Sidharth.pdf"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									<GridItem area="" title="Resume" />
								</a>
								<a href="#contact">
									<GridItem area="" title="Contact" />
								</a>
							</ul>
							<div
								className="flex gap-10 mt-10 w-full"
								style={{ justifyContent: "space-around" }}
							>
								{/* GitHub Icon with Glow */}
								<div className="relative rounded-full p-0">
									<GlowingEffect
										blur={0}
										borderWidth={6}
										spread={40}
										glow={true}
										disabled={false}
										proximity={64}
										inactiveZone={0.01}
									/>
									<a
										href="https://github.com/Sidharth-Sivaprasad"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src={"./icone-github.png"}
											alt="GitHub"
											className="icon1 relative z-10"
										/>
									</a>
								</div>

								{/* LinkedIn Icon with Glow */}
								<div className="relative rounded-full p-0">
									<GlowingEffect
										blur={0}
										borderWidth={6}
										spread={40}
										glow={true}
										disabled={false}
										proximity={64}
										inactiveZone={0.01}
									/>
									<a
										href="https://www.linkedin.com/in/sidharth-k-s/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src={"./linkedin-icon.png"}
											alt="LinkedIn"
											className="icon1 relative z-10"
										/>
									</a>
								</div>
								{/* </div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const GridItem = ({ area, title }: GridItemProps) => {
	return (
		<li className={`min-h-[2rem] list-none ${area}`}>
			<div className="relative h-full rounded-2xl border p-2 md:rounded-1xl md:p-1">
				<GlowingEffect
					blur={0}
					borderWidth={4}
					spread={100}
					glow={true}
					disabled={false}
					proximity={64}
					inactiveZone={0.01}
				/>
				<div
					className="border-0.75 w-full relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-1 md:p-1 dark:shadow-[0px_0px_27px_0px_#2D2D2D] "
					style={{ backgroundColor: "#1502236d" }}
				>
					<div className="relative flex flex-1 flex-col justify-between gap-6 w-full  p-2">
						<div
							className="space-y-1 w-full md:w-[16vw]"
							style={{ width: "16vw", height: "16px" }}
						>
							<h2 className="-tracking-4 text-center font-sans text-md/[1.375rem] font-light text-balance text-black md:text-1xl/[1.875rem] dark:text-white">
								{title}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Coder;
