const DateUtil = {
    formatDate: function (newDate) {
        const months = {
            0: 'Enero',
            1: 'Febrero',
            2: 'Marzo',
            3: 'April',
            4: 'Mayo',
            5: 'Junio',
            6: 'Julio',
            7: 'Agosto',
            8: 'Septiembre',
            9: 'Octubre',
            10: 'Noviembre',
            11: 'Diciembre',
        }
        const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
        const d = newDate
        const year = d.getFullYear()
        const date = d.getDate()
        const monthIndex = d.getMonth()
        const monthName = months[d.getMonth()]
        const dayName = days[d.getDay()] // Thu
        const formatted = `${dayName}, ${date} de ${monthName}, ${year}`;
        return formatted.toString()
    },
    formatDateDayMonth: function (newDate) {
        const months = {
            0: 'Enero',
            1: 'Febrero',
            2: 'Marzo',
            3: 'April',
            4: 'Mayo',
            5: 'Junio',
            6: 'Julio',
            7: 'Agosto',
            8: 'Septiembre',
            9: 'Octubre',
            10: 'Noviembre',
            11: 'Diciembre',
        }
        const d = newDate
        const date = d.getDate()
        const monthName = months[d.getMonth()]
        const formatted = `${date} ${monthName}`;
        return formatted.toString()
    },
    convertToPeriodo: function (newDate) {
        const date = new Date(newDate);
        const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const year = date.getFullYear();
        const formatted = `${month}/${year}`;
        return formatted;
    },
};

export default DateUtil;