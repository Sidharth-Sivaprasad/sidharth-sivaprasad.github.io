import React from "react";
import { LampContainer } from "./ui/lamb";
import { motion } from "motion/react";
import { IconCloud } from "./ui/globe";

const slugs = [
	"typescript",
	"javascript",
	"java",
	"react",
	"android",
	"html5",
	"css3",
	"nodedotjs",
	"express",
	"nextdotjs",
	"prisma",
	"amazonaws",
	"postgresql",
	"firebase",
	"nginx",
	"vercel",
	"testinglibrary",
	"jest",
	"cypress",
	"docker",
	"git",
	"jira",
	"github",
	"gitlab",
	"visualstudiocode",
	"androidstudio",
	"sonarqube",
	"figma",
	"terraform",
	"sentry",
	"elasticcloud",
	"go",
	"capacitor",
	"xcode",
];

const CoderProfile: React.FC = () => {
	const images = slugs.map(
		(slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
	);
	return (
		<section id="profile" className=" flex flex-col  gap-8  bg-black z-10">
			{/* Left Column */}
			<LampContainer>
				<motion.h1
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className=" bg-gradient-to-br from-gray-400 to-gray-800 py-0 bg-clip-text text-center font-medium tracking-tight text-transparent md:text-5xl text-2xl"
				>
					About Me
				</motion.h1>
			</LampContainer>
			<div className="relative w-full -top-60">
				{/* Text centered horizontally */}
				<div className="absolute -top-60 right-30 h-[400px] w-[400px]  md:block z-10 overflow-hidden">
					<div className="relative flex items-center justify-center overflow-hidden h-full w-full">
						<IconCloud images={images} />
					</div>
				</div>
				<div className="w-full max-w-xl mx-auto relative z-20">
					<p className="font-serif text-white text-sm md:text-lg text-center">
						" Hi, I’m Sid — a Software Development Enthusiast with a deep
						passion for Frontend development. I thrive in agile, fast-paced
						environments where I bring ideas to life and deliver solutions that
						truly matter. I’m always curious about improving user experiences
						and crafting interfaces that engage. When I’m not coding, you’ll
						find me behind the camera, capturing moments that inspire and tell
						unique stories. I love connecting with like-minded people to create
						something meaningful by blending technology and creativity
						together."
					</p>
				</div>

				{/* Orbiting circles container positioned absolutely on the right */}
			</div>
		</section>
	);
};

export default CoderProfile;
