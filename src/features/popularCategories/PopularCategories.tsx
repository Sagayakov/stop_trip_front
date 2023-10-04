import { BuySell } from '../../shared/ui/icons/category/BuySell'
import { Currency } from '../../shared/ui/icons/category/Currency'
import { Docs } from '../../shared/ui/icons/category/Docs'
import { Excursion } from '../../shared/ui/icons/category/Excursion'
import { Food } from '../../shared/ui/icons/category/Food'
import { Job } from '../../shared/ui/icons/category/Job'
import { Realty } from '../../shared/ui/icons/category/Realty'
import { Service } from '../../shared/ui/icons/category/Service'
import { Taxi } from '../../shared/ui/icons/category/Taxi'
import { Transport } from '../../shared/ui/icons/category/Transport'
import { ArrowRight } from '../../shared/ui/icons/icons-tools/ArrowRight'
import './popularCategories.scss'

export const PopularCategories = () => {
    return (
        <div className="popular-categories">
            <div className="popular-categories-wrapper">
                <h3>Популярные категории</h3>
                <div className="categories-list">
                    <div className="realty">
                        <Realty />
                        <p>Аренда недвижимости</p>
                        <span>
                            115 предложений <ArrowRight color="#1F6FDE" />
                        </span>
                    </div>
                    <div className="transport">
                        <Transport />
                        <p>Аренда транспорта</p>
                        <span>
                            115 предложений <ArrowRight color="#1F6FDE" />
                        </span>
                    </div>
                    <div className="food">
                        <Food />
                        <p>Домашняя еда</p>
                        <span>
                            115 предложений <ArrowRight color="#1F6FDE" />
                        </span>
                    </div>
                    <div className="docs">
                        <Docs color="#1F6FDE" />
                        <p>Документы</p>
                        <span>
                            115 предложений <ArrowRight color="#1F6FDE" />
                        </span>
                    </div>
                    <div className="currency">
                        <Currency />
                        <p>Валютные пары</p>
                        <span>
                            115 предложений <ArrowRight color="#1F6FDE" />
                        </span>
                    </div>
                    <div className="excursion">
                        <Excursion />
                        <p>Экскурсии</p>
                        <span>
                            115 предложений <ArrowRight color="#1F6FDE" />
                        </span>
                    </div>
                    <div className="job">
                        <Job />
                        <p>Работа</p>
                        <span>
                            115 предложений <ArrowRight color="#1F6FDE" />
                        </span>
                    </div>
                    <div className="taxi">
                        <Taxi />
                        <p>Такси</p>
                        <span>
                            115 предложений <ArrowRight color="#1F6FDE" />
                        </span>
                    </div>
                    <div className="buysell">
                        <BuySell />
                        <p>Покупка продажа</p>
                        <span>
                            115 предложений <ArrowRight color="#1F6FDE" />
                        </span>
                    </div>
                    <div className="service">
                        <Service />
                        <p>Услуги</p>
                        <span>
                            115 предложений <ArrowRight color="#1F6FDE" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
