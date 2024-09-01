import { useState } from "react";
import Item from "./Item";

export default function PackingList({
	items,
	onDeleteItem,
	onToggleItem,
	onClearList,
}) {
	let sortedItems;
	const [sortBy, setSortBy] = useState("input");
	if (sortBy === "input") sortedItems = items;
	if (sortBy === "description")
		sortedItems = [...items].sort((a, b) =>
			a.description.localeCompare(b.description)
		);
	if (sortBy === "packed")
		sortedItems = [...items].sort(
			(a, b) => Number(a.packed) - Number(b.packed)
		);

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
			<div className="actions">
				<select
					name=""
					id=""
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
				<button
					onClick={onClearList}
					style={!sortedItems.length ? { display: "none" } : {}}
				>
					clear list
				</button>
			</div>
		</div>
	);
}
