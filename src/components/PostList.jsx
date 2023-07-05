// Всегда сначала испортируй react, а потом уже остальные компоненты
import React from "react";
// Импорт компонента для верстки поста
import PostItem from "./PostItem";
// 
import {TransitionGroup} from "react-transition-group";
import {CSSTransition} from 'react-transition-group'
// Расположение постов внутри страницы сверху-вниз
// Та самая логика, которая показывает посты или же надпись об их отсутствие
const PostList = ({posts, title, remove}) => {
// Логика на наличие постов
  if (!posts.length) {
    return(
      // Разметка базовая
      <h1 style={{ textAlign: "center" }}>
        Посты не найдены!
      </h1>
    )
  }


    return(
      // HTML часть
      <div>
          <h1 style={{textAlign: "center"}}>
             {title}
          </h1>
          {/* Верстка с помощью сборщика, который принимает базовые HTML элементы */}
          <TransitionGroup>
            {/* Внутри передаются пропсы */}
            {/* Через пропсы передается как JS часть, так и HTML часть */}
            {posts.map((post, index) => (
              // Компоненты, которые берутся вместо верстки и кучи не нужного кода 
              <CSSTransition key={post.id} timeout={500} classNames="post">
                {/* Пост с пропсами */}
                <PostItem remove ={remove} number = {index + 1} post={post}  />
              </CSSTransition>
            ))}
          </TransitionGroup>
      </div>
    )
}
// Не забывай экпортировать все
export default PostList;
