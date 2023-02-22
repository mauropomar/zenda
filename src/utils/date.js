const DateUtil = {
    months: [
        'Enero',
        'Febrero',
        'Marzo',
        'April',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ],
    days: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
    formatDate: function (newDate) {
        const d = newDate
        const year = d.getFullYear()
        const date = d.getDate()
        const monthIndex = d.getMonth()
        const monthName = this.months[d.getMonth()]
        const dayName = this.days[d.getDay()] // Thu
        const formatted = `${dayName}, ${date} de ${monthName}, ${year}`;
        return formatted.toString()
    },
    formatDateDayMonth: function (newDate) {
        const d = newDate
        const date = d.getDate()
        const monthName = this.months[d.getMonth()]
        const formatted = `${date} ${monthName}`;
        return formatted.toString()
    },
    formatDateMonthYear: function (newDate) {
        const d = newDate
        const year = d.getFullYear();
        const monthName = this.months[d.getMonth()]
        const formatted = `${monthName} ${year}`;
        return formatted.toString()
    },
    convertToString: function (newDate, format) {
        const date = new Date(newDate);
        const day = date.getDate();
        console.log(date.getMonth())
        const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const year = date.getFullYear();
        let formatted;
        if (format === "MM/YY") {
            formatted = `${month}/${year}`;
        } else {
            formatted = `${day}/${month}/${year}`;
        }
        return formatted;
    },
};

export default DateUtil;