{
    function countWordOccurrences(sentence: string, word: string): number {
      const wordsArray = sentence.toLowerCase().split(" ");
      const dest = word.toLowerCase();
  
      return wordsArray.reduce((count, curr) => {
        return curr === dest ? count + 1 : count;
      }, 0);
    }
  
  
    console.log(countWordOccurrences("I love typescript", "typescript")); 
  }
  