const API_KEY = 'TU_CLAVE_DE_API_AQUI'; // Reemplaza esto con tu API Key
const gameName = 'The Witcher 3'; // Nombre del juego que quieres buscar

const fetchGameData = async () => {
  try {
    // URL para buscar juegos
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${gameName}`;
    
    // Realiza la petición a la API
    const response = await fetch(url);
    const data = await response.json();
    
    // Si la petición no fue exitosa
    if (!response.ok) {
      console.error('Error en la petición:', data.error);
      return;
    }
    
    console.log(`Juegos encontrados para "${gameName}":`);
    console.log(data.results);
    
  } catch (error) {
    // Captura cualquier error de red o de la API
    console.error('Ha ocurrido un error:', error);
  }
};

fetchGameData();