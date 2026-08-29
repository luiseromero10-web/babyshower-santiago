const http = require('http');

http.get('http://127.0.0.1:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status code:', res.statusCode);
    console.log('Has toilePatternGiraffe:', data.includes('toilePatternGiraffe'));
    console.log('Has toilePatternLeopard:', data.includes('toilePatternLeopard'));
    console.log('Has Santiago:', data.includes('Santiago'));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
