// general error messages designed to be applicable to majority of scenarios
export const generalFormErrorMessages: Record<string, string> = {
  required: 'Toto pole je povinné.',
  invalidValue: 'Nesprávna hodnota.',
  max: 'Príliš vysoké číslo.',
  dateFromThePast: 'Dátumy z minulosti sú neplatné.',
  maxlength: 'Presiahnutý maximálny počet znakov.',
};

// custom error messages designed to be used in specific scenarios
export const customFormErrorMessages: Record<
  string,
  Record<string, string>
> = {};
