/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {

    let prices = new Array(n).fill(Infinity)

    prices[src] = 0

    for (let i = 0; i <= k; i++) {

        let tempPrices = [...prices]

        for (const [src, dst, price] of flights) {

            if (prices[src] === Infinity) continue

            if (prices[src] + price < tempPrices[dst]) {
                tempPrices[dst] = prices[src] + price
            }

        }

        prices = tempPrices

    }

    return prices[dst] === Infinity ? -1 : prices[dst]
    
}