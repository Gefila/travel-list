import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
	const [items, setItems] = useState([
	]);

	function handleAddItem(item) {
		setItems([...items, item]);
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((item) =>
			item.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function clearList() {
		if (!confirm("Are you sure you want to clear the list?")) return;
		setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handleAddItem} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={clearList}
			/>
			<Stats items={items} />
		</div>
	);
}

export default App;
