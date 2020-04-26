const kalinUnluler = ["a","ı","o","u"];
const ınceUnluler = ['e', 'i', 'ö', 'ü'];

const isHasMajorVowelHarmony = (word) => {
  const parseTheWord = word.length > 0 ? 
    word.split('').filter((a) =>  kalinUnluler.indexOf(a) > -1) : null;
  const parseTheWord2 = word.length > 0 ? 
    word.split('').filter((a) => ınceUnluler.indexOf(a) > -1) : null;
  return parseTheWord.length > 0 && parseTheWord2.length > 0 ? false : true;
}

export default isHasMajorVowelHarmony;
