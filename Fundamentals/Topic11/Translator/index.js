const url = "https://text-translator2.p.rapidapi.com/translate";

async function addTranslator() {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: new URLSearchParams({
      source_language: "en",
      target_language: "tr",
      text: "What is your name?",
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

addTranslator();
