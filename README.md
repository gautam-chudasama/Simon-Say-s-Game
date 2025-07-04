# Simon Says Game 🎮

A fun and interactive **Simon Says** memory game built using **HTML**, **CSS**, and **JavaScript**. This classic brain-training game challenges players to memorize and repeat an increasingly complex sequence of colored buttons. Test your memory skills and see how far you can go!

## 🧠 How It Works

1. **Start the Game**: Press any key to begin your memory challenge
2. **Watch the Sequence**: The game will flash a colored button to show you the pattern
3. **Repeat the Pattern**: Click the buttons in the exact same order
4. **Level Up**: Each successful round adds a new color to the sequence
5. **Game Over**: One wrong move ends the game - but you can always try again!

## 🎯 Game Features

- **Progressive Difficulty**: Each level adds one more step to the sequence
- **Visual Feedback**: Buttons flash white during the game sequence and black when you click them
- **High Score Tracking**: Your best score is saved and displayed throughout your session
- **Responsive Design**: Clean, colorful interface that works on different screen sizes
- **Instant Restart**: Game over? Just press any key to start a new challenge

## 🛠️ Technologies Used

- **HTML5** – Game structure and layout
- **CSS3** – Styling, animations, and visual effects
- **Vanilla JavaScript** – Game logic, event handling, and DOM manipulation

## 📁 Project Structure

```
Simon-Says-Game/
├── index.html        # Main HTML structure and game layout
├── style.css         # Styling for buttons, animations, and layout
├── app.js           # Core game logic and event handling
└── README.md        # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required!

### Running the Game

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/simon-says-game.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd simon-says-game
   ```

3. **Open the game**:
   - Simply double-click `index.html` to open in your default browser
   - Or right-click `index.html` → "Open with" → Choose your preferred browser

4. **Start playing**:
   - Press any key to begin
   - Watch the sequence and repeat it by clicking the colored buttons
   - Try to beat your high score!

## 🎮 Game Controls

- **Any Key**: Start the game or restart after game over
- **Mouse Click**: Click the colored buttons to input your sequence
- **Button Colors**: 
  - 🔴 Red (Button 1)
  - 🟡 Yellow (Button 2) 
  - 🟢 Green (Button 3)
  - 🔵 Blue (Button 4)

## 💡 Game Tips

- Pay close attention to the sequence - it gets longer with each level
- Take your time - there's no rush to input your sequence
- The game flashes buttons in white during the sequence
- Your clicks will flash the buttons in black for feedback

## 🔧 Technical Details

### Key JavaScript Functions

- `levelUp()`: Advances to the next level and adds a new color to the sequence
- `gameFlash()`: Creates the visual flash effect for the game sequence
- `userFlash()`: Provides visual feedback when user clicks buttons
- `checkAns()`: Compares user input with the game sequence
- `btnPress()`: Handles button click events and user input
- `reset()`: Resets all game variables for a new game

### CSS Classes

- `.gameflash`: White flash effect during game sequence
- `.userflash`: Black flash effect during user input
- `.btn`: Styling for game buttons
- `.btn-cont`: Container for button layout

## 📈 Future Enhancements

- [ ] **Difficulty Levels**: Easy, Medium, Hard modes with different speeds
- [ ] **Sound Effects**: Audio feedback for button presses and game events
- [ ] **Local Storage**: Persistent high score storage across browser sessions
- [ ] **Mobile Optimization**: Touch-friendly controls and responsive design
- [ ] **Animations**: Smoother transitions and visual effects
- [ ] **Dark Mode**: Toggle between light and dark themes
- [ ] **Leaderboard**: Track top scores with player names
- [ ] **Custom Sequences**: Allow players to create their own patterns

## 🐛 Known Issues

- High score resets when the browser is refreshed (will be fixed with local storage)
- Game currently requires keyboard input to start (considering mouse/touch alternatives)

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the game:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Learning Objectives

This project demonstrates:
- **DOM Manipulation**: Dynamically updating HTML elements
- **Event Handling**: Keyboard and mouse event listeners
- **Array Methods**: Managing game sequences and user input
- **CSS Animations**: Creating visual feedback and effects
- **Game Logic**: Implementing turn-based gameplay mechanics
- **State Management**: Tracking game progress and scores

## 🙌 Acknowledgments

- Inspired by the classic **Simon** electronic game created by Ralph H. Baer and Howard J. Morrison
- Perfect for learning JavaScript fundamentals and DOM manipulation
- Great example of implementing game logic in vanilla JavaScript

---

## 📧 Contact

**Gautam Chudasama** - gautam.chudasama@outlook.com

**Project Link**: https://github.com/gautam-chudasama/Simon-Say-s-Game.git

---

*Happy gaming! 🎮 See how high you can score in this classic memory challenge!*
