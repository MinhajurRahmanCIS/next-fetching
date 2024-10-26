"use client";
import { loadData } from '@/services/MealApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const fetchMeals = async () => {
            const data = await loadData(search);
            setMeals(data);
        };
        fetchMeals();
    }, [search]);

    return (
        <div className="">
            <div className="input input-bordered flex items-center gap-2 mb-5">
                <input
                    value={search}
                    onChange={handleSearch}
                    type="text"
                    className="grow"
                    placeholder="Search"
                />
                <button onClick={() => loadData(search)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-8 w-8 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5">
                {meals && meals.map((meal) => (
                    <div key={meal.idMeal} className="card bg-base-100 shadow-xl border">
                        <Image className="w-full h-[500px]"src={meal.strMealThumb} alt="meals" width={300} height={500}/>
                        <div className="card-body">
                            <h2 className="card-title">{meal.strMeal}</h2>
                            <p>{meal.strInstructions.substring(0, 100)}...</p>
                            <div className="card-actions justify-end">
                                <Link href={`/posts/${meal.idMeal}`} className="btn btn-neutral">View Recipe</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
