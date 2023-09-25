import { useState, useEffect } from 'react';
import { WbSunny, Cloud, AcUnit } from '@mui/icons-material';
import Loading from './loading';
import Tooltip from '@mui/material/Tooltip';
import Cookies from 'js-cookie';

require('dotenv').config();

function Weather() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cookieRead, setCookieRead] = useState(false);

  useEffect(() => {
    const geolocationDenied = Cookies.get('geolocationDenied');
    if (geolocationDenied === 'true') {
      setCookieRead(true);
      setLoading(false);
      return;
    }

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

  const fetchWeatherData = (latitude, longitude) => {
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
          console.log(apiUrl);
          console.log(apiKey);
        }
      })
      .catch(() => {
        setError("Ocorreu um erro ao buscar o clima.");
        setLoading(false);
      });
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          Cookies.set('userLocation', JSON.stringify({ latitude, longitude }));
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          Cookies.set('geolocationDenied', 'true');
          setError("Geolocalização indisponível, portanto, não é possível calcular o clima.");
          setLoading(false);
        }
      );
    } else {
      setError("A geolocalização não é suportada por este navegador.");
      setLoading(false);
    }
  };

  if (!cookieRead || Cookies.get('geolocationDenied') === 'true') {
    return null;
  }

  const temperature = weatherData && weatherData.main ? weatherData.main.temp : null;
  const weatherIcon = temperature !== null ? getWeatherIcon(temperature) : null;

  return (
    <div>
      <Tooltip title='Clima' arrow>
        {temperature !== null && weatherIcon !== null ? (
          <p className='cursor-default select-none'>{weatherIcon} {temperature}°C</p>
        ) : (
          <Loading />
        )}
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
