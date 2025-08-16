import React from "react";
import { LampContainer } from "./ui/lamb2";
import { motion } from "motion/react";
import { TracingBeam } from "./ui/tracing-beam";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Experience: React.FC = () => {
	return (
		<section className=" flex flex-col  gap-8  bg-black z-100 h-max-content">
			{/* Left Column */}
			<LampContainer className="min-h-max-content  ">
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
				<TracingBeam className=" w-full">
					<div className=" mx-auto antialiased mt-30 relative flex flex-col items-center justify-center ">
						{experienceData.map((item, index) => (
							<div key={`content-${index}`}>
								{item.type === "work" ? (
									<>
										<p className="bg-gradient-to-br from-gray-400 via-purple-300 to-gray-800 bg-clip-text text-transparent font-bold tracking-tight md:text-2xl text-1xl px-8 py-2 text-left">
											{item.date}
										</p>
										<div
											className="w-full border-rounded mx-3 mb-20 flex flex-col md:flex-row px-6"
											style={{
												border: "1px solid rgba(220, 203, 250, 0.28)",
												background:
													"linear-gradient(135deg, #3b0a453a, #1f1725c4, #0a090bab, #2b103085)",
												borderRadius: "10px",
											}}
										>
											<div className="w-full md:w-[250px] flex-shrink-0 flex flex-col justify-center items-center min-h-[300px]">
												<img
													src={item.image}
													alt={item.title}
													className="w-[400px] h-[200px] object-contain rounded-lg mx-auto pt-4"
												/>
												<div className="flex mt-5 justify-center">
													<AnimatedTooltip items={item.badge} />
												</div>
											</div>

											<div className="p-4">
												{/* Title + Role */}
												<div className="flex justify-between items-center">
													<h3 className="text-lg font-semibold">
														{item.title}
													</h3>
													<span className="text-sm text-gray-400">
														{item.roles}
													</span>
												</div>

												{/* Description */}
												<div className="mt-2 text-sm font-sans text-light text-justify text-center pt-2">
													{item.description}
												</div>
											</div>
										</div>
									</>
								) : (
									<>
										{/* Gradient Date Text */}
										<p className="bg-gradient-to-br from-gray-800 via-white to-gray-800 bg-clip-text text-transparent font-bold tracking-tight md:text-2xl text-xl px-8 py-2 text-left">
											{item.date}
										</p>

										{/* Card Container */}
										<div
											className="w-full border rounded mx-3 mb-20 flex flex-col md:flex-row px-6"
											style={{
												border: "1px solid rgba(143, 143, 143, 0.29)",
												background:
													"linear-gradient(155deg, #8e8c8c99, #bab9b9ac, #e1dddddb, #7b7777b5)",
												borderRadius: "10px",
											}}
										>
											{/* Image */}
											<img
												src={item.image}
												alt={item.title}
												className="w-full max-w-[200px] h-auto rounded-lg mx-auto md:mx-0 md:max-w-[200px] max-h-60"
												style={{ alignSelf: "center" }}
											/>

											{/* Content */}
											<div className="p-4">
												{/* Title + Role */}
												<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
													<h3 className="text-lg font-bold text-black">
														{item.title}
													</h3>
													<span className="text-sm text-gray-800">
														{item.roles}
													</span>
												</div>

												{/* Description */}
												<div className="mt-2 text-sm font-sans text-black text-justify">
													{item.description}
												</div>

												{/* CGPA */}
												<div
													style={{
														display: "flex",
														marginTop: "20px",
														fontWeight: "600",
														fontStyle: "italic",
														color: "black",
													}}
												>
													CGPA : {item?.cgpa ? item.cgpa : "N/A"} / 4.0
												</div>
											</div>
										</div>
									</>
								)}
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
		type: "work",
		roles: "Founding Software Engineer",
		date: "2024, Jun - Present",
		description: (
			<>
				<p>
					◦ Wireframed and developed ( Figma ) 2 mobile apps and a management
					portal for a delivery solution. Reduced mobile app development time by
					approx. 40% by leveraging Capacitor and a shared Next.js codebase.
					Architectured the front-end development and testing of the customer
					and delivery management web apps.
				</p>
				<br />
				<p>
					◦ Integrated a multitude of features including user sign in, product
					management, cart management (Redux), order tracking, payment system
					and customer support chat.
				</p>
				<br />
				<p>
					◦ Managed the app build(iOS and Android) and deployment process using
					Appflow, GitHub and AWS services ensuring seamless delivery and
					efficient release cycles. Integrated Sentry to track app performance.
				</p>
			</>
		),
		badge: [
			{
				id: 1,
				tech: "Next.js",
				image: "./icons/next.svg",
			},
			{
				id: 2,
				tech: "Capacitor",
				image: "./icons/capacitor.svg",
			},
			{
				id: 3,
				tech: "AWS Services",
				image: "./icons/aws.svg",
			},
			{
				id: 4,
				tech: "Node JS",
				image: "./icons/node.svg",
			},
			{
				id: 5,
				tech: "PostgresSQL",
				image: "./icons/postgresSQL.svg",
			},
		],
		image: "./institution/blusvn_logo.png",
	},
	{
		title: "MarLabs",
		type: "work",
		date: "2023, Dec - 2024, Jun",
		roles: "Software Developer Intern",
		description: (
			<>
				<p>
					◦ Redesigned a fund analyser dashboard using React.js by utilizing
					pagination and caching techniques, thereby reducing the page load time
					from 15 sec to 3 sec, leading to a 18% increase in user engagement.
				</p>
				<br />
				<p>
					◦ Implemented a multi-model comparison feature(up to 3) in the
					dashboard that enables investors and financial professionals to
					research and visualize( **D3.js** ) a wider range of investing
					scenarios
				</p>
			</>
		),
		badge: [
			{
				id: 1,
				tech: "React.js",
				image: "./icons/react.svg",
			},
			{
				id: 2,
				tech: "D3.js",
				image: "./icons/d3.svg",
			},
			{
				id: 3,
				tech: "Redux",
				image: "./icons/redux.svg",
			},
			{
				id: 4,
				tech: "GraphQL",
				image: "./icons/graphQL.svg",
			},
			{
				id: 5,
				tech: "PostgreSQL",
				image: "./icons/postgresSQL.svg",
			},
		],
		image: "./institution/marlabs_logo.png",
	},
	{
		title: "Arizona State University",
		type: "education",
		date: "2022, Jan - 2023, Dec",
		roles: "Master's in Computer Software Engineering",
		description: (
			<>
				<br />
				<p>
					<strong>Relevant Coursework:</strong> Cloud Computing, Distributed
					Systems, Advanced Web Development, Software Project Management, Data
					Structures & Algorithms, Database Management Systems, Software
					Testing, Machine Learning and Agile Development.
				</p>
				<br />
				<p>
					Throughout the program, led multiple team projects focused on building
					scalable web applications and deploying cloud-based services, gaining
					hands-on experience with AWS, Docker, and Kubernetes. Conducted
					research on semantic web and published a IEEE paper.
				</p>
			</>
		),

		badge: [],
		cgpa: "4.0",
		image: "./institution/asu.png",
	},
	{
		title: "TCS",
		type: "work",
		roles: "Data Engineer",
		date: "2021, Jan - 2021, Dec",
		description: (
			<>
				<p>
					◦ Contributed to the data engineering team at Amgen, utilising tools
					including Databricks, Apache Spark, Oracle, ELK stack and Redshift to
					develop pipelines for managing sensitive medical data.
				</p>
				<br />
				<p>
					◦ Ensured 99.97% availability of data processing servers while
					creating and maintaining large-scale data for offshore clients.
					Provided data security and quality control workflows as per client
					needs and gained skills in project management, team collaboration, and
					problem-solving.
				</p>
			</>
		),
		badge: [
			{
				id: 1,
				tech: "MySql",
				image: "./icons/mysql.svg",
			},
			{
				id: 2,
				tech: "Apache Spark",
				image: "./icons/spark.svg",
			},
			{
				id: 3,
				tech: "Oracle",
				image: "./icons/oracle.svg",
			},
			{
				id: 4,
				tech: "Databricks",
				image: "./icons/databricks.png",
			},
			{
				id: 5,
				tech: "Redshift",
				image: "./icons/redshift.png",
			},
		],
		image: "./institution/tcs_logo.png",
	},
	{
		title: "Cloudsys Analytics",
		type: "work",
		roles: "Trainee Software Engineer",
		date: "2020, Oct - 2020, Dec",
		description: (
			<>
				<p>
					◦ Collaborated on the development and deployment of proprietary
					technology Kloudpad FR - Facial Recognition System for employees and
					loyalty customers for a pan-India retail chain.
				</p>
				<br />
				<p>
					◦ Integrated CloudVision API, which collected data through facial
					recognition and analyzed it in real-time using Tableau. This
					facilitated informed actions, like personalized marketing, enhancing
					overall customer experience.
				</p>
			</>
		),
		badge: [
			{
				id: 1,
				tech: "Python",
				image: "./icons/python.svg",
			},
			{
				id: 2,
				tech: "GCP",
				image: "./icons/gcp.svg",
			},
			{
				id: 3,
				tech: "Tableau",
				image: "./icons/tableau.svg",
			},

			{
				id: 4,
				tech: "CloudVision",
				image: "./icons/visionapi.png",
			},
		],
		image: "./institution/cloud_logo.png",
	},
	{
		title: "Zoft Solution Pvt. Ltd",
		type: "work",
		roles: "Software Developer Intern",
		date: "2018, July",
		description: (
			<>
				<p>
					◦ Development of a module in the product School Wizard - aimed at
					child capability enhancement
				</p>
				<br />
				<p>
					◦ Designed and implemented a Java application to generate Barcodes
					using Spring MVC and deployed it using Apache Tomcat server. This
					experience taught me skills in application development, testing, and
					deployment
				</p>
			</>
		),
		badge: [
			{
				id: 1,
				tech: "Java",
				image: "./icons/java.svg",
			},
			{
				id: 2,
				tech: "Java Spring Boot",
				image: "./icons/spring.svg",
			},
			{
				id: 3,
				tech: "HTML",
				image: "./icons/html.svg",
			},

			{
				id: 4,
				tech: "BootStrap",
				image: "./icons/bootstrap.svg",
			},
		],
		image: "./institution/zoft_logo.png",
	},
	{
		title: "Government Engineering College, Thrissur",
		type: "education",
		date: "2016, Jul – 2020, Aug",
		roles: "Bachelor's in Computer Science (Hons)",
		description: (
			<>
				<br />
				<p>
					<strong>Relevant Coursework:</strong> Data Structures & Algorithms,
					Computer Networks, Database Systems, Distributed Computing, Artificial
					Intelligence, Web Technologies, and Machine Learning.
				</p>
				<br />
				<p>
					Completed a final year project involving the design and implementation
					of a compact and ergonomic Facial Expression and Object
					Recognitionmodule for automobiles. Utilized Machine Learning and
					Convolutional Neural Networks based on Faster R-CNN for real-time
					analysis of driver distraction due to mobile phone usage and detection
					of drowsiness. Participated in coding competitions and hackathons, in
					inter‑college programming contests, and contributed to open‑source
					projects related to web development and data visualization.
				</p>
			</>
		),
		badge: [],
		image: "./institution/gect.png",
		cgpa: "3.41",
	},
];
export default Experience;
