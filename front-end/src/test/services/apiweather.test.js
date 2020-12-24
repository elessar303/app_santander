
import { getCurrentTemp, getFutureTemp } from '../../services/apiweather'
import moment from 'moment'

describe('Pruebas de Api Weather', () => {
    
    test('Get current temp test', async() => {

        const temp = await getCurrentTemp();

        expect(temp).toBeDefined();

    })

    test('Get future temp test', async() => {

        const date = moment().format('YYYY-MM-DD')

        const futureTemp = await getFutureTemp(moment(date).format('X'));

        expect(futureTemp).toBeDefined();

    })
    
})