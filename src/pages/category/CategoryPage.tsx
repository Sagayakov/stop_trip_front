import { Controls } from '../../features/controls';
import data from '../../../db.json';
import { categories } from '../../shared/const/categories';
import { NavLink } from 'react-router-dom';
import './category-page.scss';

export const CategoryPage = () => {
    const category = location.pathname.slice(1);
    const description = categories[category].description;

    return (
        <>
            <Controls />
            <div className="bread-crumbs">
                <NavLink to="/">Главная</NavLink>
                {` > ${description}`}
            </div>
            <h1>{description}</h1>
            <div className="filters-adverts">
                <section className="filters"></section>
                <section className="adverts">
                    {data.map((el) => {
                        return (
                            <div className="card" key={el.id}>
                                <img src={el.image} />
                                <h2>{el.description}</h2>
                                <p>{el.location}</p>
                                <h3>{el.price}</h3>
                                <p>{el.text}</p>
                                <span>{el.author}</span>
                                <p>{el.time}</p>
                            </div>
                        );
                    })}
                </section>
            </div>
        </>
    );
};
