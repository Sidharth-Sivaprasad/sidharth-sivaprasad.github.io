import "./App.css";
import Homepage from "./components/Homepage";

function App() {
	return (
		<div className="w-screen h-screen flex flex-col">
			{/* Main content takes available space */}

			<Homepage />

			<footer className="fixed bottom-0 left-0 w-full bg-black text-white py-3 text-center z-[100]">
				<span>Developed by Sidharth :{"}"}</span>
			</footer>
		</div>
	);
}

export default App;
