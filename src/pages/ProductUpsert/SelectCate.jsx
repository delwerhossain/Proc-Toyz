const [selectedCategory, setSelectedCategory] = useState("");

const handleCategoryChange = (event) => {
  setSelectedCategory(event.target.value);
};


<div>
  <label htmlFor="category">Select a category:</label>
  <select
    id="category"
    value={selectedCategory}
    onChange={handleCategoryChange}
  >
    <option value="">-- Select --</option>
    <option value="technology">Technology</option>
    <option value="fashion">Fashion</option>
    <option value="food">Food</option>
    <option value="sports">Sports</option>
  </select>
</div>;