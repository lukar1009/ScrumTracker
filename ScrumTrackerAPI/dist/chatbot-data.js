"use strict";
// Dozvoljeni unosi od strane korisnika
Object.defineProperty(exports, "__esModule", { value: true });
exports.alternative = exports.reply = exports.trigger = void 0;
exports.trigger = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
        "your name please",
        "your name",
        "may i know your name",
        "what is your name",
        "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["thanks", "thank you"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"]
];
// Upareni odgovori u odnosu na trigere
exports.reply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["The one true God, JavaScript"],
    ["I am ScrumTracker ChatBot"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["Bro!"],
    ["Yes?"]
];
// Nasumicne alternative ako korisnik unese nesto sto nije iz dozvoljenih unosa
exports.alternative = [
    "Try again",
    "I'm listening..."
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdGJvdC1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY2hhdGJvdC1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1Q0FBdUM7OztBQUUxQixRQUFBLE9BQU8sR0FBRztJQUNuQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQztJQUN4RCxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7SUFDaEQsQ0FBQyxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUM7SUFDeEQsQ0FBQyxpQkFBaUIsQ0FBQztJQUNuQixDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixDQUFDO0lBQ3ZFLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDO0lBQ25DO1FBQ0Usa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLG9CQUFvQjtLQUNyQjtJQUNELENBQUMsWUFBWSxDQUFDO0lBQ2QsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQztJQUMxRCxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ3pCLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUM7SUFDNUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQ25DLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQztJQUN2QixDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQztJQUMvQyxDQUFDLHlCQUF5QixDQUFDO0lBQzNCLENBQUMsS0FBSyxDQUFDO0lBQ1AsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0NBQzFDLENBQUM7QUFFRix1Q0FBdUM7QUFFMUIsUUFBQSxLQUFLLEdBQUc7SUFDakIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUM7SUFDdEM7UUFDRSxzQkFBc0I7UUFDdEIsMkJBQTJCO1FBQzNCLHlCQUF5QjtLQUMxQjtJQUNEO1FBQ0UsY0FBYztRQUNkLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsdUJBQXVCO0tBQ3hCO0lBQ0QsQ0FBQyxlQUFlLENBQUM7SUFDakIsQ0FBQyxpQkFBaUIsRUFBRSwyQkFBMkIsQ0FBQztJQUNoRCxDQUFDLDhCQUE4QixDQUFDO0lBQ2hDLENBQUMsMkJBQTJCLENBQUM7SUFDN0IsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUM7SUFDNUIsQ0FBQyx5QkFBeUIsRUFBRSxpQkFBaUIsQ0FBQztJQUM5QyxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQztJQUNsRCxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQztJQUN0QyxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLHdCQUF3QixDQUFDO0lBQy9ELENBQUMsZ0JBQWdCLENBQUM7SUFDbEIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQztJQUNuQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDbEIsQ0FBQyxNQUFNLENBQUM7SUFDUixDQUFDLE1BQU0sQ0FBQztDQUNYLENBQUM7QUFFRiwrRUFBK0U7QUFFbEUsUUFBQSxXQUFXLEdBQUc7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtDQUNyQixDQUFDIn0=