class StringUtils {
  getDayFromString(date: string) {
    const day = date.slice(9, 11);

    return `${day}`;
  }

  getDeclesion(number: number, words: string[]) {
    const cases = [2, 0, 1, 1, 1, 2];

    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }
}

const stringUtils = new StringUtils();
export default stringUtils;
