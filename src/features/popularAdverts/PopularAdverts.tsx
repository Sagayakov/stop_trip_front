import data from '../../../db.json'
import { ArrowLeft14x7 } from '../../shared/ui/icons/icons-tools/ArrowLeft14x7'
import { ArrowRight14x7 } from '../../shared/ui/icons/icons-tools/ArrowRight14x7'
import { Favorite } from '../../shared/ui/icons/icons-tools/Favorite'
import './popularAdverts.scss'

export const PopularAdverts = () => {
    return (
        <div className="popular-adverts">
            <div className="popular-adverts-wrapper">
                <h3>Популярные объявления</h3>
                <div className="adverts-list">
                    {data.map((elem) => (
                        <div className="adverts-cart" key={elem.id}>
                            <img src={elem.image} alt="img" />
                            <div className="description">
                                <div className="price">
                                    {elem.price}
                                    <Favorite color="#FF3F25" strokeColor="#FF3F25" />
                                </div>
                                <p>{elem.description}</p>
                                <span>{elem.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <ArrowLeft14x7
                        color="#BCBCBC"
                        style={{ marginRight: '12px', cursor: 'pointer' }}
                    />
                    <ArrowRight14x7
                        color="#1C1C1E"
                        style={{ marginLeft: '12px', cursor: 'pointer' }}
                    />
                </div>
            </div>
        </div>
    )
}
