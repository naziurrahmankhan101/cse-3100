import { useEffect, useState } from 'react';


const featuredCats = [
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

export default function Home() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        // Fetch cat images from an API endpoint and assign it to the featuredCats list
        const fetchCatImages = async () => {
            try {
                const responses = await Promise.all(featuredCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
                const catsWithImages = featuredCats.map((cat, index) => ({
                    ...cat,
                    image: responses[index][0].url,
                }));

                setCats(catsWithImages);
            } catch (error) {
                console.error('Error fetching cat images:', error);
            }
        };

        fetchCatImages();
    }, []);

    return (
        <>
            <section className="text-center mt-4">
                <h2>Welcome to Purrfect Adoption</h2>
                <p>
                    Meet our adorable cats looking for their forever home!
                    Do not buy it just adopt it.
                </p>
            </section>
            <section className="mt-5">
                <h2>Featured cats</h2>
                <div className="mt-2 row g-4" id="cats-container"></div>
                <div className="mt-2 row g-4" id="cats-container">
                    {cats.map((cat, i) => (
                        <div key={i} className="col-md-4">
                            <div className="cat-card">
                                <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
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
            <style>{`
            .cats-container{
            max-width: 1000px;
            border-radius:10;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
      }
            .cat-card {
            background-color: #fff;
            border-radius: 16px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            text-align: center;
            height:100%;
            width: 100%;
            max-width: 600px;
            }
            .cat-image{

            }
            .cat-info {
            padding: 10px;
            }
      `}</style>
        </>
    );
}
