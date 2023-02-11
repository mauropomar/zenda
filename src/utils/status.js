const StatusUtil = {
    getBackgroundRequest: function (statusName) {
        if (statusName === 'Aprobado') {
            return {
                backgroudColor: '#C3F1D8',
                color: 'black'
            }
        } else {
            if (statusName === 'Rechazado') {
                return {
                    backgroudColor: '#AA3131',
                    color: 'white'
                }
            } else {
                if (statusName === 'En espera') {
                    return {
                        backgroudColor: '#D0E8ED',
                        color: 'black'
                    }
                }
            }
        }
    }
};

export default StatusUtil;