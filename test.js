const solution = require('./solution')

describe('Input validaity tests', () => {
    it('indicates failure when an object is used instead of an array', () => {
        expect(solution.validateClicksArray({})).toBe(false);
    });

    it('indicates failure when blank array is used', () => {
        expect(solution.validateClicksArray([])).toBe(false);
    });
})


describe('Data validaity tests', () => {
    it('groupByKey function returns correct format', () => {
        const testData = [
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:02:58", "amount": 7.00 },
            { "ip": "11.11.11.11", "timestamp": "3/11/2016 02:12:32", "amount": 6.50 },
            { "ip": "11.11.11.11", "timestamp": "3/11/2016 02:13:11", "amount": 7.25 }
        ]
        let actualData = solution.groupByKey(testData, 'ip');
        const expectedData = { "22.22.22.22": [{ "ip": "22.22.22.22", "timestamp": "3/11/2016 02:02:58", "amount": 7 }], "11.11.11.11": [{ "ip": "11.11.11.11", "timestamp": "3/11/2016 02:12:32", "amount": 6.5 }, { "ip": "11.11.11.11", "timestamp": "3/11/2016 02:13:11", "amount": 7.25 }] }
        expect(actualData).toMatchObject(expectedData);
    });


    it('filterElementsByCount function returns empty when there are only 10 objects with same key', () => {
        const testData = [
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:02:58", "amount": 7.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:03:58", "amount": 8.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:04:58", "amount": 9.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:05:58", "amount": 10.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:06:58", "amount": 11.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:07:58", "amount": 12.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:08:58", "amount": 13.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:09:58", "amount": 14.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:10:58", "amount": 15.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:11:58", "amount": 16.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:12:58", "amount": 17.00 },
        ]
        let actualData = solution.filterElementsByCount(testData);
        const expectedData = []
        expect(actualData).toMatchObject(expectedData);
    });

    it('filterElementsByCount function filters array when there is a mix data', () => {
        const testData = [
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:02:58", "amount": 7.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:03:58", "amount": 8.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:04:58", "amount": 9.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:05:58", "amount": 10.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:06:58", "amount": 11.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:07:58", "amount": 12.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:08:58", "amount": 13.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:09:58", "amount": 14.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:10:58", "amount": 15.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:11:58", "amount": 16.00 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:12:58", "amount": 17.00 },
            { "ip": "11.11.11.11", "timestamp": "3/11/2016 02:13:58", "amount": 18.00 },
            { "ip": "33.33.33.33", "timestamp": "3/11/2016 02:14:58", "amount": 19.00 },
        ]
        let actualData = solution.filterElementsByCount(testData);
        const expectedData = [
            { "ip": "11.11.11.11", "timestamp": "3/11/2016 02:13:58", "amount": 18.00 },
            { "ip": "33.33.33.33", "timestamp": "3/11/2016 02:14:58", "amount": 19.00 }
        ];
        expect(actualData).toMatchObject(expectedData);
    });


    it('getResultSet function returns the final solution', () => {
        const testData = [
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 07:01:53", "amount": 1.00 },
            { "ip": "11.11.11.11", "timestamp": "3/11/2016 07:02:54", "amount": 4.50 },
            { "ip": "33.33.33.33", "timestamp": "3/11/2016 07:02:54", "amount": 15.75 },
            { "ip": "66.66.66.66", "timestamp": "3/11/2016 07:02:54", "amount": 14.25 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 07:03:15", "amount": 12.00 },
        ]
        let actualData = solution.getResultSet(testData);
        const expectedData = [
            { "ip": "11.11.11.11", "timestamp": "3/11/2016 07:02:54", "amount": 4.5 },
            { "ip": "33.33.33.33", "timestamp": "3/11/2016 07:02:54", "amount": 15.75 },
            { "ip": "66.66.66.66", "timestamp": "3/11/2016 07:02:54", "amount": 14.25 },
            { "ip": "22.22.22.22", "timestamp": "3/11/2016 07:03:15", "amount": 12 }
        ]
        expect(actualData).toMatchObject(expectedData);
    });

})


