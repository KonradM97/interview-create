export default class Container {
    /**
     * @type {Object} data
     * @param {string} data.id
     * @param {string} data.title
     */
    constructor(data)
    {
        this._data = data;
    }
    /**
     * 
     * @returns {object}
     */
    getList()
    {
        return this._data;
    }
    addItem(item)
    {
        this._data.push(item);
    }
    /** Funkcja mieszająca
     *  @function */
    shuffle()
    {
        this._data = this._data.sort(() => Math.random() - 0.5);
    }

}