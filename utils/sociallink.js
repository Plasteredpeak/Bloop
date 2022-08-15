module.exports = name => {
  if (name == 'Telegram') return 'https://telegram.org';
  if (name == 'Cashapp') return 'https://cash.app';
  else return `https://www.${name}.com`;
};
