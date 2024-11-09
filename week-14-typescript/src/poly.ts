
function delayedCall(fn: () => void): void;
function delayedCall(fn: () => string): void;

// Function implementation
function delayedCall(fn: () => void | string ): void {
    setTimeout(async () => {
        const result = fn();  
        if (typeof result === "string") {
            console.log(result); 
        }
    }, 1000);
}

delayedCall(() => {
    console.log("hi there");
});

delayedCall(() => {
    return "Hello from delayed call";
});
