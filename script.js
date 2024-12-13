async function searchKanji() {
    const kanjiInput = document.getElementById("kanjiInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (!kanjiInput) {
        resultDiv.innerHTML = "Please enter a kanji.";
        return;
    }

    // Load kanji data from the JSON file
    const response = await fetch("kanji.json");
    const kanjiData = await response.json();

    // Find the kanji in the data
    const kanjiInfo = kanjiData.find((k) => k.kanji === kanjiInput);

    // Display result
    if (kanjiInfo) {
        resultDiv.innerHTML = `
            <p><strong>Kanji:</strong> ${kanjiInfo.kanji}</p>
            <p><strong>Chapter:</strong> ${kanjiInfo.chapter}</p>
            <p><strong>Order:</strong> ${kanjiInfo.order}</p>
        `;
    } else {
        resultDiv.innerHTML = "Kanji not found.";
    }
}