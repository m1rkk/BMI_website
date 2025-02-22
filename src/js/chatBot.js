
const baseURL = "https://api.aimlapi.com/v1/"; // Your API URL

// Insert your AI/ML API Key securely (Never expose it publicly)
const apiKey = "1fea66c4d2284b1784674d96c5be3d70";

const systemPrompt = "You are a nutrition specialist. Answer only on questions that are related to nutrition, diets, BMI and help with it.On other questions answer that you don't know. Answer shortly in 3 points.";
let userPrompt;

const main = async () => {
    const response = await fetch(`${baseURL}chat/completions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "mistralai/Mistral-7B-Instruct-v0.2",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            temperature: 0.7,
            max_tokens: 200,
        }),
    });

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "No response";

    console.log("User:", userPrompt);
    console.log("AI:", aiResponse);
    document.getElementById("chat").innerHTML += `<div class='message' id='userResponse'><p>${userPrompt}</p></div>`;
    document.getElementById("chat").innerHTML += `<div class='message' id='aiResponse'><p>${aiResponse}</p></div>`;
};
document.getElementById("send").addEventListener("click", (e) => {
    userPrompt = document.getElementById("chatInput").value;
    main();
})
