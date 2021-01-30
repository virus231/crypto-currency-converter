import { observable, computed, action } from "mobx"
import { TCoin } from "../types";


class ConverterStore {
    @observable public items: TCoin[] = [];
}

export default ConverterStore;