import { tours } from "../data";
import Title from "./Title";

const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="tours" subTitle="featured" />
        <div className="section-center featured-center">
          {tours.map((tour) => {
            const { id, image, date, title, info, location, duration, cost } =
              tour;

            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <h4>{title}</h4>
                  <p>{info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{duration}</p>
                    <p>from ${cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;
