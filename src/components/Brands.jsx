import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/brands')
        .then(res => res.json())
        .then(data => {
            setBrands(data);
        })
    }, [])
    console.log(brands);

    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-6 my-20 gap-6 max-w-6xl mx-auto">
            {
                brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
            }
        </div>
    );
};

export default Brands;