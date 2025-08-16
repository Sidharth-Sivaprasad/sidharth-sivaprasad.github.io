import "./App.css";
import Homepage from "./components/Homepage";
import Lottie from "lottie-react";
import animationData from "./components/ui/programmer.json";

function App() {
	return (
		<div className="w-screen h-screen flex flex-col">
			{/* Main content takes available space */}

			<Homepage />

			<footer className="fixed bottom-0 font-sans left-0 w-full bg-black font-light text-gray-400 py-3 px-20 z-[100]">
				<span>
					Developed by Sidharth{" "}
					<div
						style={{
							display: "inline-block",
							position: "relative",
							width: 40,
							height: 40,
							top: "10px",
						}}
					>
						<Lottie animationData={animationData} loop={true} autoplay={true} />
					</div>
					Made with Acertentiy UI
				</span>
			</footer>
		</div>
	);
}

export default App;
