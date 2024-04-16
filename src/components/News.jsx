import Title from "./Title";
import NewsItem from "./Items/NewsItem";
import Currency from "./Items/Currency";

/**
 * @module "Новости"
 * 
 * [NewsItem]{@link module: NewsItem}
 * 
 * [Currency]{@link module: Currency}
 * 
 * @returns Выводит три категории Новостей с помощью компонента Title
 * 
 * @returns Выводит перечень новостей через перечисляемый компонент NewsItem
 * 
 * @returns Выводит перечень курсов валют через перечисляемый компонент Currency
 */

export default function News() {
  return (
    <section className="news">
      <Title text="Сейчас в СМИ" url="#"/>
      <Title text="В Германии" url="#" selected={false} />
      <Title text="Рекомендуем" url="#" selected={false} />
      <div className="date" />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <Currency />
    </section>
  );
}
