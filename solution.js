// Returns the final array of objects
const getResultSet = (clicks) => {
    let tempResultArray = []
    for (let i = 0; i < 24; i++) {
        let initialHour = new Date();
        initialHour.setHours(i, 0, 0, 0)
        let finalHour = new Date();
        finalHour.setHours(i + 1, 0, 0, 0)

        // filter clicks which lie in the given time
        let filteredElements = clicks.filter(click => {
            let elementToCheck = new Date(click.timestamp).getHours()
            return elementToCheck >= initialHour.getHours() && elementToCheck < (finalHour.getHours() === 0 ? 24 : finalHour.getHours());
        });

        let groubByElementsByIP = groupByKey(filteredElements, 'ip');
        for (var key in groubByElementsByIP) {
            if (groubByElementsByIP[key].length > 1) {
                // sort elements by ammount desc
                groubByElementsByIP[key].sort((a, b) => b.amount - a.amount);
                Array.prototype.push.apply(tempResultArray, [groubByElementsByIP[key][0]])
            }
            else {
                Array.prototype.push.apply(tempResultArray, [groubByElementsByIP[key][0]])
            }
        }
    }
    return (filterElementsByCount(tempResultArray));
}

// removes clicks which have count more than 10
const filterElementsByCount = (tempResultArray) => {
    let resultArray = [];
    let groubByElementsByIP = groupByKey(tempResultArray, 'ip');
    for (var key in groubByElementsByIP) {
        if (groubByElementsByIP[key].length <= 10) {
            Array.prototype.push.apply(resultArray, [groubByElementsByIP[key]])
        }
    }
    return resultArray.flat().sort((a, b) => {
        let da = new Date(a.timestamp),
            db = new Date(b.timestamp);
        return da - db;
    });;
}

// Utility function to groupby elements by any key
const groupByKey = (elements, key) => elements.reduce(function (element, x) {
    (element[x[key]] = element[x[key]] || []).push(x);
    return element;
}, {})

const validateClicksArray = (clicks) => {
    if (Array.isArray(clicks) && clicks.length > 0) {
        return true;
    }
    return false
};

module.exports = {
    getResultSet,
    validateClicksArray,
    groupByKey,
    filterElementsByCount
}