
export function checkExpireDate(bill) {
    const expireDate = bill.dueDate || bill.date
    console.log(expireDate)
}