import { useHistory } from "react-router";
import { useWeatherStoreContext } from "../../store/Store";
import { useWeather } from "../../hooks/useWeather";
import { AiFillDelete, AiOutlineLoading } from "react-icons/ai";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import styles from "./CityListItem.module.css";

const CityListItem = ({ city }) => {
  const history = useHistory();
  const { removeCity } = useWeatherStoreContext();
  const { data, error } = useWeather(city.name);
  
  const handleDelete = (event) => {
    event.stopPropagation();
    removeCity(city.id);
  };
  const displayMoreDetails = () => {
    history.push(`/weather/${city.name}`);
  };

  if (!data && !error) {
    return (
      <div className={styles.listItem} onClick={displayMoreDetails}>
        <AiOutlineLoading />
      </div>
    );
  }

  if (error)
    return (
      <div className={styles.listItem} onClick={displayMoreDetails}>
        <h4>{`${city.name} not found`}</h4>
        <AiFillDelete color="grey" size={25} onClick={handleDelete} />
      </div>
    );

  return (
    <div className={styles.listItem} onClick={displayMoreDetails}>
      {data && <WeatherInfo currentWeather={data} />}
      <AiFillDelete color="grey" size={25} onClick={handleDelete} />
    </div>
  );
};

export default CityListItem;
