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
                pt-8 md:pt-0 "
			>
				{" "}
				<div className="leftSide">
					<span className="frame2_text">
						<TextGenerateEffect
							words={"Hi. I’m Sid."}
							className="text-3xl md:text-5xl font-bold"
						/>

						<br />
						<TextGenerateEffect
							words={"( ) => {"}
							duration={1}
							className="text-1xl md:text-2xl "
						/>

						<TextGenerateEffect
							words={"\u00A0\u00A0\u00A0\u00A0<Engineer />"}
							duration={1.5}
							className="text-1xl md:text-2xl font-bold"
						/>
						<TextGenerateEffect
							words={"\u00A0\u00A0\u00A0\u00A0<Developer />"}
							duration={1.6}
							className="text-1xl md:text-2xl font-bold"
						/>
						<TextGenerateEffect
							words={"\u00A0\u00A0\u00A0\u00A0<Innovator />"}
							duration={1.7}
							className="text-1xl md:text-2xl font-bold"
						/>
						<TextGenerateEffect
							words={" }"}
							duration={2}
							className="text-1xl md:text-2xl font-bold"
						/>

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
								<GridItem area="" title="Profile" />
								<GridItem area="" title="Projects" />
								<GridItem area="" title="Resume" />
								<GridItem area="" title="Contact" />
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
							<h2 className="-tracking-4 text-center font-sans text-xl/[1.375rem] font-light text-balance text-black md:text-1xl/[1.875rem] dark:text-white">
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
