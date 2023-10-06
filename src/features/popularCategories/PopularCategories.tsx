import { useEffect, useState } from "react";
import { BuySell } from "../../shared/ui/icons/category/BuySell";
import { Currency } from "../../shared/ui/icons/category/Currency";
import { Docs } from "../../shared/ui/icons/category/Docs";
import { Excursion } from "../../shared/ui/icons/category/Excursion";
import { Food } from "../../shared/ui/icons/category/Food";
import { Job } from "../../shared/ui/icons/category/Job";
import { Realty } from "../../shared/ui/icons/category/Realty";
import { Service } from "../../shared/ui/icons/category/Service";
import { Taxi } from "../../shared/ui/icons/category/Taxi";
import { Transport } from "../../shared/ui/icons/category/Transport";
import { ArrowRight } from "../../shared/ui/icons/icons-tools/ArrowRight";
import "./popularCategories.scss";
import { AllCategories, ModalWindow } from "../../entities/controls";

export const PopularCategories = () => {
  const [showModal, setShowModal] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className="popular-categories">
      <div className="popular-categories-wrapper">
        <div className="categories-titles">
          <h3>Популярные категории</h3>
          {width < 767 && (
            <>
              <AllCategories
                showModal={showModal}
                setShowModal={setShowModal}
              />
              <ModalWindow showModal={showModal} setShowModal={setShowModal} />
            </>
          )}
        </div>
        <div className="categories-list">
          <div className="category realty">
            <Realty />
            <p>Аренда недвижимости</p>
            <span>
              115 предложений <ArrowRight color="#1F6FDE" />
            </span>
          </div>
          <div className="category transport">
            <Transport />
            <p>Аренда транспорта</p>
            <span>
              115 предложений <ArrowRight color="#1F6FDE" />
            </span>
          </div>
          <div className="category food">
            <Food />
            <p>Домашняя еда</p>
            <span>
              115 предложений <ArrowRight color="#1F6FDE" />
            </span>
          </div>
          <div className="category docs">
            <Docs color="#1F6FDE" />
            <p>Документы</p>
            <span>
              115 предложений <ArrowRight color="#1F6FDE" />
            </span>
          </div>
          <div className="category currency">
            <Currency />
            <p>Валютные пары</p>
            <span>
              115 предложений <ArrowRight color="#1F6FDE" />
            </span>
          </div>
          <div className="category excursion">
            <Excursion />
            <p>Экскурсии</p>
            <span>
              115 предложений <ArrowRight color="#1F6FDE" />
            </span>
          </div>
          <div className="category job">
            <Job />
            <p>Работа</p>
            <span>
              115 предложений <ArrowRight color="#1F6FDE" />
            </span>
          </div>
          <div className="category taxi">
            <Taxi />
            <p>Такси</p>
            <span>
              115 предложений <ArrowRight color="#1F6FDE" />
            </span>
          </div>
          <div className="category buysell">
            <BuySell />
            <p>Покупка продажа</p>
            <span>
              115 предложений <ArrowRight color="#1F6FDE" />
            </span>
          </div>
          <div className="category service">
            <Service />
            <p>Услуги</p>
            <span>
              115 предложений <ArrowRight color="#1F6FDE" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
