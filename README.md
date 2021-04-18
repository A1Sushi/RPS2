Hello! this is my second attempt at project: Rock Paper Scissors

Learned
- Creating a problem solving plan before writing code 
- Creating a repository and connect to local machine
- Linking external .JS file 
- Using functions to randomly choose item from arrays and return it
- Use if...else statements to play a single round of RPS
- Making functions case-insensitive
- Creating prompt() to allow user to input value
- Creating a function that returns the result of another function inside - Callback? 
- Use increments to keep score of 5 round game and declare winner at the end
    
Recently Done
1. Added scores inside function of playRound using console.log 
2. Used computerPlay instead of computerSelection to randomize each round, prompt instead of playerSelection to choose new value each round
3. make the results work from calling playRound() x5;
4. Make playerSelection input value different each round 

Question for TOP Discord
1. Console.log is only to test right, so I still have to make sure the function call works the same way?
    
Question Solved 
1. I'm wondering why I can't make the function's playerSelection parameter case-insenstive, only the global variable works
    - lots of ways, just keep moving along
2. For Step 6 (part 1), since I haven't learned how to loop yet, would calling my ``playRound()`` function 5 times have to show the  final score or is that only  once i learn loops?
    - Display results each round and winner @ the end 
3. For part 6, I was wondering if there should be a prompt() for the player to select their choice every round up until round 5 even if I'm not using a loop function?
    - it is possible so try and do it 
4. Currently I'm trying to figure out a way to bring my prompt inside the function playRound so that the prompt occurs 5x when I call the function 5x using console.log. So far I've tried adding the prompt inside the function parameters of playRound but That doesn't seem right and also doesn't work. I've also tried adding the prompt in the function body but that also doesn't work and I'm stuck for ideas now and can't seem to google anything to give me ideas. My current set up in just calling the function as ``console.log(playRound(prompt("Rock, Paper, or Scissors?").toLowerCase(), computerPlay()));`` and that seems to be the only way it works. 
    - Your code is fine and you can move on to loops 
5. What does part 4 mean by changing return value to something useful
    - Will cover in objects (basically like having multiple return values but not really since you can only return one value)