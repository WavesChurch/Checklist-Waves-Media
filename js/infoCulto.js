const infoCulto = () => {
    const day = moment().day();
    const today = moment().format('MM/DD/YYYY')

    const cultoDoDia = [
        {
            title: `Culto da Família - ${today}`,
            alert_time: '10:55',
            privacity: 'Público'
        },
        {
            title: `Sem Culto`,
            alert_time: null,
            privacity: '-'
        },
        {
            title: `Sem Culto`,
            alert_time: null,
            privacity: '-'
        },
        {
            title: `Sem Culto`,
            alert_time: null,
            privacity: '-'
        },
        {
            title: `Sem Culto`,
            alert_time: null,
            privacity: '-'
        },
        {
            title: `Sem Culto`,
            alert_time: null,
            privacity: '-'
        },
        {
            title: `Sem Culto`,
            alert_time: null,
            privacity: '-'
        },
    ]

    return cultoDoDia[day]
}