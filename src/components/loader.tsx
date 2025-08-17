import React from "react";

const LoadingFallback: React.FC = () => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "100vh",
			fontSize: "1.5rem",
			color: "#555",
			backgroundColor: "#f0f0f0",
		}}
	>
		<div>
			<div className="spinner" style={{ marginBottom: "1rem" }}>
				{/* Simple CSS spinner */}
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					stroke="#555"
				>
					<circle
						cx="25"
						cy="25"
						r="20"
						strokeWidth="5"
						strokeLinecap="round"
						strokeDasharray="90,150"
						strokeDashoffset="0"
						transform="rotate(306 25 25)"
					>
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 25 25"
							to="360 25 25"
							dur="1s"
							repeatCount="indefinite"
						/>
					</circle>
				</svg>
			</div>
			Loading, please wait...
		</div>
	</div>
);

export default LoadingFallback;
