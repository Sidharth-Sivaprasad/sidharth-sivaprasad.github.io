import { motion } from "motion/react";
import React from "react";
import "./project.css";
import { LampContainer } from "./ui/lamb3";
import { cn } from "../libs/utils";
import Lottie from "lottie-react";
import animationData from "./ui/blue.json";

const projectList = [
	{
		image: "./project/velocified.webp",
		title: "Velocified Learning Management System",
		github: "",
		link: "https://velocified.com/",
		description: (
			<>
				<p>
					Led frontend development of a Learning Management System for
					Velocified (Toronto, Cananda). Improved page load times to less than
					2s , achieved a 98 Google Lighthouse rating for SEO, optimized UX, and
					enhanced performance using Next.js SSR/SSG.
				</p>
				<br />
				<p>
					Utilized Agile project management to integrate frontend using
					React.js/Next.js (Redux) for state management and backend technologies
					(Node.js/Express.js, MongoDB), deploying the solution leveraging AWS
					ECS, S3, CodePipeline, CloudFront and Route 53 ensuring efficient and
					seamless deployment.
				</p>
			</>
		),
	},
	{
		image: "./project/gun_violence.webp",
		title: "Gun Violence Tracker Using Semantic Data Integration",
		github:
			"https://github.com/Sidharth-Sivaprasad/SER-531-Gun_Violence_tracker_and_Analyser",
		link: "https://ieeexplore.ieee.org/document/10066718",
		description: (
			<>
				<p>
					Developed a Semantic Web application using <b>ReactJS</b>,{" "}
					<b>ChartJS</b> and <b>Java Spring boot</b> offering interactive
					insights into gun violence incidents in the United States.
				</p>
				<br />
				<p>
					Applied <b>Ontology modeling</b> to structure data from over 30,000
					entries. Leveraged Fuseki server for streamlined data querying
					(SPARQL) and deployed the application using AWS.
				</p>
			</>
		),
	},
	{
		image: "./project/photogallery.webp",
		title: "Photo Gallery - Sidharth Sivaprasad",
		github: "https://github.com/Sidharth-Sivaprasad/photogallery",
		link: "https://photogallery-beige.vercel.app/",
		description: (
			<>
				<p>
					Developed a Semantic Web application using <b>ReactJS</b>,{" "}
					<b>ChartJS</b> and <b>Java Spring boot</b> offering interactive
					insights into gun violence incidents in the United States.
				</p>
				<br />
				<p>
					Applied <b>Ontology modeling</b> to structure data from over 30,000
					entries. Leveraged Fuseki server for streamlined data querying
					(SPARQL) and deployed the application using AWS.
				</p>
			</>
		),
	},
	{
		image: "./project/unity-rover.webp",
		title: "Rover Simulation",
		link: "",
		github: "https://github.com/Sidharth-Sivaprasad/SER515-Spring22-Team8",
		description: (
			<>
				<p>
					Designed and implemented the model and control system for an
					autonomous rover, proficient in obstacle detection and independent
					navigation through a maze while simultaneously mapping its
					environment. Developed the environment using Unity and crafted the
					rover using ROS2.
				</p>
				<br />
				<p>
					his experience enhanced my skills in Unity development, ROS2, and
					Agile project management, demonstrating a holistic approach to
					autonomous systems in dynamic environments
				</p>
			</>
		),
	},
	// Add more projects here as needed
];

