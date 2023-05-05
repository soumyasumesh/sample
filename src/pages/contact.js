import { useEffect, useState } from "react";


export default function contact() {

    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState(1);
    useEffect(() => {
        const handleInputChange = async () => {

            const response = await fetch(`https://dummyjson.com/carts/${selectedValue}`);
            const data = await response.json();
            setOptions(data.products);
        };
        handleInputChange();
    },[selectedValue]);      

    return (
        <>
            <select onChange={(e) =>{ setSelectedValue(e.target.value) }}>
                <option value="1">Cart 1</option>
                <option value="2">Cart 2</option>
                <option value="3">Cart 3</option>
            </select>
            <br />
            <select>
                {options.map((option) => (
                    <option key={option.id} value={option.title}>
                        {option.title}
                    </option>
                ))}
            </select>

        </>
    );
}