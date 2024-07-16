const dateService = {


    getCurrentDateFormatted: () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0'); // Día
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes (se suma 1 porque los meses en JavaScript van de 0 a 11)
        const year = date.getFullYear(); // Año

        return `${day}-${month}-${year}`;
    }


}

module.exports = dateService;