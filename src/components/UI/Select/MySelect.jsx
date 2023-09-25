import React from "react";
//
// Сортировка 
// Передаются пропсы для сортировки по имени и названию, 
// в дальнейшем можно дополнить в зависимости от исходных данных
const MySelect = ({options, defaultValue, value, onChange}) => {
    return(
        <select 
            value={value}
            onChange={event => onChange(event.target.value)}
        >
                <option disabled value="">{defaultValue}</option>
                    {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
                )}
        </select>
       
)}

export default MySelect