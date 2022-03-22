let today = new Date("2021-01-01");
console.log(dateToLatinDate(today))

function dateToLatinDate(date) {
    let day = date.getDate();
    let idus = getIdus(date.getMonth());
    let nonae = getNonae(idus);
    let lastDayOfMonth = getLastDayOfMonth(date.getMonth(), date.getFullYear());

    if (day === idus) {
        return getDateText("Idus", 0, date);
    } else if (day === idus - 1) {
        return getDateText("Idus", 1, date)
    } else if (day < idus) {
        if (day > nonae) {
            return getDateText("Idus", calcDaysBeforeEvent(idus, day), date)
        } else if (day === nonae) {
            return getDateText("Nonae", 0, date)
        } else if (day === nonae - 1) {
            return getDateText("Nonae", 1, date)
        } else {
            return getDateText("Nonae", calcDaysBeforeEvent(nonae, day), date)
        }
    } else if (day === lastDayOfMonth) {
        return getDateText("Kalendas", 1, date)
    } else {
        return getDateText("Kalendas", calcDaysBeforeEvent(lastDayOfMonth + 1, day), date)
    }
}

function getIdus(month) {
    month = month + 1 // JS is counting months from 0
    switch (month) {
        case 3: // March
        case 7: // July
        case 5: // May
        case 10: // October
            return 15;
        default: // The other months
            return 13;
    }
}

function getNonae(idus) {
    return idus - 8;
}

function getLastDayOfMonth(month, year) {
    const d = new Date(year, month + 1, 0);
    return d.getDate()
}

function calcDaysBeforeEvent(eventDate, calcDate) {
    return (eventDate - calcDate + 1)
}

function getDateText(event, daysBeforeEvent, currentDate) {
    let month = currentDate.getMonth() + 1
    if (event.startsWith("Kalenda")) {
        if (month > (12 - 1)) month = month - 12;
        month = month + 1;
    }
    if (daysBeforeEvent === 0) {
        return event + " " + monthToLatin(month)
    } else if (daysBeforeEvent === 1) {
        return "Praediem " + event + " " + monthToLatin(month)
    }
    return "ante diem " + intToLatinTxtAkk(daysBeforeEvent) + " " + event + " " + monthToLatin(month)
}

function getLatinMonths() {
    return ["Ianuarias", "Februarias", "Martias", "Apriles", "Maias", "Iunias", "Iulias", "Sextiles",
        "Septembres", "Octobres", "Novembres", "Decembres"]
}

function monthToLatin(month) {
    return getLatinMonths()[month - 1]
}

function intToLatinTxtAkk(int) {
    let latNumber = "";
    if (int >= 10 && int < 20) {
        latNumber += "decimum ";
        int = int - 10;
    }
    console.log(int)
    switch (Number(int)) {
        case 1:
            latNumber += "unum";
            break; // Will not be used
        case 2:
            latNumber += "secundum";
            break;
        case 3:
            latNumber += "tertium";
            break;
        case 4:
            latNumber += "quartum";
            break;
        case 5:
            latNumber += "quintum";
            break;
        case 6:
            latNumber += "sextum";
            break;
        case 7:
            latNumber += "septimum";
            break;
        case 8:
            latNumber += "octavum";
            break;
        case 9:
            latNumber += "nonum";
            break;
    }
    return latNumber.trim()
}