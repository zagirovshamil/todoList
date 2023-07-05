// Всегда сначала импортируй react, а потом уже остальные компоненты
import React from "react";
// Потом уже компоненты сортировки
import MySelect from "./UI/Select/MySelect";
import MyInput from "./UI/Input/MyInput";
// Сам ПостФильтр в формате JSX
const PostFilter = ({filter, setFilter}) => {
    return(
      <div>
          {/* Инпут для выключенной кнопки */}
        <MyInput
          value={filter.query}
          onChange={(e) => setFilter({...filter, query:e.target.value})}
          placeholder="Поиск..."
        />
          {/* Логика сортировки */}
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Сортировка"
          options={[
            {
              value: "title",
              name: "По названию",
            },
            {
              value: "body",
              name: "По описанию",
            },
          ]}
        />
      </div>
       
)}

export default PostFilter