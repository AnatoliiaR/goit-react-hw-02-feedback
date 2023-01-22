export default function getColorBtn(options) {
  let colorBtn = 'mokko';

  if (options === 'good') {
    colorBtn = 'green';
    console.log(colorBtn);
    return colorBtn;
  } else if (options === 'neutral') {
    colorBtn = 'orange';
    return colorBtn;
  } else if (options === 'bad') {
    colorBtn = 'red';
    return colorBtn;
  }
  return colorBtn;
}
