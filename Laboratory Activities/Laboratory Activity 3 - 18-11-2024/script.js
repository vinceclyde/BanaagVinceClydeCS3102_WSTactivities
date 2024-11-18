const textInput = document.getElementById('textInput');
const wordCountElement = document.getElementById('wordCount');
const sentenceCountElement = document.getElementById('sentenceCount');
const flowerImage = document.getElementById('flowerImage');

textInput.addEventListener('input', () => {
    const text = textInput.value.trim();
    
    // Calculate word count
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Calculate sentence count
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;

    // Update word and sentence counts in the UI
    wordCountElement.innerHTML = `Words<br>${wordCount}`;
    sentenceCountElement.innerHTML = `Sentences<br>${sentenceCount}`;

    // Update flower image logic
    if (wordCount >= 35) {
        flowerImage.src = 'flower7.gif';
    } else if (wordCount % 5 === 0 && wordCount > 0) {
        switch (Math.floor(wordCount / 5)) {
            case 1:
                flowerImage.src = "flower1.gif";
                break;
            case 2:
                flowerImage.src = "flower2.gif";
                break;
            case 3:
                flowerImage.src = 'flower3.gif';
                break;
            case 4:
                flowerImage.src = 'flower4.gif';
                break;
            case 5:
                flowerImage.src = 'flower5.gif';
                break;
            case 6:
                flowerImage.src = 'flower6.gif';
                break;
            default:
                flowerImage.src = ''; 
                break;
        }
    }
});
