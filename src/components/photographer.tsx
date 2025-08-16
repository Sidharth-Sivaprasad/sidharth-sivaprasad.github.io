import React from "react";
import "./coder.css";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { GlowingEffectBlack } from "./ui/glowing-effect";
import "./homepage.css";

interface GridItemProps {
	area: string;
	title: string;
}

const Photographer: React.FC = () => {
	return (
		<>
			<div
				className="flex flex-col md:flex-row md:justify-between 
					pl-8 md:pl-16 lg:pl-26 
					pr-8 md:pr-16 lg:pr-26 
					pt-8 md:pt-0 "
			>
				{" "}
				<div className="relative md:top-10 top-30 flex flex-col">
					<TextGenerateEffect
						color={"#999999"}
						words={"Hi. I’m Sid."}
						className="text-3xl md:text-5xl font-bold"
					/>

					<br />
					{/* <TextGenerateEffect
							color={"#d4d3d3ff"}
							words={"[Ö]: "}
							duration={1}
							className="text-1xl md:text-5xl "
						/> */}
					<div style={{ display: "flex", flexDirection: "column" }}>
						<img
							src={"./cam.svg"}
							alt="Camera Icon"
							className="w-30 md:w-90 fade-in wobble"
							style={{ height: "auto" }}
						/>
						<div className="relative max-w-[300px] -top-10 md:top-[-100px] left-0 md:left-[80px]">
							<TextGenerateEffect
								color={"#9c9c9cff"}
								words={"\u00A0\u00A0\u00A0\u00A0Photographer"}
								duration={1.5}
								className="text-1xl md:text-2xl font-bold "
							/>
							<TextGenerateEffect
								color={"#bcbbbbff"}
								words={"\u00A0\u00A0\u00A0\u00A0Content Creator"}
								duration={1.6}
								className="text-1xl md:text-2xl font-bold"
							/>
							<TextGenerateEffect
								color={"#fffbfbff"}
								words={"\u00A0\u00A0\u00A0\u00A0Creative Thinker"}
								duration={1.7}
								className="text-1xl md:text-2xl font-bold"
							/>
						</div>
					</div>
					<br />
				</div>
				<div className="rightSide">
					<div className="buttonsContainer">
						<div className="relative rounded-2xl p-8 mb-6  ">
							{/* Glow effect behind the box */}
							<GlowingEffectBlack
								blur={0}
								borderWidth={4}
								spread={100}
								glow={true}
								disabled={false}
								proximity={64}
								inactiveZone={0.01}
							/>

							<ul className="grid grid-cols-2 gap-4 md:flex md:flex-col">
								<a
									href="https://photogallery-beige.vercel.app/"
									target="_blank"
								>
									<GridItem area="" title="Profile" />
								</a>
								<a href="#contact">
									<GridItem area="" title="Contact Me" />
								</a>
							</ul>
							<div
								className="flex gap-10 mt-10 w-full"
								style={{ justifyContent: "space-around" }}
							>
								{/* GitHub Icon with Glow */}
								<div className="relative rounded-full p-0">
									<GlowingEffectBlack
										blur={0}
										borderWidth={6}
										spread={40}
										glow={true}
										disabled={false}
										proximity={64}
										inactiveZone={0.01}
									/>
									<a
										href="https://www.instagram.com/sid_harth_ks/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src={"./insta-icon.webp"}
											alt="GitHub"
											className="icon1 relative z-10"
										/>
									</a>
								</div>

								{/* LinkedIn Icon with Glow */}
								<div className="relative rounded-full p-0">
									<GlowingEffectBlack
										blur={0}
										borderWidth={6}
										spread={40}
										glow={true}
										disabled={false}
										proximity={64}
										inactiveZone={0.01}
									/>
									<a
										href="https://www.behance.net/sidhartsivapra"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src={"./behance-icon.webp"}
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
			<div className="relative h-full rounded-2xl border-black p-2 md:rounded-1xl md:p-1">
				<GlowingEffectBlack
					blur={0}
					borderWidth={2}
					spread={300}
					glow={true}
					disabled={false}
					proximity={64}
					inactiveZone={0.01}
				/>
				<div
					className="border-0.75 w-full relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-1 md:p-1 dark:shadow-[0px_0px_27px_0px_#2D2D2D] "
					style={{ backgroundColor: "#dadada6d" }}
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

export default Photographer;
