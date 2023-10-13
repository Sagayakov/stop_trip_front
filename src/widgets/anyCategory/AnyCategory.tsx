import { Favorite } from "../../shared/ui/icons/icons-tools/Favorite";
import data from '../../../db.json'
export const AnyCategory = () => {
    return (
        <section className="adverts">
            {data.map((el) => {
                return (
                    <div className="card" key={el.id}>
                        <div className="add-to-favorite">
                            <Favorite color="" strokeColor="" />
                        </div>
                        <div className="image">
                            <img src={el.image} />
                        </div>
                        <div className="description">
                            <h2>{el.description}</h2>
                            <p className="description-location">
                                {el.location}
                            </p>
                            <h3>{el.price}</h3>
                            <p className="card-description">{el.text}</p>
                            <span className="author">{el.author}</span>
                            <p className="time">{el.time}</p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}