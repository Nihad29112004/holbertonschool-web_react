const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// TextEncoder xətasını aradan qaldırmaq üçün mütləqdir
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

configure({ adapter: new Adapter() });