"use client";
import React, { useState } from "react";

export function ContactCodeBlock() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const mailto = `mailto:sivaprasadsidharth@gmail.com?subject=${encodeURIComponent(
			"Contact from website"
		)}&body=${encodeURIComponent(`\n\n${form.message}`)}`;

		window.location.href = mailto;

		setSubmitted(true);
	};

	// Lines of the form to show numbers for
	const lines = [
		"// Let's get in touch! ✉️",
		"const name =",
		"const email =",
		"const message =",
		"",
		"",
		"",
		"",
		"",
		"",
	];

	return (
		<div
			style={{
				position: "relative",
				top: -200,
				fontFamily: "'Fira Code', monospace",
				backgroundColor: "#1e1e1e",
				borderRadius: 8,
				color: "#d4d4d4",
				maxWidth: 800,
				margin: "2rem auto",
				boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
				userSelect: "none",
				overflowX: "auto",
			}}
			id="contact"
		>
			{/* Filename bar */}
			<div
				style={{
					backgroundColor: "rgb(43 49 97)",
					borderRadius: "6px 6px 0 0",
					padding: "8px 16px",
					display: "flex",
					alignItems: "center",
					gap: 12,
					fontWeight: "bold",
					fontSize: 14,
					color: "#d4d4d4",
					borderBottom: "1px solid #3a3d41",
				}}
			>
				<div
					style={{
						width: 12,
						height: 12,
						backgroundColor: "#ff5f56",
						borderRadius: "50%",
					}}
				/>
				<div
					style={{
						width: 12,
						height: 12,
						backgroundColor: "#ffbd2e",
						borderRadius: "50%",
					}}
				/>
				<div
					style={{
						width: 12,
						height: 12,
						backgroundColor: "#27c93f",
						borderRadius: "50%",
					}}
				/>
				<span>ContactMeForm.tsx</span>
			</div>

			<form
				onSubmit={handleSubmit}
				style={{
					padding: 20,
					fontSize: 14,
					lineHeight: 1.6,
					whiteSpace: "pre-wrap",
					fontFamily: "'Fira Code', monospace",
					color: "#d4d4d4",
					minHeight: 280,
					userSelect: "auto",
					backgroundColor: "#2125439e",
				}}
			>
				{/* Line wrapper */}
				<div style={{ display: "flex", gap: 12 }}>
					{/* Line numbers gutter */}
					<div
						style={{
							userSelect: "none",
							color: "#5c6370",
							textAlign: "right",
							fontSize: 14,
							lineHeight: "1.6em",
							paddingRight: 12,
							borderRight: "1px solid #3a3d41",
							minWidth: 28,
						}}
					>
						{lines.map((_, i) => (
							<div key={i} style={{ height: "2.1em" }}>
								{i + 1}
							</div>
						))}
					</div>

					{/* Lines content */}
					<div style={{ flexGrow: 1, minWidth: 0 }}>
						<code style={{ display: "block", marginBottom: 16 }}>
							<span style={{ color: "#6a9955" }}>{lines[0]}</span>
						</code>

						<code
							style={{
								display: "block",
								backgroundColor: "#4787fd69",
								paddingLeft: 4,
								userSelect: "auto",
							}}
						>
							<span style={{ color: "#569cd6" }}>const </span>
							<span style={{ color: "#9cdcfe" }}>name</span>
							<span> = </span>
							<input
								type="text"
								name="name"
								placeholder='"Your full name"'
								value={form.name}
								onChange={handleChange}
								required
								style={{
									backgroundColor: "transparent",
									border: "none",
									borderBottom: "1px solid #3a3d41",
									color: "#d4d4d4",
									fontFamily: "'Fira Code', monospace",
									fontSize: 14,
									outline: "none",
									padding: "2px 4px",
									width: 280,
									userSelect: "text",
								}}
							/>
							<span>;</span>
						</code>

						<code style={{ display: "block", userSelect: "auto" }}>
							<span style={{ color: "#569cd6" }}>const </span>
							<span style={{ color: "#9cdcfe" }}>email</span>
							<span> = </span>
							<input
								type="email"
								name="email"
								placeholder='"your.email@example.com"'
								value={form.email}
								onChange={handleChange}
								required
								style={{
									backgroundColor: "transparent",
									border: "none",
									borderBottom: "1px solid #3a3d41",
									color: "#d4d4d4",
									fontFamily: "'Fira Code', monospace",
									fontSize: 14,
									outline: "none",
									padding: "2px 4px",
									width: 280,
								}}
							/>
							<span>;</span>
						</code>

						<code
							style={{
								display: "block",
								marginTop: 8,

								paddingLeft: 4,
								userSelect: "auto",
							}}
						>
							<span style={{ color: "#569cd6", backgroundColor: "#4787fd69" }}>
								const{" "}
							</span>
							<span style={{ color: "#9cdcfe", backgroundColor: "#4787fd69" }}>
								message
							</span>
							<span style={{ backgroundColor: "#4787fd69" }}> = </span>
							<textarea
								name="message"
								placeholder='"Your message here..."'
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								style={{
									backgroundColor: "transparent",
									border: "none",
									borderBottom: "1px solid #3a3d41",
									color: "#d4d4d4",
									fontFamily: "'Fira Code', monospace",
									fontSize: 14,
									outline: "none",
									padding: "4px 6px",
									width: "50vw",
									resize: "vertical",
								}}
							/>
							<span>;</span>
						</code>
					</div>
				</div>

				<button
					type="submit"
					style={{
						marginTop: 24,
						padding: "8px 16px",
						backgroundColor: "#0a84ff",
						border: "none",
						borderRadius: 4,
						color: "white",
						fontWeight: "bold",
						cursor: "pointer",
						userSelect: "none",
						fontFamily: "'Fira Code', monospace",
						fontSize: 14,
						transition: "background-color 0.3s ease",
					}}
					onMouseEnter={(e) =>
						(e.currentTarget.style.backgroundColor = "#0066d6")
					}
					onMouseLeave={(e) =>
						(e.currentTarget.style.backgroundColor = "#0a84ff")
					}
				>
					Send &lt;/&gt;
				</button>

				{submitted && (
					<div
						style={{
							marginTop: 16,
							color: "#6a9955",
							fontWeight: "bold",
							fontFamily: "'Fira Code', monospace",
						}}
					>
						Thank you for reaching out! I&apos;ll get back to you soon.
					</div>
				)}
			</form>
		</div>
	);
}
