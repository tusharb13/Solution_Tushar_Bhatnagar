const fs = require('fs');
const solution = require('./solution')

const main = () => {
    try {
        const rawdata = fs.readFileSync('./clicks.json');
        const clicks = JSON.parse(rawdata);
        if (solution.validateClicksArray(clicks)) {
            const resultSet = solution.getResultSet(clicks)
            const data = JSON.stringify(resultSet)
            fs.writeFileSync('./resultSet.json', data)
            console.log('Output is written on ./resultSet.json file')
        } else {
            console.log('Invalid Array of clicks');
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

main()

