import React from "react";
import { LampContainer } from "./ui/lamb";
import { motion } from "motion/react";

const CoderProfile: React.FC = () => {
	return (
		<section className=" flex flex-col  gap-8  bg-black z-10">
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
				<p
					className="relative top-30 max-w-xl font-serif text-center text-white text-sm md:text-base"
					style={{ width: "100vw" }}
				>
					" Hi, I’m Sid — a Software Development Enthusiast with a deep passion
					for Frontend development. I thrive in agile, fast-paced environments
					where I bring ideas to life and deliver solutions that truly matter.
					I’m always curious about improving user experiences and crafting
					interfaces that engage. When I’m not coding, you’ll find me behind the
					camera, capturing moments that inspire and tell unique stories. I love
					connecting with like-minded people to create something meaningful by
					blending technology and creativity together."
				</p>
			</LampContainer>
		</section>
	);
};

export default CoderProfile;
