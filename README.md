# Rock Paper Scissors - CLI Game 🎮

A simple Node.js command-line Rock-Paper-Scissors game where you play against the computer in a best-of-5 match. The computer makes random choices, and the script keeps score to declare a final winner. Outputs are color-coded for a more fun experience.

## How to Play

1. Clone the repo:
   ```bash
   git clone <https://github.com/DevOlabode/rock-paper-scissors-with-node>
   ```
   ```bash
   node script.js
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the game:
   ```bash
   node script.js
   ```

You'll be prompted to choose either `rock`, `paper`, or `scissors` for each round. After 5 rounds, the script will display the final result.

## Example Output

```
Choose either rock, paper, scissors: rock
You chose ROCK
Computer chose SCISSORS

You win! ROCK beats SCISSORS

Scores: You: 1 | Computer: 0
```

## Built With

- **Node.js**
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) - For user input
- [colors](https://www.npmjs.com/package/colors) - For colorful terminal output

## License

ISC
