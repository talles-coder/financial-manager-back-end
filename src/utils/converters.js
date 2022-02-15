
export function toDatetime (dateObject) {
    const dateConverted = new Date(dateObject.year, dateObject.mounth , dateObject.day)
    return dateConverted
}

export function lastWeekDay (dateObject) {
    const toDate = new Date(dateObject.year, dateObject.mounth , dateObject.day)
    return (6-toDate.getDay())+toDate.getDate()
}

export function getInstallmentsStatus(installmentsNumber, installmentStartDate) {
    const today = new Date()
    let currentInstallment = monthDiff(installmentStartDate, today)
    let installmentDate = installmentStartDate
    
    const allInstallmentStatus = []

    for (let installmentNumber = 1; installmentNumber <= (installmentsNumber >= 1 ? installmentsNumber : currentInstallment + 12 ) ; installmentNumber++) {
        const installmentpayday = new Date(installmentDate)
        const installmentPayedDate = expiredDate(today, installmentpayday) ? installmentpayday : null
        const installmentStatus = expiredDate(today, installmentpayday) ? "paid" : "unpaid"
        
        const registerInstallment = {
            installmentNumber ,
            installmentPayedDate ,
            installmentStatus,
            installmentpayday
        }

        allInstallmentStatus.push(registerInstallment);

        installmentDate = monthPlus(installmentDate)
    }
    
    return allInstallmentStatus
}

function expiredDate(today, installmentpayday) {
    return today > installmentpayday
}

function monthPlus(date) {
    return new Date(date.setMonth(date.getMonth()+1));
}

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}