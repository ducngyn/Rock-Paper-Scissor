function computerPlay() {
    const computerChoices = ['Rock', 'Paper', 'Scissor'];
    const random = Math.floor(Math.random() * computerChoices.length)

    console.log(computerChoices[random])

    return computerChoices[random]
}

computerPlay();