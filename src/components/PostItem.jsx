// Изначально импорт реакта, а потом уже все остальное
import React from "react";
// Импортим кнопку
import MyButton from "./UI/Button/MyButton";

// То мы передаем, обработав внизу,
const PostItem = (props) => {

    return(
      // Верстка самого поста, 
        <div className="post">
          <div className="post__content">
            <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
          <div className="post__btns">
            {/* Вкладываем в верстку слушатель события с JS евентЧитатель */}
            <MyButton onClick = {() => props.remove(props.post)}>
              {/* Как я уже говорил, если хочешь, что то вложить внутрь, используй закрывающий тег */}
              Удалить
            </MyButton>
          </div>
      </div>
    )
}

export default PostItem