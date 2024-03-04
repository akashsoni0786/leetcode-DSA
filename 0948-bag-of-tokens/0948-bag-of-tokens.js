/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
let maxScore = 0
    let score = 0
	// sort tokens in ascending order
    tokens.sort((a,b) => a - b) 
    while (tokens.length > 0){
        const minToken = tokens[0]
		// use token that requires min power to increase your score
        if (power >= minToken){
            power -= minToken
            score++;
            if (score > maxScore)
                maxScore = score
            tokens.shift() 
        }
		// use your score to get token with maximum power
        else if (score > 0){
            const maxToken = tokens[tokens.length-1]
            power += maxToken
            score--
            tokens.pop()
        }
		// if you don't have enough power to increase your score 
		// or enough score to get more power than end the game
        else{
            return maxScore
        }
    }
    return maxScore;  
};