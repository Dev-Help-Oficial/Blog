import { useState, useEffect } from 'react';
import { WbSunny, Cloud, AcUnit } from '@mui/icons-material';
import Loading from './loading';
import Tooltip from '@mui/material/Tooltip';
import Cookies from 'js-cookie';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cookieRead, setCookieRead] = useState(false);

  const fetchWeatherData = (latitude, longitude) => {
    const apiKey = 'efb947cdc53eaa63ec644ad73bfdb308';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.main) {
          setWeatherData(data);
          setLoading(false);
        } else {
          setError("Dados meteorológicos indisponíveis.");
          setLoading(false);
        }
      })
      .catch(() => {
        setError("Ocorreu um erro ao buscar o clima.");
        setLoading(false);
      });
  };

  useEffect(() => {
    const savedLocation = Cookies.get('userLocation');
    
    if (savedLocation) {
      try {
        const { latitude, longitude } = JSON.parse(savedLocation);
        fetchWeatherData(latitude, longitude);
      } catch (e) {
        setError("Erro ao analisar os dados de localização.");
        setLoading(false);
      }
    } else {
      getUserLocation();
    }
  }, []);

  useEffect(() => {
    setCookieRead(true);
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          Cookies.set('userLocation', JSON.stringify({ latitude, longitude }));
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          setError("Você recusou a permissão de localização ou ocorreu um erro ao buscar a localização.");
          setLoading(false);
        }
      );
    } else {
      setError("A geolocalização não é suportada por este navegador.");
      setLoading(false);
    }
  };

  if (!cookieRead) {
    return null;
  }

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
