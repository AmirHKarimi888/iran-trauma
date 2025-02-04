export default function () {
    const formatDate = (date) => {
        let georgianDateList = `${date}`
        .slice(0, 10)
        .split("-")
        
        const jalaliDate = new Date(+georgianDateList[0], +georgianDateList[1] - 1, +georgianDateList[2]);
        return new Intl.DateTimeFormat("fa-IR").format(jalaliDate);
    }

    return formatDate;
}