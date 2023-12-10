import { data } from "./data";

const FILES_VISIBILITY = Object.freeze({
  SHOW_REAL: true,
  SHOW_FAKE: false,
});

const FILE_POSITION = 33;

function getSolution(fileVisibility) {
  const filenames = data.split("\n");
  const validations = filenames.map((filename) => {
    const [alphanumeric, checksum] = filename.split("-");
    const uniqueAlphanumeric = Array.from(new Set(alphanumeric.split("")));
    const calculatedChecksum = uniqueAlphanumeric
      .filter((char) => alphanumeric.split(char).length === 2)
      .join("");

    return {
      calculatedChecksum,
      checksum,
      isValid: calculatedChecksum === checksum,
    };
  });

  return validations.filter((validation) => {
    return fileVisibility ? validation.isValid : !validation.isValid;
  });
}

console.log(
  getSolution(FILES_VISIBILITY.SHOW_REAL)[FILE_POSITION - 1].checksum
);
