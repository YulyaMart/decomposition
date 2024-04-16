import Title from "../Title";

/**
 * @description "Виджет"
 * 
 * Форматирование виджетов и вывод заголовка Title
 * 
 *  @param {string} title - текст заголовка
 *  @param {string} url - ссылка заголовка
 * 
 * @returns Возвращает виджет
 */

export default function Widget(props) {
  const {title, url} = props;
  return (
    <div>
      <Title text={title} url={url}/>
      {props.children}
    </div>
  );
}
