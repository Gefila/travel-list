import { useState } from "react";

export default function Form({ onAddItem }) {
	const [quantity, setQuantity] = useState(1);
	const [description, setDescription] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (!description) return;
		const newItem = {
			id: Date.now(),
			description,
			quantity,
			packed: false,
		};
		onAddItem(newItem);
		setQuantity(1);
		setDescription("");
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				id=""
				onChange={(e) => setQuantity(e.target.value)}
				value={quantity}
			>
				{Array.from({ length: 10 }, (_, i) => (
					<option key={i} value={i + 1}>
						{i + 1}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="item..."
				onChange={(e) => setDescription(e.target.value)}
				value={description}
			/>
			<button>add</button>
		</form>
	);
}
