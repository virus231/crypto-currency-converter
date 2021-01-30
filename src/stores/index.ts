import CurrenciesStore from './currenciesStore'
import ConverterStore from './converterStore'

const stores = {
    converterStore: new ConverterStore(),
    currenciesStore: new CurrenciesStore()
}

export default stores
