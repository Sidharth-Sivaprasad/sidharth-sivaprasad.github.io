import React from "react";
import { LampContainer } from "./ui/lamb2";
import { motion } from "motion/react";
import { TracingBeam } from "./ui/tracing-beam";
import { twMerge } from "tailwind-merge";

const Experience: React.FC = () => {
	return (
		<section className=" flex flex-col  gap-8  bg-black z-100">
			{/* Left Column */}
			<LampContainer className="md:min-h-[80vh] min-h-[100vh] ">
				<motion.h1
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className=" relative -top-30 bg-gradient-to-br from-gray-400 via-gray-100 via-gray-300 to-gray-800 py-0 bg-clip-text text-center font-medium tracking-tight text-transparent md:text-5xl text-2xl "
				>
					Experience
				</motion.h1>
			</LampContainer>
			<div className="relative flex -top-60 items-center justify-center text-center px-4">
				<TracingBeam className="">
					<div className=" mx-auto antialiased mt-30 relative flex flex-col items-center justify-center">
						{experienceData.map((item, index) => (
							<div
								key={`content-${index}`}
								className=" w-full  border-rounded mx-12 mb-20 flex"
								style={{
									border: "1px solid rgba(220, 203, 250, 0.28)",
									background:
										"linear-gradient(135deg, #3b0a453a, #1f1725c4, #0a090bab, #2b103085)",
									borderRadius: "10px",
								}}
							>
								<img
									src={item.image}
									alt={item.title}
									className="w-80 h-auto rounded-lg"
								/>
								<div className="p-4">
									<h3 className="text-lg font-semibold">{item.title}</h3>
									<div className="mt-2">{item.description}</div>
								</div>
							</div>
						))}
					</div>
				</TracingBeam>
			</div>
		</section>
	);
};

const experienceData = [
	{
		title: "BLUSVN Technologies",
		description: (
			<>
				<p>
					Sit duis est minim proident non nisi velit non consectetur. Esse
					adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
					Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
					incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
				</p>
			</>
		),
		badge: "React",
		image: "./blusvn_logo.png",
	},
	{
		title: "MarLabs",
		description: (
			<>
				<p>
					Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
					deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
					non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
					sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
					velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
					commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
				</p>
			</>
		),
		badge: "Changelog",
		image: "./marlabs_logo.png",
	},
	{
		title: "TCS",
		description: (
			<>
				<p>
					Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
					deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
					non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
					sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
					velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
					commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
				</p>
			</>
		),
		badge: "Launch Week",
		image: "./tcs_logo.png",
	},
	{
		title: "Cloudsys Analytics",
		description: (
			<>
				<p>
					Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
					deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
					non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
					sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
					velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
					commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
				</p>
			</>
		),
		badge: "Launch Week",
		image: "./cloud_logo.png",
	},
	{
		title: "Zoft Solution Pvt. Ltd",
		description: (
			<>
				<p>
					Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
					deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
					non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
					sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
					velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
					commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
				</p>
			</>
		),
		badge: "Launch Week",
		image: "./zoft_logo.png",
	},
];
export default Experience;
