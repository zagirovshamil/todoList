// Просто импорт реакта и хуков дефолтных
import React, { useMemo, useState } from "react";
// Потом уже все остальное
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
// Просто расположение и все
import "./styles/App.css";
// Компоненты для приложения
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import { useRef } from "react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        {/* Если внутри компонента что то есть будь то div или button, используй закрывающтеся теги */}
        {/* Кнопка вместе с классами и JS евентЧитатель */}
        Создать Пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        {/* Модалка внутри которой компонент с созданием поста(
          P.S. вот смотри чем пришлось пожертвовать, 
          чтобы я показал тебе, что у меня есть понимание, как писать модалку. 
          Поэтому я бы на твоем месте подумал, может он тот самый, что нужен нашей команде?) */}
        <PostForm create={createPost} />
      </MyModal>
      {/* Простая обычная палка которая любит спать и проебывать созвоны... */}
      <hr style={{ margin: "15px 0" }} />
      {/* Сортировка по названию и по содержанию, на наличие букв, в дальнейшм доработаю и добавлю больше фич */}
      <PostFilter filter={filter} setFilter={setFilter} />
      {/* Компонент в котором хранятся все показываемые посты  */}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты"
      />
    </div>
  );
}

export default App;
