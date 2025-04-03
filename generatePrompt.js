export const genPrompt = (jobTitle, type, company, Cname,) => {
    const prompt = ` 
   Generate a 70-word response for "Why do you want this job?" for a ${jobTitle} ${type} at ${company} for ${Cname}.

Predict required skills from the job title and craft a persuasive answer covering:

Technical expertise use keywords as per the job title
Passion for innovation and learning.

Career alignment and eagerness to contribute.
make it like the hr will get emotional by reading this
Response must be plain text, no suggestions, and start with a brief introduction like "My name is...".
    `
    return prompt
}
