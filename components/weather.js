import { useState, useEffect } from 'react';
import { WbSunny, Cloud, AcUnit } from '@mui/icons-material';
import Loading from './loading';
import Tooltip from '@mui/material/Tooltip';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'efb947cdc53eaa63ec644ad73bfdb308';
    const city = 'Madre+De+Deus+de+Minas';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.main) {
          setWeatherData(data);
          setLoading(false);
        } else {
          setError("Dados meteorológicos indisponíveis.");
          setLoading(true);
        }
      })
      .catch((error) => {
        setError("Ocorreu um erro ao buscar o clima.");
        setLoading(true);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const temperature = weatherData.main.temp;
  const weatherIcon = getWeatherIcon(temperature);

  return (
    <div>
      <Tooltip title='Clima' arrow>
      <p className='cursor-default select-none'>{weatherIcon} {temperature}°C</p>
      </Tooltip>
    </div>
  );
}

function getWeatherIcon(temperature) {
  if (temperature > 15) {
    return <WbSunny fontSize="small" />;
  } else if (temperature > 10 || temperature < 15) {
    return <Cloud fontSize="small" />;
  } else {
    return <AcUnit fontSize="small" />;
  }
}


export default Weather;
