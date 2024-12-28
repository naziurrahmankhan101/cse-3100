import { useEffect, useState } from "react";

const availableCats = [
  { name: "Whiskers", age: "2", breed: "Sphynx" },
  { name: "Mittens", age: "2", breed: "Bengal" },
  { name: "Shadow", age: "1", breed: "Persian" },
  { name: "Pumpkin", age: "3", breed: "Abyssinian" },
  { name: "Luna", age: "4", breed: "Siamese" },
  { name: "Simba", age: "2", breed: "Birman" },
  { name: "Mochi", age: "1", breed: "Ragdoll" },
  { name: "Cleo", age: "3", breed: "Maine Coon" },
  { name: "Milo", age: "2", breed: "Scottish Fold" },
  { name: "Nala", age: "3", breed: "Savannah" },
  { name: "Tigger", age: "4", breed: "Norwegian Forest" },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch("https://api.thecatapi.com/v1/images/search").then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []);

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    filterCats(text, selectedBreed);
  };

  const handleBreedChange = (e) => {
    const breed = e.target.value;
    setSelectedBreed(breed);
    filterCats(searchText, breed);
  };

  const filterCats = (text, breed) => {
    let updatedCats = cats;

    if (text) {
      updatedCats = updatedCats.filter((cat) =>
        cat.name.toLowerCase().includes(text)
      );
    }

    if (breed) {
      updatedCats = updatedCats.filter((cat) => cat.breed === breed);
    }

    setFilteredCats(updatedCats);
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mt-3">
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={handleSearch}
          className="form-control mb-2"
        />
        <select
          className="form-select"
          value={selectedBreed}
          onChange={handleBreedChange}
        >
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Bengal">Bengal</option>
          <option value="Persian">Persian</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Siamese">Siamese</option>
          <option value="Birman">Birman</option>
          <option value="Ragdoll">Ragdoll</option>
          <option value="Maine Coon">Maine Coon</option>
          <option value="Scottish Fold">Scottish Fold</option>
          <option value="Savannah">Savannah</option>
          <option value="Norwegian Forest">Norwegian Forest</option>
        </select>
      </div>

      <div
        className="mt-4 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 cats-container"
        id="cats-container"
        style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "1200px" }}
      >
        {filteredCats.slice(0, 6).map((cat, i) => (
          <div key={i} className="col">
            <div
              className="cat-card"
              style={{
                padding: "16px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                height: "350px",
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: "8px",
                  height: "200px",
                  objectFit: "cover",
                  maxWidth: "100%",
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