const Projects: React.FC = () => {
	return (
		<section
			className=" flex flex-col  gap-8  z-10 relative -top-40
        "
			id="projects"
		>
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
					Projects
				</motion.h1>
			</LampContainer>

			{/* Vertical grid with single column */}

			<div className="relative grid grid-cols-1 gap-10 px-4 justify-items-center items-center -top-50 z-100">
				{projectList.map(({ image, title, description, github, link }, idx) => (
					<Card key={idx} className="w-[70vw] ">
						{" "}
						{/* Full width inside grid cell */}
						<div className="flex flex-col md:flex-row items-center md:gap-12 gap-4 p-2">
							{/* Image - fixed size, left aligned on md+ */}
							<div className="flex-shrink-0 md:mr-auto mx-auto md:mx-0 pt-6 md:pt-0">
								<img
									className="rounded-lg shadow-lg max-w-full h-auto mt-20"
									src={image}
									alt={title}
									width={300}
									height={200}
								/>
								<br />
								<div className="flex">
									{link && (
										<a
											href={link}
											target="_blank"
											rel="noopener noreferrer"
											className="lottie-link"
											style={{
												display: "inline-block",
												position: "relative",
												top: "-24px",
												width: 80,
												height: 80,
											}}
										>
											<Lottie
												animationData={animationData}
												loop={true}
												autoplay={true}
											/>
										</a>
									)}
									{github && (
										<a
											href={github}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-gray-500 hover:text-gray-700"
										>
											<div className="ml-2">
												<svg
													width={80}
													height={80}
													viewBox="0 0 32 32"
													xmlns="http://www.w3.org/2000/svg"
													role="img"
													aria-labelledby="title desc"
													className="bobble-on-hover"
												>
													<title id="title">Animated GitHub Logo</title>
													<desc id="desc">
														Bright green Octocat mark with pulsing fill and an
														orbiting stroke.
													</desc>

													<defs>
														<style>{`
        .pulse { animation: pulse 2.2s ease-in-out infinite; filter: url(#glow); }
        .orbit { animation: spin 8s linear infinite; transform-origin: 8px 8px; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.75} }
        @keyframes spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }

        /* Bobble animation */
        @keyframes bobble {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-6px) rotate(-5deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(-4px) rotate(4deg); }
        }

        .bobble-on-hover:hover {
          animation: bobble 0.6s ease-in-out infinite;
          transform-origin: center bottom;
        }

        @media (prefers-reduced-motion: reduce) {
          .pulse, .orbit, .bobble-on-hover:hover {
            animation: none !important;
          }
        }
      `}</style>

														<filter
															id="glow"
															x="-50%"
															y="-50%"
															width="200%"
															height="200%"
														>
															<feGaussianBlur stdDeviation="0.6" result="b" />
															<feMerge>
																<feMergeNode in="b" />
																<feMergeNode in="SourceGraphic" />
															</feMerge>
														</filter>
													</defs>

													<g className="orbit" aria-hidden="true">
														<circle
															cx={8}
															cy={8}
															r={7.2}
															fill="none"
															stroke="#00FF6A"
															strokeWidth={0.35}
															strokeLinecap="round"
															strokeDasharray="6 5 1 8 2 10"
														/>
													</g>

													<path
														className="pulse"
														fill="#00FF6A"
														d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53
 .63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27
 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95
 .29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8
 c0-4.42-3.58-8-8-8z"
													/>
												</svg>
											</div>
										</a>
									)}
								</div>
							</div>

							{/* Skeleton - fixed width, centered on small */}

							<div className="hidden md:flex-shrink-0 md:block md:mx-0">
								<CardSkeletonContainer>
									<Skeleton />
								</CardSkeletonContainer>
							</div>

							{/* Content - full width on small, flex-grow on larger */}
							<div className="flex-1 w-full max-w-full sm:max-w-md md:max-w-2xl">
								<CardTitle>{title}</CardTitle>
								<CardDescription>{description}</CardDescription>
							</div>
						</div>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Projects;

const Skeleton = () => {
	return (
		<div className="p-4 overflow-hidden h-full relative flex items-center justify-center">
			<div className="flex flex-row shrink-0 justify-center items-center gap-2"></div>

			<div className="h-40 w-0.5  absolute  m-auto z-40 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-move">
				<div className="w-20 h-3 top-1/2 -translate-y-1/2 absolute -left-10"></div>
			</div>
		</div>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				" px-5 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-green-100 shadow-[inset_0_-2px_4px_0_rgba(248,248,248,0.06),_inset_2px_0_16px_0_rgba(248,248,248,0.06),_inset_-2px_0_16px_0_rgba(248,248,248,0.06),_inset_0_2px_4px_0_rgba(2,255,73,0.15)] group flex flex-col items-center",
				className
			)}
		>
			{children}
		</div>
	);
};

export const CardTitle = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h3
			className={cn(
				"text-lg font-semibold text-gray-800 dark:text-white py-2",
				className
			)}
		>
			{children}
		</h3>
	);
};

export const CardDescription = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<p
			className={cn(
				" relative text-sm font-normal text-neutral-600 dark:text-neutral-400  md:max-w-full",
				className
			)}
		>
			{children}
		</p>
	);
};

export const CardSkeletonContainer = ({
	className,
	children,
	showGradient = true,
}: {
	className?: string;
	children: React.ReactNode;
	showGradient?: boolean;
}) => {
	return (
		<div
			className={cn(
				"h-[10rem] md:h-[20rem] rounded-lg z-40",
				className,
				showGradient &&
					"bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
			)}
		>
			{children}
		</div>
	);
};
